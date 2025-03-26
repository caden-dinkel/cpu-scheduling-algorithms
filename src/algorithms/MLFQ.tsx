import { AlgorithmState, TimeSegment, AlgorithmProps } from "@/types/Process";
import { useRef, useState, useEffect } from "react";
import DisplayCompletedProcesses from "@/components/DisplayCompletedProcesses";
import TimelineMLFQ from "@/components/Timeline";

const MLFQStep = (
  myState: AlgorithmState,
  boostTime: number,
  timeQuantum: number
) => {
  //new State Values
  let newTime = myState.time || 0;
  const newAlgorithmExecution = [...myState.algorithmExecution]; // Shallow copy to trigger state update
  const newCompletedProcesses = [...myState.completedProcesses]; // Ensure completed processes array updates
  const newReadyQueue = [...myState.readyQueue];
  const newExecutingProcess = [...myState.executingProcess];
  const newNotQueuedProcesses = [...myState.notQueuedProcesses];
  let newRemainingTimeQuantum = myState.remainingTimeQuantum;
  let newRemainingBoostTime = myState.remainingBoostTime;

  //Any changes made to the array don't reflect to processes, but changes to elements do

  // First tick: Initialize if time is 0

  //When processes initially arrive
  //Set priority to highest (1)
  if (newTime === 0) {
    newNotQueuedProcesses.sort((a, b) => a.arrivalTime - b.arrivalTime);
  }

  while (
    newNotQueuedProcesses.at(0) !== undefined &&
    newNotQueuedProcesses[0].arrivalTime === newTime
  ) {
    newNotQueuedProcesses[0].priority = 1;
    newNotQueuedProcesses[0].status = "waiting";
    newReadyQueue.push(newNotQueuedProcesses[0]);
    newNotQueuedProcesses.shift();
  }

  //If boostTime is over elevate all processes in ready queue
  //reset boost time
  if (newRemainingBoostTime === boostTime) {
    newReadyQueue.forEach((process) => (process.priority = 1));
    newRemainingBoostTime = 0;
  }

  //If executing process is done, mark it as complete, remove it from execution
  //Add time segment to AlgorithmExecution
  if (
    newExecutingProcess.at(0) !== undefined &&
    newExecutingProcess[0].remainingBurstTime ===
      newExecutingProcess[0].burstTime
  ) {
    newExecutingProcess[0].endTime = newTime;
    newExecutingProcess[0].status = "completed";
    const newTimeSegment: TimeSegment = {
      startTime: newExecutingProcess[0].lastExecutionStartTime!,
      endTime: newTime,
      processID: newExecutingProcess[0].id,
      priority: newExecutingProcess[0].priority,
    };
    newAlgorithmExecution.push(newTimeSegment);
    newCompletedProcesses.push(newExecutingProcess[0]);
    newExecutingProcess.shift();
    newRemainingTimeQuantum = 0;
  }

  //Sort readyQueue by priority first and then arrival time
  //.sort is a stable sort, they get input into readyQueue by the time they enqueue
  newReadyQueue.sort((a, b) => a.priority! - b.priority!);

  //If timequantum out, swap back to readyQueue, lower priority
  if (newRemainingTimeQuantum === timeQuantum) {
    newExecutingProcess[0].lastEnqueueTime = newTime;
    const newTimeSegment: TimeSegment = {
      startTime: newExecutingProcess[0].lastExecutionStartTime!,
      endTime: newTime,
      processID: newExecutingProcess[0].id,
      priority: newExecutingProcess[0].priority,
    };
    newExecutingProcess[0].priority =
      newExecutingProcess[0].priority === 1 ? 2 : 3;
    newExecutingProcess[0].status = "waiting";
    newAlgorithmExecution.push(newTimeSegment);

    newReadyQueue.push(newExecutingProcess[0]);
    newExecutingProcess.shift();
    newReadyQueue.sort((a, b) => a.priority - b.priority);
    newRemainingTimeQuantum = 0;
  }

  //If no executing process and there are waiting processes, move first to executing
  if (
    newReadyQueue.at(0) !== undefined &&
    newExecutingProcess.at(0) === undefined
  ) {
    newReadyQueue[0].status = "executing";
    newReadyQueue[0].startTime = newReadyQueue[0].startTime
      ? newReadyQueue[0].startTime
      : newTime;
    newReadyQueue[0].lastExecutionStartTime = newTime;
    newExecutingProcess.push(newReadyQueue[0]);
    newReadyQueue.shift();
  }

  if (newExecutingProcess.at(0) !== undefined) {
    newExecutingProcess[0].remainingBurstTime += 1;
  }

  if (newCompletedProcesses.length !== myState.processes.length) {
    newTime += 1;
    newRemainingBoostTime += 1;
    newRemainingTimeQuantum += 1;
  }

  return {
    processes: myState.processes,
    algorithmExecution: newAlgorithmExecution,
    time: newTime,
    completedProcesses: newCompletedProcesses,
    readyQueue: newReadyQueue,
    notQueuedProcesses: newNotQueuedProcesses,
    remainingBoostTime: newRemainingBoostTime,
    remainingTimeQuantum: newRemainingTimeQuantum,
    executingProcess: newExecutingProcess,
  };
  //
};

const MLFQ: React.FC<AlgorithmProps> = ({
  processes,
  timeQuantum = 4,
  boostTime = 10,
  totalTime,
}) => {
  //Should be the only state variables we need (i.e. The only values that render something)
  //Add ready Queue, new processes and completed Processes to this

  const myProcesses = structuredClone(processes);

  const [state, setState] = useState<AlgorithmState>({
    processes: myProcesses,
    algorithmExecution: [],
    time: 0,
    completedProcesses: [],
    readyQueue: [],
    notQueuedProcesses: [...myProcesses],
    remainingBoostTime: 0,
    remainingTimeQuantum: 0,
    executingProcess: [],
  });

  const [hasSteppedFinalTime, setHasSteppedFinalTime] = useState(false);

  //Processes is sorted by arrival time

  //Don't trigger re-render, but update between intervals

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      const newState = MLFQStep(state, boostTime, timeQuantum);
      console.log(state);
      if (state.time < newState.time) {
        setState(newState);
      } else if (!hasSteppedFinalTime) {
        setHasSteppedFinalTime(true);
        setState(newState);
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    //If time is in dependency array, will tick until time does not change
  }, [state, hasSteppedFinalTime, boostTime, timeQuantum]);
  return (
    <div
      className="border-2 p-6 rounded-lg flex flex-col gap-4"
      style={{
        color: `var(--foreground)`,
        backgroundColor: `var(--background)`,
      }}
    >
      <h2 className="text-lg font-bold text-center">
        Multi Level Feedback Queue (MLFQ)
      </h2>

      <div className="border p-2 rounded">
        <strong>Time:</strong> {state.time}
      </div>

      <div className="border p-2 rounded">
        <TimelineMLFQ
          processes={state.processes}
          executingProcess={state.executingProcess}
          executionPath={state.algorithmExecution}
          time={state.time}
          totalTime={totalTime}
        />
      </div>

      <div className="border p-2 rounded">
        <DisplayCompletedProcesses
          completedProcesses={state.completedProcesses}
        />
      </div>

      <div className="border p-2 rounded">
        <h6 className="text-lg font-bold text-left">Process Execution Path</h6>
        {state.algorithmExecution.map((p, index) => (
          <div key={index} style={{ color: `var(--foreground)` }}>
            Start: {p.startTime} End: {p.endTime} PID: {p.processID}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MLFQ;

//HAHA It works!!!

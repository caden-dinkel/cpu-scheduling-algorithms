import DisplayCompletedProcesses from "@/components/DisplayCompletedProcesses";
import TimelineOthers from "@/components/TimelineOthers";
import { AlgorithmState, TimeSegment, AlgorithmProps } from "@/types/Process";
import { useRef, useState, useEffect } from "react";

const FCFSStep = (myState: AlgorithmState) => {
  //new State Values
  let newTime = myState.time || 0;
  const newAlgorithmExecution = [...myState.algorithmExecution]; // Shallow copy to trigger state update
  const newCompletedProcesses = [...myState.completedProcesses]; // Ensure completed processes array updates
  const newReadyQueue = [...myState.readyQueue];
  const newExecutingProcess = [...myState.executingProcess];
  const newNotQueuedProcesses = [...myState.notQueuedProcesses];
  const newRemainingTimeQuantum = myState.remainingTimeQuantum;
  const newRemainingBoostTime = myState.remainingBoostTime;

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
    };
    newAlgorithmExecution.push(newTimeSegment);
    newCompletedProcesses.push(newExecutingProcess[0]);
    newExecutingProcess.shift();
  }

  //If no executing process and there are waiting processes, move first to executing
  if (
    newReadyQueue.at(0) !== undefined &&
    newExecutingProcess.at(0) === undefined
  ) {
    newReadyQueue[0].status = "executing";
    newReadyQueue[0].startTime =
      newReadyQueue[0].startTime !== undefined
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

const FCFS: React.FC<AlgorithmProps> = ({ processes, totalTime }) => {
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
  state.notQueuedProcesses.sort((a, b) => a.arrivalTime - b.arrivalTime);

  //Don't trigger re-render, but update between intervals

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      const newState = FCFSStep(state);
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
  }, [state, hasSteppedFinalTime]);
  return (
    <div
      className="border-2 p-4 rounded-lg"
      style={{
        color: `var(--foreground)`,
        backgroundColor: `var(--background)`,
      }}
    >
      <h2 className="text-lg font-bold text-center">
        First Come First Served (FCFS)
      </h2>
      <div className="border p-2 mt-2 rounded">
        <strong>Time:</strong> {state.time}
      </div>
      <div className="border  p-2 mt-2 rounded">
        <TimelineOthers
          processes={state.processes}
          executingProcess={state.executingProcess}
          executionPath={state.algorithmExecution}
          time={state.time}
          totalTime={totalTime}
        />
      </div>
      <div className="border p-2 mt-2 rounded">
        <DisplayCompletedProcesses
          completedProcesses={state.completedProcesses}
        />
      </div>
      <div className="border p-2 mt-2 rounded">
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
export default FCFS;

//HAHA It works!!!

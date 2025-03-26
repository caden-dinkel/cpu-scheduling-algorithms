import { Process } from "@/types/Process";
import FCFS from "@/algorithms/FCFS";
import SJF from "@/algorithms/SJF";
import STCF from "@/algorithms/STCF";
import MLFQ from "@/algorithms/MLFQ";
import RR from "@/algorithms/RR";

interface AnimatingStateProps {
  processes: Process[];
  algorithmsToRun: Set<string>;
  timeQuantumRR?: number;
  timeQuantumMLFQ?: number;
  boostTime?: number;
}

const AnimatingState: React.FC<AnimatingStateProps> = ({
  processes,
  algorithmsToRun,
  timeQuantumMLFQ,
  timeQuantumRR,
  boostTime,
}) => {
  const totalBurstTime = processes.reduce((acc, val) => acc + val.burstTime, 0);
  const addedTime = Math.min(
    ...processes.map((process) => process.arrivalTime)
  );

  return (
    <div>
      {algorithmsToRun.has("FCFS") && (
        <FCFS processes={processes} totalTime={totalBurstTime + addedTime} />
      )}
      {algorithmsToRun.has("SJF") && (
        <SJF processes={processes} totalTime={totalBurstTime + addedTime} />
      )}
      {algorithmsToRun.has("FTCF") && (
        <STCF processes={processes} totalTime={totalBurstTime + addedTime} />
      )}
      {algorithmsToRun.has("RR") && (
        <RR
          processes={processes}
          timeQuantum={timeQuantumRR!}
          totalTime={totalBurstTime + addedTime}
        />
      )}
      {algorithmsToRun.has("MLFQ") && (
        <MLFQ
          processes={processes}
          timeQuantum={timeQuantumMLFQ!}
          boostTime={boostTime!}
          totalTime={totalBurstTime + addedTime}
        />
      )}
    </div>
  );
};

export default AnimatingState;

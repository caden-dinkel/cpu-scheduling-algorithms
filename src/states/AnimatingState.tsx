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
  const totalTime = totalBurstTime + addedTime;

  return (
    <div>
      {algorithmsToRun.has("FCFS") && (
        <FCFS processes={processes} totalTime={totalTime} />
      )}
      {algorithmsToRun.has("SJF") && (
        <SJF processes={processes} totalTime={totalTime} />
      )}
      {algorithmsToRun.has("STCF") && (
        <STCF processes={processes} totalTime={totalTime} />
      )}
      {algorithmsToRun.has("RR") && (
        <RR
          processes={processes}
          timeQuantum={timeQuantumRR}
          totalTime={totalTime}
        />
      )}
      {algorithmsToRun.has("MLFQ") && (
        <MLFQ
          processes={processes}
          timeQuantum={timeQuantumMLFQ}
          boostTime={boostTime}
          totalTime={totalTime}
        />
      )}
    </div>
  );
};

export default AnimatingState;

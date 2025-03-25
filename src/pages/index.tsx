import FCFS from "@/algorithms/FCFS";
import FTCF from "@/algorithms/FTCF";
import MLFQ from "@/algorithms/MLFQ";
import RR from "@/algorithms/RR";
import SJF from "@/algorithms/SJF";
import CheckNumberBoxCombo from "@/components/CheckNumberBoxCombo";
import { Process } from "@/types/Process";

const Home: React.FC = () => {
  const processes: Process[] = [
    {
      arrivalTime: 0,
      id: 1,
      burstTime: 4,
      status: "none",
      priority: 0,
      remainingBurstTime: 0,
      lastEnqueueTime: 0,
    },
    {
      arrivalTime: 1,
      id: 2,
      burstTime: 8,
      status: "none",
      priority: 0,
      remainingBurstTime: 0,
      lastEnqueueTime: 1,
    },
    {
      arrivalTime: 1,
      id: 3,
      burstTime: 2,
      status: "none",
      priority: 0,
      remainingBurstTime: 0,
      lastEnqueueTime: 4,
    },
    {
      arrivalTime: 3,
      id: 4,
      burstTime: 6,
      status: "none",
      priority: 0,
      remainingBurstTime: 0,
      lastEnqueueTime: 3,
    },
  ];

  return (
    <div>
      <div>
        MLFQ
        <MLFQ processes={processes} />
      </div>
      <div>
        RR
        <RR processes={processes} />
      </div>
      <div>
        FCFS
        <FCFS processes={processes} />
      </div>
      <div>
        SJF
        <SJF processes={processes} />
      </div>
      <div>
        FTCF
        <FTCF processes={processes} />
      </div>
    </div>
  );
};
export default Home;

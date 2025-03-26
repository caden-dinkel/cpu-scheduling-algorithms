import FCFS from "@/algorithms/FCFS";
import FTCF from "@/algorithms/STCF";
import MLFQ from "@/algorithms/MLFQ";
import RR from "@/algorithms/RR";
import SJF from "@/algorithms/SJF";
import CheckNumberBoxCombo from "@/components/CheckNumberBoxCombo";
import { Process } from "@/types/Process";
import StateHandler from "@/states/StateHandler";

const Home: React.FC = () => {
  return (
    <div>
      <StateHandler />
    </div>
  );
};
export default Home;

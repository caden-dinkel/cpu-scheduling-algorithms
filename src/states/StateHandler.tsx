import InitialState from "./InitialState";
import { useState } from "react";
import { Process } from "@/types/Process";
import AnimatingState from "./AnimatingState";

const StateHandler: React.FC = () => {
  const [currentState, setCurrentState] = useState<
    "initial" | "animating" | "complete"
  >("initial");

  const [selectedAlgorithms, setSelectedAlgorithms] = useState<Set<string>>(
    new Set()
  );

  // Update selection
  const handleSelectionChange = (id: string, checked: boolean) => {
    setSelectedAlgorithms((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const [processes, setProcesses] = useState<Process[]>([]);

  const [timeQuantumRR, setTimeQuantumRR] = useState<number>(4);

  const [timeQuantumMLFQ, setTimeQuantumMLFQ] = useState<number>(4);

  const [boostTime, setBoostTime] = useState<number>(10);
  // Handle transition from InitialState to AnimatingState
  const handleStartAnimation = () => {
    setCurrentState("animating"); // Switch state
  };

  //Create a function to handle the completion of the algorithm -> switch to CompleteState
  //{currentState === "complete" && <CompleteState />}
  return (
    <div>
      {currentState === "initial" && (
        <InitialState
          onSelectionChange={handleSelectionChange}
          selectedValues={selectedAlgorithms}
          timeQuantumRR={timeQuantumRR}
          timeQuantumMLFQ={timeQuantumMLFQ}
          boostTimeMLFQ={boostTime}
          onRRTimeQuantumChange={setTimeQuantumRR}
          onMLFQTimeQuantumChange={setTimeQuantumMLFQ}
          onMLFQBoostTimeChange={setBoostTime}
          onSubmit={handleStartAnimation}
          processes={processes}
          onGenerate={setProcesses}
        />
      )}
      {currentState === "animating" && (
        <AnimatingState
          processes={processes}
          algorithmsToRun={selectedAlgorithms}
        />
      )}
    </div>
  );
};

export default StateHandler;

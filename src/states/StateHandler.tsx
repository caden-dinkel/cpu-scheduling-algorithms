import InitialState from "./InitialState";
import { useState } from "react";
import { Process } from "@/types/Process";
import AnimatingState from "./AnimatingState";
import Header from "@/components/Header";

const StateHandler: React.FC = () => {
  const [currentState, setCurrentState] = useState<"initial" | "animating">(
    "initial"
  );

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
    if (processes.length !== 0) {
      setCurrentState("animating"); // Switch state
    }
  };

  const handleGoBack = () => {
    switch (currentState) {
      case "animating":
        setCurrentState("initial");
      case "initial":
        setCurrentState("initial");
    }
  };

  //Create a function to handle the completion of the algorithm -> switch to CompleteState
  //{currentState === "complete" && <CompleteState />}
  return (
    <div>
      <Header
        label="CPU Scheduling Algorithms Animations"
        handleGoBack={handleGoBack}
      />
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

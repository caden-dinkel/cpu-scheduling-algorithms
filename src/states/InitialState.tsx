import AlgorithmCheckBoxes from "@/components/AlgorithmCheckBoxes";
import Button from "@/components/Button";
import NumberBox from "@/components/NumberBox";
import { Process } from "@/types/Process";
import { useState } from "react";

interface InitialStateProps {
  //For Algorithm Check Boxes
  selectedValues: Set<string>;
  onSelectionChange: (algId: string, checked: boolean) => void; // Passes Record of which algorithms are enabled to parent function
  onRRTimeQuantumChange: (newNumber: number) => void;
  onMLFQTimeQuantumChange: (newNumber: number) => void;
  onMLFQBoostTimeChange: (newNumber: number) => void;
  timeQuantumRR: number;
  timeQuantumMLFQ: number;
  boostTimeMLFQ: number;
  onSubmit: () => void;
  processes: Process[];
  onGenerate: (generatedProcesses: Process[]) => void;
}

const InitialState: React.FC<InitialStateProps> = ({
  selectedValues,
  onSelectionChange,
  onRRTimeQuantumChange,
  onMLFQTimeQuantumChange,
  onMLFQBoostTimeChange,
  timeQuantumRR,
  timeQuantumMLFQ,
  boostTimeMLFQ,
  onSubmit,
  processes,
  onGenerate,
}) => {
  return (
    <>
      <AlgorithmCheckBoxes
        selectedValues={selectedValues}
        onSelectionChange={onSelectionChange}
        onRRTimeQuantumChange={onRRTimeQuantumChange}
        onMLFQTimeQuantumChange={onMLFQTimeQuantumChange}
        onMLFQBoostTimeChange={onMLFQBoostTimeChange}
        timeQuantumRR={timeQuantumRR}
        timeQuantumMLFQ={timeQuantumMLFQ}
        boostTimeMLFQ={boostTimeMLFQ}
      />
      <Button
        onClick={onSubmit}
        label="Start Animation"
        disabled={processes ? false : true}
      />
    </>
  );
};

export default InitialState;

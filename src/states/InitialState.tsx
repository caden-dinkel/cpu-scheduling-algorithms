import AlgorithmCheckBoxes from "@/components/AlgorithmCheckBoxes";
import Button from "@/components/Button";
import { Process } from "@/types/Process";
import ProcessGeneration from "@/components/GenerateProcesses";
import DisplayProcesses from "@/components/DisplayProcesses";

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
      <div className="flex gap-6 w-full px-6">
        <ProcessGeneration onGenerate={onGenerate} />
        <AlgorithmCheckBoxes
          selectedValues={selectedValues}
          onSelectionChange={onSelectionChange}
          onRRTimeQuantumChange={onRRTimeQuantumChange}
          onMLFQTimeQuantumChange={onMLFQTimeQuantumChange}
          onMLFQBoostTimeChange={onMLFQBoostTimeChange}
          timeQuantumRR={timeQuantumRR}
          timeQuantumMLFQ={timeQuantumMLFQ}
          boostTimeMLFQ={boostTimeMLFQ}
          onSubmit={onSubmit}
        />
      </div>
      {processes.length > 0 && <DisplayProcesses processes={processes} />}
    </>
  );
};

export default InitialState;

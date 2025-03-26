import Checkbox from "./CheckBox";
import CheckNumberBoxComboRR from "./CheckNumberBoxCombo";
import CheckNumberBoxComboMLFQ from "./CheckNumberBoxComboMLFQ";
import Button from "./Button";

export interface AlgorithmCheckBoxesProps {
  selectedValues: Set<string>;
  onSelectionChange: (algId: string, checked: boolean) => void; // Passes Record of which algorithms are enabled to parent function
  onRRTimeQuantumChange: (newNumber: number) => void;
  onMLFQTimeQuantumChange: (newNumber: number) => void;
  onMLFQBoostTimeChange: (newNumber: number) => void;
  timeQuantumRR: number;
  timeQuantumMLFQ: number;
  boostTimeMLFQ: number;
  onSubmit: () => void;
}

const AlgorithmCheckBoxes: React.FC<AlgorithmCheckBoxesProps> = ({
  selectedValues,
  onSelectionChange,
  onMLFQBoostTimeChange,
  onMLFQTimeQuantumChange,
  onRRTimeQuantumChange,
  timeQuantumMLFQ,
  timeQuantumRR,
  boostTimeMLFQ,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col border-2 p-6 rounded-lg w-1/2 max-w-[600px] h-full justify-between items-start gap-6 self-center">
      <h1>Select the Algorithms you wish to Run</h1>
      <div className="flex gap-4">
        <Checkbox
          key="FCFS"
          id="FCFS"
          label="First-Come-First-Serve"
          checked={selectedValues.has("FCFS")}
          onChange={(checked) => onSelectionChange("FCFS", checked)}
        />
      </div>
      <Checkbox
        key="SJF"
        id="SJF"
        label="Shortest-Job-First"
        checked={selectedValues.has("SJF")}
        onChange={(checked) => onSelectionChange("SJF", checked)}
      />
      <Checkbox
        key="STCF"
        id="STCF"
        label="Shortest-Time-to-Complete-First"
        checked={selectedValues.has("STCF")}
        onChange={(checked) => onSelectionChange("STCF", checked)}
      />
      <CheckNumberBoxComboRR
        key="RR"
        id="RR"
        label="Round-Robin"
        checked={selectedValues.has("RR")}
        onChange={(checked) => onSelectionChange("RR", checked)}
        onValueChange={onRRTimeQuantumChange}
        value={timeQuantumRR}
      />
      <CheckNumberBoxComboMLFQ
        key="MLFQ"
        id="MLFQ"
        label="Multi-Level-Feedback-Queue"
        checked={selectedValues.has("MLFQ")}
        onChange={(checked) => onSelectionChange("MLFQ", checked)}
        onBoostTimeChange={onMLFQBoostTimeChange}
        onTimeQuantumChange={onMLFQTimeQuantumChange}
        boostTime={boostTimeMLFQ}
        timeQuantum={timeQuantumMLFQ}
      />
      <Button
        onClick={onSubmit}
        label="Start Animation"
        disabled={selectedValues.size === 0 ? true : false}
      />
    </div>
  );
};

export default AlgorithmCheckBoxes;

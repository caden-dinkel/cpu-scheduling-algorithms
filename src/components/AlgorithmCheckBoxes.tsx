import Checkbox from "./CheckBox";
import CheckNumberBoxComboRR from "./CheckNumberBoxCombo";
import CheckNumberBoxComboMLFQ from "./CheckNumberBoxComboMLFQ";

export interface AlgorithmCheckBoxesProps {
  selectedValues: Set<string>;
  onSelectionChange: (algId: string, checked: boolean) => void; // Passes Record of which algorithms are enabled to parent function
  onRRTimeQuantumChange: (newNumber: number) => void;
  onMLFQTimeQuantumChange: (newNumber: number) => void;
  onMLFQBoostTimeChange: (newNumber: number) => void;
  timeQuantumRR: number;
  timeQuantumMLFQ: number;
  boostTimeMLFQ: number;
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
}) => {
  return (
    <div>
      <Checkbox
        key="FCFS"
        id="FCFS"
        label="First-Come-First-Serve"
        checked={selectedValues.has("FCFS")}
        onChange={(checked) => onSelectionChange("FCFS", checked)}
      />
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
    </div>
  );
};

export default AlgorithmCheckBoxes;

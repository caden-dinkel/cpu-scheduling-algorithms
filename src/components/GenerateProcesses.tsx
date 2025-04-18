import { Process } from "@/types/Process";
import NumberBox from "./NumberBox";
import { useState } from "react";
import Button from "./Button";

const generateRandomProcesses = (
  numProcesses: number,
  minArrivalTime: number,
  maxArrivalTime: number,
  minBurstTime: number,
  maxBurstTime: number
) => {
  const processes: Process[] = [];
  console.log(numProcesses);
  for (let i = 1; i <= numProcesses; i++) {
    const burstTime =
      Math.floor(Math.random() * (maxBurstTime - minBurstTime + 1)) +
      minBurstTime;
    const arrivalTime =
      Math.floor(Math.random() * (maxArrivalTime - minArrivalTime + 1)) +
      minArrivalTime;
    processes.push({
      id: i,
      burstTime: burstTime,
      arrivalTime: arrivalTime,
      remainingBurstTime: 0,
      status: "none",
      lastEnqueueTime: arrivalTime,
      priority: 0,
    });
  }
  return processes;
};

interface ProcessGenerationProps {
  //processes are passed to parent to display
  onGenerate: (processes: Process[]) => void;
}

const ProcessGeneration: React.FC<ProcessGenerationProps> = ({
  onGenerate,
}) => {
  //State for Generating Processes can be saved here
  //Highest Point at which state is needed
  const [numProcesses, setNumProcesses] = useState<number>(4);

  const [maxBurstTime, setMaxBurstTime] = useState<number>(7);

  const [minBurstTime, setMinBurstTime] = useState<number>(3);

  const [minArrivalTime, setMinArrivalTime] = useState<number>(0);

  const [maxArrivalTime, setMaxArrivalTime] = useState<number>(3);

  const handleProcessNumChange: (newNumber: number) => void = (
    newNumber: number
  ) => {
    if (newNumber > 0) {
      setNumProcesses(newNumber);
    }
  };

  const handleMaxBurstTimeChange: (newMax: number) => void = (
    newMax: number
  ) => {
    if (newMax >= minBurstTime) {
      setMaxBurstTime(newMax);
    }
  };

  const handleMinBurstTimeChange: (newMin: number) => void = (
    newMin: number
  ) => {
    if (newMin <= maxBurstTime) {
      setMinBurstTime(newMin);
    }
  };

  const handleMaxArrivalTimeChange: (newMax: number) => void = (
    newMax: number
  ) => {
    if (newMax >= minArrivalTime) {
      setMaxArrivalTime(newMax);
    }
  };

  const handleMinArrivalTimeChange: (newMin: number) => void = (
    newMin: number
  ) => {
    if (newMin <= maxArrivalTime) {
      setMinArrivalTime(newMin);
    }
  };

  const handleProcessGeneration: () => void = () => {
    const randomProcesses = generateRandomProcesses(
      numProcesses,
      minArrivalTime,
      maxArrivalTime,
      minBurstTime,
      maxBurstTime
    );
    onGenerate(randomProcesses);
  };
  //Will need to format answer
  return (
    <div
      className="border-2 p-6 rounded-lg flex flex-col gap-4 w-1/2 max-w-[600px]"
      style={{
        color: "var(--foreground)",
        backgroundColor: "var(--background)",
      }}
    >
      <h2 className="flex gap-4 mx-auto">
        Random Process Generation Parameters
      </h2>
      {/* Number of Processes */}
      <div className="flex gap-4 mx-auto">
        <NumberBox
          value={numProcesses}
          id="num"
          label="Number of Processes"
          onValueChange={handleProcessNumChange}
        />
      </div>

      {/* Burst Time Inputs */}
      <div className="flex gap-4 mx-auto">
        <NumberBox
          value={maxBurstTime}
          id="max-BT"
          label="Maximum Burst Time"
          onValueChange={handleMaxBurstTimeChange}
        />
      </div>
      <div className="flex gap-4 mx-auto">
        <NumberBox
          value={minBurstTime}
          id="min-BT"
          label="Minimum Burst Time"
          onValueChange={handleMinBurstTimeChange}
        />
      </div>

      {/* Arrival Time Inputs */}
      <div className="flex gap-4 mx-auto">
        <NumberBox
          value={maxArrivalTime}
          id="max-AT"
          label="Maximum Arrival Time"
          onValueChange={handleMaxArrivalTimeChange}
        />
      </div>
      <div className="flex gap-4 mx-auto">
        <NumberBox
          value={minArrivalTime}
          id="min-AT"
          label="Minimum Arrival Time"
          onValueChange={handleMinArrivalTimeChange}
        />
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <Button
          id="proc-gen"
          label="Generate Processes"
          onClick={handleProcessGeneration}
        />
      </div>
    </div>
  );
};

export default ProcessGeneration;

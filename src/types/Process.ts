export interface Process {
  id: number;
  burstTime: number;
  remainingBurstTime: number;
  arrivalTime: number;
  status: "none" | "waiting" | "executing" | "completed";
  startTime?: number;
  endTime?: number;
  priority: 0 | 1 | 2 | 3; //0 means executing, 1 is highest, 3 is lowest
  lastExecutionStartTime?: number;
  lastEnqueueTime: number;
}

export interface TimeSegment {
  startTime: number;
  endTime: number;
  processID: number;
}

export interface AlgorithmState {
  processes: Process[];
  algorithmExecution: TimeSegment[];
  time: number;
  readyQueue: Process[];
  notQueuedProcesses: Process[];
  completedProcesses: Process[];
  remainingBoostTime: number;
  remainingTimeQuantum: number;
  executingProcess: Process[];
}

export interface AlgorithmProps {
  processes: Process[];
  timeQuantum?: number;
  boostTime?: number;
}

import { TimeSegment, Process } from "@/types/Process";
import { motion } from "framer-motion";
import ColorKey from "./ColorKey";

interface TimelineProps {
  executionPath: TimeSegment[];
  executingProcess: Process[];
  processes: Process[];
  time: number;
  totalTime: number;
}

const TimelineOthers: React.FC<TimelineProps> = ({
  executingProcess,
  executionPath,
  processes,
  time,
  totalTime,
}) => {
  const numMarkers = 4; // Number of time markers
  const markerSpacing = totalTime / numMarkers;
  const length = 1000;
  //Returns process given pid
  const getProcess: (pid: number) => Process[] = (pid: number) => {
    const processesWithPID: Process[] = [];
    processes.forEach((process) => {
      if (process.id === pid) {
        processesWithPID.push(process);
      }
    });
    return processesWithPID;
  };

  //Returns color given PID
  const getColor: (pid: number) => string = (pid: number) => {
    const thisProcess: Process[] = getProcess(pid);
    switch (thisProcess[0].status) {
      case "none":
        return "#958987";
      case "waiting":
        return "#F0A494";
      case "completed":
        return "#A0B0AE";
      case "executing":
        return "#61D68A";
    }
  };

  const colorKeyItems = [
    { label: "Complete", color: "#A0B0AE" },
    { label: "Executing", color: "#61D68A" },
    { label: "Waiting", color: "#F0A494" },
    { label: "Nothing", color: "#958987" },
  ];

  return (
    <div style={{ position: "relative" }}>
      <ColorKey items={colorKeyItems} />
      <div style={{ width: length, position: "relative" }}>
        {/* Timeline Bar (Priority 1) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 60,
            backgroundColor: "#e0e0e0",
            borderRadius: 5,
            overflow: "hidden",
            border: "1px solid #ccc",
          }}
        >
          {executionPath.map((segment) => {
            const startX = (segment.startTime / totalTime) * length;
            const width =
              ((segment.endTime - segment.startTime) / totalTime) * length;
            return (
              <div
                key={`segment-p${segment.processID}-${segment.startTime}`}
                style={{
                  position: "absolute",
                  left: startX,
                  width: width,
                  height: "100%",
                  backgroundColor: getColor(segment.processID),
                  color: "black",
                  textAlign: "center",
                  lineHeight: "60px",
                  borderRadius: 5,
                  fontSize: 14,
                }}
              >
                {`P${segment.processID}`}
              </div>
            );
          })}
          {executingProcess.at(0) !== undefined && (
            <motion.div
              key={`executing-${executingProcess[0].id}`}
              initial={{ width: 0 }}
              animate={{
                width:
                  ((time - executingProcess[0].lastExecutionStartTime!) /
                    totalTime) *
                  length,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                left:
                  (executingProcess[0].lastExecutionStartTime! / totalTime) *
                  length,
                width:
                  ((time - executingProcess[0].lastExecutionStartTime!) /
                    totalTime) *
                  length,
                height: "100%",
                backgroundColor: getColor(executingProcess[0].id),
                color: "white",
                textAlign: "center",
                lineHeight: "60px",
                borderRadius: 5,
                fontSize: 14,
              }}
            >
              {`P${executingProcess[0].id}`}
            </motion.div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          {Array.from({ length: numMarkers + 1 }, (_, i) => {
            const markerTime = Math.round(i * markerSpacing);
            return (
              <span key={i} style={{ fontSize: "12px", color: "#555" }}>
                {markerTime}
              </span>
            );
          })}
        </div>

        {/* Current Time Indicator */}

        <motion.div
          initial={{ left: 0 }}
          animate={{ left: (time / totalTime) * length }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: (time / totalTime) * length,
            top: 0,
            height: 60,
            width: 2,
            backgroundColor: "red",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

export default TimelineOthers;

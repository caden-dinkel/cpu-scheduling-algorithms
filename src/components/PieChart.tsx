import { Process } from "../types/Process";
import { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  completedProcesses: Process[];
}

const BarChart: React.FC<BarChartProps> = ({ completedProcesses }) => {
  // Ensure there are completed processes
  console.log(completedProcesses);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    return () => {
      const newChartRef = chartRef.current;
      if (newChartRef) {
        newChartRef.destroy(); // Destroy previous chart instance
      }
    };
  }, []);

  const data = {
    labels: completedProcesses.map((p) => `P${p.id}`),
    datasets: [
      {
        label: `Turnaround Time`,
        data: completedProcesses.map((p) => p.endTime! - p.arrivalTime),
        backgroundColor: "#B46248",
        borderColor: "#FF7F56",
        borderWidth: 1,
      },
      {
        label: `Response Time`,
        data: completedProcesses.map((p) => p.startTime! - p.arrivalTime),
        backgroundColor: "#4FAFA7",
        borderColor: "#7CFEF4",
        borderWidth: 1,
      },
      {
        label: `Waiting Time`,
        data: completedProcesses.map(
          (p) => p.endTime! - p.arrivalTime - p.burstTime
        ),
        backgroundColor: "#A0446C",
        borderColor: "#FB92C0",
        borderWidth: 1,
      },
      {
        label: `Burst Time`,
        data: completedProcesses.map((p) => p.burstTime),
        backgroundColor: "#AFAE4F",
        borderColor: "FBFA92",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Processes",
        },
        grid: {
          offset: true,
        },
      },
      y: {
        title: {
          display: true,
          text: "Time Units",
        },
        min: 0,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };
  if (completedProcesses.length === 0) {
    return <div>No completed processes available.</div>; // Fallback message when no data
  }

  return (
    <Bar
      data={data}
      options={options}
      style={{
        color: `var(--foreground)`,
        backgroundColor: "#2F2A2A",
      }}
    />
  );
};

export default BarChart;

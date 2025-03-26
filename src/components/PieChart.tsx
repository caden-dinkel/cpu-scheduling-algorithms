import { Process } from "../types/Process";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  completedProcesses: Process[];
}

const BarChart: React.FC<BarChartProps> = ({ completedProcesses }) => {
  // Ensure there are completed processes
  if (!completedProcesses.length) {
    return <div>No completed processes available.</div>; // Fallback message when no data
  }
  console.log(completedProcesses);

  const data = {
    labels: completedProcesses.map((p) => `P${p.id}`),
    datasets: [
      {
        label: "Turnaround Time",
        data: completedProcesses.map((p) => p.endTime! - p.arrivalTime),
        backgroundColor: "rgb(126, 73, 73)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Response Time",
        data: completedProcesses.map((p) => p.startTime! - p.arrivalTime),
        backgroundColor: "rgba(60, 132, 181, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Burst Time",
        data: completedProcesses.map((p) => p.burstTime),
        backgroundColor: "rgba(54, 117, 80, 0.5)",
        borderColor: "rgb(24, 227, 109)",
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

  return <Bar data={data} options={options} />;
};

export default BarChart;

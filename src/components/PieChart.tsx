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
  const data = {
    labels: completedProcesses.map((p) => {
      return `P${p.id}`;
    }),
    datasets: [
      {
        label: "Turnaround Time",
        data: completedProcesses.map((p) => {
          return p.endTime! - p.arrivalTime;
        }),
        backgroundColor: "rgb(126, 73, 73)",
        borderColor: "rgba(255, 99, 132, 1)", // Border color for Category 1
        borderWidth: 1, // Border width
      },
      {
        label: "Response Time", // Second dataset
        data: completedProcesses.map((p) => {
          return p.startTime! - p.arrivalTime;
        }), // Y-axis values for this category
        backgroundColor: "rgba(60, 132, 181, 0.5)", // Bar color for Category 2
        borderColor: "rgba(54, 162, 235, 1)", // Border color for Category 2
        borderWidth: 1, // Border width
      },
      {
        label: "Burst Time", // Third dataset
        data: completedProcesses.map((p) => {
          return p.burstTime;
        }), // Y-axis values for this category
        backgroundColor: "rgba(54, 117, 80, 0.5)", // Bar color for Category 3
        borderColor: "rgb(24, 227, 109)", // Border color for Category 3
        borderWidth: 1, // Border width
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Position of the legend
      },
      tooltip: {
        enabled: true, // Tooltip enabled on hover
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Processes", // Title for the X-axis
        },
        grid: {
          offset: true, // Ensure the bars are grouped correctly
        },
      },
      y: {
        title: {
          display: true,
          text: "Time Units", // Title for the Y-axis
        },
        min: 0, // Minimum value of Y-axis
        ticks: {
          stepSize: 20, // Step size for Y-axis ticks
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

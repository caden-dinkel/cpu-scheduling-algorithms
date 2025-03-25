import { Process } from "../types/Process";

interface DisplayCompletedProcessesProps {
  completedProcesses: Process[];
}

const DisplayCompletedProcesses: React.FC<DisplayCompletedProcessesProps> = ({
  completedProcesses,
}) => {
  if (!completedProcesses || completedProcesses.length === 0) {
    return <p>No processes completed yet.</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              PID
            </th>
            <th scope="col" className="px-6 py-3">
              Process Name
            </th>
            <th scope="col" className="px-6 py-3">
              Arrival Time
            </th>
            <th scope="col" className="px-6 py-3">
              Start Time
            </th>
            <th scope="col" className="px-6 py-3">
              Completion Time
            </th>
            <th scope="col" className="px-6 py-3">
              Turnaround Time
            </th>
            <th scope="col" className="px-6 py-3">
              Response Time
            </th>
          </tr>
        </thead>
        <tbody>
          {completedProcesses.map((p) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {p.id}
              </th>
              <td className="px-6 py-4">P{p.id}</td>
              <td className="px-6 py-4">{p.arrivalTime}</td>
              <td className="px-6 py-4">{p.startTime}</td>
              <td className="px-6 py-4">{p.endTime}</td>
              <td className="px-6 py-4">{p.endTime! - p.startTime!}</td>
              <td className="px-6 py-4">{p.startTime! - p.arrivalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCompletedProcesses;

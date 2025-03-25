import { Process } from "../types/Process";

interface DisplayProcessesProps {
  processes: Process[];
}

const DisplayProcesses: React.FC<DisplayProcessesProps> = ({ processes }) => {
  if (!processes || processes.length === 0) {
    return <p>No data to display.</p>;
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
              Burst Time
            </th>
          </tr>
        </thead>
        <tbody>
          {processes.map((p) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {p.id}
              </th>
              <td className="px-6 py-4">P{p.id}</td>
              <td className="px-6 py-4">{p.arrivalTime}</td>
              <td className="px-6 py-4">{p.burstTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DisplayProcesses;

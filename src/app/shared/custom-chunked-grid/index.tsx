import React from "react";
import cn from '@/utils/class-names';

interface Item {
  [key: string]: string;
}

interface Props {
  data: Item;
  className?: string;
  dataChunkSize: number;
}

const ChunkedGrid: React.FC<Props> = ({ data, className, dataChunkSize }) => {

    // Convert the data object to an array of key-value pairs
  const dataArray = Object.entries(data);
  console.log(dataArray)

  // Helper function to chunk the data into subarrays of a specified size
  const chunkArray = (array: [string, string][], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Chunk data into subarrays of 4
  const chunkedData = chunkArray(dataArray, dataChunkSize);

  return (
    <div className="rounded-lg sm:rounded-sm lg:rounded-xl xl:rounded-2xl border border-gray-300 bg-gray-0 p-5 dark:bg-gray-50 lg:p-7">
        <div className="text-gray-900 font-semibold sm:text-lg pb-4">Project Details</div>

        <div className={cn(
            !className && "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6",
            className
        )}
        >
        {chunkedData.map((chunk, columnIndex) => (
            <ul key={columnIndex} className="flex flex-col max-w-full rounded-lg bg-gray-50 p-4 shadow-sm">
            {chunk.map(([key, value], itemIndex) => (
                <li key={itemIndex} className="flex items-start justify-between mb-4 last:mb-0">
                <span className="font-semibold text-gray-900 mr-2">{key}:</span>
                <span className="text-end">{value}</span>
                </li>
            ))}
            </ul>
        ))}
        </div>
    </div>
  );
};

export default ChunkedGrid;

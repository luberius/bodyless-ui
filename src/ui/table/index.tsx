export interface Column {
  key: string;
  title: string;
  render?: (data: any, rowData: any) => React.ReactNode;
}

interface Props {
  data: any[];
  columns: Column[];
}

const Table: React.FC<Props> = ({ data, columns }) => {
  return (
    <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-500">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-text dark:text-text-dark uppercase tracking-wider whitespace-nowrap"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-600 text-text dark:text-text-dark">
        {data.length < 1 && (
          <tr>
            <td className="text-center p-10" colSpan={columns.length}>
              No Data
            </td>
          </tr>
        )}
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} className="px-3 py-2 whitespace-nowrap">
                {column.render
                  ? column.render(row[column.key], row)
                  : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

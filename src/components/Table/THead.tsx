import { ITableHeader } from '../../types';
import { ChevronDown } from '../../icons';
import { sort, SortDirection } from '../../utils/sort';

export interface THeadProps<T> {
  data: T[];
  headers: ITableHeader[];
  backgroundColorClass?: string;
  backgroundColorStyle?: string;
  textColorClass?: string;
  textColorStyle?: string;
  sortDirection: SortDirection;
  setSortDirection: (sortDirection: SortDirection) => void;
  setTableData: (data: T[]) => void;
  setSelectedColumn: (header: ITableHeader | null) => void;
}

const THead = <T,>({
  data,
  headers,
  backgroundColorClass = 'bg-slate-500',
  backgroundColorStyle = '',
  textColorClass = 'text-white',
  textColorStyle = '',
  sortDirection,
  setSortDirection,
  setTableData,
  setSelectedColumn,
}: THeadProps<T>) => {
  const basicSort = (header: ITableHeader) => {
    if (header.dataType !== 'number') {
      setSelectedColumn(null);
    } else {
      setSelectedColumn(header);
    }
    const sortedData = sort(
      data,
      header.column as keyof T,
      sortDirection,
      header,
    );
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    setTableData(sortedData);
  };

  return (
    <thead
      className={`${backgroundColorClass} ${textColorClass}`}
      style={{
        backgroundColor: backgroundColorStyle ? backgroundColorStyle : '',
        color: textColorStyle ? textColorStyle : '',
        display: 'block',
        position: 'sticky',
        top: 0,
      }}
    >
      <tr>
        {headers.map((header, index) => {
          return header.visible ? (
            <th
              key={`thead-th-${index}`}
              style={{
                textAlign: header.align,
                width: `${header.width}px`,
                maxWidth: `${header.width}px`,
              }}
            >
              <div className="flex justify-between w-full pr-2 border-r pl-2">
                <div
                  className="w-full cursor-pointer"
                  onClick={() => basicSort(header)}
                >
                  {header.alias}
                </div>

                <ChevronDown
                  height={12}
                  width={12}
                  fill="white"
                  stroke="white"
                  strokeWidth={6}
                  className="cursor-pointer"
                />
              </div>
            </th>
          ) : null;
        })}
      </tr>
    </thead>
  );
};

export default THead;

import { ITableHeader } from '../../types';
import THead from './THead';
import TBody from './TBody';
import { useState, useEffect } from 'react';
import { SortDirection } from '../../utils/sort';
import Footer from './Footer';

export interface ITable<T> {
  data: T[];
  headers: ITableHeader[];
  backgroundColorClass?: string;
  backgroundColorStyle?: string;
  textColorClass?: string;
  textColorStyle?: string;
  footerBackgroundClass?: string;
  footerBackgroundColorStyle?: string;
  footerTextColorClass?: string;
  footerTextColorStyle?: string;
  hoverClass?: string;
  striped?: boolean;
  stripeEvenClass?: string;
  stripeOddClass?: string;
}

const Table = <T,>({
  data,
  headers,
  backgroundColorClass,
  backgroundColorStyle,
  textColorClass,
  textColorStyle,
  footerBackgroundClass,
  footerBackgroundColorStyle,
  footerTextColorClass,
  footerTextColorStyle,
  hoverClass,
  striped,
  stripeEvenClass,
  stripeOddClass,
}: ITable<T>) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [tableData, setTableData] = useState(data);
  const [selectedColumn, setSelectedColumn] = useState<ITableHeader | null>(
    null,
  );

  useEffect(() => {}, [tableData]);

  return (
    <div>
      <table>
        <THead
          data={tableData}
          headers={headers}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          setTableData={setTableData}
          setSelectedColumn={setSelectedColumn}
          backgroundColorClass={backgroundColorClass}
          backgroundColorStyle={backgroundColorStyle}
          textColorClass={textColorClass}
          textColorStyle={textColorStyle}
        />
        <TBody
          data={tableData}
          headers={headers}
          hoverClass={hoverClass}
          striped={striped}
          stripeEvenClass={stripeEvenClass}
          stripeOddClass={stripeOddClass}
        />
        <Footer
          data={data}
          selectedColumn={selectedColumn}
          footerBackgroundClass={footerBackgroundClass}
          footerTextColorClass={footerTextColorClass}
          footerBackgroundColorStyle={footerBackgroundColorStyle}
          footerTextColorStyle={footerTextColorStyle}
        />
      </table>
    </div>
  );
};

export default Table;

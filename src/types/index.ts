import { FormatterType } from '../components/Table/formatters';

export interface IconProps {
  height: number;
  width: number;
  fill: string;
  stroke: string;
  strokeWidth?: number;
  className?: string;
}

export type ITableHeaderAlign = 'left' | 'center' | 'right';
export type IDataType = 'string' | 'number' | 'boolean' | 'date';

export interface ITableHeader {
  column: string;
  alias: string;
  visible: boolean;
  renderer: () => void;
  width: number;
  align: ITableHeaderAlign;
  formatter: FormatterType;
  dataType: IDataType;
}

import { Button } from 'c5-tiny-package';
import { Select, Table } from '../../src';
import './App.css';
import '../../dist/index.css';
import { data, iData } from './data';
import { tableData, tableHeaders } from './data/tableData';

function App() {
  return (
    <div>
      <Button />
      <Table data={tableData} headers={tableHeaders} />
      <Select<iData>
        data={data}
        displayKey={'name'}
        label={'Select type'}
        labelPosition="top"
        onSelect={(e: iData) => {
          console.log(e);
        }}
      />
    </div>
  );
}

export default App;

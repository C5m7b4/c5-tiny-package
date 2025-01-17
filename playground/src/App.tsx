import { Button } from 'c5-tiny-package';
import { Select, Table } from '../../src';
import './App.css';
import '../../dist/index.css';
import { data, iData } from './data';
import { tableData, tableHeaders } from './data/tableData';
import { useToast } from '../../src';

function App() {
  const toast = useToast();

  const handleError = () => {
    toast.error('This  is an error message');
  };
  const handleSuccess = () => {
    toast.success('this is a success message');
  };
  const handleInfo = () => {
    toast.info('this is an info message');
  };
  const handleWarning = () => {
    toast.warn('this is a warning message');
  };
  return (
    <div>
      <div className="flex">
        <button onClick={handleError}>Error</button>
        <button onClick={handleSuccess}>Success</button>
        <button onClick={handleInfo}>Info</button>
        <button onClick={handleWarning}>Warning</button>
      </div>
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

import { Button } from 'c5-tiny-package';
import { Select } from '../../src';
import './App.css';
import '../../dist/index.css';
import { data, iData } from './data';

function App() {
  return (
    <div>
      <Button />
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

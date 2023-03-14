import { useState } from 'react';
import './App.css';
import Component1 from './Component1'
import ComponentTable from './ComponentTable';

function App() {
  const [data,setData] = useState([])
  const [updateIndex,setUpdateIndex] = useState(-1)
  
  console.log(updateIndex);
  
  return (
    <div className='app'>
      <div className='form'>
        <Component1 setNewData={setData} currData={data} editData={updateIndex} updateIndex={setUpdateIndex}/>
        <ComponentTable data={data} updateIndex={setUpdateIndex}/>
      </div>
    </div>
  );
}

export default App;

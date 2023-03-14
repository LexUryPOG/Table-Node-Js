import React, { useState } from 'react';

function Form({ setNewData, currData, editData,updateIndex}) {
  const [input, setInput] = useState({
    name: '',
    age: '',
    status: 'Active'
  });

  

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('jk',editData);
  if(editData >= 0  ){
    console.log('test');
    handleEdit();
  }else{
    const newData = {
      name: input.name,
      age: input.age,
      status: input.status
    };
    setNewData([...currData, newData]);
    setInput({ name: '', age: '', status: 'Active' });
  }
};

  const handleEdit = () => {
    

    let newArray = currData
    newArray[editData].name = input.name
    newArray[editData].age = input.age
    newArray[editData].status = input.status
    setNewData(newArray)
    setInput({ name: '', age: '', status: 'Active' });
    updateIndex(-1)
    
  };
  console.log(editData);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <div />
            <input
              type="text"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, name: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <div />
            <input
              type="number"
              value={input.age}
              onChange={(e) =>
                setInput({ ...input, age: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Status:
            <div />
            <select
              name="status-selector"
              onChange={(e) =>
                setInput({ ...input, status: e.target.value })
              }
              value={input.status}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
        </div>
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default Form;

import React, { useEffect, useState } from "react";

function Table({ data, updateIndex }) {
  const [newData, setNewData] = useState([]); //
  const [render, setRender] = useState(false); //
  const handleDelete = (index) => {
    //

    newData.splice(index, 1); //
    setRender(true); //
  };
  useEffect(() => {
    //
    setNewData(data); //
    setRender(false); //
  }, [data, render]); //
  return (
    <table className="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.status}</td>
            <td>
              <button className="button" onClick={() => {
                updateIndex(index)
              }
              }>Edit</button>
              <button className="button" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

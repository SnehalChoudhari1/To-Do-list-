import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, settodolist] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();

    const toname = event.target.elements.toname.value.trim();

    if (toname === "") {
      alert("Please enter a to-do item");
      return;
    }

    if (!todolist.includes(toname)) {
      settodolist([...todolist, toname]);
    } else {
      alert("To Do Name already exists");
    }

    event.target.reset();
  };

  const List = todolist.map((value, index) => (
    <ToDOListItems
      value={value}
      key={index}
      indexNumber={index}
      todolist={todolist}
      settodolist={settodolist}   
    />
  ));

  return (
    <div className="App">
      <h1>To-do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button type="submit">Save</button>
      </form>

      <div className="outerdiv">
        <ul>{List}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDOListItems({ value, indexNumber, todolist, settodolist }) {

  let [status, setStatus] = useState(false);

  const deleteRow = () => {
    const finalData = todolist.filter((_, i) => i !== indexNumber);
    settodolist(finalData);
  };

  let checkStatus=()=>{
    setStatus(!status)

  }
  return (
    <li className={(status) ? 'completetodo': ''} onClick={checkStatus}> {indexNumber +1}
      {value} <span onClick={deleteRow} style={{ cursor: 'pointer' }}>&times;</span>
    </li>
  );
}
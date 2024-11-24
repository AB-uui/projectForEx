import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import AllToDos from './comp/allToDos';

function App() {
  return (
    <div className="App-header">

      <h1>To Do List</h1>
      
      <ul>
        <li><Link to={'/AllToDos'}>Home</Link></li>
      </ul>
      
      <Routes>
        <Route path = "/AllToDos" element={<AllToDos />}/>
      </Routes>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Addtodo from './COMPONENTS/Addtodo';
import SearchTodo from './COMPONENTS/SearchTodo';
import DeleteTodo from './COMPONENTS/DeleteTodo';
import ViewTodo from './COMPONENTS/ViewTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Addtodo/>} />
<Route path='/SearchTodo' element={<SearchTodo/>} />
<Route path='/DeleteTodo' element={<DeleteTodo/>} />
<Route path='/ViewTodo' element={<ViewTodo/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;

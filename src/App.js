import logo from './logo.svg';
import './App.css';
import AddDetails from './components/AddDetails';
import SearchDetails from './components/SearchDetails';
import DeleteDetails from './components/DeleteDetails';
import ViewallDetails from './components/ViewallDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddDetails/>}/>
      <Route path='/search' element={<SearchDetails/>}/>
      <Route path='/delete' element={<DeleteDetails/>}/>
      <Route path='/view' element={<ViewallDetails/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

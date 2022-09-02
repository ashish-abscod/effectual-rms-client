import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SelectedProject from './components/SelectedProject/SelectedProject';
import WriteComment from './components/SelectedProject/WriteComment';

function App() {

  return (
    <BrowserRouter>    
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project/:id' element={<SelectedProject/>} />
        <Route path='/comment' element={<WriteComment/>} />
        <Route path='*' element={<><h1 className='bg-danger text-white text-center mt-0'>404 : Page Not Found</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

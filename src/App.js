import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home';
import SelectedProject from './components/SelectedProject/SelectedProject';
import WriteComment from './components/SelectedProject/Comments/WriteComment';
import { ProjectContext } from './components/contexts/ProjectContext';
import { useState } from 'react';
import Landing from './components/landing/Landing';

function App() {
  const [refId, setRefId] = useState(null);

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/main' element={
          <ProjectContext.Provider value={{ refId, setRefId }}>
            <Home setRefId={setRefId} />
          </ProjectContext.Provider>
        } />

        <Route path='/project' element={
          <ProjectContext.Provider value={{ refId, setRefId }}>
            <SelectedProject refId={refId} />
          </ProjectContext.Provider>
        } />

        <Route path='/comment' element={
          <ProjectContext.Provider value={{ refId, setRefId }}>
            <WriteComment refId={refId} />
          </ProjectContext.Provider>
        } />

        <Route path='*' element={<><h1 className='bg-danger text-white text-center mt-0'>404 : Page Not Found</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

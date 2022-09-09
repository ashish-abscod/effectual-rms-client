import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home';
import SelectedProject from './components/SelectedProject/SelectedProject';
import WriteComment from './components/SelectedProject/Comments/WriteComment';
import { ProjectContext } from './components/contexts/ProjectContext';
import { useState } from 'react';
import Landing from './components/landing/Landing';

function App() {
  const [projectId, setProjectId] = useState(null);

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/main' element={
          <ProjectContext.Provider value={{ projectId, setProjectId }}>
            <Home setProjectId={setProjectId} />
          </ProjectContext.Provider>
        } />

        <Route path='/project' element={
          <ProjectContext.Provider value={{ projectId, setProjectId }}>
            <SelectedProject projectId={projectId} />
          </ProjectContext.Provider>
        } />

        <Route path='/comment' element={
          <ProjectContext.Provider value={{ projectId, setProjectId }}>
            <WriteComment projectId={projectId} />
          </ProjectContext.Provider>
        } />

        <Route path='*' element={<><h1 className='bg-danger text-white text-center mt-0'>404 : Page Not Found</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import SelectedProject from "./components/SelectedProject/SelectedProject";
import WriteComment from "./components/SelectedProject/Comments/WriteComment";
import { ProjectContext } from "./components/contexts/ProjectContext";
import { useState, useEffect } from "react";
import Landing from "./components/landing/Landing";
import { UserContext } from "./components/contexts/UserContext";

function App() {
  const [projectId, setProjectId] = useState(null);
  const [user, setUser] = useState({ userData: "", auth: false, token: null });
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    if (user?.auth) {
      setUser({
        ...user,
        auth: true,
        userData : JSON.parse(localStorage.getItem("userData")),
        token: JSON.parse(localStorage.getItem("token")),
      });
    } else if (localStorage.getItem("userData")) {
      setUser({
        ...user,
        auth: true,
        userData: JSON.parse(localStorage.getItem("userData")),
        token: JSON.parse(localStorage.getItem("token")),
      });
    }
  },[]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Landing />} />

          {user?.auth && user?.userData && (
            <>
              <Route
                path="/main"
                element={
                  <ProjectContext.Provider value={{ projectId, setProjectId }}>
                    <Home setProjectId={setProjectId} />
                  </ProjectContext.Provider>
                }
              />

              <Route
                path="/project"
                element={
                  <ProjectContext.Provider value={{ projectId, setProjectId, setReplyTo}}>
                    <SelectedProject projectId={projectId} setReplyTo={setReplyTo}/>
                  </ProjectContext.Provider>
                }
              />

              <Route
                path="/comment"
                element={
                  <ProjectContext.Provider value={{ projectId, setProjectId, replyTo}}>
                    <WriteComment projectId={projectId} replyTo={replyTo} />
                  </ProjectContext.Provider>
                }
              />

              <Route
                path="*"
                element={
                  <>
                    <h1 className="bg-danger text-white text-center mt-0">
                      404 : Page Not Found
                    </h1>
                  </>
                }
              />
            </>
          )}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

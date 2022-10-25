import AllProjects from './AllProjects'
import CreateProject from '../Forms/CreateProject'
import ManageUser from './ManageUser'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function Tabs() {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className="container" style={{ paddingTop: "4rem" }}>

                <ul className="nav nav-tabs flex-nowrap" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active theme-color fw-bold" id="homeTabBtn" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">List of Projects</button>
                    </li>
                    {

                        user?.userData?.role === "Client Admin" ?
                            <>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link theme-color fw-bold" data-bs-toggle="tab" data-bs-target="#newProject" type="button" role="tab" aria-controls="profile" aria-selected="false">New Project</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link theme-color fw-bold" data-bs-toggle="tab" data-bs-target="#manageUser" type="button" role="tab" aria-controls="contact" aria-selected="false">Manage Users</button>
                                </li>
                            </> : ""
                    }
                    {

                        user?.userData?.role === "Effectual Admin" ?
                            <>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link theme-color fw-bold" data-bs-toggle="tab" data-bs-target="#manageUser" type="button" role="tab" aria-controls="contact" aria-selected="false">Manage Users</button>
                                </li>
                            </> : ""

                    }
                </ul>
                <div className="tab-content h-100" id="myTabContent">
                    <div className="tab-pane fade show active overflow-auto bg-white" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <AllProjects />
                    </div>
                    {
                        user?.userData?.role === "Client Admin" ?
                            <>
                                <div className="tab-pane fade bg-white" id="newProject" role="tabpanel" aria-labelledby="profile-tab">
                                    <CreateProject />
                                </div>

                                <div className="tab-pane fade bg-white" id="manageUser" role="tabpanel" aria-labelledby="contact-tab">
                                    <ManageUser />
                                </div>
                            </>
                            : ""
                    }{
                        user?.userData?.role === "Effectual Admin" ?
                            <>
                                <div className="tab-pane fade bg-white" id="manageUser" role="tabpanel" aria-labelledby="contact-tab">
                                    <ManageUser />
                                </div>
                            </> : ""
                    }

                </div>
            </div>
        </>
    )
}

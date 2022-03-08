// Redux
import { useSelector } from "react-redux";

// Router
import { Route, Routes, Link } from "react-router-dom";

// CSS
import '../styles/scss/main.scss';

// Routes
import  { routes } from '../routes/routes';

// Types
interface RootState {
  sidebarElement: any
}

// Sidebar
const Sidebar = () => {

  // Redux data reading
  const sidebarState: any = useSelector(
    (state: RootState) => state.sidebarElement
  );

  return (
    <>
      <div className="wrapper">
        <nav id="sidebar" className={`${sidebarState.display ? 'showNavBar d-flex flex-column flex-shrink-0 p-3 text-white bg-white' : 'activeSideBar'}`}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {routes.map(({path, sidebar}:any, i:number) => (
              <li key={i}>
                <Link to={path}>{sidebar()}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="main">
          <Routes>
            {routes.map(({ path, main }:any, i:number) => (
              <Route key={i} path={path} element={main()} />
            ))}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
// Redux
import { useSelector, useDispatch } from "react-redux";

// Redux slice
import { toggle } from "../redux/elementsStates";

// Fontawesome
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// Types
interface RootState {
    sidebarElement: any
}

// Nav component = navbar + sidebar
const NavBar = () => {

    // Redux actions dispatching
    const dispatch = useDispatch();

    // Redux data reading
    const sidebarState = useSelector(
        (state: RootState) => state.sidebarElement
    );

    // Toggle fn
    const toggleAction = () => {

        if (sidebarState.display) {
            dispatch(toggle(false));
        } else {
            dispatch(toggle(true));
        }
    }

    return (
        <>
            {/* Navbar */}
            <Navbar className="navBar bg-light">
                <Container className="m-0">
                    <Navbar.Brand>
                        {/* Burger button */}
                        <button onClick={() => toggleAction()} type="button" className="btn btn-primary">
                            <FontAwesomeIcon className="fa fa-bars" icon={faBars} />
                        </button>
                        <span> Stock</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
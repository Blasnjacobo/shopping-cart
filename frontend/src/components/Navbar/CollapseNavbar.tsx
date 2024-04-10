import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface Props {
  collapseHandler: () => void; // Define props interface
}

const CollapseNavbar: React.FC<Props> = ({ collapseHandler }) => { // Use props interface
    return (
        <div>
            <Nav className='me-auto d-flex gap-4 align-items-center justify-content-center'>
                <Nav.Link to='/shopping-cart' as={NavLink} style={{ color: 'red' }} onClick={collapseHandler}>
                    Home
                </Nav.Link>
                <Nav.Link to='/shopping-cart/dama' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    Dama
                </Nav.Link>
                <Nav.Link to='/shopping-cart/caballero' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    Caballero
                </Nav.Link>
                <Nav.Link to='/shopping-cart/unisex' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    Unisex
                </Nav.Link>
                <Nav.Link to='/shopping-cart/about' as={NavLink} style={{ fontWeight: 'bold' }} onClick={collapseHandler}>
                    About
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default CollapseNavbar;

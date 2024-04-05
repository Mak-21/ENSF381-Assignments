import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    const logoUrl = `${process.env.PUBLIC_URL}/images/logo.png`;

    return (
      <header>
            <div style={{ display: 'flex', padding: '15px'}}>
        <img src={logoUrl} alt="Company Logo" style={{ height: '50px' }} />
        <nav style={{ marginLeft: 'auto', color: 'black'}}>Evangelion</nav>
    </div>

            <div className="nav" style={{ flex: 2 }}>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Productpage" className="nav-link">Products</Link>
                <Link to="/LoginPage" className="nav-link">Login</Link>
                
            </div>
            
            </header>
    );
}

export default Header;

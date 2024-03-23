import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
    const logoUrl = `${process.env.PUBLIC_URL}/images/logo.png`;

    return (
        <header style={{
            display: 'flex',
             // Adjust alignment to start at the top
            padding: 20,
        }}>
            <div>
                <img src={logoUrl} alt="Company Logo" style={{ height: '50px' }} /> {/* Adjust size as needed */}
                <div>
                    <nav className="nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/Productpage" className="nav-link">Products</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </nav>

                </div>
            </div>

            <div style={{
                flex: 1,
                textAlign: 'right', // Keeps the company name on the right
                padding: '0 1rem' // Adds some padding for spacing
            }}>Evangelion</div>
        </header>
    );
}

export default Header;
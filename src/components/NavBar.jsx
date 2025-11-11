import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<header className="navbar">
			<div className="nav-inner">
				<Link to="/" className="brand">
					<img src="/src/images/fevicon.png" alt="CC Logo" className="brand-logo" /><p>Codes<br />Crafters</p>
				</Link>
				<nav className="nav-links">
					<NavLink to="/" end className="nav-link">Home</NavLink>
					<NavLink to="/about" className="nav-link">About</NavLink>
					<NavLink to="/services" className="nav-link">Services</NavLink>
					<NavLink to="/contact" className="nav-link">Contact</NavLink>
				</nav>
			</div>
		</header>
	);
}



import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	// Close menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	// Close menu on escape key
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => window.removeEventListener('keydown', handleEscape);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="navbar">
			<div className="nav-inner">
				<Link to="/" className="brand" onClick={closeMenu}>
					<img src="/src/images/fevicon.png" alt="CC Logo" className="brand-logo" />
					<p className="brand-name">Codes<br />Crafters</p>
				</Link>
				<button 
					className={`nav-burger ${isMenuOpen ? 'nav-burger-open' : ''}`}
					onClick={toggleMenu}
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<nav className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
					<NavLink to="/" end className="nav-link" onClick={closeMenu}>Home</NavLink>
					<NavLink to="/about" className="nav-link" onClick={closeMenu}>About</NavLink>
					<NavLink to="/services" className="nav-link" onClick={closeMenu}>Services</NavLink>
					<NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
				</nav>
				{isMenuOpen && (
					<div className="nav-overlay" onClick={closeMenu}></div>
				)}
			</div>
		</header>
	);
}



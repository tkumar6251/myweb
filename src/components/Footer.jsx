import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer-new">
			<div className="footer-container">
				<div className="footer-grid">
					<div className="footer-brand-section">
						<div className="footer-brand-header">
							<div className="footer-logo">CC</div>
							<div className="footer-brand-name">CodesCrafters</div>
						</div>
						<p className="footer-description">
							Stepping into the future with enterprise-grade fintech solutions. Power your financial services with our comprehensive API infrastructure.
						</p>
						<div className="footer-contact-info">
							<div className="footer-contact-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon footer-icon-blue" aria-hidden="true">
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
									<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								</svg>
								<span className="footer-contact-text">contact@codescrafters.com</span>
							</div>
							<div className="footer-contact-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon footer-icon-green" aria-hidden="true">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
								</svg>
								<span className="footer-contact-text">+91 (555) 123-4567</span>
							</div>
							<div className="footer-contact-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon footer-icon-orange" aria-hidden="true">
									<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
								<span className="footer-contact-text">New Delhi, India</span>
							</div>
						</div>
						<div className="footer-social">
							<a href="#" className="footer-social-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect width="4" height="12" x="2" y="9"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</a>
							<a href="#" className="footer-social-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
								</svg>
							</a>
							<a href="#" className="footer-social-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="footer-column">
						<h3 className="footer-column-title">Services</h3>
						<ul className="footer-column-list">
							<li><Link to="/services" className="footer-link footer-link-blue">Account Opening</Link></li>
							<li><Link to="/services" className="footer-link footer-link-blue">Account Closure</Link></li>
							<li><Link to="/services" className="footer-link footer-link-blue">IPO Services</Link></li>
							<li><Link to="/services" className="footer-link footer-link-blue">KYC Solutions</Link></li>
							<li><Link to="/services" className="footer-link footer-link-blue">Re-KYC</Link></li>
							<li><Link to="/services" className="footer-link footer-link-blue">AI Chatbot</Link></li>
							<li><Link to="/services" className="footer-link footer-link-blue">API Services</Link></li>
						</ul>
					</div>
					<div className="footer-column">
						<h3 className="footer-column-title">Company</h3>
						<ul className="footer-column-list">
							<li><Link to="/about" className="footer-link footer-link-green">About Us</Link></li>
							<li><a href="#" className="footer-link footer-link-green">Careers</a></li>
							<li><a href="#" className="footer-link footer-link-green">News & Updates</a></li>
							<li><a href="#" className="footer-link footer-link-green">Case Studies</a></li>
							<li><a href="#" className="footer-link footer-link-green">Documentation</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h3 className="footer-column-title">Resources</h3>
						<ul className="footer-column-list">
							<li><a href="#" className="footer-link footer-link-orange">Developer Docs</a></li>
							<li><a href="#" className="footer-link footer-link-orange">API Reference</a></li>
							<li><a href="#" className="footer-link footer-link-orange">Support Center</a></li>
							<li><a href="#" className="footer-link footer-link-orange">System Status</a></li>
							<li><a href="#" className="footer-link footer-link-orange">Security</a></li>
						</ul>
					</div>
				</div>
				<div className="footer-newsletter">
					<div className="footer-newsletter-content">
						<div className="footer-newsletter-text">
							<h3 className="footer-newsletter-title">Stay Updated</h3>
							<p className="footer-newsletter-description">Get the latest fintech insights and product updates.</p>
						</div>
						<div className="footer-newsletter-form">
							<input 
								type="email" 
								placeholder="Enter your email" 
								className="footer-newsletter-input"
							/>
							<button className="footer-newsletter-button">
								Subscribe
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M5 12h14"></path>
									<path d="m12 5 7 7-7 7"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-bottom-content">
						<div className="footer-copyright">
							© {new Date().getFullYear()} CodesCrafters. All rights reserved.
						</div>
						<div className="footer-legal">
							<a href="#" className="footer-legal-link">Privacy Policy</a>
							<a href="#" className="footer-legal-link">Terms of Service</a>
							<a href="#" className="footer-legal-link">Security</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

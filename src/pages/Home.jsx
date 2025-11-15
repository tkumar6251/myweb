import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<Hero />
			<section id="services" className="services-new">
				<div className="services-container">
					<div className="services-header">
						<div className="services-badge">
							<div className="services-badge-dot"></div>
							<span className="services-badge-text">WHAT WE DO</span>
						</div>
						<h2 className="services-title">
							Complete Enterprise<br />
							<span className="services-title-gradient">Infrastructure</span>
						</h2>
						<p className="services-subtitle">
							Power your financial services with our comprehensive suite of API-driven solutions. Built for scale, security, and seamless integration.
						</p>
					</div>
					<div className="services-grid">
						{/* E-IPO & SGB */}
						<div className="service-card service-card-orange">
							<div className="service-icon service-icon-orange">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
									<polyline points="16 7 22 7 22 13"></polyline>
								</svg>
							</div>
							<div className="service-content">
								<h3 className="service-title">E-IPO & SGB</h3>
								<p className="service-description">Our IPO software is faster, more secure, and easy to use, ensuring a streamlined experience for companies going public. It offers easy to checkout for live IPOs, streamlined Initial Public Offering process, enhanced investor engagement and much more.</p>
								<ul className="service-features">
									<li className="service-feature">
										<div className="service-bullet service-bullet-orange"></div>
										<span>Application Processing</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-orange"></div>
										<span>Allocation Management</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-orange"></div>
										<span>Regulatory Compliance</span>
									</li>
								</ul>
								<div className="service-button-wrapper">
									<Link to="/services" className="service-button service-button-orange">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>

						{/* Conversational AI */}
						<div className="service-card service-card-green">
							<div className="service-icon service-icon-green">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							</div>
							<div className="service-content">
								<h3 className="service-title">Conversational AI</h3>
								<p className="service-description">Our chatbot provides automated conversations, personalized interactions, order tracking, multi-language support, increased efficiency, and additional features.</p>
								<ul className="service-features">
									<li className="service-feature">
										<div className="service-bullet service-bullet-green"></div>
										<span>24/7 Support</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-green"></div>
										<span>Multi-language</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-green"></div>
										<span>Integration Ready</span>
									</li>
								</ul>
								<div className="service-button-wrapper">
									<Link to="/services" className="service-button service-button-green">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>

						{/* E-KYC & Verification */}
						<div className="service-card service-card-red">
							<div className="service-icon service-icon-red">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
								</svg>
							</div>
							<div className="service-content">
								<h3 className="service-title">E-KYC & Verification</h3>
								<p className="service-description">Our tool delivers seamless Account Opening, Modification and Closing Solutions. Eliminating the need for physical documents. Automated submissions to CDSL, NSDL via API integrations.</p>
								<ul className="service-features">
									<li className="service-feature">
										<div className="service-bullet service-bullet-red"></div>
										<span>Document Verification</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-red"></div>
										<span>Biometric Matching</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-red"></div>
										<span>AML Screening</span>
									</li>
								</ul>
								<div className="service-button-wrapper">
									<Link to="/services" className="service-button service-button-red">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>

						{/* Aadhar E-Sign & Digi-Sign */}
						<div className="service-card service-card-blue">
							<div className="service-icon service-icon-blue">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M19 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
									<line x1="12" y1="11" x2="12" y2="17"></line>
									<polyline points="9 14 12 11 15 14"></polyline>
								</svg>
							</div>
							<div className="service-content">
								<h3 className="service-title">Aadhar E-Sign & Digi-Sign</h3>
								<p className="service-description">Enhance your business workflow's speed with the eSign facility. Our secure and free digital signature is user-friendly ideal for anyone seeking a cost-effective digital signature solution.</p>
								<ul className="service-features">
									<li className="service-feature">
										<div className="service-bullet service-bullet-blue"></div>
										<span>Digital Signatures</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-blue"></div>
										<span>Aadhar Integration</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-blue"></div>
										<span>Secure Authentication</span>
									</li>
								</ul>
								<div className="service-button-wrapper">
									<Link to="/services" className="service-button service-button-blue">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>

						{/* E-Doc Issuer/Retrieval */}
						<div className="service-card service-card-green">
							<div className="service-icon service-icon-green">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
									<line x1="16" y1="13" x2="8" y2="13"></line>
									<line x1="16" y1="17" x2="8" y2="17"></line>
									<polyline points="10 9 9 9 8 9"></polyline>
								</svg>
							</div>
							<div className="service-content">
								<h3 className="service-title">E-Doc Issuer/Retrieval</h3>
								<p className="service-description">Enabling a faster and convenient document workflow, our solution promotes paperless document storage, eliminating worries about theft. It enhances business's security and reduces manual errors.</p>
								<ul className="service-features">
									<li className="service-feature">
										<div className="service-bullet service-bullet-green"></div>
										<span>Document Storage</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-green"></div>
										<span>Secure Retrieval</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-green"></div>
										<span>Paperless Workflow</span>
									</li>
								</ul>
								<div className="service-button-wrapper">
									<Link to="/services" className="service-button service-button-green">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>

						{/* Auto Emailer */}
						<div className="service-card service-card-orange">
							<div className="service-icon service-icon-orange">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg>
							</div>
							<div className="service-content">
								<h3 className="service-title">Auto Emailer</h3>
								<p className="service-description">Our Auto Emailer is a valuable tool for marketing teams, enabling them to scale their marketing strategies, boost customer retention rates, and achieve more effective outreach.</p>
								<ul className="service-features">
									<li className="service-feature">
										<div className="service-bullet service-bullet-orange"></div>
										<span>Automated Campaigns</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-orange"></div>
										<span>Customer Retention</span>
									</li>
									<li className="service-feature">
										<div className="service-bullet service-bullet-orange"></div>
										<span>Scalable Outreach</span>
									</li>
								</ul>
								<div className="service-button-wrapper">
									<Link to="/services" className="service-button service-button-orange">
										Learn More
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="services-footer">
						<Link to="/services" className="btn btn-primary services-cta">
							Explore All Services
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}



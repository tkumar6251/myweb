export default function Services() {
	return (
		<section id="services" className="services-new">
			<div className="services-container">
				<div className="services-header">
					<div className="services-badge">
						<div className="services-badge-dot"></div>
						<span className="services-badge-text">OUR SERVICES</span>
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
					{/* E-KYC & Verification - Account Opening */}
					<div className="service-card service-card-blue">
						<div className="service-icon service-icon-blue">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<polyline points="16 11 18 13 22 9"></polyline>
							</svg>
						</div>
						<div className="service-content">
							<h3 className="service-title">Account Opening</h3>
							<p className="service-description">Our tool delivers seamless Account Opening, Modification and Closing Solutions. Eliminating the need for physical documents. Automated submissions to CDSL, NSDL via API integrations.</p>
							<ul className="service-features">
								<li className="service-feature">
									<div className="service-bullet service-bullet-blue"></div>
									<span>Digital KYC</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-blue"></div>
									<span>Identity Verification</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-blue"></div>
									<span>Risk Assessment</span>
								</li>
							</ul>
							<div className="service-button-wrapper">
								<button className="service-button service-button-blue">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* E-KYC & Verification - Account Closure */}
					<div className="service-card service-card-green">
						<div className="service-icon service-icon-green">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<line x1="17" x2="22" y1="8" y2="13"></line>
								<line x1="22" x2="17" y1="8" y2="13"></line>
							</svg>
						</div>
						<div className="service-content">
							<h3 className="service-title">Account Closure</h3>
							<p className="service-description">Secure and compliant account closure processes with proper audit trails and automated workflows.</p>
							<ul className="service-features">
								<li className="service-feature">
									<div className="service-bullet service-bullet-green"></div>
									<span>Automated Workflows</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-green"></div>
									<span>Compliance Tracking</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-green"></div>
									<span>Data Retention</span>
								</li>
							</ul>
							<div className="service-button-wrapper">
								<button className="service-button service-button-green">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

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
								<button className="service-button service-button-orange">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* E-KYC & Verification - KYC Solutions */}
					<div className="service-card service-card-red">
						<div className="service-icon service-icon-red">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
							</svg>
						</div>
						<div className="service-content">
							<h3 className="service-title">E-KYC & Verification</h3>
							<p className="service-description">Comprehensive Know Your Customer solutions with real-time verification and automated compliance checks.</p>
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
								<button className="service-button service-button-red">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* Re-KYC */}
					<div className="service-card service-card-blue">
						<div className="service-icon service-icon-blue">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
								<path d="M21 3v5h-5"></path>
								<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
								<path d="M8 16H3v5"></path>
							</svg>
						</div>
						<div className="service-content">
							<h3 className="service-title">Re-KYC</h3>
							<p className="service-description">Automated periodic KYC updates to maintain compliance and reduce manual overhead with scheduled reviews.</p>
							<ul className="service-features">
								<li className="service-feature">
									<div className="service-bullet service-bullet-blue"></div>
									<span>Scheduled Updates</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-blue"></div>
									<span>Risk-based Reviews</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-blue"></div>
									<span>Automated Notifications</span>
								</li>
							</ul>
							<div className="service-button-wrapper">
								<button className="service-button service-button-blue">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
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
								<button className="service-button service-button-green">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* CRM Tools - API Services */}
					<div className="service-card service-card-orange">
						<div className="service-icon service-icon-orange">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<polyline points="16 18 22 12 16 6"></polyline>
								<polyline points="8 6 2 12 8 18"></polyline>
							</svg>
						</div>
						<div className="service-content">
							<h3 className="service-title">CRM Tools</h3>
							<p className="service-description">Our CRM software streamlines lead cycles and boosts support, no matter your business size. It is designed to help you build and maintain loyal customer relationships, fostering sustainable business growth.</p>
							<ul className="service-features">
								<li className="service-feature">
									<div className="service-bullet service-bullet-orange"></div>
									<span>RESTful APIs</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-orange"></div>
									<span>Real-time Data</span>
								</li>
								<li className="service-feature">
									<div className="service-bullet service-bullet-orange"></div>
									<span>Webhook Support</span>
								</li>
							</ul>
							<div className="service-button-wrapper">
								<button className="service-button service-button-orange">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
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
								<button className="service-button service-button-blue">
									Learn More
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="services-footer">
					<button className="btn btn-primary services-cta">
						Explore All Services
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M5 12h14"></path>
							<path d="m12 5 7 7-7 7"></path>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}

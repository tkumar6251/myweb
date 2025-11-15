export default function Contact() {
	return (
		<section className="services-new">
			<div className="services-container">
				<div className="services-header">
					<div className="services-badge">
						<div className="services-badge-dot"></div>
						<span className="services-badge-text">GET IN TOUCH</span>
					</div>
					<h2 className="services-title">
						Contact<br />
						<span className="services-title-gradient">Us</span>
					</h2>
					<p className="services-subtitle">
						We'd love to hear from you. Tell us about your project and goals, and we'll get back to you within 1 business day.
					</p>
				</div>
				<div className="contact-wrapper">
					<div className="contact-form-section">
						<form className="contact-form-new" onSubmit={(e) => e.preventDefault()}>
							<div className="contact-form-row">
								<label className="contact-form-label">
									Name
									<input type="text" name="name" placeholder="Jane Doe" className="contact-form-input" required />
								</label>
								<label className="contact-form-label">
									Email
									<input type="email" name="email" placeholder="jane@example.com" className="contact-form-input" required />
								</label>
							</div>
							<label className="contact-form-label">
								Message
								<textarea name="message" rows="5" placeholder="How can we help?" className="contact-form-textarea" required></textarea>
							</label>
							<button className="btn btn-primary contact-form-button" type="submit">
								Send Message
							</button>
						</form>
					</div>
					<div className="contact-info-section">
						<div className="contact-info-card">
							<div className="contact-info-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon contact-info-icon-blue" aria-hidden="true">
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
									<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								</svg>
								<div className="contact-info-content">
									<h3 className="contact-info-title">Email</h3>
									<p className="contact-info-text">contact@codescrafters.com</p>
								</div>
							</div>
							<div className="contact-info-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon contact-info-icon-green" aria-hidden="true">
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
								</svg>
								<div className="contact-info-content">
									<h3 className="contact-info-title">Phone</h3>
									<p className="contact-info-text">+1 (555) 123-4567</p>
								</div>
							</div>
							<div className="contact-info-item">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-info-icon contact-info-icon-orange" aria-hidden="true">
									<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
								<div className="contact-info-content">
									<h3 className="contact-info-title">Location</h3>
									<p className="contact-info-text">San Francisco, CA</p>
								</div>
							</div>
							<div className="contact-info-meta">
								<img src="/src/images/favicon/favicon-32x32.png" alt="favicon" />
								<span>Response within 1 business day</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

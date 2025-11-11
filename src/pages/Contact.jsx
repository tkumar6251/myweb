export default function Contact() {
	return (
		<section className="section page">
			<h1 className="page-title">Contact Us</h1>
			<p className="page-text">
				We’d love to hear from you. Tell us about your project and goals.
			</p>
			<form className="contact-form" onSubmit={(e) => e.preventDefault()}>
				<div className="form-row">
					<label>
						Name
						<input type="text" name="name" placeholder="Jane Doe" required />
					</label>
					<label>
						Email
						<input type="email" name="email" placeholder="jane@example.com" required />
					</label>
				</div>
				<label>
					Message
					<textarea name="message" rows="5" placeholder="How can we help?" required></textarea>
				</label>
				<button className="btn btn-primary" type="submit">Send Message</button>
			</form>
			<div className="contact-meta">
				<img src="/src/images/favicon/favicon-32x32.png" alt="favicon" />
				<span>Response within 1 business day</span>
			</div>
		</section>
	);
}



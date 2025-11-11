export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<img src="/src/images/favicon/favicon-32x32.png" alt="favicon" />
					<p>CodesCrafters</p>
					<span>© {new Date().getFullYear()} CC. All rights reserved.</span>
				</div>
				<div className="footer-links">
					<a href="/WhoWeAre.png" target="_blank" rel="noreferrer">Who We Are</a>
					<a href="/KYC Logo.jpg" target="_blank" rel="noreferrer">KYC</a>
					<a href="/Sign Logo.jpg" target="_blank" rel="noreferrer">Sign</a>
				</div>
			</div>
		</footer>
	);
}



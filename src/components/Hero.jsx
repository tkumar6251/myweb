import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
	const containerRef = useRef(null);
	const requestRef = useRef(0);
	const target = useRef({ x: 0, y: 0 });
	const current = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const onMove = (e) => {
			const rect = containerRef.current?.getBoundingClientRect();
			if (!rect) return;
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			target.current.x = (e.clientX - cx) / rect.width;
			target.current.y = (e.clientY - cy) / rect.height;
		};
		window.addEventListener('mousemove', onMove);

		const animate = () => {
			// Smoothly lerp towards the target for butter-smooth motion
			current.current.x += (target.current.x - current.current.x) * 0.20;
			current.current.y += (target.current.y - current.current.y) * 0.20;
			const el = containerRef.current;
			if (el) {
				const rx = current.current.y * -10;
				const ry = current.current.x * 10;
				const tx = current.current.x * 20;
				const ty = current.current.y * 20;

				el.style.setProperty('--rx', `${rx}deg`);
				el.style.setProperty('--ry', `${ry}deg`);
				el.style.setProperty('--tx', `${tx}px`);
				el.style.setProperty('--ty', `${ty}px`);
			}
			requestRef.current = requestAnimationFrame(animate);
		};
		requestRef.current = requestAnimationFrame(animate);
		return () => {
			window.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(requestRef.current);
		};
	}, []);

	return (
		<>
			<section className="hero">
				<video className="hero-bg" src="/bg.mp4" autoPlay muted loop playsInline />
				<div ref={containerRef} className="hero-tilt">
					<div className="hero-card">
						<h1 className="hero-title">Tailored Solutions for Your Business</h1>
						<p className="hero-subtitle">
							Conversational AI, KYC, eSign, and enterprise-grade integrations — built to scale.
						</p>
					</div>
					<div className="hero-orb orb-1"></div>
					<div className="hero-orb orb-2"></div>
					<div className="hero-orb orb-3"></div>
				</div>
			</section>
			<section className="hero-new">
				<div className="hero-new-container">
					<div className="hero-new-grid">
						<div className="hero-new-content">
							<div className="hero-new-text">
								<div className="hero-new-badge">
									<div className="hero-new-badge-dot"></div>
									<span className="hero-new-badge-text">DIGITAL SOLUTIONS</span>
								</div>
								<h1 className="hero-new-title">
									Enterprise<br />
									<span className="hero-new-title-gradient">Solutions</span><br />
									
								</h1>
								<p className="hero-new-description">
									Stepping into the future with comprehensive API-driven financial services. From KYC to account management, we power your fintech infrastructure.
								</p>
							</div>
							<div className="hero-new-cta">
								<Link to="/contact" className="btn btn-primary hero-new-btn-primary">
									Request Demo
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</Link>
								<Link to="/services" className="btn btn-secondary hero-new-btn-secondary">
									View Services
								</Link>
							</div>
							<div className="hero-new-stats">
								<div className="hero-new-stat">
									<div className="hero-new-stat-value hero-new-stat-blue">500+</div>
									<div className="hero-new-stat-label">Integrations</div>
								</div>
								<div className="hero-new-stat">
									<div className="hero-new-stat-value hero-new-stat-green">99.9%</div>
									<div className="hero-new-stat-label">Uptime</div>
								</div>
								<div className="hero-new-stat">
									<div className="hero-new-stat-value hero-new-stat-orange">24/7</div>
									<div className="hero-new-stat-label">Support</div>
								</div>
							</div>
						</div>
						<div className="hero-new-code">
							<div className="hero-new-code-wrapper">
								<div className="hero-new-code-card">
									<div className="hero-new-code-header">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero-new-code-icon" aria-hidden="true">
											<polyline points="16 18 22 12 16 6"></polyline>
											<polyline points="8 6 2 12 8 18"></polyline>
										</svg>
										<span className="hero-new-code-filename">fintech-api.js</span>
									</div>
									<div className="hero-new-code-content">
										<div className="hero-new-code-line hero-new-code-purple">const</div>
										<div className="hero-new-code-line hero-new-code-gray">response = await</div>
										<div className="hero-new-code-line hero-new-code-green">codescrafters.kyc(</div>
										<div className="hero-new-code-line hero-new-code-orange">userId: '12345'</div>
										<div className="hero-new-code-line hero-new-code-green">);</div>
										<div className="hero-new-code-comment">// ✅ Instant verification</div>
									</div>
								</div>
								<div className="hero-new-code-decoration hero-new-code-decoration-1"></div>
								<div className="hero-new-code-decoration hero-new-code-decoration-2"></div>
							</div>
							<div className="hero-new-code-grid">
								{Array.from({ length: 64 }).map((_, i) => (
									<div key={i} className="hero-new-code-dot"></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}



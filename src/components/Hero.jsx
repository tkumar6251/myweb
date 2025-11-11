import { useEffect, useRef } from 'react';

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
		<section className="hero">
			<video className="hero-bg" src="/bg.mp4" autoPlay muted loop playsInline />
			<div ref={containerRef} className="hero-tilt">
				<div className="hero-card">
					<img className="hero-logo" src="/src/images/Fevicon.png" alt="Logo" />
					<h1 className="hero-title">Tailored Solutions for Your Business</h1>
					<p className="hero-subtitle">
						Conversational AI, KYC, eSign, and enterprise-grade integrations — built to scale.
					</p>
					<div className="hero-cta">
						<a className="btn btn-primary" href="/services">Explore Services</a>
						<a className="btn btn-secondary" href="/contact">Contact Us</a>
					</div>
				</div>
				<div className="hero-orb orb-1"></div>
				<div className="hero-orb orb-2"></div>
				<div className="hero-orb orb-3"></div>
			</div>
		</section>
	);
}



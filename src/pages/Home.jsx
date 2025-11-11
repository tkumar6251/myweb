import Hero from '../components/Hero.jsx';

export default function Home() {
	return (
		<>
			<Hero />
			<section className="section features">
				<h2 className="section-title">What We Do</h2>
				<div className="grid-3">
				<div className="feature-card">
						<img src="/src/images/ipo.jpg" alt="KYC" />
						<h3>E-IPO & SGB</h3>
						<p className="pp">Our IPO software is faster, more secure, and easy to use, ensuring a streamlined experience for companies going public. It offers easy to checkout for live IPOs, streamlined Initial Public Offering process, enhanced investor engagement and much more.</p>
					</div>
					<div className="feature-card">
						<img src="/src/images/Conversational AI.jpg" alt="Conversational AI" />
						<h3>Conversational AI</h3>
						<p className="pp">Our chatbot provides automated conversations, personalized interactions, order tracking, multi-language support, increased efficiency, and additional features.</p>
					</div>
					<div className="feature-card">
						<img src="/src/images/kyc.jpg" alt="KYC" />
						<h3>E-KYC & Verification</h3>
						<p className="pp">Our tool delivers seamless Account Opening, Modification and Closing Solutions. Eliminating the need for physical documents. Automated submissions to CDSL, NSDL via API integrations.</p>
					</div>
					<div className="feature-card">
						<img src="/src/images/eSign.jpg" alt="eSign" />
						<h3>Aadhar E-Sign & Digi-Sign</h3>
						<p className="pp">Enhance your business workflow's speed with the eSign facility. Our secure and free digital signature is user-friendly ideal for anyone seeking a cost-effective digital signature solution.</p>
					</div>
					<div className="feature-card">
						<img src="/src/images/digilocker.jpg" alt="eSign" />
						<h3>E-Doc Issuer/Retrieval</h3>
						<p className="pp">Enabling a faster and convenient document workflow, our solution promotes paperless document storage, eliminating worries about theft. It enhances business's security and reduces manual errors.</p>
					</div>
					<div className="feature-card">
					<img src="/src/images/salesmarketing.jpg" alt="Sales & Marketing" />
					<h3>Auto Emailer</h3>
					<p className="pp">Our Auto Emailer is a valuable tool for marketing teams, enabling them to scale their marketing strategies, boost customer retention rates, and achieve more effective outreach.</p>
				</div>
				</div>
			</section>
		</>
	);
}



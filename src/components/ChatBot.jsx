import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{ id: 1, text: "Hello! I'm here to help you with any questions about our fintech solutions. How can I assist you today?", sender: 'bot' }
	]);
	const [inputValue, setInputValue] = useState('');
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSend = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;

		const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
		setMessages([...messages, userMessage]);
		setInputValue('');

		// Simulate bot response
		setTimeout(() => {
			const botResponses = [
				"Great question! Our KYC solutions provide real-time verification with 99.9% accuracy. Would you like to know more about our API integration?",
				"We offer comprehensive fintech infrastructure including account opening, KYC verification, IPO services, and more. Which service interests you?",
				"Our platform supports 500+ integrations and provides 24/7 support. I can help you get started with a demo. Would you like to schedule one?",
				"For pricing and technical details, I recommend contacting our sales team. They can provide customized solutions based on your needs.",
				"Thank you for your interest! You can explore our services page or request a demo. Is there anything specific you'd like to know?"
			];
			const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
			const botMessage = { id: Date.now() + 1, text: randomResponse, sender: 'bot' };
			setMessages(prev => [...prev, botMessage]);
		}, 1000);
	};

	return (
		<>
			{isOpen && (
				<div className="chatbot-container">
					<div className="chatbot-header">
						<div className="chatbot-header-content">
							<div className="chatbot-avatar">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
								</svg>
							</div>
							<div>
								<h3 className="chatbot-title">CodesCrafters Assistant</h3>
								<p className="chatbot-subtitle">We're here to help</p>
							</div>
						</div>
						<button className="chatbot-close" onClick={() => setIsOpen(false)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</button>
					</div>
					<div className="chatbot-messages">
						{messages.map((message) => (
							<div key={message.id} className={`chatbot-message chatbot-message-${message.sender}`}>
								{message.sender === 'bot' && (
									<div className="chatbot-message-avatar">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
										</svg>
									</div>
								)}
								<div className="chatbot-message-content">
									<p>{message.text}</p>
								</div>
							</div>
						))}
						<div ref={messagesEndRef} />
					</div>
					<form className="chatbot-input-form" onSubmit={handleSend}>
						<input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Type your message..."
							className="chatbot-input"
						/>
						<button type="submit" className="chatbot-send">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="m22 2-7 20-4-9-9-4Z"></path>
								<path d="M22 2 11 13"></path>
							</svg>
						</button>
					</form>
				</div>
			)}
			<button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
					</svg>
				)}
			</button>
		</>
	);
}


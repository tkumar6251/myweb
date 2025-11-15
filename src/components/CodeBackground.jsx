export default function CodeBackground() {
	return (
		<div className="code-background">
			<svg className="code-background-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
				<defs>
					{/* Neural Network Pattern */}
					<pattern id="neuralPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
						{/* Neural network nodes */}
						<circle cx="50" cy="50" r="3" fill="rgba(59, 130, 246, 0.08)" />
						<circle cx="150" cy="50" r="3" fill="rgba(34, 197, 94, 0.08)" />
						<circle cx="100" cy="100" r="3" fill="rgba(147, 51, 234, 0.08)" />
						<circle cx="50" cy="150" r="3" fill="rgba(234, 88, 12, 0.08)" />
						<circle cx="150" cy="150" r="3" fill="rgba(59, 130, 246, 0.08)" />
						{/* Connections */}
						<line x1="50" y1="50" x2="100" y2="100" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />
						<line x1="150" y1="50" x2="100" y2="100" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="1" />
						<line x1="100" y1="100" x2="50" y2="150" stroke="rgba(147, 51, 234, 0.05)" strokeWidth="1" />
						<line x1="100" y1="100" x2="150" y2="150" stroke="rgba(234, 88, 12, 0.05)" strokeWidth="1" />
					</pattern>
					
					{/* Code Brackets Pattern */}
					<pattern id="codeBrackets" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
						<text x="20" y="40" fontSize="32" fill="rgba(59, 130, 246, 0.06)" fontFamily="monospace" fontWeight="300">{'{'}</text>
						<text x="20" y="80" fontSize="32" fill="rgba(34, 197, 94, 0.06)" fontFamily="monospace" fontWeight="300">{'}'}</text>
						<text x="80" y="40" fontSize="32" fill="rgba(147, 51, 234, 0.06)" fontFamily="monospace" fontWeight="300">{'['}</text>
						<text x="80" y="80" fontSize="32" fill="rgba(234, 88, 12, 0.06)" fontFamily="monospace" fontWeight="300">{']'}</text>
					</pattern>
					
					{/* Binary Code Pattern */}
					<pattern id="binaryPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
						<text x="10" y="20" fontSize="10" fill="rgba(59, 130, 246, 0.05)" fontFamily="monospace">0101</text>
						<text x="10" y="40" fontSize="10" fill="rgba(34, 197, 94, 0.05)" fontFamily="monospace">1010</text>
						<text x="10" y="60" fontSize="10" fill="rgba(147, 51, 234, 0.05)" fontFamily="monospace">1100</text>
						<text x="10" y="80" fontSize="10" fill="rgba(234, 88, 12, 0.05)" fontFamily="monospace">0011</text>
						<text x="10" y="100" fontSize="10" fill="rgba(59, 130, 246, 0.05)" fontFamily="monospace">1111</text>
					</pattern>
					
					{/* AI Circuit Pattern */}
					<pattern id="circuitPattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
						{/* Circuit lines */}
						<line x1="20" y1="40" x2="80" y2="40" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1.5" />
						<line x1="80" y1="40" x2="80" y2="100" stroke="rgba(34, 197, 94, 0.04)" strokeWidth="1.5" />
						<line x1="80" y1="100" x2="140" y2="100" stroke="rgba(147, 51, 234, 0.04)" strokeWidth="1.5" />
						<line x1="20" y1="140" x2="80" y2="140" stroke="rgba(234, 88, 12, 0.04)" strokeWidth="1.5" />
						{/* Circuit nodes */}
						<circle cx="20" cy="40" r="2" fill="rgba(59, 130, 246, 0.06)" />
						<circle cx="80" cy="40" r="2" fill="rgba(34, 197, 94, 0.06)" />
						<circle cx="80" cy="100" r="2" fill="rgba(147, 51, 234, 0.06)" />
						<circle cx="140" cy="100" r="2" fill="rgba(234, 88, 12, 0.06)" />
						<circle cx="20" cy="140" r="2" fill="rgba(59, 130, 246, 0.06)" />
					</pattern>
				</defs>
				{/* Apply patterns as watermark */}
				<rect width="100%" height="100%" fill="url(#neuralPattern)" opacity="0.4" />
				<rect width="100%" height="100%" fill="url(#codeBrackets)" opacity="0.3" />
				<rect width="100%" height="100%" fill="url(#binaryPattern)" opacity="0.25" />
				<rect width="100%" height="100%" fill="url(#circuitPattern)" opacity="0.2" />
			</svg>
		</div>
	);
}

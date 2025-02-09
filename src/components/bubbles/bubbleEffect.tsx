import React, { useEffect } from 'react';

// BubbleEffect Component
const BubbleEffect: React.FC = () => {
	useEffect(() => {
		const interval = setInterval(() => {
			createBubble();
		}, 50);

		return () => clearInterval(interval);
	}, []);

	const createBubble = () => {
		const section = document.querySelector('section');
		const createElement = document.createElement('span');
		let size = Math.random() * 60;
		createElement.style.width = `${20 + size}px`;
		createElement.style.height = `${20 + size}px`;
		createElement.style.left = `${Math.random() * window.innerWidth}px`;
		section?.appendChild(createElement);

		setTimeout(() => {
			createElement.remove();
		}, 4000);
	};

	return (
		<section>
			<h2>Bubbles</h2>
		</section>
	);
};

export default BubbleEffect;

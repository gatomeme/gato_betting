import React from 'react';

const Button = ({ className, text, onClick, type }) => {
	return (
		<button
			className={`bg-black text-white shadow text-center min-w-36 py-2 px-4 transition-all duration-300 ease-in-out ${className}`}
			onClick={onClick}
			type={type}>
			{text}
		</button>
	);
};

export default Button;

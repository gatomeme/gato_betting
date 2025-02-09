import React from 'react';

const SectionHeading = ({ children }) => {
	return (
		<h2 className='uppercase font-semibold text-2xl md:text-3xl lg:text-5xl tracking-widest text-center mb-5 lg:mb-8 text-white'>
			{children}
		</h2>
	);
};

export default SectionHeading;

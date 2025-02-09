import React from 'react';

const Section = ({ className, children, style }) => {
	return (
		<section
			className={`py-6 lg:px-0 sm:pt-7 sm:pb-7 lg:pt-10 lg:pb-10 ${className}`}
			style={style}>
			{children}
		</section>
	);
};

export default Section;

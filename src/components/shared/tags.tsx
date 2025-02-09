import React from 'react';

const tagList = [
	{ coinName: 'BTC', coinValue: '63,726.70', percent: '0.01' },
	{ coinName: 'ETH', coinValue: '3,471.41', percent: '0.13' },
	{ coinName: 'BNB', coinValue: '415.69', percent: '0.01' },
	{ coinName: 'SOL', coinValue: '129.21', percent: '0.13' },
];
const Tag = () => {
	return (
		<section className='w-full bg-[#fce580] text-center py-3  '>
			<ul className='flex flex-wrap items-center justify-start gap-10 px-10 list-disc lg:gap-16 lg:overflow-hidden'>
				{tagList.map((tagItem, index) => (
					<li
						key={index}
						className={index % 2 === 0 ? 'text-green-500' : 'text-red-500'}>
						<p className='text-sm font-semibold'>
							{tagItem.coinName} {tagItem.coinValue}
							<span className='ml-1 font-normal'>({tagItem.percent})</span>
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Tag;

import { FC } from 'react';
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { lazy, Suspense } from 'react';
// import ParkStaysOpen from 'components/play';
const LazyRoadmapRender = lazy(
	() => import('components/play')
);
export const PlayView: FC = ({}) => {
	return (
		<div className='p-4 mx-auto md:hero'>
			<div className='flex flex-col md:hero-content'>
				{/* CONTENT GOES HERE */}
				<main className='flex flex-col items-center justify-between'>
					{/* <ParkStaysOpen /> */}

					<Suspense
					fallback={
						// <div
						// 	className='flex items-center justify-center w-full h-screen bg-center bg-cover text-textColor'
						// 	style={{ backgroundImage: `url(${gifImage})` }}>
						// </div>
						<span className='absolute top-1/2 left-1/2 text-black loading loading-bars loading-lg'></span>
					}>
					<LazyRoadmapRender />
					</Suspense>
				</main>
				{/* <div className='text-center'>
					<SignMessage />
					<SendTransaction />
				</div> */}
			</div>
		</div>
	);
};

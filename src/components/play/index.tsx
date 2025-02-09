import { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Bubbles from 'components/bubbles/bubbles';

const Game = () => {
	const [result, setResult] = useState('');

	const coinToss = () => {
		setResult(''); // Clear previous result first
		setTimeout(() => {
			if (Math.random() < 0.5) {
				setResult('heads');
				console.log('heads');
			} else {
				setResult('tails');
				console.log('tails');
			}
		}, 0);
	};

	return (
		<div className='w-full '>
			{/* <Bubbles /> */}
			<div className='flex justify-center w-full my-10'>
				<div>
					<div
						id='coin'
						className={result + ' flex justify-center items-center'}
						key={+new Date()}>
						<div className='flex items-center justify-center side-a'>
							<h2>TAIL</h2>
						</div>
						<div className='flex items-center justify-center side-b'>
							<h2>HEAD</h2>
						</div>
					</div>
					<div className='flex items-center justify-center mt-4'>
						<button id='btn' onClick={() => coinToss()}>
							Coin Toss
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;

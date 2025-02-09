// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({}) => {
	const wallet = useWallet();
	const { connection } = useConnection();

	const balance = useUserSOLBalanceStore((s) => s.balance);
	const { getUserSOLBalance } = useUserSOLBalanceStore();

	useEffect(() => {
		if (wallet.publicKey) {
			console.log(wallet.publicKey.toBase58());
			getUserSOLBalance(wallet.publicKey, connection);
		}
	}, [wallet.publicKey, connection, getUserSOLBalance]);

	return (
		<div className='p-4 mx-auto md:hero'>
			<div className='w-[100%]'>{/* <FlexibleChart /> */}</div>
			{/* <div className='flex flex-col md:hero-content'>
				<h1 className='text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]'>
					PELF Lite{' '}
					<span className='text-sm font-normal align-top text-slate-700'>
						v{pkg.version}
					</span>
				</h1>

				<div className='max-w-md p-6 mx-auto my-2 mockup-code bg-primary'>
					<pre data-prefix='>'>
						<code className='truncate'>Start building on PELF </code>
					</pre>
				</div>
				<div className='text-center'>
					<RequestAirdrop />
					{wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>}
					{wallet && <p>PELF Balance: {(balance || 0).toLocaleString()}</p>}
				</div>
			</div> */}
		</div>
	);
};

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import React from 'react';

export const AppBar: FC = (props) => {
	const { autoConnect, setAutoConnect } = useAutoConnect();

	React.useEffect(() => {
		setAutoConnect(true);
	}, []);

	return (
		<div
			className='
		 text-base-content  fixed top-0 z-30  h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] '>
			{/* NavBar / Header */}
			<div className='flex flex-row text-black navbar md:mb-2'>
				<div className='md:ml-40 navbar-start'>
					<label
						htmlFor='my-drawer'
						className='md:hidden btn btn-square btn-ghost'>
						<svg
							className='inline-block w-6 h-6 stroke-current'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'></path>
						</svg>
					</label>

					<div className='hidden sm:inline w-22 h-22 md:p-2'>
						{/* <Image
							width={32}
							height={32}
							alt='King'
							src='../assets/king.png'
						/> */}
						<img src='../assets/king.png' alt='King' width={32}
							height={32} />
					</div>
				</div>

				{/* Nav Links */}
				<div className='hidden mr-10 md:inline md:navbar-center'>
					<div className='items-center hidden gap-10 md:flex'>
						{/* <a href='https://t.me/pelfortportal' target='_blank'>
							<Image width={32} height={32} alt='tg' src='/telegram.png' />
						</a>
						<a href='https://twitter.com/PelfortSolana' target='_blank'>
							<Image width={32} height={32} alt='tg' src='/twitter.png' />
						</a>
						<a
							href='https://www.coingecko.com/en/coins/pelfort'
							target='_blank'>
							<Image width={32} height={32} alt='tg' src='/coingecko.png' />
						</a> */}
					</div>
				</div>

				{/* Wallet & Settings */}
				<div className='navbar-end'>
					<div className='items-stretch hidden custom-md:flex'>
						{/* <Link href='/play'>
							<a className='btn btn-ghost btn-sm rounded-btn'>Play</a>
						</Link> */}
						{/* <Link href='/swap'>
							<a className='btn btn-ghost btn-sm rounded-btn'>Swap</a>
						</Link>
						<Link href='/stats'>
							<a className='btn btn-ghost btn-sm rounded-btn'>Stats</a>
						</Link> */}
					</div>
					{/* <div className='dropdown'>
						<div tabIndex={0} className='text-right btn btn-square btn-ghost'>
							<svg
								className='w-6 h-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className='p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52'>
							<li>
								<div className='form-control'>
									<label className='cursor-pointer label'>
										<a>Auto-connect</a>
										<input
											type='checkbox'
											checked={autoConnect}
											onChange={(e) => setAutoConnect(e.target.checked)}
											className='toggle'
										/>
									</label>
								</div>
							</li>
						</ul>
					</div> */}
					<WalletMultiButton className='md:mr-40 btn btn-ghost' />
				</div>
			</div>
			{props.children}
		</div>
	);
};

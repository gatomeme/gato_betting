import { FC } from 'react';
import Link from 'next/link';
export const ContentContainer: FC = (props) => {
	return (
		<div className=' w-full'>
			{/* <div className="w-full h-screen drawer drawer-mobile"> */}
			<input id='my-drawer' type='checkbox' className='grow drawer-toggle' />
			<div className='items-center drawer-content'>{props.children}</div>

			{/* SideBar / Drawer */}
			<div className='drawer-side'>
				<label htmlFor='my-drawer' className='drawer-overlay'></label>
				<ul className='p-4 overflow-y-auto menu w-80'>
					<li>
						<h1>Menu</h1>
					</li>
					<li>
						<Link href='/play'>
							<a>Play</a>
						</Link>
					</li>
					{/* <li>
						<Link href='/swap'>
							<a>Swap</a>
						</Link>
					</li>
					<li>
						<Link href='/stats'>
							<a>Stats</a>
						</Link>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

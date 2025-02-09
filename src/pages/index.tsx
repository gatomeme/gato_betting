import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeView } from '../views';
import { PlayView } from '../views';
import Login from 'components/login';

const Home: NextPage = (props) => {
	return (
		<div className='flex w-full md:justify-center play-div'>
			{/* <PlayView /> */}
			<Login />
		</div>
	);
};

export default Home;

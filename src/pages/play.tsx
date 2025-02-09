import type { NextPage } from 'next';
import Head from 'next/head';
import { PlayView } from '../views';
import Tag from 'components/shared/tags';

const Play: NextPage = (props) => {
	return (
		<div>
			<Tag />
			<PlayView />
		</div>
	);
};

export default Play;

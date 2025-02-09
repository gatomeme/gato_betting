import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='/king.ico' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Wallpoet&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Wallpoet&display=swap'
						rel='stylesheet'
					/>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<title>Solana Coin GATO</title>
					<meta
						name='description'
						content='Welcome to Solana Coin Toss, the premier decentralized coin flip game on the Solana blockchain! Test your luck and win big with our fair and transparent game powered by blockchain technology. With fast transactions, low fees, and provably fair outcomes, Solana Coin Flip offers an exciting and trustworthy gaming experience. Join now and flip your way to fortune!'
					/>
					<meta name='og:image' content='../assets/images/preview1.png' />
					<meta name='title' content='Should be Solana Coin Toss' />
					<meta name='og:image' content='../assets/images/preview1.png' />
				</Head>
				<body className=' font-Monrope'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

import * as web3 from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import bs58 from 'bs58';
import { Keypair } from '@solana/web3.js';

const { PublicKey } = web3;
const { TOKEN_PROGRAM_ID } = require('@solana/spl-token');
const WALLET_MIN_SOL = 0.001;

let _connection: web3.Connection;

// Connect to the Solana cluster
const initCrypto = (connection: web3.Connection): void => {
	_connection = connection;
};

// Get SOL balance on Wallet
const getBalance = async (
	walletPublicKey: string
): Promise<number | undefined> => {
	if (!_connection) return;

	const balance = await _connection.getBalance(new PublicKey(walletPublicKey));
	return balance;
};

async function getSPLTokenBalance(
	walletAddress: string,
	mintAddress: string
): Promise<number> {
	// Convert string addresses to PublicKey objects
	const walletPublicKey = new PublicKey(walletAddress);
	const mintPublicKey = new PublicKey(mintAddress);

	// Get the token accounts by the wallet address
	const tokenAccounts = await _connection.getTokenAccountsByOwner(
		walletPublicKey,
		{ mint: mintPublicKey }
	);

	// Assuming the wallet has at least one token account for this mint
	if (tokenAccounts.value.length > 0) {
		const accountInfo = await _connection.getParsedAccountInfo(
			tokenAccounts.value[0].pubkey
		);
		// return accountInfo.value.data.parsed.info.tokenAmount.uiAmount;
	}

	return 0; // If no token accounts found
}

// async function getSPLTokenDecimal(mintAddress: string): Promise<number> {
// 	const mintPublicKey = new PublicKey(mintAddress);

// 	const info = await _connection.getParsedAccountInfo(mintPublicKey);

// 	// Extract the decimals from the token metadata
// 	// const decimals = info.value.data.parsed.info.decimals;

// 	// return decimals;
// }

const transferToken = async (
	fromWallet: web3.Keypair,
	tokenMintAddress: string,
	toWallet: string,
	amount: number
): Promise<string> => {
	// Recipient public key
	const toWalletPublicKey = new PublicKey(toWallet);

	// Get or create the associated token accounts
	const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
		_connection,
		fromWallet,
		new PublicKey(tokenMintAddress),
		fromWallet.publicKey
	);

	const toTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
		_connection,
		fromWallet,
		new PublicKey(tokenMintAddress),
		toWalletPublicKey
	);

	// Create and send the transaction
	let transaction = new web3.Transaction().add(
		splToken.createTransferInstruction(
			fromTokenAccount.address,
			toTokenAccount.address,
			fromWallet.publicKey,
			amount,
			[],
			TOKEN_PROGRAM_ID
		)
	);

	let signature = await web3.sendAndConfirmTransaction(
		_connection,
		transaction,
		[fromWallet]
	);

	console.log('transferToken successful, transaction signature:', signature);

	return signature;
};

const createWalletFromPrivateKey = async (
	privateKeyString: string
): Promise<Keypair | null> => {
	try {
		const privateKeyByteArray = bs58.decode(privateKeyString);
		const keypair = Keypair.fromSecretKey(privateKeyByteArray);
		return keypair;
	} catch (error) {
		return null;
	}
};

const transferSOL = async (
	connection: web3.Connection,
	fromWallet_publicKey: web3.PublicKey,
	amount: number,
	is_ok: boolean
): Promise<string> => {
	const fromWallet = new PublicKey(fromWallet_publicKey);
	const recentBlockhash = await connection.getLatestBlockhash();
	const privateKeyByteArray: Buffer = bs58.decode(
		process.env.NEXT_PUBLIC_ADDRESS
	);
	//@ts-ignore
	const keypair= Keypair.fromSecretKey(privateKeyByteArray);
	let transaction, signature;
	if (is_ok) {
		transaction = new web3.Transaction({
			recentBlockhash: recentBlockhash.blockhash,
			feePayer: fromWallet,
		}).add(
			web3.SystemProgram.transfer({
				fromPubkey: fromWallet,
				toPubkey: keypair.publicKey,
				lamports: amount * 10 ** 9,
			})
		);
		signature = await web3.sendAndConfirmTransaction(
			connection,
			transaction,
			[]
		);
	} else {
		console.log('send---1');
		transaction = new web3.Transaction({
			recentBlockhash: recentBlockhash.blockhash,
			feePayer: fromWallet,
		}).add(
			web3.SystemProgram.transfer({
				fromPubkey: keypair.publicKey,
				toPubkey: fromWallet,
				lamports: amount * 10 ** 9,
			})
		);
		console.log('send---2');
		signature = await web3.sendAndConfirmTransaction(connection, transaction, [
			keypair,
		]);
		console.log('send---3');
	}

	const fees = await transaction.getEstimatedFee(connection);

	console.log(`Estimated SOL transfer cost: ${fees} lamports`);

	console.log('transferSOL successful, transaction signature:', signature);

	return signature;
};

async function getTransactionFee(): Promise<number> {
	// Get the recent blockhash
	const { blockhash } = await _connection.getRecentBlockhash();

	// Get the fee calculator for the current blockhash
	const feeCalculator = await _connection.getFeeCalculatorForBlockhash(
		blockhash
	);

	// Calculate the fee based on the current cost per signature
	const fee = feeCalculator.value.lamportsPerSignature;

	return fee;
}

export {
	initCrypto,
	getBalance,
	transferSOL,
	transferToken,
	getSPLTokenBalance,
	// getSPLTokenDecimal,
	WALLET_MIN_SOL,
	getTransactionFee,
};

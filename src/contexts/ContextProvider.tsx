import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
	ConnectionProvider,
	WalletProvider,
} from '@solana/wallet-adapter-react';
import {
	PhantomWalletAdapter,
	SolflareWalletAdapter,
	TorusWalletAdapter,
	// LedgerWalletAdapter,
	// SlopeWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider';
import { notify } from '../utils/notifications';
import dynamic from 'next/dynamic';
import { SocketProvider } from './SocketProvider';

const ReactUIWalletModalProviderDynamic = dynamic(
	async () =>
		(await import('@solana/wallet-adapter-react-ui')).WalletModalProvider,
	{ ssr: false }
);

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { autoConnect } = useAutoConnect();
	// const network = WalletAdapterNetwork.Devnet;
	//set the main net
	// const network = WalletAdapterNetwork.Mainnet;
	const network = WalletAdapterNetwork.Mainnet;
	// const network = WalletAdapterNetwork.Devnet;
	// const endpoint = useMemo(() => clusterApiUrl(network), [network]);
	const endpoint = 'https://mainnet.helius-rpc.com/?api-key=44b42698-9981-437c-896e-ca47371afe89';
	// const endpoint = 'https://api.devnet.solana.com';
	// console.log('endPoint---------', endpoint);
	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new SolflareWalletAdapter(),
			new TorusWalletAdapter(),
			// new LedgerWalletAdapter(),
			// new SlopeWalletAdapter(),
		],
		[network]
	);

	const onError = useCallback((error: WalletError) => {
		notify({
			type: 'error',
			message: error.message ? `${error.name}: ${error.message}` : error.name,
		});
		console.error(error);
	}, []);

	return (
		// TODO: updates needed for updating and referencing endpoint: wallet adapter rework
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider
				wallets={wallets}
				onError={onError}
				autoConnect={autoConnect}>
				<ReactUIWalletModalProviderDynamic>
					{children}
				</ReactUIWalletModalProviderDynamic>
			</WalletProvider>
		</ConnectionProvider>
	);
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<AutoConnectProvider>
			<WalletContextProvider>
				<SocketProvider>{children}</SocketProvider>
			</WalletContextProvider>
		</AutoConnectProvider>
	);
};

/** @format */

import create, { State } from 'zustand';
import { Buffer } from 'buffer';
// window.Buffer = Buffer;
import { Connection, PublicKey } from '@solana/web3.js';

interface UserTOSSBalanceStore extends State {
	balanceOfTOSS: number;
	getUserTOSSBalance: (publicKey: PublicKey, connection: Connection) => void;
}

const tokenMintAddress = new PublicKey(
	process.env.NEXT_PUBLIC_TOKEN_MINT_ADDRESS
);

const useUserTOSSBalanceStore = create<UserTOSSBalanceStore>((set) => ({
	balanceOfTOSS: 0,
	getUserTOSSBalance: async (publicKey, connection) => {
		let balanceOfTOSS = 0;
		try {
			const parsedTokenAccounts =
				await connection.getParsedTokenAccountsByOwner(publicKey, {
					mint: tokenMintAddress
				});
			// Check if there are any accounts associated with this wallet and token
			if (parsedTokenAccounts.value.length > 0) {
				balanceOfTOSS =
					parsedTokenAccounts.value[0].account.data.parsed.info.tokenAmount
						.uiAmountString;
				console.log("balanceOfToss:", balanceOfTOSS);
			}
		} catch (error) {
			// notification('Failed to fetch token balance.', 'warning');
		}
		set((state) => ({ balanceOfTOSS: balanceOfTOSS }));
	}
}));

export default useUserTOSSBalanceStore;

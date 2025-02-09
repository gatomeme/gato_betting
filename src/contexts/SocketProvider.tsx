import React, {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';
import { io, Socket } from 'socket.io-client';

interface ISocketContextProps {
	socket: Socket;
}
export interface NodeChildrenProps {
	children: ReactNode;
}

export const SocketContext = createContext<ISocketContextProps>({
	socket: null
});

export const SocketProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [socket, setSocket] = useState<Socket | undefined>(undefined);
	useEffect(() => {
		connect();
		return () => disconnect();
	}, []);

	const connect = async () => {
		console.log('server--url', process.env.NEXT_PUBLIC_API_URL);
		const sk = io(process.env.NEXT_PUBLIC_API_URL);
		// sk.emit('message', 'okok');
		// sk.on('message', function (msg) {
		// 	console.log('mesaage....');
		// });
		// console.log('sk---', sk);

		sk.connect();
		// sk.auth;
		setSocket(sk);
		console.log('socket--connect');
		// console.log('sk---', sk);
	};

	const disconnect = () => {
		console.log('socket------disconnect');
		if (socket) {
			// console.log('socket disconnected');
			socket.close();
			setSocket(undefined); // Clear the socket state when disconnecting
		}
	};

	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
};

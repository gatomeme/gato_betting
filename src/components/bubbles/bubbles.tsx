import React, { useEffect, useRef } from 'react';
import drawBubbles from './drawBubbles';
import useViewportSize from 'hooks/useViewportSize';

const Bubbles: React.FC = () => {
	const { width, height } = useViewportSize();
	const canvasRef = useRef<HTMLCanvasElement>(null);

	// useEffect(() => {
	// 	if (canvasRef.current && width && height) {
	// 		drawBubbles(canvasRef, width, height);
	// 	}
	// }, []);

	useEffect(() => {
		if (canvasRef.current && width && height) {
			drawBubbles(canvasRef, width, height);
		}
	}, [height, width, canvasRef]);

	return (
		<canvas
			ref={canvasRef}
			width={width}
			height={height}
			style={{ position: 'absolute', zIndex: 10000000000 }}
		/>
	);
};

export default Bubbles;

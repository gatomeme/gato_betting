import bubbleImg from './bub.png';

interface Bubble {
	x: number;
	y: number;
	swaySpeed: number;
	swayAmount: number;
	bubbleSpeed: number;
	size: number;
}

const drawBubbles = (
	canvasRef: React.RefObject<HTMLCanvasElement>,
	width: number,
	height: number
): void => {
	let globalCounter = 0;
	let ctx: CanvasRenderingContext2D;
	let bubbles: Bubble[] = [];

	const addBubbleToCanvas = (x: number, y: number, size: number) => {
		console.log('--------------bubble');
		const BubbleImgObj = new Image();
		BubbleImgObj.src = bubbleImg.src;
		ctx.drawImage(BubbleImgObj, x, y, size, size);
	};

	const createBubble = () => {
		const rnd = (low: number, high: number): number =>
			Math.random() * (high - low) + low;
		const bubbleSpeed = rnd(2, 4) * -1;
		const size = rnd(5, 200);
		bubbles.push({
			x: height,
			y: rnd(0, width * 2) - width,
			swaySpeed: rnd(50, 100),
			swayAmount: rnd(50, 100),
			bubbleSpeed,
			size,
		});
	};

	const update = () => {
		if (!ctx) return;
		ctx.clearRect(0, 0, width, height);
		ctx.save();
		globalCounter++;

		const globalSway = Math.sin(globalCounter / 1000) * (width / 1.5);
		bubbles.forEach((b, index) => {
			const xSwayModify = b.swayAmount * Math.sin(b.x / b.swaySpeed);
			addBubbleToCanvas(
				b.y + xSwayModify + globalSway,
				b.x,
				(b.size + b.x) / 8
			);
			bubbles[index].x += b.bubbleSpeed;
			if (b.x < -20) {
				bubbles.splice(index, 1);
				createBubble();
			}
		});

		requestAnimationFrame(update);
	};

	if (canvasRef.current) {
		ctx = canvasRef.current.getContext('2d')!;
		ctx.imageSmoothingEnabled = true;
		ctx.globalAlpha = 0.5;
		for (let x = 0; x < 80; x++) {
			setTimeout(() => {
				createBubble();
			}, x * 150);
		}
		update();
	}
};

export default drawBubbles;

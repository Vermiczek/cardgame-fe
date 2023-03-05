import React, { useRef, useEffect } from 'react';

type BackgroundProps = {
	image: string;
};

const MovingBackground = ({ image }: BackgroundProps) => {
	const backgroundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (!backgroundRef.current) {
				return;
			}

			const { clientX, clientY } = event;
			const { offsetWidth, offsetHeight } = backgroundRef.current;
			const x = clientX / offsetWidth;
			const y = clientY / offsetHeight;
			backgroundRef.current.style.transform = `scale(1.2) translate(${(-x * 20) - 20}px, ${(-y * 20)}px)`;
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={backgroundRef}
			className='h-screen w-screen bg-center bg-cover fixed'
			style={{ backgroundImage: `url(${image})` }}
		/>
	);
};

export default MovingBackground;

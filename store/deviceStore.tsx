import create from 'zustand';
import {useEffect} from 'react';

type ScreenSize = {
	width: number;
	height: number;
};

type MousePosition = {
	x: number;
	y: number;
};

type ScreenAndMouseStore = {
	screenSize: ScreenSize;
	mousePosition: MousePosition;
	setScreenSize: (width: number, height: number) => void;
	setMousePosition: (x: number, y: number) => void;
};

const useScreenAndMouseStore = create<ScreenAndMouseStore>(set => ({
	screenSize: {width: 0, height: 0},
	mousePosition: {x: 0, y: 0},
	setScreenSize(width: number, height: number) {
		set(state => ({
			screenSize: {width, height},
		}));
	},
	setMousePosition(x: number, y: number) {
		set(state => ({
			mousePosition: {x, y},
		}));
	},
}));

const useEventListeners = () => {
	const {setScreenSize, setMousePosition} = useScreenAndMouseStore();

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth, window.innerHeight);
		};

		const handleMouseMove = (event: MouseEvent) => {
			console.log('mouse move', event.clientX, event.clientY);
			setMousePosition(event.clientX, event.clientY);
		};

		window.addEventListener('resize', handleResize);
		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [setScreenSize, setMousePosition]);
};

export {useScreenAndMouseStore, useEventListeners};

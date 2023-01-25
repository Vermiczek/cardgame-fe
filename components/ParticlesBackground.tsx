import {useCallback} from 'react';
import Particles from 'react-tsparticles';
import type {Container, Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';
import React from 'react';

const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		// You can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		//
	}, []);

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 0,
						},
						repulse: {
							distance: 0,
						},
					},
				},
				particles: {
					color: {
						value: '#ffffff',
					},
					links: {
						color: '#ffffff',
						distance: 200,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: true,
						speed: {min: 0.1, max: 0.5},
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 40,
					},
					opacity: {
						value: {min: 0.1, max: 0.7},
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: {min: 1, max: 20},
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticleBackground;

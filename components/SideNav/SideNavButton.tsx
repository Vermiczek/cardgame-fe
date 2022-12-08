import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
	icon: IconDefinition;
	label: string;
	onClick: () => void;
	hovered?: boolean;
};

const SideNavButton = ({icon, label, onClick}: ButtonProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<button
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}
			className={`m-1 inline-flex transition-all duration-300 px-3 items-center h-12 border border-transparent text-base
   leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none
    focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 ${
		hovered ? 'w-56' : 'w-12'
		} flex justify-content-center`}
			onClick={onClick}
		>
			{icon && <FontAwesomeIcon size='lg' icon={icon} />}
			{hovered
				? <>
					<span className='ml-2 transition-all duration-300'>{label}</span>
				</> : null}
		</button>);
};

export default SideNavButton;

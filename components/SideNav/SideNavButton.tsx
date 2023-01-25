import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type ButtonProps = {
	icon: IconDefinition;
	label: string;
	onClick: () => void;
	disabled?: boolean;
};

const SideNavButton = ({icon, label, onClick, disabled}: ButtonProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<button
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}
			className={`m-1 border-l-8 inline-flex transition-all w-56 duration-300 px-2 items-center h-12 border border-transparent text-base
   leading-6 font-medium rounded-md text-white focus:outline-none bg-gradient-to-l from-red-700 to-rose-900
     focus:shadow-outline-indigo active:bg-indigo-900 ${
		hovered ? 'w-56' : 'w-12'
		} ${disabled ? 'opacity-40' : 'opacity-100'} flex justify-content-center`}
			onClick={onClick}
		>
			{icon && <FontAwesomeIcon size='lg' icon={icon} />}
			<span className={`ml-4 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>{label}</span>

		</button>);
};

export default SideNavButton;

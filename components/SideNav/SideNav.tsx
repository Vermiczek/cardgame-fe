import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser} from '../../services/user/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo} from '../../services/user/userTypes';
import SideNavButton from './SideNavButton';
import {faCog, faDoorOpen, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
	const resetUser = useUserStore(state => state.resetUser);
	const loggedUser = useUserStore(state => state.username);
	const logoutUser = async () => {
		logoutUser()
			.then(res => {
				console.log(res);
			})
			.catch(e => {
				console.error(e.response);
			});
		// Reset user
		resetUser();
	};

	const [expanded, setExpanded] = useState(false);

	return (
		<nav
			className={`w-16 px-1 pt-1 h-screen bg-gray-800 fixed top-0 left-0 transition-all duration-500 ${
				expanded ? 'bg-opacity-50' : 'bg-opacity-100'
			}`}
			onMouseEnter={() => {
				setExpanded(true);
			}}
			onMouseLeave={() => {
				setExpanded(false);
			}}
		>
			<div className='h-full flex flex-col justify-between'>
				{/* Top buttons */}
				<div>
					<SideNavButton
						icon={faSearch}
						label={'Dashboard'}
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
					<SideNavButton
						icon={faSearch}
						label={'Profile'}
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
				</div>
				{/* Bottom buttons */}
				<div>
					<SideNavButton
						icon={faUserCircle}
						label={'Settings'}
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
					<SideNavButton
						icon={faCog}
						label={'Settings'}
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
					<SideNavButton
						icon={faDoorOpen}
						label={'Logout'}
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
					/>
				</div>
			</div>
		</nav>
	);
};

export default SideNav;

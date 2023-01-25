import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser} from '../../services/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo} from '../../services/user';
import SideNavButton from './SideNavButton';
import {faCog, faDoorOpen, faUserCircle, faHome} from '@fortawesome/free-solid-svg-icons';
import {faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import {toast} from 'react-toastify';
import {logoutUser} from '../../services/user';
import ErrorModal from '../Modals/ErrorModal';
import WarningModal from '../Modals/WarningModal';

const SideNav = () => {
	const [showModal, setShowModal] = useState(true);
	const resetUser = useUserStore(state => state.resetUser);
	const user = useUserStore(state => state.username);

	// Logout user
	const logout = () => {
		logoutUser()
			.then(res => {
				resetUser();
			})
			.catch(e => {
				console.error(e.response);
			});
	};

	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<nav
				className={`w-16 px-1 pt-1 h-screen fixed top-0 left-0 transition-all duration-1000 bg-slate-900 border-r-2 border-slate-700/50
				${user ? 'opacity-90' : 'opacity-0'}`}
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
							icon={faHome}
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
							onClick={() => {
								setShowModal(true);
							}}
						/>
					</div>
				</div>
			</nav>
			{/* Modal for logout */}
			<WarningModal
				isOpen={showModal}
				onClose={() => {
					setShowModal(false);
				} }
				onConfirm={() => {
					setShowModal(false);
					logout();
				} }
				errorTitle={'Log out'}
				errorText={'Are you sure you want to log out? Press "yes" to confirm.'}/>
		</>
	);
};

export default SideNav;

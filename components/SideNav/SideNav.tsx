import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser} from '../../services/user/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo} from '../../services/user/userTypes';

const SideNav = () => {
	const {register, handleSubmit} = useForm<LoginFormData>();
	const setUser = useUserStore(state => state.setUser);
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
			className={`w-64 h-screen bg-gray-800 fixed top-0 left-0 transform ${
				expanded ? 'translateX(0)' : 'translateX(-100%)'
			}`}
			onMouseEnter={() => {
				setExpanded(true);
			}}
			onMouseLeave={() => {
				setExpanded(false);
			}}
		>
			<div className='h-full flex flex-col justify-between'>
				<div>
					<a
						href='#'
						className='block px-4 py-2 mt-2 text-white font-bold hover:bg-gray-700'
					>
              Home
					</a>
					<a
						href='#'
						className='block px-4 py-2 mt-2 text-white font-bold hover:bg-gray-700'
					>
              About
					</a>
					<a
						href='#'
						className='block px-4 py-2 mt-2 text-white font-bold hover:bg-gray-700'
					>
              Contact
					</a>
				</div>
				<div
					className={`w-full bg-gray-900 ${
						expanded ? 'flex' : 'hidden'
					} justify-between items-center py-4`}
				>
					<a
						href='#'
						className='block px-4 py-2 mt-2 text-white font-bold hover:bg-gray-700'
					>
              Settings
					</a>
					<a
						href='#'
						className='block px-4 py-2 mt-2 text-white font-bold hover:bg-gray-700'
					>
              Log out
					</a>
				</div>
			</div>
		</nav>
	);
};

export default SideNav;

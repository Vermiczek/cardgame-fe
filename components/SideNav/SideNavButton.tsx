import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser} from '../../services/user/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo} from '../../services/user/userTypes';

const SideNavButton = () => {
	const {register, handleSubmit} = useForm<LoginFormData>();
	const setUser = useUserStore(state => state.setUser);
	const loggedUser = useUserStore(state => state.username);

	return (

		<div className='flex bg-red-200 items-center flex-col fixed flex-1'>
			<div>N</div>
			<div>I</div>
			<div>G</div>
			<div>G</div>
		</div>
	);
};

export default SideNavButton;

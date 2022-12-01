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

const LoginForm = () => {
	const {register, handleSubmit, formState} = useForm<LoginFormData>();
	const setUser = useUserStore(state => state.setUser);
	const loggedUser = useUserStore(state => state.username);
	const onSubmit = handleSubmit(async data => {
		await loginUser(data.password, data.username)
			.then(async () => getMe()).then(res => {
				setUser(res.data.username, res.data.email);
			}).catch(e => {
				console.error(e.response);
			});
	});

	useEffect(() => {
		console.log(loggedUser);
		console.log(formState);
	}, [loggedUser, formState]);

	return (
		<form onSubmit={onSubmit} className=''>
			<div className='flex bg-red-200 items-center flex-col flex-1'>
				<input
					type='text'
					{...register('username')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<input
					type='text'
					{...register('password')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<input type={'submit'}
					className={'rounded-lg hover:scale-110 text-white bg-blue-500 m-2 pb-1 pt-1 pl-3 pr-3'}
				/>
			</div>
		</form>);
};

export default LoginForm;

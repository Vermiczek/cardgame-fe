import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect, useRef} from 'react';
import axios, {AxiosError} from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser} from '../../services/user/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo} from '../../services/user/userTypes';

const LoginForm = () => {
	const {register, handleSubmit} = useForm<LoginFormData>();
	const setUser = useUserStore(state => state.setUser);
	const loggedUser = useUserStore(state => state.username);
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit = async (data: LoginFormData) => {
		try {
			await loginUser(data.password, data.username);
			const user = await getMe();
			setUser(user.data.username, user.data.email);
		} catch (e: unknown) {
			console.error(e);
		}
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit(onSubmit)} className=''>
			<div className='flex w-50 bg-red-200 items-center flex-col flex-1'>
				<label className='block font-bold mb-1 text-gray-700'>
            Email
				</label>
				<input
					type='text'
					{...register('username')}
					className='bg-yellow-200 m-3 rounded-md w-40'
				/>
				<label className='block font-bold mb-1 text-gray-700'>
            Password
				</label>
				<input
					type='text'
					{...register('password')}
					className='bg-yellow-200 m-3 rounded-md w-40'
				/>
				<input
					type='submit'
					value='Log in'
					className='rounded-lg hover:scale-110 text-white bg-blue-500 m-2 pb-1 pt-1 pl-3 pr-3'
				/>
			</div>
		</form>
	);
};

export default LoginForm;

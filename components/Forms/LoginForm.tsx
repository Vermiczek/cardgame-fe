import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect, useRef, useState} from 'react';
import axios, {AxiosError} from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser} from '../../services/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo} from '../../services/user';
import {toast} from 'react-toastify';

const LoginForm = () => {
	const {register, handleSubmit} = useForm<LoginFormData>();
	const setUser = useUserStore(state => state.setUser);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const loggedUser = useUserStore(state => state.username);
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit = async (data: LoginFormData) => {
		toast.success(':DDD', {type: 'success'});
		// Validate the form
		setErrors({});
		if (!data.username) {
			setErrors(errors => ({...errors, username: 'Username is required'}));
		} else if (data.username.length < 6 || data.username.length > 20) {
			setErrors(errors => ({
				...errors,
				username: 'Username must be between 6 and 20 characters',
			}));
		}

		// Validate the password, show an error if it's not valid
		if (!data.password) {
			setErrors(errors => ({...errors, password: 'Password is required'}));
		} else if (data.password.length < 6 || data.password.length > 100) {
			setErrors(errors => ({
				...errors,
				password: 'Password must be between 6 and 100 characters',
			}));
		}

		// If there are no validation errors, try to log in the user
		if (Object.keys(errors).length === 0) {
			try {
				await loginUser(data.password, data.username);
				const user = await getMe();
				setUser(user.data.username, user.data.email);
			} catch (e: unknown) {
				console.error(e);
			}
		}
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='w-128 flex items-center p-10'>
			<div className='flex items-center flex-col flex-1'>
				<label className='block font-bold mb-1 text-gray-700'>
              Email
				</label>
				<input
					type='text'
					{...register('username', {required: true})}
					className='bg-yellow-200 m-3 rounded-md w-40'
				/>
				{errors.username && (
					<div className='error-message'>{errors.username}</div>
				)}
				<label className='block font-bold mb-1 text-gray-700'>
              Password
				</label>
				<input
					type='text'
					{...register('password', {required: true})}
					className='bg-yellow-200 m-3 rounded-md w-40'
				/>
				{errors.password && (
					<div className='error-message'>{errors.password}</div>
				)}
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

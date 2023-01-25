
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser, registerUser} from '../../services/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo, RegisterFormData} from '../../services/user';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const RegisterForm = () => {
	const {register, handleSubmit, formState, getValues, watch} = useForm<RegisterFormData>();
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [passwordCorrect, setPasswordCorrect] = useState<boolean>(false);
	const setUser = useUserStore(state => state.setUser);
	const loggedUser = useUserStore(state => state.username);
	const formValues = watch('password');

	// Check if form password and confirm password are the same
	useEffect(() => {
		if (formValues === confirmPassword) {
			setPasswordCorrect(true);
		} else {
			setPasswordCorrect(false);
		}
	}, [confirmPassword, formValues]);

	// Check if the user is logged in
	const onSubmit = async (data: RegisterFormData) => {
		try {
			await registerUser(data.password, data.username, data.email);
		} catch (e: unknown) {
			console.error(e);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className=''>
			<div className='flex bg-red-200 items-center flex-col flex-1'>
				<label className='block font-bold mb-1 text-gray-700'>Username</label>
				<input
					type='text'
					{...register('username')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<label className='block font-bold mb-1 text-gray-700'>Email</label>
				<input
					type='text'
					{...register('email')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<label className='block font-bold mb-1 text-gray-700'>Password</label>
				<input
					type='text'
					{...register('password')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<label className='block font-bold mb-1 text-gray-700'>Repeat password</label>
				<input
					type='text'
					onChange={e => {
						setConfirmPassword(e.target.value);
					}}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<label className='block font-bold mb-1 text-red-700'>Passwords are not the same</label>
				<input
					type='submit'
					className={'rounded-lg hover:scale-110 text-white bg-blue-500 m-2 pb-1 pt-1 pl-3 pr-3'}
				/>
				<PasswordStrengthMeter password={formValues} />
			</div>
		</form>
	);
};

export default RegisterForm;

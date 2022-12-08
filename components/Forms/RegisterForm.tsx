
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {atom, useAtom} from 'jotai';
import {useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form';
import {getMe, loginUser, registerUser} from '../../services/user/user';
import type {UserStoreState} from '../../store/userStore';
import {useUserStore} from '../../store/userStore';
import type {LoginFormData, UserStoreInfo, RegisterFormData} from '../../services/user/userTypes';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const RegisterForm = () => {
	const {register, handleSubmit, formState, getValues} = useForm<RegisterFormData>();
	const setUser = useUserStore(state => state.setUser);
	const loggedUser = useUserStore(state => state.username);
	const formValues = getValues();

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
				<label className='block font-bold mb-1 text-gray-700'>Password</label>
				<input
					type='text'
					{...register('password')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<label className='block font-bold mb-1 text-gray-700'>Email</label>
				<input
					type='text'
					{...register('email')}
					className={'bg-yellow-200 m-3 rounded-md w-40'}
				/>
				<input
					type='submit'
					className={'rounded-lg hover:scale-110 text-white bg-blue-500 m-2 pb-1 pt-1 pl-3 pr-3'}
				/>
				<PasswordStrengthMeter password={formValues.password} />
			</div>
		</form>
	);
};

export default RegisterForm;

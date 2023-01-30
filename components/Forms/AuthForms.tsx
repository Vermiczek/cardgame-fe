import type {NextPage} from 'next';
import {atom, useAtom} from 'jotai';
import LoginForm from './LoginForm';
import create from 'zustand';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {useUserStore} from '../../store/userStore';
import {useRouter} from 'next/router';
import RegisterForm from './RegisterForm';

/**
 * @description Home page component
 *
 * @returns home page
 */
const AuthForms = () => {
	const [hasAnAccount, setHasAccount] = useState(true);
	const loggedUser = useUserStore(state => state.username);
	const router = useRouter();

	/**
	 * @description Redirect to the dashboard if the user is logged in
	 */
	useEffect(() => {
		if (loggedUser) {
			router.replace('/rooms').catch(err => {
				console.error(err);
			});
		}
	}, [loggedUser]);

	return (
		<div className='flex items-center justify-center'>
			<div className='bg-gray-800 rounded-md opacity-90 p-8 w-96'>
				{hasAnAccount
					? <LoginForm />
					: <RegisterForm />
				}
				<button
					className='block mx-auto py-2 px-4 bg-gray-200 rounded-md text-gray-700 font-semibold'
					onClick={() => {
						setHasAccount(!hasAnAccount);
					}}
				>
					{hasAnAccount ? 'Don\'t have an account?' : 'Already have an account?'}
				</button>
			</div>
		</div>
	);
};

export default AuthForms;

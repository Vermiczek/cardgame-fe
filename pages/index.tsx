import type {NextPage} from 'next';
import {atom, useAtom} from 'jotai';
import LoginForm from '../components/Forms/LoginForm';
import create from 'zustand';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {getMe, loginUser} from '../services/user/user';
import {useUserStore} from '../store/userStore';
import {useRouter} from 'next/router';
import RegisterForm from '../components/Forms/RegisterForm';

const Home = () => {
	const [hasAnAccount, setHasAccount] = useState(true);
	const loggedUser = useUserStore(state => state.username);
	const router = useRouter();

	useEffect(() => {
		if (loggedUser) {
			router.replace('/dashboard').catch(err => {
				console.error(err);
			});
		}
	}, [loggedUser]);

	return (
		<div>
			{hasAnAccount
				? <LoginForm />
				: <RegisterForm />
			}
			<button
				className='block mx-auto mt-4 py-2 px-4 bg-gray-200 rounded-md text-gray-700 font-semibold'
				onClick={() => {
					setHasAccount(!hasAnAccount);
				}}
			>
				{hasAnAccount ? 'Don\'t have an account?' : 'Already have an account?'}
			</button>
		</div>
	);
};

export default Home;

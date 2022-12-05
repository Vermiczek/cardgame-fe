import type {NextPage} from 'next';
import {atom, useAtom} from 'jotai';
import LoginForm from '../components/Forms/LoginForm';
import create from 'zustand';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {getMe, loginUser} from '../services/user/user';
import {useUserStore} from '../store/userStore';
import {useRouter} from 'next/router';

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
				: <div></div>
			}
		</div>);
};

export default Home;

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

	return (
		<div>
			{hasAnAccount
				? <LoginForm />
				: <div></div>
			}
		</div>);
};

export default Home;

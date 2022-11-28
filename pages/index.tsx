import type {NextPage} from 'next';
import {atom, useAtom} from 'jotai';
import LoginForm from '../components/LoginForm';
import create from 'zustand';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {getMe, loginUser} from '../services/user/user';

const Home = () => {
	const [hasAnAccount, setHasAccount] = useState(true);
	return (
		<div>
			<LoginForm />
		</div>);
};

export default Home;

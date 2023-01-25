import type {NextPage} from 'next';
import {atom, useAtom} from 'jotai';
import LoginForm from '../components/Forms/LoginForm';
import create from 'zustand';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {getMe, loginUser} from '../services/user';
import {useUserStore} from '../store/userStore';
import {useRouter} from 'next/router';
import RegisterForm from '../components/Forms/RegisterForm';
import AuthForms from '../components/Forms/AuthForms';

/**
 * @description Home page component
 *
 * @returns home page
 */
const Home = () => (
	<AuthForms />
);

export default Home;

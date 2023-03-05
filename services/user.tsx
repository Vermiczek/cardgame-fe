import axios from 'axios';
import { useQuery } from 'react-query';

export type LoginFormData = {
	username: string;
	password: string;
};

export type UserStoreInfo = {
	username: string;
	email: string;
};

export type RegisterFormData = {
	username: string;
	password: string;
	email: string;
};

export const loginUser = async (username: string, password: string) => {
	const loginPromise = await axios({
		method: 'post',
		url: 'http://localhost:8000/user/login',
		data: {
			username,
			password,
		},
		withCredentials: true,
	});
	return loginPromise;
};

export const getUser = async () => {
	const mePromise = await axios({
		method: 'get',
		url: 'http://localhost:8000/user/me',
		withCredentials: true,
	})
	return mePromise;
};

export const useAuthUserQuery = () => {
	type UserResponse = {
		data: { [key: string]: any };
	};

	const { data, isLoading, error } = useQuery<UserResponse>('auth-user', getUser);
	return { data: data?.data || null, isLoading, error };
};

export const logoutUser = async () => {
	const logoutPromise = await axios({
		method: 'get',
		url: 'http://localhost:8000/user/logout',
		withCredentials: true,
	});
	return logoutPromise;
};

export const registerUser = async (username: string, password: string, email: string) => {
	const registerPromise = await axios({
		method: 'post',
		url: 'http://localhost:8000/user/register',
		data: {
			username,
			password,
			email,
		},
		withCredentials: true,
	});
	return registerPromise;
};


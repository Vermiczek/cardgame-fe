import axios from 'axios';

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

export const getMe = async () => {
	const mePromise = await axios({
		method: 'get',
		url: 'http://localhost:8000/user/me',
		withCredentials: true,
	});
	return mePromise;
};

export const logoutUser = async (username: string, password: string) => {
	const logoutPromise = await axios({
		method: 'post',
		url: 'http://localhost:8000/user/logout',
		data: {
			username,
			password,
		},
		withCredentials: true,
	});
	return logoutPromise;
};

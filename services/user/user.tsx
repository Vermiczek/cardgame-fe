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
	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
	const mePromise = await axios({
		method: 'get',
		url: 'http://localhost:8000/user/me',
		withCredentials: true,
	});
	return mePromise;
};


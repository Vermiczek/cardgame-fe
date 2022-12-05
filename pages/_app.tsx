import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useRouter} from 'next/router';
import {useUserStore} from '../store/userStore';
import SideNav from '../components/SideNav/SideNav';
import {getMe} from '../services/user/user';

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
	const router = useRouter();
	const loggedUser = useUserStore(state => state.username);
	const setUser = useUserStore(state => state.setUser);
	const resetUser = useUserStore(state => state.resetUser);

	const getUser = () => {
		getMe().then(res => {
			console.log(res);
			setUser(res.data.username, res.data.email);
		}).catch(e => {
			console.error(e.response);
			// Reset user
			resetUser();
		});
	};

	useEffect(() => {
		if (!loggedUser) {
			router.replace('/').catch(err => {
				console.error(err);
			});
		}
	}, [loggedUser]);

	useEffect(() => {
		getUser();
		setInterval(() => {
			getUser();
		}, 100000);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<div>
				<SideNav />
				<div className={'flex bg-red-200 items-center flex-col'}>
					<Component {...pageProps} />
				</div>
			</div>
		</QueryClientProvider>);
}

export default MyApp;

import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useRouter} from 'next/router';
import {useUserStore} from '../store/userStore';
import SideNav from '../components/SideNav/SideNav';

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
	const router = useRouter();
	const loggedUser = useUserStore(state => state.username);

	useEffect(() => {
		if (loggedUser) {
			router.replace('/news').catch(err => {
				console.error(err);
			});
		}
	}, [loggedUser]);

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

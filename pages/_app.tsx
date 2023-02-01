import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useRouter} from 'next/router';
import {useUserStore} from '../store/userStore';
import SideNav from '../components/SideNav/SideNav';
import {getUser, useAuthUserQuery} from '../services/user';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorModal from '../components/Modals/ErrorModal';
import MyParticles from '../components/ParticlesBackground';
import MovingBackground from '../components/MovingBackground';
import ParticleBackground from '../components/ParticlesBackground';
import {useEventListeners} from '../store/deviceStore';

const queryClient = new QueryClient();

const contextClass = {
	success: 'bg-blue-600',
	error: 'bg-red-600',
	info: 'bg-gray-600',
	warning: 'bg-orange-400',
	default: 'bg-indigo-600',
	dark: 'bg-white-600 font-gray-300',
};

function MyApp({Component, pageProps}: AppProps) {
	const [showModal, setShowModal] = React.useState(true);
	const router = useRouter();
	const loggedUser = useUserStore(state => state.username);
	const setUser = useUserStore(state => state.setUser);
	const resetUser = useUserStore(state => state.resetUser);
	// UseEventListeners();

	return (
		<QueryClientProvider client={queryClient}>
			<MovingBackground image='https://i.imgur.com/uMGUV3O.jpeg'/>
			<ParticleBackground />
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
			<div className='relative flex justify-center h-screen items-center flex-col'>
				<div className='w-3/4'>
					<Component {...pageProps} />
				</div>
			</div>
			<SideNav />
		</QueryClientProvider>
	);
}

export default MyApp;

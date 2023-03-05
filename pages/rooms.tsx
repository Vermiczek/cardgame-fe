import type { NextPage } from 'next';
import { atom, useAtom } from 'jotai';
import LoginForm from '../components/Forms/LoginForm';
import create from 'zustand';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUser, loginUser, useAuthUserQuery } from '../services/user';
import { useUserStore } from '../store/userStore';
import { useRouter } from 'next/router';
import RegisterForm from '../components/Forms/RegisterForm';
import { getRooms } from '../services/rooms';

type RoomType = {
	id: string;
	name: string;
};

const Rooms = () => {
	const [hasAnAccount, setHasAccount] = useState(true);
	const [rooms, setRooms] = useState<RoomType[]>([]);
	const router = useRouter();
	const { data, isLoading, error } = useAuthUserQuery();

	const fetchData = async () => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
			const roomsRes = await getRooms();
			console.log(roomsRes);
		} catch (error: unknown) {
			console.error(error);
		}
	};

	return (
		<div className='scrollable-container h-screen overflow-y-auto'>
			<div className='rounded-lg p-4'>
				{rooms.map(room => (
					<div key={room.id} className='my-2'>
						<p className='text-lg font-medium'>ID: {room.id}</p>
						<p className='text-lg font-medium'>Name: {room.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Rooms;

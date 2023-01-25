import type {AxiosError, AxiosResponse} from 'axios';
import axios from 'axios';

type Room = {
	id: number;
	name: string;
	// Other properties
};

export const getRooms = async (page = 1, pageSize = 10) => {
	const roomsPromise = await axios({
		method: 'get',
		url: 'http://localhost:8000/rooms/',
		data: {
			page,
			pageSize,
		},
		withCredentials: true,
	});
};

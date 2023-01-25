import create from 'zustand';

export type RoomStoreState = {
	roomId: string;
	setRoom: (username: string, email: string) => void;
	resetRoom: () => void;
};

export const useRoomStore = create<RoomStoreState>(set => ({
	roomId: '',
	setRoom(inputRoomId: string) {
		set(() => ({
			roomId: inputRoomId,
		}));
	},
	resetRoom() {
		set(() => ({
			roomId: '',
		}));
	},
}));

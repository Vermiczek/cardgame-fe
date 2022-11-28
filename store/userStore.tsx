import create from 'zustand';

export type UserStoreState = {
	username: string;
	email: string;
	setUser: (username: string, email: string) => void;
	resetUser: () => void;
};

export const useUserStore = create<UserStoreState>(set => ({
	username: '',
	email: '',
	setUser(inputUsername: string, inputEmail: string) {
		set(() => ({
			username: inputUsername,
			email: inputEmail,
		}));
	},
	resetUser() {
		set(() => ({
			username: '',
			email: '',
		}));
	},
}));

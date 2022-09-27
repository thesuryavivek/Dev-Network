import create from "zustand";

// type user = {
// 	userId: number;
// 	username: string;
// }

const useUserStore = create((set) => ({
	userId: null,
	username: null,
	loginUser: ({ userId, username }: { userId: number; username: string }) => {
		set({ userId: userId, username: username });
	},
	logoutUser: () => set({ userId: null, username: null }),
	// increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 }),
}));

export default useUserStore;

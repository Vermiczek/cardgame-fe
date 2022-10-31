import type { NextPage } from "next";
import { atom, useAtom } from "jotai";
import LoginForm from "../components/LoginForm";
import create from "zustand";

export const pizdder = atom("nigger");
const uppercasePizdder = atom((get) => get(pizdder).toUpperCase());

export const useBearStore = create((set) => ({
  bears: 0,
  cipke: 100,
  dupa: "blada",
  setDupaCipa: (nyganyganyg: any) => {
    set((state: any) => ({
      bears: state.bears + 1,
      dupa: nyganyganyg,
      cipke: state.cipke + 1,
    }));
  },
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const Home: NextPage = () => {
  const [huj, setHuj] = useAtom(pizdder);
  const niggers = useBearStore((state: any) => {
    return { bears: state.bears, cipy: state.cipke, dupa: state.dupa };
  });

  return (
    <div>
      <div className={"flex justify-center  min-w-full w-full flex-row w p-5"}>
        <div className={"rounded-lg bg-blue-500 m-10 p3"}>{huj}</div>
        <button className={"m-10 p-3 rounded-md bg-red-400"}>Nigger</button>
        <button className={"m-10 p-3 rounded-md bg-red-400"}>Nigger</button>
      </div>
      <div className={"flex justify-center  min-w-full w-full flex-row w p-5"}>
        <div className={"rounded-lg bg-blue-500 m-10 p3"}>{niggers.bears}</div>
        <div className={"rounded-lg bg-blue-500 m-10 p3"}>{niggers.cipy}</div>
        <div className={"rounded-lg bg-blue-500 m-10 p3"}>{niggers.dupa}</div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Home;

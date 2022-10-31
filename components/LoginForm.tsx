import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { atom, useAtom } from "jotai";
import { pizdder } from '../pages';
import { useBearStore } from '../pages';
import { useEffect } from 'react';
import axios from 'axios';

const loginUser = async () => {
    const cipger = await axios({
        method: 'post',
        url: 'http://localhost:8000/user/login',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });
    if (cipger) {
      console.log(cipger);
    }

}

const LoginForm = () => {
  const bears = useBearStore((state:any) => state.setDupaCipa)
  const [huj, setHuj] = useAtom(pizdder);
  useEffect(()=>{bears()},[huj])
  return (
    <form>
    <div>
        <input type="text" onChange={(e)=>{loginUser()}}className={"bg-yellow-500"}/>
    <div>
      {huj}
    </div>
    </div>
    </form>
  )
}

export default LoginForm

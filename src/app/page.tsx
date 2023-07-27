import Image from 'next/image'
import Button from '../components/Button';
import { options } from '../../constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { formatCurrency } from '@/lib/utils'
import Header from '@/components/Header';

type Status = {
  data: {
    accountId: string
    symbol: string
    headquarters: string
    credits: number
    startingFaction: string
  }
}


export default async function Home() {
  const profileData: Status = await (await fetch('https://api.spacetraders.io/v2/my/agent', options)).json()

  return <>
    <Header />

    <div className='w-fit h-fit'>
      <Card>
        <CardHeader>
          <CardTitle>ID: {profileData.data.accountId}</CardTitle>
          <CardDescription>USERNAME: {profileData.data.symbol}</CardDescription>
        </CardHeader>
        <CardContent>
          Headquarters: {profileData.data.headquarters}
          <br />
          Credits: {formatCurrency(profileData.data.credits)}
        </CardContent>
        <CardFooter>
          Faction: {profileData.data.startingFaction}
        </CardFooter>
      </Card>
    </div>
  </>
}

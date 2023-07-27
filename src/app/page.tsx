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
  console.log(profileData)

  return <>
    <div className='w-full h-24 border-2 border-slate-900 rounded-sm '>
      <a href='/contracts'>
        My Contracts
      </a>
    </div>


    <div className='w-fit h-fit'>
      <Card>
        <CardHeader>
          <CardTitle>ID: {profileData.data.accountId}</CardTitle>
          <CardDescription>USERNAME: {profileData.data.symbol}</CardDescription>
        </CardHeader>
        <CardContent>
          Headquarters: {profileData.data.headquarters}
          <br />
          Credits: {profileData.data.credits}
        </CardContent>
        <CardFooter>
          Faction: {profileData.data.startingFaction}
        </CardFooter>
      </Card>
    </div>
  </>
}

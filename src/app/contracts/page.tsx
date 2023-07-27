import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { options } from '../../../constants'

import { formatCurrency, calculateDeadline } from '@/lib/utils'
import Header from "@/components/Header"


export type ContractsResponse = {
    data: {
        id: string
        factionSymbol: string
        type: 'PROCUREMENT' | 'TRANSPORT' | 'SHUTTLE'
        terms: {
            deadline: string
            payment: {
                onAccepted: number
                onFulfilled: number
            }
            deliver: {
                tradeSymbol: string
                destinationSymbol: string
                unitsRequired: number
                unitsFulfilled: number
            }[]
        }
        accepted: boolean
        fulfilled: boolean
        expiration: string
        deadlineToAccept: string
    }[]
    meta: {
        total: number
        page: number
        limit: number
    }
}


export default async function Contracts() {
    const getContracts: ContractsResponse = await (await fetch('https://api.spacetraders.io/v2/my/contracts', options)).json()
    console.log(getContracts.data)

    return <>
        <Header />
        <Card className="w-fit h-fit">
            <CardHeader>
                <CardTitle>Contract Info</CardTitle>
            </CardHeader>
            {getContracts.data.map(contract => {
                return <div key={contract.id}>
                    ID: {contract.id}
                    <CardDescription>
                        Faction: {contract.factionSymbol}
                        <br />
                        Contract type: {contract.type}
                        <br />
                        Deadline: {contract.terms.deadline}
                        <br />
                        Pre-payment: {formatCurrency(contract.terms.payment.onAccepted)}
                        <br />
                        After-payment: {formatCurrency(contract.terms.payment.onFulfilled)}
                        <br />
                        Contract Deliveries: {contract.terms.deliver.map(deliver => (
                            <>
                                {deliver.tradeSymbol}
                                <br />
                                Destination: {deliver.destinationSymbol}
                                <br />
                                Required amount: {deliver.unitsRequired}
                                {deliver.unitsFulfilled}
                            </>
                        ))}
                        <br />
                        STATUS: {contract.accepted && 'Accepted'}
                        <br />
                        Contract status: {contract.fulfilled ? 'Fulfilled' : 'Unfulfilled'}
                    </CardDescription>
                    <CardFooter>
                        Expiration: {contract.expiration}
                        <br />
                        Deadline to accept: {contract.deadlineToAccept}
                    </CardFooter>
                </div>
            })}
        </Card>
    </>
}




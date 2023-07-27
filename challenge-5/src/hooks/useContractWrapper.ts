import {useEffect, useState} from 'react';
import { Address, OpenedContract, toNano} from 'ton-core';
import { useInit } from './useInit';
import { Counter } from '../contracts/ContractWrapper';
import { useTonClient } from './useTonClient';
import { useConnection } from './useConnection';

export function useContractWrapper() {
    const client = useTonClient();
    const connection = useConnection();

    const sleep =(time: number) =>
        new Promise((resolve) => setTimeout(resolve, time));


    const [contractData, setContractData] = useState<null | {
        number: number;
    }>();

    const mainContract = useInit( async () => {
        if (!client) return;
        const contract = new Counter(
            Address.parse("kQB6UE8yqAonG8AM6tz8PtTE-JQ5svQwWjUWUM4ycZWId39V")
        );
        return client.open(contract) as OpenedContract<Counter>;
    },[client]);

    useEffect( () => {
        async function getValue() {
            if(!mainContract) return;
            setContractData(null);
            const instack = await mainContract.getCounter();
            setContractData({
                number: instack,
            });
            await sleep(5000);
            getValue();
        }
        getValue();
    }, [mainContract]);

    return {
        contract_address: mainContract?.address.toString(),
        ...contractData,
        sendInternalMessage: () => {
            return mainContract?.sendIncrease(connection.sender, {
                increaseBy: 1,
                value: toNano('0.05'),
            });
        }
    };
}


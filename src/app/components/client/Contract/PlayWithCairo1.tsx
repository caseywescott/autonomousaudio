import { useEffect, useState } from 'react';
import { Contract, InvokeFunctionResponse } from "starknet";

import { useStoreBlock } from "../Block/blockContext";
import { useStoreWallet } from '../../Wallet/walletContext';

import { Text, Button, Center, Spinner, Box, Grid } from "@chakra-ui/react";
import styles from '../../../page.module.css'

import { test1Abi } from "../../../contracts/abis/test3";
import TransactionStatus from '../Transaction/TransactionStatus';

import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

//const contractAddress = "0x697d3bc2e38d57752c28be0432771f4312d070174ae54eef67dd29e4afb174";

const contractAddress = "0x05abb8f7a07e03ec51c38f93917392a9981fc21d7d9a8d2ae6a7d561ad670251";

export default function PlayWithCairo1() {

        // Step 1: Declare a state variable for the slider value
        const [sliderValue, setSliderValue] = useState<number>(50);

        // Step 2: Event handler for slider's onChange event
        const handleSliderChange = (newValue: number) => {
            setSliderValue(newValue);
        }



    // wallet context
    const providerSN = useStoreWallet(state => state.provider);
    const accountFromContext = useStoreWallet(state => state.account);

    // block context
    const blockFromContext = useStoreBlock(state => state.dataBlock);

    // Component context
    const [balance, setBalance] = useState<number>(0);
    const [transactionHash, setTransactionHash] = useState<string>("");

    const cairo1Contract = new Contract(test1Abi, contractAddress, providerSN);
    if (accountFromContext) { cairo1Contract.connect(accountFromContext); }

    useEffect(() => {
        cairo1Contract.get_balance()
            .then((resp: bigint) => {
                console.log("resp =", resp)
                setBalance(Number(resp));
            })
            .catch((e: any) => { console.log("error get_balance =", e) });
        return () => { }
    }
        , [blockFromContext.blockNumber]); // balance updated at each block


    function IncreaseBalance() {
        cairo1Contract.increase_balance(10)
            .then((resp: InvokeFunctionResponse) => {
                console.log("increaseBalance txH =", resp.transaction_hash)
                setTransactionHash(resp.transaction_hash);
            })
            .catch((e: any) => { console.log("error increase balance =", e) });
    }
    function IncreaseBalance3(amount: number) {
        cairo1Contract.increase_balance(amount)
            .then((resp: InvokeFunctionResponse) => {
                console.log("increaseBalance txH =", resp.transaction_hash)
                setTransactionHash(resp.transaction_hash);
            })
            .catch((e: any) => { console.log("error increase balance =", e) });
    }

    function IncreaseBalance4(amount: number, sliderval: number) {
        cairo1Contract.increase_balance_slider(amount, sliderval)
            .then((resp: InvokeFunctionResponse) => {
                console.log("increaseBalance txH =", resp.transaction_hash)
                setTransactionHash(resp.transaction_hash);
            })
            .catch((e: any) => { console.log("error increase balance_slider =", e) });
    }

    function IncreaseBalance2(amount: number, amount2: number) {
        cairo1Contract.increase_balance2(amount, amount2)
            .then((resp: InvokeFunctionResponse) => {
                console.log("increaseBalance txH =", resp.transaction_hash)
                setTransactionHash(resp.transaction_hash);
            })
            .catch((e: any) => { console.log("error increase balance =", e) });
    }

    return (
        <>
            {
                !balance ? (
                    <Center>
                        <Spinner color="blue" size="sm" />  _Fetching data ...
                    </Center>
                ) : (
                    <>
                        <div>
                            {/* <Text className={styles.text1}>Balance = {balance} tokens</Text> */}
                            <Center>
                            {/* <Slider
                                    aria-label="slider-example"
                                    value={sliderValue} // Use the state variable
                                    onChange={handleSliderChange} // Set up the event handler
                                    orientation="horizontal"
                                    h="5px"
                                    w="202px"
                                    ml={4} 
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb size="96px" />
                                </Slider> */}
                                </Center>
                            <Center mt={2}>
                            <Grid
                            style={{ marginBottom: '10px' }} 
                templateColumns="repeat(2, 1fr)"
                gap={4}
                mt={4}
            >
                <Button onClick={() => IncreaseBalance4(0, 10)}>Sparkle</Button>
    <Button onClick={() => IncreaseBalance4(1, 10)}>Accelerandos</Button>
    <Button onClick={() => IncreaseBalance4(2, 10)}>Crackle</Button>
    <Button onClick={() => IncreaseBalance4(3, 10)}>Melody</Button>
    <Button onClick={() => IncreaseBalance4(4, 10)}>Boom</Button>
    <Button onClick={() => IncreaseBalance4(5, 10)}>Drone</Button>
    <Button onClick={() => IncreaseBalance4(6, 10)}>Chords</Button>
    <Button onClick={() => IncreaseBalance4(7, 10)}>Percussive</Button>
    <Button onClick={() => IncreaseBalance4(8, 10)}>Change Chords</Button>
    <Button onClick={() => IncreaseBalance4(9, 10)}>Glitches</Button>

            </Grid>
                            </Center>
                        </div>
                        {!!transactionHash && (
                            <Box bg='rgb(52, 50, 49)' color='white' borderColor='rgb(52, 50, 49)' borderWidth='1px' borderRadius='md' p={1} marginTop={2}>
                                <Text className={styles.text1}>Last transaction status :</Text>
                                <TransactionStatus transactionHash={transactionHash}></TransactionStatus>
                            </Box>
                        )
                        }
                    </>
                )
            }
        </>
    )
}

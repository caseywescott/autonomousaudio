"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { Center, Spinner, Text, Button, Divider, Box } from '@chakra-ui/react';
import InteractContract from './components/client/Contract/InteractContract';
import { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { useStoreWallet } from './components/Wallet/walletContext';

import { encode, Provider } from "starknet";
import { StarknetWindowObject, connect } from "get-starknet";

import starknetjsImg from '../../public/Images/StarkNet-JS_logo_copy.png';

export default function Page() {

    // Connect Argent-X or Braavos wallet
    const [isConnected, setConnected] = useState(false);
    const [wallet, setWallet] = useState<StarknetWindowObject | null>(null);
    const addressAccountFromContext = useStoreWallet(state => state.address);
    const setAddressAccount = useStoreWallet(state => state.setAddressAccount);
    const chainFromContext = useStoreWallet(state => state.chain);
    const setChain = useStoreWallet(state => state.setChain);
    const accountFromContext = useStoreWallet(state => state.account);
    const setAccount = useStoreWallet(state => state.setAccount);
    const providerFromContext = useStoreWallet(state => state.provider);
    const setProvider = useStoreWallet(state => state.setProvider);

    // Component context

    const handleConnectClick = async () => {
        const wallet = await connect({ modalMode: "alwaysAsk", modalTheme: "light" });
        await wallet?.enable({ starknetVersion: "v4" } as any); // should be v5, but necessary to fake ArgentX
        setWallet(wallet);
        const addr = encode.addHexPrefix(encode.removeHexPrefix(wallet?.selectedAddress ?? "0x").padStart(64, "0"));
        setAddressAccount(addr);
        setConnected(!!wallet?.isConnected);
        if (wallet?.account) {
            setAccount(wallet.account);
        }
        if (wallet?.isConnected) {
            setChain(wallet.chainId); // not provided by Braavos
            setProvider(wallet.provider); // ********** for serial
            // setProvider(new Provider({ sequencer: { baseUrl: "http://127.0.0.1:5050" } })); // ************* debug in devnet *********
        }
    }

    /*
    return (
        <ChakraProvider>
            <div>
                <p className={styles.bgText}>
                    Test get-starknet v3.0.1 with starknet.js v5.17.0
                </p>
                <Center>
                    <Image src={starknetjsImg} alt='starknet.js' width={150} height={150} />
                </Center>
                <p className={styles.bgText}>
                    Please connect to testnet network
                </p>
                <div>
                    {!isConnected ? (
                        <Center>
                            <Button
                                ml="4"
                                textDecoration="none !important"
                                outline="none !important"
                                boxShadow="none !important"
                                onClick={() => {
                                    handleConnectClick();
                                }}
                            >
                                Connect Wallet
                            </Button>
                        </Center>
                    ) : (
                        <>
                            <Center>
                                <Button
                                    ml="4"
                                    textDecoration="none !important"
                                    outline="none !important"
                                    boxShadow="none !important"
                                    onClick={() => {
                                        setConnected(false);
                                    }}
                                >
                                    {accountFromContext
                                        ? `Your wallet : ${addressAccountFromContext?.slice(0, 7)}...${addressAccountFromContext?.slice(-4)} is connected`
                                        : "No Account"}
                                </Button>
                            </Center>
                            <br />
                            <Box bg='pink.200' color='black' borderWidth='1px' borderRadius='md'>
                                <p className={styles.text1}>
                                    address = {addressAccountFromContext}<br />
                                    chain = {chainFromContext}<br />
                                    isConnected={isConnected ? "Yes" : "No"}<br />
                                    account.address ={accountFromContext?.address}
                                </p>
                            </Box>
                            {!!providerFromContext &&
                                <InteractContract ></InteractContract>}
                        </>
                    )
                    }
                </div>
            </div >
        </ChakraProvider>
    )

    */

    return (
        <ChakraProvider>
            <Box style={{ backgroundColor:'rgb(52, 50, 49)', color: 'rgb(152, 150, 149)'  }}  minHeight="100vh"> {/* Set the background color and minHeight */}
                <div>
                <p className={styles.bgText} style={{ color: 'white', fontSize: '45px', marginBottom: '7px', fontFamily: 'Poppins, sans-serif'  }}>
                        Autonomous Audio
                    </p>
                    <Center>
                        <Image src={starknetjsImg} alt='starknet.js' width={150} height={150} />
                    </Center>
                    <p className={styles.bgText}>
                        Please connect to testnet network
                    </p>
                    <div>
                        {!isConnected ? (
                            <Center>
                                <Button
                                    ml="4"
                                    textDecoration="none !important"
                                    outline="none !important"
                                    boxShadow="none !important"
                                    onClick={() => {
                                        handleConnectClick();
                                    }}
                                >
                                    Connect Wallet
                                </Button>
                            </Center>
                        ) : (
                            <>
                                <Center>
                                    <Button
                                        ml="4"
                                        textDecoration="none !important"
                                        outline="none !important"
                                        boxShadow="none !important"
                                        onClick={() => {
                                            setConnected(false);
                                        }}
                                    >
                                        {accountFromContext
                                            ? `Your wallet : ${addressAccountFromContext?.slice(0, 7)}...${addressAccountFromContext?.slice(-4)} is connected`
                                            : "No Account"}
                                    </Button>
                                </Center>
                                <br />
                               
                                {!!providerFromContext && (
                                    <InteractContract></InteractContract>
                                )} <Box bg='rgb(52, 50, 49)' color='white' borderColor='rgb(102, 100, 109)' borderWidth='1px' borderRadius='md'>
                                <p className={styles.text1}>
                                    {/* address = {addressAccountFromContext}<br /> */}
                                    {chainFromContext}<br />
                                    Connected ={isConnected ? "Yes" : "No"}<br />
                                    {/* account.address ={accountFromContext?.address} */}
                                </p>
                            </Box>
                            <p style={{ textAlign: 'center', marginTop: '10px' }}>
    <a href="https://www.twitter.com/caseywescott" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'bold' }}>
        @CaseyWescott
    </a>
</p>
                                <br />
                                {/* <Slider
                                    aria-label="slider-example"
                                    defaultValue={50}
                                    orientation="vertical"
                                    h="200px"
                                    w="10px"
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb size="96px" />
                                </Slider>
                                <Grid
                                    templateColumns="repeat(3, 1fr)"
                                    gap={4}
                                    mt={4}
                                >
                                    <Button >Sparkle</Button>
                                    <Button>Accelerandos</Button>
                                    <Button>Crackle</Button>
                                    <Button>Melody</Button>
                                    <Button>Boom</Button>
                                    <Button>Drone</Button>
                                    <Button>Chords</Button>
                                    <Button>Percussive</Button>
                                    <Button>Change Chords</Button>
                                </Grid> */}
                            </>
                        )}
                    </div>
                </div>
            </Box>
        </ChakraProvider>
    );

}



import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";
import Iframe from 'react-iframe';

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
       <img src={`https://i.ibb.co/bJbRKSR/logo6.png`} />
    <h1 className={styles.h1}> <u>Buy An NFT From Ashraf Ghori </u></h1>
      <p> Ashraf Ghori is an Award-winning artist and filmmaker best known for creating the UAE’s first CGI Science Fiction film ‘Xero Error’ which gained acclaim at prominent film festivals internationally. He is the recipient of the prestigious UAE Golden Visa for Achievement in the Creative Arts.
        </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xcaB7AE3150eAffe5D962027D766f3dbE072c1fc0&chain=56"
        width="500px"
        height="500px"
        display="initial"
        position="static"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xcaB7AE3150eAffe5D962027D766f3dbE072c1fc0&chain=56"
        width="500px"
        height="500px"
        display="block"
        position="relative"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xcaB7AE3150eAffe5D962027D766f3dbE072c1fc0&chain=56"
        width="500px"
        height="500px"
        display="block"
        position="relative"/>

      <h1><u>Special Murottal from Wirda Mansur CEO I-COIN HUB</u></h1>
      <p>President of MAB | Creativepreneur | Author </p>
      <p>https://www.instagram.com/wirda_mansur | @icoinhub.co | @wakeupmakeup.cosmetics | @millennialantibokek</p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x40811529234f1782Bea996f1D8c89631511b38D7&chain=56"
        width="500px"
        height="500px"
        display="initial"
        position="static"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x5cD1C3C0e607178339185fa75b11F9A184531d5C&chain=56"
        width="500px"
        height="500px"
        display="block"
        position="relative"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x0CBDDc96682D8A887cE2Ab5A7b89E46Be42F41a1&chain=56"
        width="500px"
        height="500px"
        display="block"
        position="relative"/>
        <p></p>
         <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x8cEc2Ab5Bf43C231a010fAa30DD7Ab86745d3bb8&chain=56"
        width="500px"
        height="500px"
        display="block"
        position="relative"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x5f2652B8Bf786f446A0db5b31398C2F3bA3cD923&chain=56"
        width="500px"
        height="500px"
        display="block"
        position="relative"/>

    </div>
  );
};

export default Mint;

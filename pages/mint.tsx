import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Iframe from 'react-iframe';
import Image from "next/image";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
       <img src={`https://i.ibb.co/bJbRKSR/logo6.png`} />
    <h1 className={styles.h1}> <u>NFT Mosque with Ashraf Ghori from UEA</u></h1>
       <Image
        src="/ASHRAFXICOINHUB.png"
        alt="presale"
        width={1150}
        height={320}
        className={styles.buttonGapTop}
        style={{
          objectFit: "contain",
        }}
      />
        <h1 className={styles.h1}>
      <a href="https://www.ashrafghori.com" >
        <u>www.ashrafghori.com</u></a>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://icoinhub.co">www.icoinhub.co</a></span>
        </h1>
        <p></p>
      <Image
        src="/profile.png"
        alt="presale"
        width={1550}
        height={520}
        className={styles.buttonGapTop}
        style={{
          objectFit: "contain",
        }}
      />
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xcaB7AE3150eAffe5D962027D766f3dbE072c1fc0&chain=56"
        width="500px"
        height="525px"
        display="initial"
        position="static"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x6A78a33D679BEfCF2079c32580001E808697Ccc8&chain=56"
        width="500px"
        height="525px"
        display="block"
        position="relative"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0xe39Efb915228eB2C11b514f0586F3D1f76CE9212&chain=56"
        width="500px"
        height="525px"
        display="block"
        position="relative"/>

      <p></p>
 <p></p>
 <p></p>
      <h1><u>NFT JUZ AMMA series by Wirda Mansur <i>#batch1</i></u></h1>
      <img src={`https://i.ibb.co/bJbRKSR/logo6.png`} />
      <Image
        src="/profile2.png"
        alt="presale"
        width={1550}
        height={520}
        className={styles.buttonGapTop}
        style={{
          objectFit: "contain",
        }}
      />
    <p></p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
      <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x40811529234f1782Bea996f1D8c89631511b38D7&chain=56"
        width="500px"
        height="485px"
        display="initial"
        position="static"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x5cD1C3C0e607178339185fa75b11F9A184531d5C&chain=56"
        width="500px"
        height="485px"
        display="block"
        position="relative"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x0CBDDc96682D8A887cE2Ab5A7b89E46Be42F41a1&chain=56"
        width="500px"
        height="485px"
        display="block"
        position="relative"/>
        <p></p>
         <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x8cEc2Ab5Bf43C231a010fAa30DD7Ab86745d3bb8&chain=56"
        width="500px"
        height="485px"
        display="block"
        position="relative"/>
        <p></p>
        <Iframe url="https://gateway.ipfscdn.io/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc721.html?contract=0x5f2652B8Bf786f446A0db5b31398C2F3bA3cD923&chain=56"
        width="500px"
        height="485px"
        display="block"
        position="relative"/>

    </div>
  );
};

export default Mint;

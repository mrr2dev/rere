import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img src={`https://i.ibb.co/bJbRKSR/logo6.png`} />
      {/* Top Section */}
      <h1 className={styles.h1}>Be THE FIRST in NFT & STAKING NFT From IcoinHUB Ecosystem</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/shop`)}
        >
          {/* Mint a new NFT */}

          <button className={styles.mainButton} onClick={() => router.push(`/shop`)}>
            <h2><b>Buy NFT</b></h2>
          </button>
          <div>
            <h3>
              Get EARLY PRICE in PRESALE NFT
            </h3>
          </div>
        </div>


        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}

          <button className={styles.mainButton2} onClick={() => router.push(`/stake`)}>
            <h2><b>Stake Your NFTs</b></h2>
          </button>
          <div>
            <h3>
              Staking your NFTs to GET free I-POINTS easy
              <br></br>even when you sleep
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

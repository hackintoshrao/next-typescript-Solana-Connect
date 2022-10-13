import type { NextPage } from 'next';

import { SecondComponent } from '../src/secondComponent';
import { useConnection } from '../src/useConnection';
import { Connection } from '@solana/web3.js';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  //console.log('-----------------\n', info);

  return <SecondComponent> </SecondComponent>;
};

export default Home;

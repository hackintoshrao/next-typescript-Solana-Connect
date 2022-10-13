import { useConnection } from './useConnection';
import { Connection } from '@solana/web3.js';
import { useEffect, useState } from 'react';

export const SecondComponent = () => {
  const connection = useConnection();

  const [info, setInfo] = useState();
  //console.log(connection);

  useEffect(() => {
    const getRecentBlock = async () => {
      const info = await connection.getEpochInfo();
      setInfo(info);
      console.log('-----------------\n', info);
    };

    getRecentBlock();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(info)}</p>
    </div>
  );
};

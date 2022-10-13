import { Connection, clusterApiUrl } from '@solana/web3.js';
import { ConnectionContext } from './useConnection';

export const ConnectionProvider = ({ children }) => {
  const connection = new Connection('https://api.devnet.solana.com');

  const getRecentBlock = async () => {
    const Info = await connection.getEpochInfo();
    //console.log('-----------------\n', Info);
  };

  getRecentBlock();
  //const Info = await connection.getEpochInfo();

  return (
    <ConnectionContext.Provider value={connection}>
      {children}
    </ConnectionContext.Provider>
  );
};

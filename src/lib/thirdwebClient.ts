import { createThirdwebClient } from "thirdweb";
export const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!;
export const secretKey = process.env.THIRDWEB_SECRET_KEY!;

import { defineChain, getContract } from "thirdweb";
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const thirdwebClient = createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId,
      }
);

export const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

const ERC20_CONTRACT_ADDRESS = "0xf368e9D38E1A1091ae8CBac2Ee3dfCc449D46e49";
export const tokenContract = getContract({
  client: thirdwebClient,
  chain: defineChain(80002),
  address: ERC20_CONTRACT_ADDRESS,
});

export const voteContract = getContract({
  client: thirdwebClient,
  chain: defineChain(80002),
  address: "0x26a5C0f7CB0A7d5B747bC9d84BDcf0cDDf779DaF",
});

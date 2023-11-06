import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia : {
      url: URL,
      accounts: [PRIVATE_KEY!],
    },
  }
};

export default config;

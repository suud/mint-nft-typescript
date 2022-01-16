// Import libraries
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

// Get environment variables
require("dotenv").config();

// Instantiate 3rdweb SDK
const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        ethers.getDefaultProvider(process.env.PROVIDER as string)
    )
);

// Initialize Drop Module
const drop = sdk.getDropModule(process.env.DROP_ADDRESS as string);

// Mint the NFT
const lazyMintNft = async () => {
    try {
        await drop.createBatch([{
            name: process.env.TOKEN_NAME as string,
            description: process.env.TOKEN_DESCRIPTION as string,
            image: process.env.TOKEN_IMG_PATH as string,
            properties: {},
        }]);
    } catch (err) {
        console.log(err);
    }
};

// Run the entire thing
lazyMintNft();


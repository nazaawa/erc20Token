import { ethers  , network} from "hardhat";
import {verify} from "../utils/verify";
async function main() {
  const Token = await ethers.getContractFactory("JonnyIsErc20");
  const token = await Token.deploy();

  await token.deployed();

  if(network.name === "goerly"){
    console.log("verifying the smart contract ");
    await token.deployTransaction.wait(6);
    await verify(token.address, [])
  }
  else{
    await verify(token.address, [])
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

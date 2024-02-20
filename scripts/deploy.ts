import { ethers } from "hardhat";

async function main() {
  // const initialOwner = "0xb7B943fFbA78e33589971e630AD6EB544252D88C";

  const stakingDuration = 60 * 60 * 24 * 365; // 1 year
  const minLockPeriod = 60 * 60 * 24 * 30; // 30 days

  const popeERC20 = await ethers.deployContract("PopeERC20");
  await popeERC20.waitForDeployment();

  const stakingContract = await ethers.deployContract("StakingContract", [popeERC20.target, stakingDuration, minLockPeriod]);
  await stakingContract.waitForDeployment();

  console.log("ERC20 deployed to:", popeERC20.target);
  console.log("StakingContract deployed to:", stakingContract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
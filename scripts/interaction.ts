import { ethers } from "hardhat";

async function main() {
  const PopeERC20Address = "0xdea104bE92e2ac5357619AC39736b7f6fE2D2aa4";
  const StakingContractAddress = "0x14D5B8dB09Bd35E60794ebB61DF50659429803E6";

  const stakingContract = await ethers.getContractAt("IStakingContract", StakingContractAddress);

  const popeERC20 = await ethers.getContractAt("IPopeERC20", PopeERC20Address);

  const stakeAmount = ethers.parseEther("10");
  const approvedAmount = ethers.parseEther("50");

  await popeERC20.approve(StakingContractAddress, approvedAmount);
  const stakeTx = await stakingContract.stake(stakeAmount);
  await stakeTx.wait();

  console.log("Successfully Deployed");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
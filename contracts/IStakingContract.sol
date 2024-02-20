// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IStakingContract {
    function stake(uint256 _amount) external;
    function withdraw() external;
}
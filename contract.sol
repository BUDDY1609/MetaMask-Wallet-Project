// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Test{

    uint a;
    uint b;

    ///input Number
    function inputnum(uint _a, uint _b) public{
        a = _a;
        b = _b;
    }
    ///sum number of input number
    function sum() public view returns (uint){
        return a+b;
    }
    ///output number of input number
    function multi() public view returns (uint){
        return a*b;
    }


}
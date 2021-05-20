// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Calculator {
    function add(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 + nb2;
    }

    function sub(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 - nb2;
    }

    function mul(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 * nb2;
    }

    function div(int256 nb1, int256 nb2) public pure returns (int256) {
        require(nb2 != 0, "Calculator: can not divide by zero");
        return nb1 / nb2;
    }

    function mod(int256 nb1, int256 nb2) public pure returns (int256) {
        require(nb2 != 0, "Calculator: can not modulo by zero");
        return nb1 % nb2;
    }
}

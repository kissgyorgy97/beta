pragma solidity ^0.4.24;

/**
 * @title Contract that will work with ERC223 tokens.
 */
contract ERC223ReceivingContract {
    function tokenFallback(address _from, uint _value, bytes _data) public;
}
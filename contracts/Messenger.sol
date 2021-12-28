// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./library.sol";

contract Messenger{

    address public owner = msg.sender;
    string public message;
    uint public msg_updates = 0;

    //using IntExtended for uint;

    constructor() {
        message = "Hellow world!";
    }

    //function add_counter(uint _base) public pure returns(uint){
    //    return _base.increment();
    //}

    modifier ownerOnly() {
        require(msg.sender == owner, "This function is restricted to the contract owner");
        _;
    }

    // This function can only be runned by owner to set a new message
    function setMessage(string memory _message) public ownerOnly returns(string memory) {
        
        // The message must not be empty
        require(bytes(_message).length > 0);

        // Setting new message
        message = _message;

        // Adding 
        //msg_updates = add_counter(msg_updates);

        return _message;
    }

}

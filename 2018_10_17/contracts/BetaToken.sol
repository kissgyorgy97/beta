pragma solidity ^0.4.24;

import "./MintableTOken.sol";
import "./BurnableToken.sol";

contract BetaToken is MintableToken, BurnableToken {
  // Coin Properties
    string public name = "BETATOKEN";
    string public symbol = "BETA";
    uint256 public decimals = 18;

  // Special propeties
    bool public canMove = false;

  /**
  * @dev modifier that throws if moving has not started yet
   */
    modifier onlyIfCanMove() {
        require(canMove);
        _;
    }

  /**
  * @dev Allows the owner to enable the moving. This can not be undone
  */
    function startMove() public onlyOwner {
        canMove = true;
    }

  /**
  * @dev Allows anyone to transfer the Beta tokens once moving was started
  * @param _to the recipient address of the tokens.
  * @param _value number of tokens to be transfered.
   */
    function transfer(address _to, uint _value) onlyIfCanMove public returns (bool) {
        return super.transfer(_to, _value);
    }

    function transfer(address _to, uint _value, bytes _data) onlyIfCanMove public returns (bool) {
        return super.transfer(_to, _value, _data);
    }


  /**
  * @dev Allows anyone to transfer the Beta tokens once moving has started
  * @param _from address The address which you want to send tokens from
  * @param _to address The address which you want to transfer to
  * @param _value uint the amout of tokens to be transfered
   */
    function transferFrom(address _from, address _to, uint _value) onlyIfCanMove public returns (bool) {
        return super.transferFrom(_from, _to, _value);
    }
    function transferFrom(address _from, address _to, uint _value, bytes _data) onlyIfCanMove public returns (bool) {
        return super.transferFrom(_from, _to, _value, _data);
    }





    function emergencyERC20Drain( ERC20 oddToken, uint amount ) public {
        oddToken.transfer(owner, amount);
    }
}

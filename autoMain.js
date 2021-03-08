(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0], {
      245: function(e, t) {
          e.exports = JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.6.12+commit.27d51765\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"symbol\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"account\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"subtractedValue\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"decreaseAllowance\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"addedValue\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"increaseAllowance\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"details\\":\\"Implementation of the {IERC20} interface. This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using {_mint}. For a generic mechanism see {ERC20PresetMinterPauser}. TIP: For a detailed writeup see our guide https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How to implement supply mechanisms]. We have followed general OpenZeppelin guidelines: functions revert instead of returning `false` on failure. This behavior is nonetheless conventional and does not conflict with the expectations of ERC20 applications. Additionally, an {Approval} event is emitted on calls to {transferFrom}. This allows applications to reconstruct the allowance for all accounts just by listening to said events. Other implementations of the EIP may not emit these events, as it isn\'t required by the specification. Finally, the non-standard {decreaseAllowance} and {increaseAllowance} functions have been added to mitigate the well-known issues around setting allowances. See {IERC20-approve}.\\",\\"kind\\":\\"dev\\",\\"methods\\":{\\"allowance(address,address)\\":{\\"details\\":\\"See {IERC20-allowance}.\\"},\\"approve(address,uint256)\\":{\\"details\\":\\"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.\\"},\\"balanceOf(address)\\":{\\"details\\":\\"See {IERC20-balanceOf}.\\"},\\"constructor\\":{\\"details\\":\\"Sets the values for {name} and {symbol}, initializes {decimals} with a default value of 18. To select a different value for {decimals}, use {_setupDecimals}. All three of these values are immutable: they can only be set once during construction.\\"},\\"decimals()\\":{\\"details\\":\\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\\"},\\"decreaseAllowance(address,uint256)\\":{\\"details\\":\\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\\"},\\"increaseAllowance(address,uint256)\\":{\\"details\\":\\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\\"},\\"name()\\":{\\"details\\":\\"Returns the name of the token.\\"},\\"symbol()\\":{\\"details\\":\\"Returns the symbol of the token, usually a shorter version of the name.\\"},\\"totalSupply()\\":{\\"details\\":\\"See {IERC20-totalSupply}.\\"},\\"transfer(address,uint256)\\":{\\"details\\":\\"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\\"},\\"transferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``\'s tokens of at least `amount`.\\"}},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\":\\"ERC20\\"},\\"evmVersion\\":\\"petersburg\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"@openzeppelin/contracts/GSN/Context.sol\\":{\\"keccak256\\":\\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\\",\\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\\"]},\\"@openzeppelin/contracts/math/SafeMath.sol\\":{\\"keccak256\\":\\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\\",\\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\\"]},\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\":{\\"keccak256\\":\\"0x91e0bd6a6762d2a1700dab0849de8422611355100576c4beef1e80d82a4104a0\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://73bbd77af0a8b07255d2ffa20728bcf13b116007c9ddac5d37046cfabb0e1e02\\",\\"dweb:/ipfs/QmRgZgWCWCSMTTaok6o4QvWA6MgB4goS8qpb3sN7bAvaZ9\\"]},\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\":{\\"keccak256\\":\\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\\",\\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\\"]},\\"@openzeppelin/contracts/utils/Address.sol\\":{\\"keccak256\\":\\"0xf5fa8cbdffa5ef8be49b246b5628facc30b71707e78a45d80d93b64eff3fe390\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://774e78a9ff32792cc95db4d2ceaf3a7965bb7f0bea5e6cb7cff182b450d44b37\\",\\"dweb:/ipfs/QmRRMC4uj7eAcLW7chynA3sNEYULMFazdLwQHKHQPyzAbA\\"]}},\\"version\\":1}","bytecode":"0x60806040523480156200001157600080fd5b50604051620013a5380380620013a5833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040525050508160039080519060200190620001cd9291906200020b565b508060049080519060200190620001e69291906200020b565b506012600560006101000a81548160ff021916908360ff1602179055505050620002b1565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200024e57805160ff19168380011785556200027f565b828001600101855582156200027f579182015b828111156200027e57825182559160200191906001019062000261565b5b5090506200028e919062000292565b5090565b5b80821115620002ad57600081600090555060010162000293565b5090565b6110e480620002c16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461025857806370a08231146102bc57806395d89b4114610314578063a457c2d714610397578063a9059cbb146103fb578063dd62ed3e1461045f576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019557806323b872dd146101b3578063313ce56714610237575b600080fd5b6100b66104d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610579565b60405180821515815260200191505060405180910390f35b61019d610597565b6040518082815260200191505060405180910390f35b61021f600480360360608110156101c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105a1565b60405180821515815260200191505060405180910390f35b61023f61067a565b604051808260ff16815260200191505060405180910390f35b6102a46004803603604081101561026e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610691565b60405180821515815260200191505060405180910390f35b6102fe600480360360208110156102d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610744565b6040518082815260200191505060405180910390f35b61031c61078c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035c578082015181840152602081019050610341565b50505050905090810190601f1680156103895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103e3600480360360408110156103ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061082e565b60405180821515815260200191505060405180910390f35b6104476004803603604081101561041157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108fb565b60405180821515815260200191505060405180910390f35b6104c16004803603604081101561047557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610919565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561056f5780601f106105445761010080835404028352916020019161056f565b820191906000526020600020905b81548152906001019060200180831161055257829003601f168201915b5050505050905090565b600061058d6105866109a0565b84846109a8565b6001905092915050565b6000600254905090565b60006105ae848484610b9f565b61066f846105ba6109a0565b61066a8560405180606001604052806028815260200161101960289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006106206109a0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e609092919063ffffffff16565b6109a8565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061073a61069e6109a0565b8461073585600160006106af6109a0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f2090919063ffffffff16565b6109a8565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108245780601f106107f957610100808354040283529160200191610824565b820191906000526020600020905b81548152906001019060200180831161080757829003601f168201915b5050505050905090565b60006108f161083b6109a0565b846108ec8560405180606001604052806025815260200161108a60259139600160006108656109a0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e609092919063ffffffff16565b6109a8565b6001905092915050565b600061090f6109086109a0565b8484610b9f565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a2e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110666024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ab4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610fd16022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c25576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110416025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610fae6023913960400191505060405180910390fd5b610cb6838383610fa8565b610d2181604051806060016040528060268152602001610ff3602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e609092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610db4816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f2090919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ed2578082015181840152602081019050610eb7565b50505050905090810190601f168015610eff5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015610f9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209d364b2bf266d0e7d02c2fd28930dce3750cf17768acc39cf4bcd89c2d3c671864736f6c634300060c0033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461025857806370a08231146102bc57806395d89b4114610314578063a457c2d714610397578063a9059cbb146103fb578063dd62ed3e1461045f576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019557806323b872dd146101b3578063313ce56714610237575b600080fd5b6100b66104d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610579565b60405180821515815260200191505060405180910390f35b61019d610597565b6040518082815260200191505060405180910390f35b61021f600480360360608110156101c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105a1565b60405180821515815260200191505060405180910390f35b61023f61067a565b604051808260ff16815260200191505060405180910390f35b6102a46004803603604081101561026e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610691565b60405180821515815260200191505060405180910390f35b6102fe600480360360208110156102d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610744565b6040518082815260200191505060405180910390f35b61031c61078c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561035c578082015181840152602081019050610341565b50505050905090810190601f1680156103895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103e3600480360360408110156103ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061082e565b60405180821515815260200191505060405180910390f35b6104476004803603604081101561041157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108fb565b60405180821515815260200191505060405180910390f35b6104c16004803603604081101561047557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610919565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561056f5780601f106105445761010080835404028352916020019161056f565b820191906000526020600020905b81548152906001019060200180831161055257829003601f168201915b5050505050905090565b600061058d6105866109a0565b84846109a8565b6001905092915050565b6000600254905090565b60006105ae848484610b9f565b61066f846105ba6109a0565b61066a8560405180606001604052806028815260200161101960289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006106206109a0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e609092919063ffffffff16565b6109a8565b600190509392505050565b6000600560009054906101000a900460ff16905090565b600061073a61069e6109a0565b8461073585600160006106af6109a0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f2090919063ffffffff16565b6109a8565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108245780601f106107f957610100808354040283529160200191610824565b820191906000526020600020905b81548152906001019060200180831161080757829003601f168201915b5050505050905090565b60006108f161083b6109a0565b846108ec8560405180606001604052806025815260200161108a60259139600160006108656109a0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e609092919063ffffffff16565b6109a8565b6001905092915050565b600061090f6109086109a0565b8484610b9f565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a2e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110666024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ab4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610fd16022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c25576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110416025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610fae6023913960400191505060405180910390fd5b610cb6838383610fa8565b610d2181604051806060016040528060268152602001610ff3602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e609092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610db4816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f2090919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ed2578082015181840152602081019050610eb7565b50505050905090810190601f168015610eff5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015610f9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209d364b2bf266d0e7d02c2fd28930dce3750cf17768acc39cf4bcd89c2d3c671864736f6c634300060c0033","immutableReferences":{},"sourceMap":"1345:9444:14:-:0;;;2013:141;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2093:4;2085:5;:12;;;;;;;;;;;;:::i;:::-;;2117:6;2107:7;:16;;;;;;;;;;;;:::i;:::-;;2145:2;2133:9;;:14;;;;;;;;;;;;;;;;;;2013:141;;1345:9444;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;","deployedSourceMap":"1345:9444:14:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4255:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3262:98;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4881:317;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3121:81;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;5593:215;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3418:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2413:85;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6295:266;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3738:172;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;3968:149;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2219:81;2256:13;2288:5;2281:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2219:81;:::o;4255:166::-;4338:4;4354:39;4363:12;:10;:12::i;:::-;4377:7;4386:6;4354:8;:39::i;:::-;4410:4;4403:11;;4255:166;;;;:::o;3262:98::-;3315:7;3341:12;;3334:19;;3262:98;:::o;4881:317::-;4987:4;5003:36;5013:6;5021:9;5032:6;5003:9;:36::i;:::-;5049:121;5058:6;5066:12;:10;:12::i;:::-;5080:89;5118:6;5080:89;;;;;;;;;;;;;;;;;:11;:19;5092:6;5080:19;;;;;;;;;;;;;;;:33;5100:12;:10;:12::i;:::-;5080:33;;;;;;;;;;;;;;;;:37;;:89;;;;;:::i;:::-;5049:8;:121::i;:::-;5187:4;5180:11;;4881:317;;;;;:::o;3121:81::-;3162:5;3186:9;;;;;;;;;;;3179:16;;3121:81;:::o;5593:215::-;5681:4;5697:83;5706:12;:10;:12::i;:::-;5720:7;5729:50;5768:10;5729:11;:25;5741:12;:10;:12::i;:::-;5729:25;;;;;;;;;;;;;;;:34;5755:7;5729:34;;;;;;;;;;;;;;;;:38;;:50;;;;:::i;:::-;5697:8;:83::i;:::-;5797:4;5790:11;;5593:215;;;;:::o;3418:117::-;3484:7;3510:9;:18;3520:7;3510:18;;;;;;;;;;;;;;;;3503:25;;3418:117;;;:::o;2413:85::-;2452:13;2484:7;2477:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2413:85;:::o;6295:266::-;6388:4;6404:129;6413:12;:10;:12::i;:::-;6427:7;6436:96;6475:15;6436:96;;;;;;;;;;;;;;;;;:11;:25;6448:12;:10;:12::i;:::-;6436:25;;;;;;;;;;;;;;;:34;6462:7;6436:34;;;;;;;;;;;;;;;;:38;;:96;;;;;:::i;:::-;6404:8;:129::i;:::-;6550:4;6543:11;;6295:266;;;;:::o;3738:172::-;3824:4;3840:42;3850:12;:10;:12::i;:::-;3864:9;3875:6;3840:9;:42::i;:::-;3899:4;3892:11;;3738:172;;;;:::o;3968:149::-;4057:7;4083:11;:18;4095:5;4083:18;;;;;;;;;;;;;;;:27;4102:7;4083:27;;;;;;;;;;;;;;;;4076:34;;3968:149;;;;:::o;590:104:11:-;643:15;677:10;670:17;;590:104;:::o;9357:340:14:-;9475:1;9458:19;;:5;:19;;;;9450:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9555:1;9536:21;;:7;:21;;;;9528:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9637:6;9607:11;:18;9619:5;9607:18;;;;;;;;;;;;;;;:27;9626:7;9607:27;;;;;;;;;;;;;;;:36;;;;9674:7;9658:32;;9667:5;9658:32;;;9683:6;9658:32;;;;;;;;;;;;;;;;;;9357:340;;;:::o;7035:530::-;7158:1;7140:20;;:6;:20;;;;7132:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7241:1;7220:23;;:9;:23;;;;7212:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7294:47;7315:6;7323:9;7334:6;7294:20;:47::i;:::-;7372:71;7394:6;7372:71;;;;;;;;;;;;;;;;;:9;:17;7382:6;7372:17;;;;;;;;;;;;;;;;:21;;:71;;;;;:::i;:::-;7352:9;:17;7362:6;7352:17;;;;;;;;;;;;;;;:91;;;;7476:32;7501:6;7476:9;:20;7486:9;7476:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;7453:9;:20;7463:9;7453:20;;;;;;;;;;;;;;;:55;;;;7540:9;7523:35;;7532:6;7523:35;;;7551:6;7523:35;;;;;;;;;;;;;;;;;;7035:530;;;:::o;1746:187:13:-;1832:7;1864:1;1859;:6;;1867:12;1851:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1890:9;1906:1;1902;:5;1890:17;;1925:1;1918:8;;;1746:187;;;;;:::o;874:176::-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;10695:92:14:-;;;;:::o","source":"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.6.0;\\n\\nimport \\"../../GSN/Context.sol\\";\\nimport \\"./IERC20.sol\\";\\nimport \\"../../math/SafeMath.sol\\";\\nimport \\"../../utils/Address.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin guidelines: functions revert instead\\n * of returning `false` on failure. This behavior is nonetheless conventional\\n * and does not conflict with the expectations of ERC20 applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn\'t required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20 {\\n    using SafeMath for uint256;\\n    using Address for address;\\n\\n    mapping (address => uint256) private _balances;\\n\\n    mapping (address => mapping (address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n    uint8 private _decimals;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}, initializes {decimals} with\\n     * a default value of 18.\\n     *\\n     * To select a different value for {decimals}, use {_setupDecimals}.\\n     *\\n     * All three of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor (string memory name, string memory symbol) public {\\n        _name = name;\\n        _symbol = symbol;\\n        _decimals = 18;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5,05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is\\n     * called.\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view returns (uint8) {\\n        return _decimals;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `recipient` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(_msgSender(), recipient, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        _approve(_msgSender(), spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20};\\n     *\\n     * Requirements:\\n     * - `sender` and `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``sender``\'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(sender, recipient, amount);\\n        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, \\"ERC20: transfer amount exceeds allowance\\"));\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, \\"ERC20: decreased allowance below zero\\"));\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves tokens `amount` from `sender` to `recipient`.\\n     *\\n     * This is internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` cannot be the zero address.\\n     * - `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     */\\n    function _transfer(address sender, address recipient, uint256 amount) internal virtual {\\n        require(sender != address(0), \\"ERC20: transfer from the zero address\\");\\n        require(recipient != address(0), \\"ERC20: transfer to the zero address\\");\\n\\n        _beforeTokenTransfer(sender, recipient, amount);\\n\\n        _balances[sender] = _balances[sender].sub(amount, \\"ERC20: transfer amount exceeds balance\\");\\n        _balances[recipient] = _balances[recipient].add(amount);\\n        emit Transfer(sender, recipient, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements\\n     *\\n     * - `to` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\"ERC20: mint to the zero address\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply = _totalSupply.add(amount);\\n        _balances[account] = _balances[account].add(amount);\\n        emit Transfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\"ERC20: burn from the zero address\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        _balances[account] = _balances[account].sub(amount, \\"ERC20: burn amount exceeds balance\\");\\n        _totalSupply = _totalSupply.sub(amount);\\n        emit Transfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(address owner, address spender, uint256 amount) internal virtual {\\n        require(owner != address(0), \\"ERC20: approve from the zero address\\");\\n        require(spender != address(0), \\"ERC20: approve to the zero address\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Sets {decimals} to a value other than the default one of 18.\\n     *\\n     * WARNING: This function should only be called from the constructor. Most\\n     * applications that interact with token contracts will not expect\\n     * {decimals} to ever change, and may work incorrectly if it does.\\n     */\\n    function _setupDecimals(uint8 decimals_) internal {\\n        _decimals = decimals_;\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n     * will be to transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual { }\\n}\\n","sourcePath":"@openzeppelin/contracts/token/ERC20/ERC20.sol","ast":{"absolutePath":"@openzeppelin/contracts/token/ERC20/ERC20.sol","exportedSymbols":{"ERC20":[7303]},"id":7304,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":6798,"literals":["solidity","^","0.6",".0"],"nodeType":"PragmaDirective","src":"33:23:14"},{"absolutePath":"@openzeppelin/contracts/GSN/Context.sol","file":"../../GSN/Context.sol","id":6799,"nodeType":"ImportDirective","scope":7304,"sourceUnit":6492,"src":"58:31:14","symbolAliases":[],"unitAlias":""},{"absolutePath":"@openzeppelin/contracts/token/ERC20/IERC20.sol","file":"./IERC20.sol","id":6800,"nodeType":"ImportDirective","scope":7304,"sourceUnit":7382,"src":"90:22:14","symbolAliases":[],"unitAlias":""},{"absolutePath":"@openzeppelin/contracts/math/SafeMath.sol","file":"../../math/SafeMath.sol","id":6801,"nodeType":"ImportDirective","scope":7304,"sourceUnit":6797,"src":"113:33:14","symbolAliases":[],"unitAlias":""},{"absolutePath":"@openzeppelin/contracts/utils/Address.sol","file":"../../utils/Address.sol","id":6802,"nodeType":"ImportDirective","scope":7304,"sourceUnit":7790,"src":"147:33:14","symbolAliases":[],"unitAlias":""},{"abstract":false,"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":6804,"name":"Context","nodeType":"UserDefinedTypeName","referencedDeclaration":6491,"src":"1363:7:14","typeDescriptions":{"typeIdentifier":"t_contract$_Context_$6491","typeString":"contract Context"}},"id":6805,"nodeType":"InheritanceSpecifier","src":"1363:7:14"},{"arguments":null,"baseName":{"contractScope":null,"id":6806,"name":"IERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":7381,"src":"1372:6:14","typeDescriptions":{"typeIdentifier":"t_contract$_IERC20_$7381","typeString":"contract IERC20"}},"id":6807,"nodeType":"InheritanceSpecifier","src":"1372:6:14"}],"contractDependencies":[6491,7381],"contractKind":"contract","documentation":{"id":6803,"nodeType":"StructuredDocumentation","src":"182:1162:14","text":" @dev Implementation of the {IERC20} interface.\\n This implementation is agnostic to the way tokens are created. This means\\n that a supply mechanism has to be added in a derived contract using {_mint}.\\n For a generic mechanism see {ERC20PresetMinterPauser}.\\n TIP: For a detailed writeup see our guide\\n https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n to implement supply mechanisms].\\n We have followed general OpenZeppelin guidelines: functions revert instead\\n of returning `false` on failure. This behavior is nonetheless conventional\\n and does not conflict with the expectations of ERC20 applications.\\n Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n This allows applications to reconstruct the allowance for all accounts just\\n by listening to said events. Other implementations of the EIP may not emit\\n these events, as it isn\'t required by the specification.\\n Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n functions have been added to mitigate the well-known issues around setting\\n allowances. See {IERC20-approve}."},"fullyImplemented":true,"id":7303,"linearizedBaseContracts":[7303,7381,6491],"name":"ERC20","nodeType":"ContractDefinition","nodes":[{"id":6810,"libraryName":{"contractScope":null,"id":6808,"name":"SafeMath","nodeType":"UserDefinedTypeName","referencedDeclaration":6796,"src":"1391:8:14","typeDescriptions":{"typeIdentifier":"t_contract$_SafeMath_$6796","typeString":"library SafeMath"}},"nodeType":"UsingForDirective","src":"1385:27:14","typeName":{"id":6809,"name":"uint256","nodeType":"ElementaryTypeName","src":"1404:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},{"id":6813,"libraryName":{"contractScope":null,"id":6811,"name":"Address","nodeType":"UserDefinedTypeName","referencedDeclaration":7789,"src":"1423:7:14","typeDescriptions":{"typeIdentifier":"t_contract$_Address_$7789","typeString":"library Address"}},"nodeType":"UsingForDirective","src":"1417:26:14","typeName":{"id":6812,"name":"address","nodeType":"ElementaryTypeName","src":"1435:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}},{"constant":false,"id":6817,"mutability":"mutable","name":"_balances","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1449:46:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":6816,"keyType":{"id":6814,"name":"address","nodeType":"ElementaryTypeName","src":"1458:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"1449:28:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":6815,"name":"uint256","nodeType":"ElementaryTypeName","src":"1469:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"private"},{"constant":false,"id":6823,"mutability":"mutable","name":"_allowances","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1502:69:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"},"typeName":{"id":6822,"keyType":{"id":6818,"name":"address","nodeType":"ElementaryTypeName","src":"1511:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"1502:49:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"},"valueType":{"id":6821,"keyType":{"id":6819,"name":"address","nodeType":"ElementaryTypeName","src":"1531:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"1522:28:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":6820,"name":"uint256","nodeType":"ElementaryTypeName","src":"1542:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}}},"value":null,"visibility":"private"},{"constant":false,"id":6825,"mutability":"mutable","name":"_totalSupply","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1578:28:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6824,"name":"uint256","nodeType":"ElementaryTypeName","src":"1578:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"private"},{"constant":false,"id":6827,"mutability":"mutable","name":"_name","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1613:20:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":6826,"name":"string","nodeType":"ElementaryTypeName","src":"1613:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"private"},{"constant":false,"id":6829,"mutability":"mutable","name":"_symbol","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1639:22:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":6828,"name":"string","nodeType":"ElementaryTypeName","src":"1639:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"private"},{"constant":false,"id":6831,"mutability":"mutable","name":"_decimals","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1667:23:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":6830,"name":"uint8","nodeType":"ElementaryTypeName","src":"1667:5:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"private"},{"body":{"id":6851,"nodeType":"Block","src":"2075:79:14","statements":[{"expression":{"argumentTypes":null,"id":6841,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":6839,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6827,"src":"2085:5:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":6840,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6834,"src":"2093:4:14","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2085:12:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":6842,"nodeType":"ExpressionStatement","src":"2085:12:14"},{"expression":{"argumentTypes":null,"id":6845,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":6843,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6829,"src":"2107:7:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":6844,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6836,"src":"2117:6:14","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2107:16:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":6846,"nodeType":"ExpressionStatement","src":"2107:16:14"},{"expression":{"argumentTypes":null,"id":6849,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":6847,"name":"_decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6831,"src":"2133:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3138","id":6848,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2145:2:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_18_by_1","typeString":"int_const 18"},"value":"18"},"src":"2133:14:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"id":6850,"nodeType":"ExpressionStatement","src":"2133:14:14"}]},"documentation":{"id":6832,"nodeType":"StructuredDocumentation","src":"1697:311:14","text":" @dev Sets the values for {name} and {symbol}, initializes {decimals} with\\n a default value of 18.\\n To select a different value for {decimals}, use {_setupDecimals}.\\n All three of these values are immutable: they can only be set once during\\n construction."},"id":6852,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6837,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6834,"mutability":"mutable","name":"name","nodeType":"VariableDeclaration","overrides":null,"scope":6852,"src":"2026:18:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6833,"name":"string","nodeType":"ElementaryTypeName","src":"2026:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":6836,"mutability":"mutable","name":"symbol","nodeType":"VariableDeclaration","overrides":null,"scope":6852,"src":"2046:20:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6835,"name":"string","nodeType":"ElementaryTypeName","src":"2046:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2025:42:14"},"returnParameters":{"id":6838,"nodeType":"ParameterList","parameters":[],"src":"2075:0:14"},"scope":7303,"src":"2013:141:14","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":6860,"nodeType":"Block","src":"2271:29:14","statements":[{"expression":{"argumentTypes":null,"id":6858,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6827,"src":"2288:5:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":6857,"id":6859,"nodeType":"Return","src":"2281:12:14"}]},"documentation":{"id":6853,"nodeType":"StructuredDocumentation","src":"2160:54:14","text":" @dev Returns the name of the token."},"functionSelector":"06fdde03","id":6861,"implemented":true,"kind":"function","modifiers":[],"name":"name","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6854,"nodeType":"ParameterList","parameters":[],"src":"2232:2:14"},"returnParameters":{"id":6857,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6856,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6861,"src":"2256:13:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6855,"name":"string","nodeType":"ElementaryTypeName","src":"2256:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2255:15:14"},"scope":7303,"src":"2219:81:14","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":6869,"nodeType":"Block","src":"2467:31:14","statements":[{"expression":{"argumentTypes":null,"id":6867,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6829,"src":"2484:7:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":6866,"id":6868,"nodeType":"Return","src":"2477:14:14"}]},"documentation":{"id":6862,"nodeType":"StructuredDocumentation","src":"2306:102:14","text":" @dev Returns the symbol of the token, usually a shorter version of the\\n name."},"functionSelector":"95d89b41","id":6870,"implemented":true,"kind":"function","modifiers":[],"name":"symbol","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6863,"nodeType":"ParameterList","parameters":[],"src":"2428:2:14"},"returnParameters":{"id":6866,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6865,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6870,"src":"2452:13:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6864,"name":"string","nodeType":"ElementaryTypeName","src":"2452:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2451:15:14"},"scope":7303,"src":"2413:85:14","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":6878,"nodeType":"Block","src":"3169:33:14","statements":[{"expression":{"argumentTypes":null,"id":6876,"name":"_decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6831,"src":"3186:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"functionReturnParameters":6875,"id":6877,"nodeType":"Return","src":"3179:16:14"}]},"documentation":{"id":6871,"nodeType":"StructuredDocumentation","src":"2504:612:14","text":" @dev Returns the number of decimals used to get its user representation.\\n For example, if `decimals` equals `2`, a balance of `505` tokens should\\n be displayed to a user as `5,05` (`505 / 10 ** 2`).\\n Tokens usually opt for a value of 18, imitating the relationship between\\n Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is\\n called.\\n NOTE: This information is only used for _display_ purposes: it in\\n no way affects any of the arithmetic of the contract, including\\n {IERC20-balanceOf} and {IERC20-transfer}."},"functionSelector":"313ce567","id":6879,"implemented":true,"kind":"function","modifiers":[],"name":"decimals","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6872,"nodeType":"ParameterList","parameters":[],"src":"3138:2:14"},"returnParameters":{"id":6875,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6874,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6879,"src":"3162:5:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":6873,"name":"uint8","nodeType":"ElementaryTypeName","src":"3162:5:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"internal"}],"src":"3161:7:14"},"scope":7303,"src":"3121:81:14","stateMutability":"view","virtual":false,"visibility":"public"},{"baseFunctions":[7312],"body":{"id":6888,"nodeType":"Block","src":"3324:36:14","statements":[{"expression":{"argumentTypes":null,"id":6886,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"3341:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":6885,"id":6887,"nodeType":"Return","src":"3334:19:14"}]},"documentation":{"id":6880,"nodeType":"StructuredDocumentation","src":"3208:49:14","text":" @dev See {IERC20-totalSupply}."},"functionSelector":"18160ddd","id":6889,"implemented":true,"kind":"function","modifiers":[],"name":"totalSupply","nodeType":"FunctionDefinition","overrides":{"id":6882,"nodeType":"OverrideSpecifier","overrides":[],"src":"3297:8:14"},"parameters":{"id":6881,"nodeType":"ParameterList","parameters":[],"src":"3282:2:14"},"returnParameters":{"id":6885,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6884,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6889,"src":"3315:7:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6883,"name":"uint256","nodeType":"ElementaryTypeName","src":"3315:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3314:9:14"},"scope":7303,"src":"3262:98:14","stateMutability":"view","virtual":false,"visibility":"public"},{"baseFunctions":[7320],"body":{"id":6902,"nodeType":"Block","src":"3493:42:14","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":6898,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"3510:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":6900,"indexExpression":{"argumentTypes":null,"id":6899,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6892,"src":"3520:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3510:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":6897,"id":6901,"nodeType":"Return","src":"3503:25:14"}]},"documentation":{"id":6890,"nodeType":"StructuredDocumentation","src":"3366:47:14","text":" @dev See {IERC20-balanceOf}."},"functionSelector":"70a08231","id":6903,"implemented":true,"kind":"function","modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","overrides":{"id":6894,"nodeType":"OverrideSpecifier","overrides":[],"src":"3466:8:14"},"parameters":{"id":6893,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6892,"mutability":"mutable","name":"account","nodeType":"VariableDeclaration","overrides":null,"scope":6903,"src":"3437:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6891,"name":"address","nodeType":"ElementaryTypeName","src":"3437:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3436:17:14"},"returnParameters":{"id":6897,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6896,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6903,"src":"3484:7:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6895,"name":"uint256","nodeType":"ElementaryTypeName","src":"3484:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3483:9:14"},"scope":7303,"src":"3418:117:14","stateMutability":"view","virtual":false,"visibility":"public"},{"baseFunctions":[7330],"body":{"id":6923,"nodeType":"Block","src":"3830:80:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6915,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"3850:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6916,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3850:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":6917,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6906,"src":"3864:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6918,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6908,"src":"3875:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6914,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7124,"src":"3840:9:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6919,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3840:42:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6920,"nodeType":"ExpressionStatement","src":"3840:42:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":6921,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3899:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":6913,"id":6922,"nodeType":"Return","src":"3892:11:14"}]},"documentation":{"id":6904,"nodeType":"StructuredDocumentation","src":"3541:192:14","text":" @dev See {IERC20-transfer}.\\n Requirements:\\n - `recipient` cannot be the zero address.\\n - the caller must have a balance of at least `amount`."},"functionSelector":"a9059cbb","id":6924,"implemented":true,"kind":"function","modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","overrides":{"id":6910,"nodeType":"OverrideSpecifier","overrides":[],"src":"3806:8:14"},"parameters":{"id":6909,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6906,"mutability":"mutable","name":"recipient","nodeType":"VariableDeclaration","overrides":null,"scope":6924,"src":"3756:17:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6905,"name":"address","nodeType":"ElementaryTypeName","src":"3756:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6908,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":6924,"src":"3775:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6907,"name":"uint256","nodeType":"ElementaryTypeName","src":"3775:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3755:35:14"},"returnParameters":{"id":6913,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6912,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6924,"src":"3824:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":6911,"name":"bool","nodeType":"ElementaryTypeName","src":"3824:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"3823:6:14"},"scope":7303,"src":"3738:172:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"baseFunctions":[7340],"body":{"id":6941,"nodeType":"Block","src":"4066:51:14","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":6935,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"4083:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":6937,"indexExpression":{"argumentTypes":null,"id":6936,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6927,"src":"4095:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4083:18:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":6939,"indexExpression":{"argumentTypes":null,"id":6938,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6929,"src":"4102:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4083:27:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":6934,"id":6940,"nodeType":"Return","src":"4076:34:14"}]},"documentation":{"id":6925,"nodeType":"StructuredDocumentation","src":"3916:47:14","text":" @dev See {IERC20-allowance}."},"functionSelector":"dd62ed3e","id":6942,"implemented":true,"kind":"function","modifiers":[],"name":"allowance","nodeType":"FunctionDefinition","overrides":{"id":6931,"nodeType":"OverrideSpecifier","overrides":[],"src":"4039:8:14"},"parameters":{"id":6930,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6927,"mutability":"mutable","name":"owner","nodeType":"VariableDeclaration","overrides":null,"scope":6942,"src":"3987:13:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6926,"name":"address","nodeType":"ElementaryTypeName","src":"3987:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6929,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":6942,"src":"4002:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6928,"name":"address","nodeType":"ElementaryTypeName","src":"4002:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3986:32:14"},"returnParameters":{"id":6934,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6933,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6942,"src":"4057:7:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6932,"name":"uint256","nodeType":"ElementaryTypeName","src":"4057:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4056:9:14"},"scope":7303,"src":"3968:149:14","stateMutability":"view","virtual":true,"visibility":"public"},{"baseFunctions":[7350],"body":{"id":6962,"nodeType":"Block","src":"4344:77:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6954,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"4363:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6955,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4363:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":6956,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6945,"src":"4377:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6957,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6947,"src":"4386:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6953,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"4354:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6958,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4354:39:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6959,"nodeType":"ExpressionStatement","src":"4354:39:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":6960,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"4410:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":6952,"id":6961,"nodeType":"Return","src":"4403:11:14"}]},"documentation":{"id":6943,"nodeType":"StructuredDocumentation","src":"4123:127:14","text":" @dev See {IERC20-approve}.\\n Requirements:\\n - `spender` cannot be the zero address."},"functionSelector":"095ea7b3","id":6963,"implemented":true,"kind":"function","modifiers":[],"name":"approve","nodeType":"FunctionDefinition","overrides":{"id":6949,"nodeType":"OverrideSpecifier","overrides":[],"src":"4320:8:14"},"parameters":{"id":6948,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6945,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":6963,"src":"4272:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6944,"name":"address","nodeType":"ElementaryTypeName","src":"4272:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6947,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":6963,"src":"4289:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6946,"name":"uint256","nodeType":"ElementaryTypeName","src":"4289:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4271:33:14"},"returnParameters":{"id":6952,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6951,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6963,"src":"4338:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":6950,"name":"bool","nodeType":"ElementaryTypeName","src":"4338:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"4337:6:14"},"scope":7303,"src":"4255:166:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"baseFunctions":[7362],"body":{"id":7000,"nodeType":"Block","src":"4993:205:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":6977,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6966,"src":"5013:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6978,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6968,"src":"5021:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6979,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6970,"src":"5032:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6976,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7124,"src":"5003:9:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6980,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5003:36:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6981,"nodeType":"ExpressionStatement","src":"5003:36:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":6983,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6966,"src":"5058:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6984,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5066:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6985,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5066:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":6993,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6970,"src":"5118:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365","id":6994,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"5126:42:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330","typeString":"literal_string \\"ERC20: transfer amount exceeds allowance\\""},"value":"ERC20: transfer amount exceeds allowance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330","typeString":"literal_string \\"ERC20: transfer amount exceeds allowance\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":6986,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"5080:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":6988,"indexExpression":{"argumentTypes":null,"id":6987,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6966,"src":"5092:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5080:19:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":6991,"indexExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6989,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5100:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6990,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5100:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5080:33:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":6992,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"5080:37:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":6995,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5080:89:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6982,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"5049:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6996,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5049:121:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6997,"nodeType":"ExpressionStatement","src":"5049:121:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":6998,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"5187:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":6975,"id":6999,"nodeType":"Return","src":"5180:11:14"}]},"documentation":{"id":6964,"nodeType":"StructuredDocumentation","src":"4427:449:14","text":" @dev See {IERC20-transferFrom}.\\n Emits an {Approval} event indicating the updated allowance. This is not\\n required by the EIP. See the note at the beginning of {ERC20};\\n Requirements:\\n - `sender` and `recipient` cannot be the zero address.\\n - `sender` must have a balance of at least `amount`.\\n - the caller must have allowance for ``sender``\'s tokens of at least\\n `amount`."},"functionSelector":"23b872dd","id":7001,"implemented":true,"kind":"function","modifiers":[],"name":"transferFrom","nodeType":"FunctionDefinition","overrides":{"id":6972,"nodeType":"OverrideSpecifier","overrides":[],"src":"4969:8:14"},"parameters":{"id":6971,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6966,"mutability":"mutable","name":"sender","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4903:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6965,"name":"address","nodeType":"ElementaryTypeName","src":"4903:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6968,"mutability":"mutable","name":"recipient","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4919:17:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6967,"name":"address","nodeType":"ElementaryTypeName","src":"4919:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6970,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4938:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6969,"name":"uint256","nodeType":"ElementaryTypeName","src":"4938:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4902:51:14"},"returnParameters":{"id":6975,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6974,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4987:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":6973,"name":"bool","nodeType":"ElementaryTypeName","src":"4987:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"4986:6:14"},"scope":7303,"src":"4881:317:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"body":{"id":7028,"nodeType":"Block","src":"5687:121:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7012,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5706:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7013,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5706:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7014,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7004,"src":"5720:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7022,"name":"addedValue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7006,"src":"5768:10:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7015,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"5729:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":7018,"indexExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7016,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5741:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7017,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5741:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5729:25:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7020,"indexExpression":{"argumentTypes":null,"id":7019,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7004,"src":"5755:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5729:34:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7021,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"5729:38:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7023,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5729:50:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7011,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"5697:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7024,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5697:83:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7025,"nodeType":"ExpressionStatement","src":"5697:83:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":7026,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"5797:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":7010,"id":7027,"nodeType":"Return","src":"5790:11:14"}]},"documentation":{"id":7002,"nodeType":"StructuredDocumentation","src":"5204:384:14","text":" @dev Atomically increases the allowance granted to `spender` by the caller.\\n This is an alternative to {approve} that can be used as a mitigation for\\n problems described in {IERC20-approve}.\\n Emits an {Approval} event indicating the updated allowance.\\n Requirements:\\n - `spender` cannot be the zero address."},"functionSelector":"39509351","id":7029,"implemented":true,"kind":"function","modifiers":[],"name":"increaseAllowance","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7007,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7004,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":7029,"src":"5620:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7003,"name":"address","nodeType":"ElementaryTypeName","src":"5620:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7006,"mutability":"mutable","name":"addedValue","nodeType":"VariableDeclaration","overrides":null,"scope":7029,"src":"5637:18:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7005,"name":"uint256","nodeType":"ElementaryTypeName","src":"5637:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"5619:37:14"},"returnParameters":{"id":7010,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7009,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":7029,"src":"5681:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":7008,"name":"bool","nodeType":"ElementaryTypeName","src":"5681:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"5680:6:14"},"scope":7303,"src":"5593:215:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"body":{"id":7057,"nodeType":"Block","src":"6394:167:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7040,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"6413:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7041,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6413:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7042,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7032,"src":"6427:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7050,"name":"subtractedValue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7034,"src":"6475:15:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f","id":7051,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"6492:39:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8","typeString":"literal_string \\"ERC20: decreased allowance below zero\\""},"value":"ERC20: decreased allowance below zero"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8","typeString":"literal_string \\"ERC20: decreased allowance below zero\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7043,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"6436:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":7046,"indexExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7044,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"6448:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7045,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6448:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"6436:25:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7048,"indexExpression":{"argumentTypes":null,"id":7047,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7032,"src":"6462:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"6436:34:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7049,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"6436:38:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":7052,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6436:96:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7039,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"6404:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7053,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6404:129:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7054,"nodeType":"ExpressionStatement","src":"6404:129:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":7055,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"6550:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":7038,"id":7056,"nodeType":"Return","src":"6543:11:14"}]},"documentation":{"id":7030,"nodeType":"StructuredDocumentation","src":"5814:476:14","text":" @dev Atomically decreases the allowance granted to `spender` by the caller.\\n This is an alternative to {approve} that can be used as a mitigation for\\n problems described in {IERC20-approve}.\\n Emits an {Approval} event indicating the updated allowance.\\n Requirements:\\n - `spender` cannot be the zero address.\\n - `spender` must have allowance for the caller of at least\\n `subtractedValue`."},"functionSelector":"a457c2d7","id":7058,"implemented":true,"kind":"function","modifiers":[],"name":"decreaseAllowance","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7035,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7032,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":7058,"src":"6322:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7031,"name":"address","nodeType":"ElementaryTypeName","src":"6322:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7034,"mutability":"mutable","name":"subtractedValue","nodeType":"VariableDeclaration","overrides":null,"scope":7058,"src":"6339:23:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7033,"name":"uint256","nodeType":"ElementaryTypeName","src":"6339:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"6321:42:14"},"returnParameters":{"id":7038,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7037,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":7058,"src":"6388:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":7036,"name":"bool","nodeType":"ElementaryTypeName","src":"6388:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"6387:6:14"},"scope":7303,"src":"6295:266:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"body":{"id":7123,"nodeType":"Block","src":"7122:443:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7074,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7069,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7140:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7072,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"7158:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7071,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"7150:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7070,"name":"address","nodeType":"ElementaryTypeName","src":"7150:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7073,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7150:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"7140:20:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e736665722066726f6d20746865207a65726f2061646472657373","id":7075,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7162:39:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea","typeString":"literal_string \\"ERC20: transfer from the zero address\\""},"value":"ERC20: transfer from the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea","typeString":"literal_string \\"ERC20: transfer from the zero address\\""}],"id":7068,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"7132:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7076,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7132:70:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7077,"nodeType":"ExpressionStatement","src":"7132:70:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7084,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7079,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7220:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7082,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"7241:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7081,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"7233:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7080,"name":"address","nodeType":"ElementaryTypeName","src":"7233:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7083,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7233:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"7220:23:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e7366657220746f20746865207a65726f2061646472657373","id":7085,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7245:37:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f","typeString":"literal_string \\"ERC20: transfer to the zero address\\""},"value":"ERC20: transfer to the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f","typeString":"literal_string \\"ERC20: transfer to the zero address\\""}],"id":7078,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"7212:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7086,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7212:71:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7087,"nodeType":"ExpressionStatement","src":"7212:71:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7089,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7315:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7090,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7323:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7091,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7334:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7088,"name":"_beforeTokenTransfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7302,"src":"7294:20:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7092,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7294:47:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7093,"nodeType":"ExpressionStatement","src":"7294:47:14"},{"expression":{"argumentTypes":null,"id":7104,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7094,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7352:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7096,"indexExpression":{"argumentTypes":null,"id":7095,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7362:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"7352:17:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7101,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7394:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365","id":7102,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7402:40:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6","typeString":"literal_string \\"ERC20: transfer amount exceeds balance\\""},"value":"ERC20: transfer amount exceeds balance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6","typeString":"literal_string \\"ERC20: transfer amount exceeds balance\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7097,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7372:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7099,"indexExpression":{"argumentTypes":null,"id":7098,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7382:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"7372:17:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7100,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"7372:21:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":7103,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7372:71:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"7352:91:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7105,"nodeType":"ExpressionStatement","src":"7352:91:14"},{"expression":{"argumentTypes":null,"id":7115,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7106,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7453:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7108,"indexExpression":{"argumentTypes":null,"id":7107,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7463:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"7453:20:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7113,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7501:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7109,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7476:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7111,"indexExpression":{"argumentTypes":null,"id":7110,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7486:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"7476:20:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7112,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"7476:24:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7114,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7476:32:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"7453:55:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7116,"nodeType":"ExpressionStatement","src":"7453:55:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7118,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7532:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7119,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7540:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7120,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7551:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7117,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7371,"src":"7523:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7121,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7523:35:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7122,"nodeType":"EmitStatement","src":"7518:40:14"}]},"documentation":{"id":7059,"nodeType":"StructuredDocumentation","src":"6567:463:14","text":" @dev Moves tokens `amount` from `sender` to `recipient`.\\n This is internal function is equivalent to {transfer}, and can be used to\\n e.g. implement automatic token fees, slashing mechanisms, etc.\\n Emits a {Transfer} event.\\n Requirements:\\n - `sender` cannot be the zero address.\\n - `recipient` cannot be the zero address.\\n - `sender` must have a balance of at least `amount`."},"id":7124,"implemented":true,"kind":"function","modifiers":[],"name":"_transfer","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7066,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7061,"mutability":"mutable","name":"sender","nodeType":"VariableDeclaration","overrides":null,"scope":7124,"src":"7054:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7060,"name":"address","nodeType":"ElementaryTypeName","src":"7054:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7063,"mutability":"mutable","name":"recipient","nodeType":"VariableDeclaration","overrides":null,"scope":7124,"src":"7070:17:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7062,"name":"address","nodeType":"ElementaryTypeName","src":"7070:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7065,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7124,"src":"7089:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7064,"name":"uint256","nodeType":"ElementaryTypeName","src":"7089:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"7053:51:14"},"returnParameters":{"id":7067,"nodeType":"ParameterList","parameters":[],"src":"7122:0:14"},"scope":7303,"src":"7035:530:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7178,"nodeType":"Block","src":"7900:305:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7138,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7133,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"7918:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7136,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"7937:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7135,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"7929:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7134,"name":"address","nodeType":"ElementaryTypeName","src":"7929:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7137,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7929:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"7918:21:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a206d696e7420746f20746865207a65726f2061646472657373","id":7139,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7941:33:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e","typeString":"literal_string \\"ERC20: mint to the zero address\\""},"value":"ERC20: mint to the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e","typeString":"literal_string \\"ERC20: mint to the zero address\\""}],"id":7132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"7910:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7140,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7910:65:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7141,"nodeType":"ExpressionStatement","src":"7910:65:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7145,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8015:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7144,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8007:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7143,"name":"address","nodeType":"ElementaryTypeName","src":"8007:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7146,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8007:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7147,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8019:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7148,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8028:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7142,"name":"_beforeTokenTransfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7302,"src":"7986:20:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7149,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7986:49:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7150,"nodeType":"ExpressionStatement","src":"7986:49:14"},{"expression":{"argumentTypes":null,"id":7156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":7151,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8046:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7154,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8078:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":7152,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8061:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7153,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"8061:16:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7155,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8061:24:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8046:39:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7157,"nodeType":"ExpressionStatement","src":"8046:39:14"},{"expression":{"argumentTypes":null,"id":7167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7158,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8095:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7160,"indexExpression":{"argumentTypes":null,"id":7159,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8105:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"8095:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7165,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8139:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7161,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8116:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7163,"indexExpression":{"argumentTypes":null,"id":7162,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8126:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"8116:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7164,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"8116:22:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7166,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8116:30:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8095:51:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7168,"nodeType":"ExpressionStatement","src":"8095:51:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7172,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8178:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7171,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8170:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7170,"name":"address","nodeType":"ElementaryTypeName","src":"8170:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7173,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8170:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7174,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8182:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7175,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8191:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7169,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7371,"src":"8161:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7176,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8161:37:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7177,"nodeType":"EmitStatement","src":"8156:42:14"}]},"documentation":{"id":7125,"nodeType":"StructuredDocumentation","src":"7571:259:14","text":"@dev Creates `amount` tokens and assigns them to `account`, increasing\\n the total supply.\\n Emits a {Transfer} event with `from` set to the zero address.\\n Requirements\\n - `to` cannot be the zero address."},"id":7179,"implemented":true,"kind":"function","modifiers":[],"name":"_mint","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7130,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7127,"mutability":"mutable","name":"account","nodeType":"VariableDeclaration","overrides":null,"scope":7179,"src":"7850:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7126,"name":"address","nodeType":"ElementaryTypeName","src":"7850:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7129,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7179,"src":"7867:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7128,"name":"uint256","nodeType":"ElementaryTypeName","src":"7867:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"7849:33:14"},"returnParameters":{"id":7131,"nodeType":"ParameterList","parameters":[],"src":"7900:0:14"},"scope":7303,"src":"7835:370:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7234,"nodeType":"Block","src":"8589:345:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7193,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7188,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8607:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7191,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8626:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7190,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8618:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7189,"name":"address","nodeType":"ElementaryTypeName","src":"8618:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7192,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8618:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"8607:21:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a206275726e2066726f6d20746865207a65726f2061646472657373","id":7194,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"8630:35:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f","typeString":"literal_string \\"ERC20: burn from the zero address\\""},"value":"ERC20: burn from the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f","typeString":"literal_string \\"ERC20: burn from the zero address\\""}],"id":7187,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"8599:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7195,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8599:67:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7196,"nodeType":"ExpressionStatement","src":"8599:67:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7198,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8698:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7201,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8715:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7200,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8707:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7199,"name":"address","nodeType":"ElementaryTypeName","src":"8707:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7202,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8707:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7203,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8719:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7197,"name":"_beforeTokenTransfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7302,"src":"8677:20:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7204,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8677:49:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7205,"nodeType":"ExpressionStatement","src":"8677:49:14"},{"expression":{"argumentTypes":null,"id":7216,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7206,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8737:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7208,"indexExpression":{"argumentTypes":null,"id":7207,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8747:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"8737:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7213,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8781:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a206275726e20616d6f756e7420657863656564732062616c616e6365","id":7214,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"8789:36:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd","typeString":"literal_string \\"ERC20: burn amount exceeds balance\\""},"value":"ERC20: burn amount exceeds balance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd","typeString":"literal_string \\"ERC20: burn amount exceeds balance\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7209,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8758:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7211,"indexExpression":{"argumentTypes":null,"id":7210,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8768:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"8758:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7212,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"8758:22:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":7215,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8758:68:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8737:89:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7217,"nodeType":"ExpressionStatement","src":"8737:89:14"},{"expression":{"argumentTypes":null,"id":7223,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":7218,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8836:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7221,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8868:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":7219,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8851:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7220,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6646,"src":"8851:16:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7222,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8851:24:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8836:39:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7224,"nodeType":"ExpressionStatement","src":"8836:39:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7226,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8899:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7229,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8916:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7228,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8908:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7227,"name":"address","nodeType":"ElementaryTypeName","src":"8908:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7230,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8908:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7231,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8920:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7225,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7371,"src":"8890:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7232,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8890:37:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7233,"nodeType":"EmitStatement","src":"8885:42:14"}]},"documentation":{"id":7180,"nodeType":"StructuredDocumentation","src":"8211:308:14","text":" @dev Destroys `amount` tokens from `account`, reducing the\\n total supply.\\n Emits a {Transfer} event with `to` set to the zero address.\\n Requirements\\n - `account` cannot be the zero address.\\n - `account` must have at least `amount` tokens."},"id":7235,"implemented":true,"kind":"function","modifiers":[],"name":"_burn","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7185,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7182,"mutability":"mutable","name":"account","nodeType":"VariableDeclaration","overrides":null,"scope":7235,"src":"8539:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7181,"name":"address","nodeType":"ElementaryTypeName","src":"8539:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7184,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7235,"src":"8556:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7183,"name":"uint256","nodeType":"ElementaryTypeName","src":"8556:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"8538:33:14"},"returnParameters":{"id":7186,"nodeType":"ParameterList","parameters":[],"src":"8589:0:14"},"scope":7303,"src":"8524:410:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7279,"nodeType":"Block","src":"9440:257:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7251,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7246,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7238,"src":"9458:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7249,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"9475:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7248,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"9467:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7247,"name":"address","nodeType":"ElementaryTypeName","src":"9467:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7250,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9467:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"9458:19:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373","id":7252,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"9479:38:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208","typeString":"literal_string \\"ERC20: approve from the zero address\\""},"value":"ERC20: approve from the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208","typeString":"literal_string \\"ERC20: approve from the zero address\\""}],"id":7245,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"9450:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7253,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9450:68:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7254,"nodeType":"ExpressionStatement","src":"9450:68:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7261,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7256,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7240,"src":"9536:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7259,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"9555:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7258,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"9547:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7257,"name":"address","nodeType":"ElementaryTypeName","src":"9547:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7260,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9547:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"9536:21:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a20617070726f766520746f20746865207a65726f2061646472657373","id":7262,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"9559:36:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029","typeString":"literal_string \\"ERC20: approve to the zero address\\""},"value":"ERC20: approve to the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029","typeString":"literal_string \\"ERC20: approve to the zero address\\""}],"id":7255,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"9528:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7263,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9528:68:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7264,"nodeType":"ExpressionStatement","src":"9528:68:14"},{"expression":{"argumentTypes":null,"id":7271,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7265,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"9607:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":7268,"indexExpression":{"argumentTypes":null,"id":7266,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7238,"src":"9619:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"9607:18:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7269,"indexExpression":{"argumentTypes":null,"id":7267,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7240,"src":"9626:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"9607:27:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":7270,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7242,"src":"9637:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"9607:36:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7272,"nodeType":"ExpressionStatement","src":"9607:36:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7274,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7238,"src":"9667:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7275,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7240,"src":"9674:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7276,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7242,"src":"9683:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7273,"name":"Approval","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7380,"src":"9658:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7277,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9658:32:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7278,"nodeType":"EmitStatement","src":"9653:37:14"}]},"documentation":{"id":7236,"nodeType":"StructuredDocumentation","src":"8940:412:14","text":" @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n This internal function is equivalent to `approve`, and can be used to\\n e.g. set automatic allowances for certain subsystems, etc.\\n Emits an {Approval} event.\\n Requirements:\\n - `owner` cannot be the zero address.\\n - `spender` cannot be the zero address."},"id":7280,"implemented":true,"kind":"function","modifiers":[],"name":"_approve","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7243,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7238,"mutability":"mutable","name":"owner","nodeType":"VariableDeclaration","overrides":null,"scope":7280,"src":"9375:13:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7237,"name":"address","nodeType":"ElementaryTypeName","src":"9375:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7240,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":7280,"src":"9390:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7239,"name":"address","nodeType":"ElementaryTypeName","src":"9390:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7242,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7280,"src":"9407:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7241,"name":"uint256","nodeType":"ElementaryTypeName","src":"9407:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"9374:48:14"},"returnParameters":{"id":7244,"nodeType":"ParameterList","parameters":[],"src":"9440:0:14"},"scope":7303,"src":"9357:340:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7290,"nodeType":"Block","src":"10070:38:14","statements":[{"expression":{"argumentTypes":null,"id":7288,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":7286,"name":"_decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6831,"src":"10080:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":7287,"name":"decimals_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7283,"src":"10092:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"src":"10080:21:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"id":7289,"nodeType":"ExpressionStatement","src":"10080:21:14"}]},"documentation":{"id":7281,"nodeType":"StructuredDocumentation","src":"9703:312:14","text":" @dev Sets {decimals} to a value other than the default one of 18.\\n WARNING: This function should only be called from the constructor. Most\\n applications that interact with token contracts will not expect\\n {decimals} to ever change, and may work incorrectly if it does."},"id":7291,"implemented":true,"kind":"function","modifiers":[],"name":"_setupDecimals","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7284,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7283,"mutability":"mutable","name":"decimals_","nodeType":"VariableDeclaration","overrides":null,"scope":7291,"src":"10044:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":7282,"name":"uint8","nodeType":"ElementaryTypeName","src":"10044:5:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"internal"}],"src":"10043:17:14"},"returnParameters":{"id":7285,"nodeType":"ParameterList","parameters":[],"src":"10070:0:14"},"scope":7303,"src":"10020:88:14","stateMutability":"nonpayable","virtual":false,"visibility":"internal"},{"body":{"id":7301,"nodeType":"Block","src":"10784:3:14","statements":[]},"documentation":{"id":7292,"nodeType":"StructuredDocumentation","src":"10114:576:14","text":" @dev Hook that is called before any transfer of tokens. This includes\\n minting and burning.\\n Calling conditions:\\n - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n will be to transferred to `to`.\\n - when `from` is zero, `amount` tokens will be minted for `to`.\\n - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\\n - `from` and `to` are never both zero.\\n To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]."},"id":7302,"implemented":true,"kind":"function","modifiers":[],"name":"_beforeTokenTransfer","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7299,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7294,"mutability":"mutable","name":"from","nodeType":"VariableDeclaration","overrides":null,"scope":7302,"src":"10725:12:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7293,"name":"address","nodeType":"ElementaryTypeName","src":"10725:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7296,"mutability":"mutable","name":"to","nodeType":"VariableDeclaration","overrides":null,"scope":7302,"src":"10739:10:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7295,"name":"address","nodeType":"ElementaryTypeName","src":"10739:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7298,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7302,"src":"10751:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7297,"name":"uint256","nodeType":"ElementaryTypeName","src":"10751:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"10724:42:14"},"returnParameters":{"id":7300,"nodeType":"ParameterList","parameters":[],"src":"10784:0:14"},"scope":7303,"src":"10695:92:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"}],"scope":7304,"src":"1345:9444:14"}],"src":"33:10757:14"},"legacyAST":{"absolutePath":"@openzeppelin/contracts/token/ERC20/ERC20.sol","exportedSymbols":{"ERC20":[7303]},"id":7304,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":6798,"literals":["solidity","^","0.6",".0"],"nodeType":"PragmaDirective","src":"33:23:14"},{"absolutePath":"@openzeppelin/contracts/GSN/Context.sol","file":"../../GSN/Context.sol","id":6799,"nodeType":"ImportDirective","scope":7304,"sourceUnit":6492,"src":"58:31:14","symbolAliases":[],"unitAlias":""},{"absolutePath":"@openzeppelin/contracts/token/ERC20/IERC20.sol","file":"./IERC20.sol","id":6800,"nodeType":"ImportDirective","scope":7304,"sourceUnit":7382,"src":"90:22:14","symbolAliases":[],"unitAlias":""},{"absolutePath":"@openzeppelin/contracts/math/SafeMath.sol","file":"../../math/SafeMath.sol","id":6801,"nodeType":"ImportDirective","scope":7304,"sourceUnit":6797,"src":"113:33:14","symbolAliases":[],"unitAlias":""},{"absolutePath":"@openzeppelin/contracts/utils/Address.sol","file":"../../utils/Address.sol","id":6802,"nodeType":"ImportDirective","scope":7304,"sourceUnit":7790,"src":"147:33:14","symbolAliases":[],"unitAlias":""},{"abstract":false,"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":6804,"name":"Context","nodeType":"UserDefinedTypeName","referencedDeclaration":6491,"src":"1363:7:14","typeDescriptions":{"typeIdentifier":"t_contract$_Context_$6491","typeString":"contract Context"}},"id":6805,"nodeType":"InheritanceSpecifier","src":"1363:7:14"},{"arguments":null,"baseName":{"contractScope":null,"id":6806,"name":"IERC20","nodeType":"UserDefinedTypeName","referencedDeclaration":7381,"src":"1372:6:14","typeDescriptions":{"typeIdentifier":"t_contract$_IERC20_$7381","typeString":"contract IERC20"}},"id":6807,"nodeType":"InheritanceSpecifier","src":"1372:6:14"}],"contractDependencies":[6491,7381],"contractKind":"contract","documentation":{"id":6803,"nodeType":"StructuredDocumentation","src":"182:1162:14","text":" @dev Implementation of the {IERC20} interface.\\n This implementation is agnostic to the way tokens are created. This means\\n that a supply mechanism has to be added in a derived contract using {_mint}.\\n For a generic mechanism see {ERC20PresetMinterPauser}.\\n TIP: For a detailed writeup see our guide\\n https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n to implement supply mechanisms].\\n We have followed general OpenZeppelin guidelines: functions revert instead\\n of returning `false` on failure. This behavior is nonetheless conventional\\n and does not conflict with the expectations of ERC20 applications.\\n Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n This allows applications to reconstruct the allowance for all accounts just\\n by listening to said events. Other implementations of the EIP may not emit\\n these events, as it isn\'t required by the specification.\\n Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n functions have been added to mitigate the well-known issues around setting\\n allowances. See {IERC20-approve}."},"fullyImplemented":true,"id":7303,"linearizedBaseContracts":[7303,7381,6491],"name":"ERC20","nodeType":"ContractDefinition","nodes":[{"id":6810,"libraryName":{"contractScope":null,"id":6808,"name":"SafeMath","nodeType":"UserDefinedTypeName","referencedDeclaration":6796,"src":"1391:8:14","typeDescriptions":{"typeIdentifier":"t_contract$_SafeMath_$6796","typeString":"library SafeMath"}},"nodeType":"UsingForDirective","src":"1385:27:14","typeName":{"id":6809,"name":"uint256","nodeType":"ElementaryTypeName","src":"1404:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},{"id":6813,"libraryName":{"contractScope":null,"id":6811,"name":"Address","nodeType":"UserDefinedTypeName","referencedDeclaration":7789,"src":"1423:7:14","typeDescriptions":{"typeIdentifier":"t_contract$_Address_$7789","typeString":"library Address"}},"nodeType":"UsingForDirective","src":"1417:26:14","typeName":{"id":6812,"name":"address","nodeType":"ElementaryTypeName","src":"1435:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}},{"constant":false,"id":6817,"mutability":"mutable","name":"_balances","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1449:46:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":6816,"keyType":{"id":6814,"name":"address","nodeType":"ElementaryTypeName","src":"1458:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"1449:28:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":6815,"name":"uint256","nodeType":"ElementaryTypeName","src":"1469:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"private"},{"constant":false,"id":6823,"mutability":"mutable","name":"_allowances","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1502:69:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"},"typeName":{"id":6822,"keyType":{"id":6818,"name":"address","nodeType":"ElementaryTypeName","src":"1511:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"1502:49:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"},"valueType":{"id":6821,"keyType":{"id":6819,"name":"address","nodeType":"ElementaryTypeName","src":"1531:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"1522:28:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":6820,"name":"uint256","nodeType":"ElementaryTypeName","src":"1542:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}}},"value":null,"visibility":"private"},{"constant":false,"id":6825,"mutability":"mutable","name":"_totalSupply","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1578:28:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6824,"name":"uint256","nodeType":"ElementaryTypeName","src":"1578:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"private"},{"constant":false,"id":6827,"mutability":"mutable","name":"_name","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1613:20:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":6826,"name":"string","nodeType":"ElementaryTypeName","src":"1613:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"private"},{"constant":false,"id":6829,"mutability":"mutable","name":"_symbol","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1639:22:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string"},"typeName":{"id":6828,"name":"string","nodeType":"ElementaryTypeName","src":"1639:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"private"},{"constant":false,"id":6831,"mutability":"mutable","name":"_decimals","nodeType":"VariableDeclaration","overrides":null,"scope":7303,"src":"1667:23:14","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":6830,"name":"uint8","nodeType":"ElementaryTypeName","src":"1667:5:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"private"},{"body":{"id":6851,"nodeType":"Block","src":"2075:79:14","statements":[{"expression":{"argumentTypes":null,"id":6841,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":6839,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6827,"src":"2085:5:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":6840,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6834,"src":"2093:4:14","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2085:12:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":6842,"nodeType":"ExpressionStatement","src":"2085:12:14"},{"expression":{"argumentTypes":null,"id":6845,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":6843,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6829,"src":"2107:7:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":6844,"name":"symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6836,"src":"2117:6:14","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2107:16:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":6846,"nodeType":"ExpressionStatement","src":"2107:16:14"},{"expression":{"argumentTypes":null,"id":6849,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":6847,"name":"_decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6831,"src":"2133:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3138","id":6848,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"2145:2:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_18_by_1","typeString":"int_const 18"},"value":"18"},"src":"2133:14:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"id":6850,"nodeType":"ExpressionStatement","src":"2133:14:14"}]},"documentation":{"id":6832,"nodeType":"StructuredDocumentation","src":"1697:311:14","text":" @dev Sets the values for {name} and {symbol}, initializes {decimals} with\\n a default value of 18.\\n To select a different value for {decimals}, use {_setupDecimals}.\\n All three of these values are immutable: they can only be set once during\\n construction."},"id":6852,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6837,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6834,"mutability":"mutable","name":"name","nodeType":"VariableDeclaration","overrides":null,"scope":6852,"src":"2026:18:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6833,"name":"string","nodeType":"ElementaryTypeName","src":"2026:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":6836,"mutability":"mutable","name":"symbol","nodeType":"VariableDeclaration","overrides":null,"scope":6852,"src":"2046:20:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6835,"name":"string","nodeType":"ElementaryTypeName","src":"2046:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2025:42:14"},"returnParameters":{"id":6838,"nodeType":"ParameterList","parameters":[],"src":"2075:0:14"},"scope":7303,"src":"2013:141:14","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":6860,"nodeType":"Block","src":"2271:29:14","statements":[{"expression":{"argumentTypes":null,"id":6858,"name":"_name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6827,"src":"2288:5:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":6857,"id":6859,"nodeType":"Return","src":"2281:12:14"}]},"documentation":{"id":6853,"nodeType":"StructuredDocumentation","src":"2160:54:14","text":" @dev Returns the name of the token."},"functionSelector":"06fdde03","id":6861,"implemented":true,"kind":"function","modifiers":[],"name":"name","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6854,"nodeType":"ParameterList","parameters":[],"src":"2232:2:14"},"returnParameters":{"id":6857,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6856,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6861,"src":"2256:13:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6855,"name":"string","nodeType":"ElementaryTypeName","src":"2256:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2255:15:14"},"scope":7303,"src":"2219:81:14","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":6869,"nodeType":"Block","src":"2467:31:14","statements":[{"expression":{"argumentTypes":null,"id":6867,"name":"_symbol","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6829,"src":"2484:7:14","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"functionReturnParameters":6866,"id":6868,"nodeType":"Return","src":"2477:14:14"}]},"documentation":{"id":6862,"nodeType":"StructuredDocumentation","src":"2306:102:14","text":" @dev Returns the symbol of the token, usually a shorter version of the\\n name."},"functionSelector":"95d89b41","id":6870,"implemented":true,"kind":"function","modifiers":[],"name":"symbol","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6863,"nodeType":"ParameterList","parameters":[],"src":"2428:2:14"},"returnParameters":{"id":6866,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6865,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6870,"src":"2452:13:14","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":6864,"name":"string","nodeType":"ElementaryTypeName","src":"2452:6:14","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2451:15:14"},"scope":7303,"src":"2413:85:14","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":6878,"nodeType":"Block","src":"3169:33:14","statements":[{"expression":{"argumentTypes":null,"id":6876,"name":"_decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6831,"src":"3186:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"functionReturnParameters":6875,"id":6877,"nodeType":"Return","src":"3179:16:14"}]},"documentation":{"id":6871,"nodeType":"StructuredDocumentation","src":"2504:612:14","text":" @dev Returns the number of decimals used to get its user representation.\\n For example, if `decimals` equals `2`, a balance of `505` tokens should\\n be displayed to a user as `5,05` (`505 / 10 ** 2`).\\n Tokens usually opt for a value of 18, imitating the relationship between\\n Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is\\n called.\\n NOTE: This information is only used for _display_ purposes: it in\\n no way affects any of the arithmetic of the contract, including\\n {IERC20-balanceOf} and {IERC20-transfer}."},"functionSelector":"313ce567","id":6879,"implemented":true,"kind":"function","modifiers":[],"name":"decimals","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":6872,"nodeType":"ParameterList","parameters":[],"src":"3138:2:14"},"returnParameters":{"id":6875,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6874,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6879,"src":"3162:5:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":6873,"name":"uint8","nodeType":"ElementaryTypeName","src":"3162:5:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"internal"}],"src":"3161:7:14"},"scope":7303,"src":"3121:81:14","stateMutability":"view","virtual":false,"visibility":"public"},{"baseFunctions":[7312],"body":{"id":6888,"nodeType":"Block","src":"3324:36:14","statements":[{"expression":{"argumentTypes":null,"id":6886,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"3341:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":6885,"id":6887,"nodeType":"Return","src":"3334:19:14"}]},"documentation":{"id":6880,"nodeType":"StructuredDocumentation","src":"3208:49:14","text":" @dev See {IERC20-totalSupply}."},"functionSelector":"18160ddd","id":6889,"implemented":true,"kind":"function","modifiers":[],"name":"totalSupply","nodeType":"FunctionDefinition","overrides":{"id":6882,"nodeType":"OverrideSpecifier","overrides":[],"src":"3297:8:14"},"parameters":{"id":6881,"nodeType":"ParameterList","parameters":[],"src":"3282:2:14"},"returnParameters":{"id":6885,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6884,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6889,"src":"3315:7:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6883,"name":"uint256","nodeType":"ElementaryTypeName","src":"3315:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3314:9:14"},"scope":7303,"src":"3262:98:14","stateMutability":"view","virtual":false,"visibility":"public"},{"baseFunctions":[7320],"body":{"id":6902,"nodeType":"Block","src":"3493:42:14","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":6898,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"3510:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":6900,"indexExpression":{"argumentTypes":null,"id":6899,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6892,"src":"3520:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3510:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":6897,"id":6901,"nodeType":"Return","src":"3503:25:14"}]},"documentation":{"id":6890,"nodeType":"StructuredDocumentation","src":"3366:47:14","text":" @dev See {IERC20-balanceOf}."},"functionSelector":"70a08231","id":6903,"implemented":true,"kind":"function","modifiers":[],"name":"balanceOf","nodeType":"FunctionDefinition","overrides":{"id":6894,"nodeType":"OverrideSpecifier","overrides":[],"src":"3466:8:14"},"parameters":{"id":6893,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6892,"mutability":"mutable","name":"account","nodeType":"VariableDeclaration","overrides":null,"scope":6903,"src":"3437:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6891,"name":"address","nodeType":"ElementaryTypeName","src":"3437:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3436:17:14"},"returnParameters":{"id":6897,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6896,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6903,"src":"3484:7:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6895,"name":"uint256","nodeType":"ElementaryTypeName","src":"3484:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3483:9:14"},"scope":7303,"src":"3418:117:14","stateMutability":"view","virtual":false,"visibility":"public"},{"baseFunctions":[7330],"body":{"id":6923,"nodeType":"Block","src":"3830:80:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6915,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"3850:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6916,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3850:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":6917,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6906,"src":"3864:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6918,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6908,"src":"3875:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6914,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7124,"src":"3840:9:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6919,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3840:42:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6920,"nodeType":"ExpressionStatement","src":"3840:42:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":6921,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3899:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":6913,"id":6922,"nodeType":"Return","src":"3892:11:14"}]},"documentation":{"id":6904,"nodeType":"StructuredDocumentation","src":"3541:192:14","text":" @dev See {IERC20-transfer}.\\n Requirements:\\n - `recipient` cannot be the zero address.\\n - the caller must have a balance of at least `amount`."},"functionSelector":"a9059cbb","id":6924,"implemented":true,"kind":"function","modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","overrides":{"id":6910,"nodeType":"OverrideSpecifier","overrides":[],"src":"3806:8:14"},"parameters":{"id":6909,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6906,"mutability":"mutable","name":"recipient","nodeType":"VariableDeclaration","overrides":null,"scope":6924,"src":"3756:17:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6905,"name":"address","nodeType":"ElementaryTypeName","src":"3756:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6908,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":6924,"src":"3775:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6907,"name":"uint256","nodeType":"ElementaryTypeName","src":"3775:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3755:35:14"},"returnParameters":{"id":6913,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6912,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6924,"src":"3824:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":6911,"name":"bool","nodeType":"ElementaryTypeName","src":"3824:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"3823:6:14"},"scope":7303,"src":"3738:172:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"baseFunctions":[7340],"body":{"id":6941,"nodeType":"Block","src":"4066:51:14","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":6935,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"4083:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":6937,"indexExpression":{"argumentTypes":null,"id":6936,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6927,"src":"4095:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4083:18:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":6939,"indexExpression":{"argumentTypes":null,"id":6938,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6929,"src":"4102:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4083:27:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":6934,"id":6940,"nodeType":"Return","src":"4076:34:14"}]},"documentation":{"id":6925,"nodeType":"StructuredDocumentation","src":"3916:47:14","text":" @dev See {IERC20-allowance}."},"functionSelector":"dd62ed3e","id":6942,"implemented":true,"kind":"function","modifiers":[],"name":"allowance","nodeType":"FunctionDefinition","overrides":{"id":6931,"nodeType":"OverrideSpecifier","overrides":[],"src":"4039:8:14"},"parameters":{"id":6930,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6927,"mutability":"mutable","name":"owner","nodeType":"VariableDeclaration","overrides":null,"scope":6942,"src":"3987:13:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6926,"name":"address","nodeType":"ElementaryTypeName","src":"3987:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6929,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":6942,"src":"4002:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6928,"name":"address","nodeType":"ElementaryTypeName","src":"4002:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3986:32:14"},"returnParameters":{"id":6934,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6933,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6942,"src":"4057:7:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6932,"name":"uint256","nodeType":"ElementaryTypeName","src":"4057:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4056:9:14"},"scope":7303,"src":"3968:149:14","stateMutability":"view","virtual":true,"visibility":"public"},{"baseFunctions":[7350],"body":{"id":6962,"nodeType":"Block","src":"4344:77:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6954,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"4363:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6955,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4363:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":6956,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6945,"src":"4377:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6957,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6947,"src":"4386:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6953,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"4354:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6958,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"4354:39:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6959,"nodeType":"ExpressionStatement","src":"4354:39:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":6960,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"4410:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":6952,"id":6961,"nodeType":"Return","src":"4403:11:14"}]},"documentation":{"id":6943,"nodeType":"StructuredDocumentation","src":"4123:127:14","text":" @dev See {IERC20-approve}.\\n Requirements:\\n - `spender` cannot be the zero address."},"functionSelector":"095ea7b3","id":6963,"implemented":true,"kind":"function","modifiers":[],"name":"approve","nodeType":"FunctionDefinition","overrides":{"id":6949,"nodeType":"OverrideSpecifier","overrides":[],"src":"4320:8:14"},"parameters":{"id":6948,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6945,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":6963,"src":"4272:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6944,"name":"address","nodeType":"ElementaryTypeName","src":"4272:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6947,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":6963,"src":"4289:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6946,"name":"uint256","nodeType":"ElementaryTypeName","src":"4289:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4271:33:14"},"returnParameters":{"id":6952,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6951,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":6963,"src":"4338:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":6950,"name":"bool","nodeType":"ElementaryTypeName","src":"4338:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"4337:6:14"},"scope":7303,"src":"4255:166:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"baseFunctions":[7362],"body":{"id":7000,"nodeType":"Block","src":"4993:205:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":6977,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6966,"src":"5013:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6978,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6968,"src":"5021:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":6979,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6970,"src":"5032:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6976,"name":"_transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7124,"src":"5003:9:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6980,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5003:36:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6981,"nodeType":"ExpressionStatement","src":"5003:36:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":6983,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6966,"src":"5058:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6984,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5066:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6985,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5066:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":6993,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6970,"src":"5118:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365","id":6994,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"5126:42:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330","typeString":"literal_string \\"ERC20: transfer amount exceeds allowance\\""},"value":"ERC20: transfer amount exceeds allowance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_974d1b4421da69cc60b481194f0dad36a5bb4e23da810da7a7fb30cdba178330","typeString":"literal_string \\"ERC20: transfer amount exceeds allowance\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":6986,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"5080:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":6988,"indexExpression":{"argumentTypes":null,"id":6987,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6966,"src":"5092:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5080:19:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":6991,"indexExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":6989,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5100:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":6990,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5100:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5080:33:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":6992,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"5080:37:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":6995,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5080:89:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":6982,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"5049:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":6996,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5049:121:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":6997,"nodeType":"ExpressionStatement","src":"5049:121:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":6998,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"5187:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":6975,"id":6999,"nodeType":"Return","src":"5180:11:14"}]},"documentation":{"id":6964,"nodeType":"StructuredDocumentation","src":"4427:449:14","text":" @dev See {IERC20-transferFrom}.\\n Emits an {Approval} event indicating the updated allowance. This is not\\n required by the EIP. See the note at the beginning of {ERC20};\\n Requirements:\\n - `sender` and `recipient` cannot be the zero address.\\n - `sender` must have a balance of at least `amount`.\\n - the caller must have allowance for ``sender``\'s tokens of at least\\n `amount`."},"functionSelector":"23b872dd","id":7001,"implemented":true,"kind":"function","modifiers":[],"name":"transferFrom","nodeType":"FunctionDefinition","overrides":{"id":6972,"nodeType":"OverrideSpecifier","overrides":[],"src":"4969:8:14"},"parameters":{"id":6971,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6966,"mutability":"mutable","name":"sender","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4903:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6965,"name":"address","nodeType":"ElementaryTypeName","src":"4903:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6968,"mutability":"mutable","name":"recipient","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4919:17:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6967,"name":"address","nodeType":"ElementaryTypeName","src":"4919:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":6970,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4938:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6969,"name":"uint256","nodeType":"ElementaryTypeName","src":"4938:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4902:51:14"},"returnParameters":{"id":6975,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6974,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":7001,"src":"4987:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":6973,"name":"bool","nodeType":"ElementaryTypeName","src":"4987:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"4986:6:14"},"scope":7303,"src":"4881:317:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"body":{"id":7028,"nodeType":"Block","src":"5687:121:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7012,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5706:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7013,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5706:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7014,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7004,"src":"5720:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7022,"name":"addedValue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7006,"src":"5768:10:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7015,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"5729:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":7018,"indexExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7016,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"5741:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7017,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5741:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5729:25:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7020,"indexExpression":{"argumentTypes":null,"id":7019,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7004,"src":"5755:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"5729:34:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7021,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"5729:38:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7023,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5729:50:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7011,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"5697:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7024,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"5697:83:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7025,"nodeType":"ExpressionStatement","src":"5697:83:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":7026,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"5797:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":7010,"id":7027,"nodeType":"Return","src":"5790:11:14"}]},"documentation":{"id":7002,"nodeType":"StructuredDocumentation","src":"5204:384:14","text":" @dev Atomically increases the allowance granted to `spender` by the caller.\\n This is an alternative to {approve} that can be used as a mitigation for\\n problems described in {IERC20-approve}.\\n Emits an {Approval} event indicating the updated allowance.\\n Requirements:\\n - `spender` cannot be the zero address."},"functionSelector":"39509351","id":7029,"implemented":true,"kind":"function","modifiers":[],"name":"increaseAllowance","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7007,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7004,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":7029,"src":"5620:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7003,"name":"address","nodeType":"ElementaryTypeName","src":"5620:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7006,"mutability":"mutable","name":"addedValue","nodeType":"VariableDeclaration","overrides":null,"scope":7029,"src":"5637:18:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7005,"name":"uint256","nodeType":"ElementaryTypeName","src":"5637:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"5619:37:14"},"returnParameters":{"id":7010,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7009,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":7029,"src":"5681:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":7008,"name":"bool","nodeType":"ElementaryTypeName","src":"5681:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"5680:6:14"},"scope":7303,"src":"5593:215:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"body":{"id":7057,"nodeType":"Block","src":"6394:167:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7040,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"6413:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7041,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6413:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7042,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7032,"src":"6427:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7050,"name":"subtractedValue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7034,"src":"6475:15:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f","id":7051,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"6492:39:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8","typeString":"literal_string \\"ERC20: decreased allowance below zero\\""},"value":"ERC20: decreased allowance below zero"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8","typeString":"literal_string \\"ERC20: decreased allowance below zero\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7043,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"6436:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":7046,"indexExpression":{"argumentTypes":null,"arguments":[],"expression":{"argumentTypes":[],"id":7044,"name":"_msgSender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6479,"src":"6448:10:14","typeDescriptions":{"typeIdentifier":"t_function_internal_view$__$returns$_t_address_payable_$","typeString":"function () view returns (address payable)"}},"id":7045,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6448:12:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"6436:25:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7048,"indexExpression":{"argumentTypes":null,"id":7047,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7032,"src":"6462:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"6436:34:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7049,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"6436:38:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":7052,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6436:96:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7039,"name":"_approve","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7280,"src":"6404:8:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7053,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"6404:129:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7054,"nodeType":"ExpressionStatement","src":"6404:129:14"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":7055,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"6550:4:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":7038,"id":7056,"nodeType":"Return","src":"6543:11:14"}]},"documentation":{"id":7030,"nodeType":"StructuredDocumentation","src":"5814:476:14","text":" @dev Atomically decreases the allowance granted to `spender` by the caller.\\n This is an alternative to {approve} that can be used as a mitigation for\\n problems described in {IERC20-approve}.\\n Emits an {Approval} event indicating the updated allowance.\\n Requirements:\\n - `spender` cannot be the zero address.\\n - `spender` must have allowance for the caller of at least\\n `subtractedValue`."},"functionSelector":"a457c2d7","id":7058,"implemented":true,"kind":"function","modifiers":[],"name":"decreaseAllowance","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7035,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7032,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":7058,"src":"6322:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7031,"name":"address","nodeType":"ElementaryTypeName","src":"6322:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7034,"mutability":"mutable","name":"subtractedValue","nodeType":"VariableDeclaration","overrides":null,"scope":7058,"src":"6339:23:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7033,"name":"uint256","nodeType":"ElementaryTypeName","src":"6339:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"6321:42:14"},"returnParameters":{"id":7038,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7037,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":7058,"src":"6388:4:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":7036,"name":"bool","nodeType":"ElementaryTypeName","src":"6388:4:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"6387:6:14"},"scope":7303,"src":"6295:266:14","stateMutability":"nonpayable","virtual":true,"visibility":"public"},{"body":{"id":7123,"nodeType":"Block","src":"7122:443:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7074,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7069,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7140:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7072,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"7158:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7071,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"7150:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7070,"name":"address","nodeType":"ElementaryTypeName","src":"7150:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7073,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7150:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"7140:20:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e736665722066726f6d20746865207a65726f2061646472657373","id":7075,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7162:39:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea","typeString":"literal_string \\"ERC20: transfer from the zero address\\""},"value":"ERC20: transfer from the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea","typeString":"literal_string \\"ERC20: transfer from the zero address\\""}],"id":7068,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"7132:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7076,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7132:70:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7077,"nodeType":"ExpressionStatement","src":"7132:70:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7084,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7079,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7220:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7082,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"7241:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7081,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"7233:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7080,"name":"address","nodeType":"ElementaryTypeName","src":"7233:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7083,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7233:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"7220:23:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e7366657220746f20746865207a65726f2061646472657373","id":7085,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7245:37:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f","typeString":"literal_string \\"ERC20: transfer to the zero address\\""},"value":"ERC20: transfer to the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f","typeString":"literal_string \\"ERC20: transfer to the zero address\\""}],"id":7078,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"7212:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7086,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7212:71:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7087,"nodeType":"ExpressionStatement","src":"7212:71:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7089,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7315:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7090,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7323:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7091,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7334:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7088,"name":"_beforeTokenTransfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7302,"src":"7294:20:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7092,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7294:47:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7093,"nodeType":"ExpressionStatement","src":"7294:47:14"},{"expression":{"argumentTypes":null,"id":7104,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7094,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7352:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7096,"indexExpression":{"argumentTypes":null,"id":7095,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7362:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"7352:17:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7101,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7394:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365","id":7102,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7402:40:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6","typeString":"literal_string \\"ERC20: transfer amount exceeds balance\\""},"value":"ERC20: transfer amount exceeds balance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6","typeString":"literal_string \\"ERC20: transfer amount exceeds balance\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7097,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7372:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7099,"indexExpression":{"argumentTypes":null,"id":7098,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7382:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"7372:17:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7100,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"7372:21:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":7103,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7372:71:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"7352:91:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7105,"nodeType":"ExpressionStatement","src":"7352:91:14"},{"expression":{"argumentTypes":null,"id":7115,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7106,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7453:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7108,"indexExpression":{"argumentTypes":null,"id":7107,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7463:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"7453:20:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7113,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7501:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7109,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"7476:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7111,"indexExpression":{"argumentTypes":null,"id":7110,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7486:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"7476:20:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7112,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"7476:24:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7114,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7476:32:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"7453:55:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7116,"nodeType":"ExpressionStatement","src":"7453:55:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7118,"name":"sender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7061,"src":"7532:6:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7119,"name":"recipient","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7063,"src":"7540:9:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7120,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7065,"src":"7551:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7117,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7371,"src":"7523:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7121,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7523:35:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7122,"nodeType":"EmitStatement","src":"7518:40:14"}]},"documentation":{"id":7059,"nodeType":"StructuredDocumentation","src":"6567:463:14","text":" @dev Moves tokens `amount` from `sender` to `recipient`.\\n This is internal function is equivalent to {transfer}, and can be used to\\n e.g. implement automatic token fees, slashing mechanisms, etc.\\n Emits a {Transfer} event.\\n Requirements:\\n - `sender` cannot be the zero address.\\n - `recipient` cannot be the zero address.\\n - `sender` must have a balance of at least `amount`."},"id":7124,"implemented":true,"kind":"function","modifiers":[],"name":"_transfer","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7066,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7061,"mutability":"mutable","name":"sender","nodeType":"VariableDeclaration","overrides":null,"scope":7124,"src":"7054:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7060,"name":"address","nodeType":"ElementaryTypeName","src":"7054:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7063,"mutability":"mutable","name":"recipient","nodeType":"VariableDeclaration","overrides":null,"scope":7124,"src":"7070:17:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7062,"name":"address","nodeType":"ElementaryTypeName","src":"7070:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7065,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7124,"src":"7089:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7064,"name":"uint256","nodeType":"ElementaryTypeName","src":"7089:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"7053:51:14"},"returnParameters":{"id":7067,"nodeType":"ParameterList","parameters":[],"src":"7122:0:14"},"scope":7303,"src":"7035:530:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7178,"nodeType":"Block","src":"7900:305:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7138,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7133,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"7918:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7136,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"7937:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7135,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"7929:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7134,"name":"address","nodeType":"ElementaryTypeName","src":"7929:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7137,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7929:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"7918:21:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a206d696e7420746f20746865207a65726f2061646472657373","id":7139,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"7941:33:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e","typeString":"literal_string \\"ERC20: mint to the zero address\\""},"value":"ERC20: mint to the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e","typeString":"literal_string \\"ERC20: mint to the zero address\\""}],"id":7132,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"7910:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7140,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7910:65:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7141,"nodeType":"ExpressionStatement","src":"7910:65:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7145,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8015:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7144,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8007:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7143,"name":"address","nodeType":"ElementaryTypeName","src":"8007:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7146,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8007:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7147,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8019:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7148,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8028:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7142,"name":"_beforeTokenTransfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7302,"src":"7986:20:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7149,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"7986:49:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7150,"nodeType":"ExpressionStatement","src":"7986:49:14"},{"expression":{"argumentTypes":null,"id":7156,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":7151,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8046:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7154,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8078:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":7152,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8061:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7153,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"8061:16:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7155,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8061:24:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8046:39:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7157,"nodeType":"ExpressionStatement","src":"8046:39:14"},{"expression":{"argumentTypes":null,"id":7167,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7158,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8095:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7160,"indexExpression":{"argumentTypes":null,"id":7159,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8105:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"8095:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7165,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8139:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7161,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8116:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7163,"indexExpression":{"argumentTypes":null,"id":7162,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8126:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"8116:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7164,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"add","nodeType":"MemberAccess","referencedDeclaration":6629,"src":"8116:22:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7166,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8116:30:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8095:51:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7168,"nodeType":"ExpressionStatement","src":"8095:51:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7172,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8178:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7171,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8170:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7170,"name":"address","nodeType":"ElementaryTypeName","src":"8170:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7173,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8170:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7174,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7127,"src":"8182:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7175,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7129,"src":"8191:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7169,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7371,"src":"8161:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7176,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8161:37:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7177,"nodeType":"EmitStatement","src":"8156:42:14"}]},"documentation":{"id":7125,"nodeType":"StructuredDocumentation","src":"7571:259:14","text":"@dev Creates `amount` tokens and assigns them to `account`, increasing\\n the total supply.\\n Emits a {Transfer} event with `from` set to the zero address.\\n Requirements\\n - `to` cannot be the zero address."},"id":7179,"implemented":true,"kind":"function","modifiers":[],"name":"_mint","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7130,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7127,"mutability":"mutable","name":"account","nodeType":"VariableDeclaration","overrides":null,"scope":7179,"src":"7850:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7126,"name":"address","nodeType":"ElementaryTypeName","src":"7850:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7129,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7179,"src":"7867:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7128,"name":"uint256","nodeType":"ElementaryTypeName","src":"7867:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"7849:33:14"},"returnParameters":{"id":7131,"nodeType":"ParameterList","parameters":[],"src":"7900:0:14"},"scope":7303,"src":"7835:370:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7234,"nodeType":"Block","src":"8589:345:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7193,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7188,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8607:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7191,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8626:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7190,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8618:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7189,"name":"address","nodeType":"ElementaryTypeName","src":"8618:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7192,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8618:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"8607:21:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a206275726e2066726f6d20746865207a65726f2061646472657373","id":7194,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"8630:35:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f","typeString":"literal_string \\"ERC20: burn from the zero address\\""},"value":"ERC20: burn from the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f","typeString":"literal_string \\"ERC20: burn from the zero address\\""}],"id":7187,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"8599:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7195,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8599:67:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7196,"nodeType":"ExpressionStatement","src":"8599:67:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7198,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8698:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7201,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8715:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7200,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8707:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7199,"name":"address","nodeType":"ElementaryTypeName","src":"8707:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7202,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8707:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7203,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8719:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7197,"name":"_beforeTokenTransfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7302,"src":"8677:20:14","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7204,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8677:49:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7205,"nodeType":"ExpressionStatement","src":"8677:49:14"},{"expression":{"argumentTypes":null,"id":7216,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7206,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8737:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7208,"indexExpression":{"argumentTypes":null,"id":7207,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8747:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"8737:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7213,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8781:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"45524332303a206275726e20616d6f756e7420657863656564732062616c616e6365","id":7214,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"8789:36:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd","typeString":"literal_string \\"ERC20: burn amount exceeds balance\\""},"value":"ERC20: burn amount exceeds balance"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd","typeString":"literal_string \\"ERC20: burn amount exceeds balance\\""}],"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7209,"name":"_balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6817,"src":"8758:9:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7211,"indexExpression":{"argumentTypes":null,"id":7210,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8768:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"8758:18:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7212,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6674,"src":"8758:22:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256,string memory) pure returns (uint256)"}},"id":7215,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8758:68:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8737:89:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7217,"nodeType":"ExpressionStatement","src":"8737:89:14"},{"expression":{"argumentTypes":null,"id":7223,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":7218,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8836:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7221,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8868:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":7219,"name":"_totalSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6825,"src":"8851:12:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7220,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sub","nodeType":"MemberAccess","referencedDeclaration":6646,"src":"8851:16:14","typeDescriptions":{"typeIdentifier":"t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":7222,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8851:24:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"8836:39:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7224,"nodeType":"ExpressionStatement","src":"8836:39:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7226,"name":"account","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7182,"src":"8899:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7229,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"8916:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7228,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"8908:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7227,"name":"address","nodeType":"ElementaryTypeName","src":"8908:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7230,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8908:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":7231,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7184,"src":"8920:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7225,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7371,"src":"8890:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7232,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"8890:37:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7233,"nodeType":"EmitStatement","src":"8885:42:14"}]},"documentation":{"id":7180,"nodeType":"StructuredDocumentation","src":"8211:308:14","text":" @dev Destroys `amount` tokens from `account`, reducing the\\n total supply.\\n Emits a {Transfer} event with `to` set to the zero address.\\n Requirements\\n - `account` cannot be the zero address.\\n - `account` must have at least `amount` tokens."},"id":7235,"implemented":true,"kind":"function","modifiers":[],"name":"_burn","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7185,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7182,"mutability":"mutable","name":"account","nodeType":"VariableDeclaration","overrides":null,"scope":7235,"src":"8539:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7181,"name":"address","nodeType":"ElementaryTypeName","src":"8539:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7184,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7235,"src":"8556:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7183,"name":"uint256","nodeType":"ElementaryTypeName","src":"8556:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"8538:33:14"},"returnParameters":{"id":7186,"nodeType":"ParameterList","parameters":[],"src":"8589:0:14"},"scope":7303,"src":"8524:410:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7279,"nodeType":"Block","src":"9440:257:14","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7251,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7246,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7238,"src":"9458:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7249,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"9475:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7248,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"9467:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7247,"name":"address","nodeType":"ElementaryTypeName","src":"9467:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7250,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9467:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"9458:19:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373","id":7252,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"9479:38:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208","typeString":"literal_string \\"ERC20: approve from the zero address\\""},"value":"ERC20: approve from the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208","typeString":"literal_string \\"ERC20: approve from the zero address\\""}],"id":7245,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"9450:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7253,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9450:68:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7254,"nodeType":"ExpressionStatement","src":"9450:68:14"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":7261,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"id":7256,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7240,"src":"9536:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"BinaryOperation","operator":"!=","rightExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":7259,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"9555:1:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":7258,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"9547:7:14","typeDescriptions":{"typeIdentifier":"t_type$_t_address_$","typeString":"type(address)"},"typeName":{"id":7257,"name":"address","nodeType":"ElementaryTypeName","src":"9547:7:14","typeDescriptions":{"typeIdentifier":null,"typeString":null}}},"id":7260,"isConstant":false,"isLValue":false,"isPure":true,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9547:10:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"9536:21:14","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"45524332303a20617070726f766520746f20746865207a65726f2061646472657373","id":7262,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"9559:36:14","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029","typeString":"literal_string \\"ERC20: approve to the zero address\\""},"value":"ERC20: approve to the zero address"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029","typeString":"literal_string \\"ERC20: approve to the zero address\\""}],"id":7255,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"9528:7:14","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":7263,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9528:68:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7264,"nodeType":"ExpressionStatement","src":"9528:68:14"},{"expression":{"argumentTypes":null,"id":7271,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":7265,"name":"_allowances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6823,"src":"9607:11:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$","typeString":"mapping(address => mapping(address => uint256))"}},"id":7268,"indexExpression":{"argumentTypes":null,"id":7266,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7238,"src":"9619:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"9607:18:14","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":7269,"indexExpression":{"argumentTypes":null,"id":7267,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7240,"src":"9626:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"9607:27:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":7270,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7242,"src":"9637:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"9607:36:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":7272,"nodeType":"ExpressionStatement","src":"9607:36:14"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":7274,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7238,"src":"9667:5:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7275,"name":"spender","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7240,"src":"9674:7:14","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":7276,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7242,"src":"9683:6:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":7273,"name":"Approval","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7380,"src":"9658:8:14","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":7277,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"9658:32:14","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":7278,"nodeType":"EmitStatement","src":"9653:37:14"}]},"documentation":{"id":7236,"nodeType":"StructuredDocumentation","src":"8940:412:14","text":" @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n This internal function is equivalent to `approve`, and can be used to\\n e.g. set automatic allowances for certain subsystems, etc.\\n Emits an {Approval} event.\\n Requirements:\\n - `owner` cannot be the zero address.\\n - `spender` cannot be the zero address."},"id":7280,"implemented":true,"kind":"function","modifiers":[],"name":"_approve","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7243,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7238,"mutability":"mutable","name":"owner","nodeType":"VariableDeclaration","overrides":null,"scope":7280,"src":"9375:13:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7237,"name":"address","nodeType":"ElementaryTypeName","src":"9375:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7240,"mutability":"mutable","name":"spender","nodeType":"VariableDeclaration","overrides":null,"scope":7280,"src":"9390:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7239,"name":"address","nodeType":"ElementaryTypeName","src":"9390:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7242,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7280,"src":"9407:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7241,"name":"uint256","nodeType":"ElementaryTypeName","src":"9407:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"9374:48:14"},"returnParameters":{"id":7244,"nodeType":"ParameterList","parameters":[],"src":"9440:0:14"},"scope":7303,"src":"9357:340:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"},{"body":{"id":7290,"nodeType":"Block","src":"10070:38:14","statements":[{"expression":{"argumentTypes":null,"id":7288,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":7286,"name":"_decimals","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":6831,"src":"10080:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":7287,"name":"decimals_","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7283,"src":"10092:9:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"src":"10080:21:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"id":7289,"nodeType":"ExpressionStatement","src":"10080:21:14"}]},"documentation":{"id":7281,"nodeType":"StructuredDocumentation","src":"9703:312:14","text":" @dev Sets {decimals} to a value other than the default one of 18.\\n WARNING: This function should only be called from the constructor. Most\\n applications that interact with token contracts will not expect\\n {decimals} to ever change, and may work incorrectly if it does."},"id":7291,"implemented":true,"kind":"function","modifiers":[],"name":"_setupDecimals","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7284,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7283,"mutability":"mutable","name":"decimals_","nodeType":"VariableDeclaration","overrides":null,"scope":7291,"src":"10044:15:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":7282,"name":"uint8","nodeType":"ElementaryTypeName","src":"10044:5:14","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"internal"}],"src":"10043:17:14"},"returnParameters":{"id":7285,"nodeType":"ParameterList","parameters":[],"src":"10070:0:14"},"scope":7303,"src":"10020:88:14","stateMutability":"nonpayable","virtual":false,"visibility":"internal"},{"body":{"id":7301,"nodeType":"Block","src":"10784:3:14","statements":[]},"documentation":{"id":7292,"nodeType":"StructuredDocumentation","src":"10114:576:14","text":" @dev Hook that is called before any transfer of tokens. This includes\\n minting and burning.\\n Calling conditions:\\n - when `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n will be to transferred to `to`.\\n - when `from` is zero, `amount` tokens will be minted for `to`.\\n - when `to` is zero, `amount` of ``from``\'s tokens will be burned.\\n - `from` and `to` are never both zero.\\n To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]."},"id":7302,"implemented":true,"kind":"function","modifiers":[],"name":"_beforeTokenTransfer","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":7299,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7294,"mutability":"mutable","name":"from","nodeType":"VariableDeclaration","overrides":null,"scope":7302,"src":"10725:12:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7293,"name":"address","nodeType":"ElementaryTypeName","src":"10725:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7296,"mutability":"mutable","name":"to","nodeType":"VariableDeclaration","overrides":null,"scope":7302,"src":"10739:10:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":7295,"name":"address","nodeType":"ElementaryTypeName","src":"10739:7:14","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":7298,"mutability":"mutable","name":"amount","nodeType":"VariableDeclaration","overrides":null,"scope":7302,"src":"10751:14:14","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7297,"name":"uint256","nodeType":"ElementaryTypeName","src":"10751:7:14","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"10724:42:14"},"returnParameters":{"id":7300,"nodeType":"ParameterList","parameters":[],"src":"10784:0:14"},"scope":7303,"src":"10695:92:14","stateMutability":"nonpayable","virtual":true,"visibility":"internal"}],"scope":7304,"src":"1345:9444:14"}],"src":"33:10757:14"},"compiler":{"name":"solc","version":"0.6.12+commit.27d51765.Emscripten.clang"},"networks":{},"schemaVersion":"3.3.2","updatedAt":"2020-11-25T04:12:02.622Z","devdoc":{"details":"Implementation of the {IERC20} interface. This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using {_mint}. For a generic mechanism see {ERC20PresetMinterPauser}. TIP: For a detailed writeup see our guide https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How to implement supply mechanisms]. We have followed general OpenZeppelin guidelines: functions revert instead of returning `false` on failure. This behavior is nonetheless conventional and does not conflict with the expectations of ERC20 applications. Additionally, an {Approval} event is emitted on calls to {transferFrom}. This allows applications to reconstruct the allowance for all accounts just by listening to said events. Other implementations of the EIP may not emit these events, as it isn\'t required by the specification. Finally, the non-standard {decreaseAllowance} and {increaseAllowance} functions have been added to mitigate the well-known issues around setting allowances. See {IERC20-approve}.","kind":"dev","methods":{"allowance(address,address)":{"details":"See {IERC20-allowance}."},"approve(address,uint256)":{"details":"See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See {IERC20-balanceOf}."},"constructor":{"details":"Sets the values for {name} and {symbol}, initializes {decimals} with a default value of 18. To select a different value for {decimals}, use {_setupDecimals}. All three of these values are immutable: they can only be set once during construction."},"decimals()":{"details":"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."},"decreaseAllowance(address,uint256)":{"details":"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."},"increaseAllowance(address,uint256)":{"details":"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."},"name()":{"details":"Returns the name of the token."},"symbol()":{"details":"Returns the symbol of the token, usually a shorter version of the name."},"totalSupply()":{"details":"See {IERC20-totalSupply}."},"transfer(address,uint256)":{"details":"See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."},"transferFrom(address,address,uint256)":{"details":"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``\'s tokens of at least `amount`."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')
      },
      397: function(e) {
          e.exports = JSON.parse('{"status":"1","message":"OK","result":"[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"user\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"pid\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Deposit\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"user\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"pid\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"EmergencyWithdraw\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"previousOwner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipTransferred\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"user\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"pid\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Withdraw\\",\\"type\\":\\"event\\"},{\\"inputs\\":[],\\"name\\":\\"AUTO\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"AUTOMaxSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"AUTOPerBlock\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"AUTOv2\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_allocPoint\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"contract IERC20\\",\\"name\\":\\"_want\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"_withUpdate\\",\\"type\\":\\"bool\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_strat\\",\\"type\\":\\"address\\"}],\\"name\\":\\"add\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"burnAddress\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_wantAmt\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deposit\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"emergencyWithdraw\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_from\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_to\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getMultiplier\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_token\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"inCaseTokensGetStuck\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"massUpdatePools\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_inputAmt\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"migrateToAUTOv2\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"ownerAUTOReward\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_user\\",\\"type\\":\\"address\\"}],\\"name\\":\\"pendingAUTO\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"poolInfo\\",\\"outputs\\":[{\\"internalType\\":\\"contract IERC20\\",\\"name\\":\\"want\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"allocPoint\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"lastRewardBlock\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"accAUTOPerShare\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"strat\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"poolLength\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"renounceOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_allocPoint\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"_withUpdate\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_user\\",\\"type\\":\\"address\\"}],\\"name\\":\\"stakedWantTokens\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"startBlock\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalAllocPoint\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"updatePool\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"userInfo\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"shares\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"rewardDebt\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_wantAmt\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"withdraw\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_pid\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"withdrawAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"}')
      },
      406: function(e, t, n) {},
      41: function(e, t, n) {
          var i = n(823),
              a = i.AutoFarmAddress,
              s = i.RakeTokenAddress,
              r = "prod",
              d = "http://localhost:3888/",
              l = "http://localhost:3889/",
              o = "http://localhost:3889/",
              f = i.apiDomain,
              p = Object({
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0
              }).REACT_APP_IS_STAGING;
          d = "https://autofarm.network/api/", l = f + (p ? "bsc-staging/" : "bsc/"), o = f + (p ? "heco-staging/" : "heco/"), e.exports = {
              mode: r,
              serverURLBase: d,
              serverURLBase2: l,
              serverURLBaseHeco: o,
              autoFarmContractAddress: "0x7f7Bf15B9c68D23339C31652C8e860492991760d",
              autoFarmV2ContractAddress: {
                  bsc: a,
                  heco: "0xb09a88956730b6b842d9f1cf6f72dd682c2f36f9"
              },
              AUTOv2Address: s,
              gasLimit: "580000",
              blockExplorerURLBase: {
                  bsc: "https://bscscan.com/",
                  heco: "https://scan.huobichain.com/"
              }
          }
      },
      419: function(e, t) {},
      440: function(e, t) {},
      442: function(e, t) {},
      515: function(e, t) {},
      517: function(e, t) {},
      549: function(e, t) {},
      554: function(e, t) {},
      556: function(e, t) {},
      563: function(e, t) {},
      576: function(e, t) {},
      656: function(e, t) {},
      823: function(e, t) {
          e.exports = {
              AutoFarmAddress: "0x7f7Bf15B9c68D23339C31652C8e860492991760d",
              RakeTokenAddress: "0xbDa8D53fe0F164915b46cd2EcfFD94254b6086a2",
              apiDomain: "https://farm.br34p.finance/"
          }
      },
      853: function(e, t, n) {
          "use strict";
          n.r(t);
          var i = n(0),
              a = n.n(i),
              s = n(42),
              r = n.n(s),
              d = (n(406), n(25)),
              l = n(5),
              o = n.n(l),
              f = n(92),
              p = n(238),
              u = n.n(p),
              c = (n(79), n(240)),
              y = n.n(c),
              m = n(387),
              b = n.n(m),
              g = n(104),
              _ = n(899),
              T = n(178),
              v = n(388),
              D = (n(369), n(62)),
              h = n.n(D),
              I = n(879),
              S = n(881),
              x = n(882);

          function C() {
              return "dark" === localStorage.theme || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches
          }
          var V = a.a.createContext({
                  theme: "light",
                  toggleTheme: function() {}
              }),
              j = n.p + "static/media/rake_notext.36e7cea3.PNG",
              k = n(2),
              E = function(e) {
                  var t = e.onConnect,
                      n = e.connected,
                      a = e.connectionOK,
                      s = e.address,
                      r = e.resetApp,
                      d = (e.loadingWallet, Object(i.useContext)(V)),
                      l = d.theme,
                      o = d.toggleTheme,
                      f = "dark" === l;
                  return Object(k.jsxs)("div", {
                      className: "p-2",
                      children: [Object(k.jsxs)("div", {
                          className: "max-w-4xl m-auto flex items-center justify-between space-x-2",
                          children: [Object(k.jsxs)("div", {
                              className: "flex items-center space-x-1 sm:space-x-2",
                              children: [Object(k.jsx)("div", {
                                  children: Object(k.jsx)("img", {
                                      className: "w-8",
                                      src: j,
                                      alt: ""
                                  })
                              }), Object(k.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [Object(k.jsx)("span", {
                                      className: "font-bold leading-none text-xl",
                                      children: " RAKE-FARM"
                                  }), Object(k.jsx)("span", {
                                      className: "leading-none text-sm whitespace-nowrap",
                                      children: "Raking in Rewards"
                                  })]
                              })]
                          }), Object(k.jsx)("div", {
                              className: "space-x-6 items-center hidden sm:flex",
                              children: Object(k.jsx)(g.b, {
                                  to: "/",
                                  className: "hover:underline",
                                  children: "Vaults"
                              })
                          }), Object(k.jsxs)("div", {
                              className: "flex items-center space-x-2 lg:space-x-4",
                              children: [Object(k.jsx)("div", {
                                  onClick: o,
                                  className: "cursor-pointer",
                                  children: f ? Object(k.jsx)(I.a, {}) : Object(k.jsx)(S.a, {})
                              }), Object(k.jsx)("div", {
                                  onClick: n ? r : t,
                                  className: h()(!n || a ? "btn-tertiary" : "btn-error", "space-x-2"),
                                  children: Object(k.jsxs)(k.Fragment, {
                                      children: [a && Object(k.jsx)(x.a, {}), Object(k.jsxs)("div", {
                                          children: [a && s && s.slice(0, 5) + "..." + s.slice(-4), !1 === a && "Wrong Network", null === a && "Connect Wallet"]
                                      })]
                                  })
                              })]
                          })]
                      }), Object(k.jsx)("div", {
                          className: "space-x-2 items-center flex sm:hidden pt-5 justify-center",
                          children: Object(k.jsx)(g.b, {
                              to: "/",
                              className: "py-1 px-3",
                              children: "Vaults"
                          })
                      })]
                  })
              },
              R = Object(i.memo)(E),
              w = n.p + "static/media/bscwallet.2a717ca6.jpg",
              $ = n(41),
              O = n.n($),
              L = n(105),
              P = n(6),
              N = n(10),
              A = n(9),
              q = n(883),
              M = function(e) {
                  var t = e.chain,
                      n = void 0 === t ? "bsc" : t,
                      i = [
                          [
                              ["https://github.com/br34p/", "Github"],
                              [O.a.blockExplorerURLBase[n] + "address/" + O.a.autoFarmV2ContractAddress.bsc, "Contract"],
                              ["https://rakefarm.helpsite.com/", "Wiki"],
                              ["https://t.me/Br34P_Chat", "Telegram"]
                          ]
                      ];
                  return Object(k.jsx)("div", {
                      className: "bg-gray-900 text-white absolute bottom-0 left-0 right-0",
                      children: Object(k.jsx)("div", {
                          className: "max-w-3xl m-auto px-3 pt-5 pb-7",
                          children: i.map((function(e, t) {
                              return Object(k.jsx)(q.a, {
                                  container: !0,
                                  spacing: 2,
                                  children: e.map((function(e) {
                                      var t = Object(d.a)(e, 2),
                                          n = t[0],
                                          i = t[1];
                                      return Object(k.jsx)(q.a, {
                                          item: !0,
                                          xs: 3,
                                          className: "text-center",
                                          children: Object(k.jsx)("a", {
                                              href: n,
                                              target: "_blank",
                                              children: i
                                          })
                                      }, n)
                                  }))
                              }, t)
                          }))
                      })
                  })
              },
              F = Object(i.memo)(M),
              z = n(154),
              B = (n(824), n(904)),
              U = n(891),
              W = n(892),
              H = n(898),
              K = n(894),
              X = n(905),
              Y = n(893),
              Q = n(901),
              Z = n(243),
              G = n.n(Z),
              J = n(82),
              ee = n(49),
              te = n(35),
              ne = n.n(te),
              ie = n(393),
              ae = n.n(ie),
              se = n(884);

          function re(e) {
              if (0 === e) return "N/A";
              if (e > 1e12) return "".concat(ne()((e / 1e12).toFixed(1)), "T");
              if (e > 1e9) return "".concat(ne()((e / 1e9).toFixed(1)), "B");
              if (e > 1e6) return "".concat(ne()((e / 1e6).toFixed(1)), "M");
              if (e > 1e3) return "".concat(ne()((e / 1e3).toFixed(1)), "K");
              var t = e;
              return "0.00" === e && (t = "N/A"), t
          }

          function de(e) {
              return 0 === e ? "N/A" : e > 1e12 ? "".concat(ne()((e / 1e12).toFixed(1)), "T") : e > 1e9 ? "".concat(ne()((e / 1e9).toFixed(1)), "B") : e > 1e6 ? "".concat(ne()((e / 1e6).toFixed(1)), "M") : e > 1e3 ? "".concat(ne()((e / 1e3).toFixed(1)), "K") : e.toFixed(2) + "%"
          }

          function le(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = new ae.a(e);
              return n.toFixed(t, 1)
          }

          function oe(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
              return Number.isNaN(e) || null == e ? "\u2013" : ne()(le(e, t))
          }

          function fe(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
              if (Number.isNaN(e) || null == e) return "\u2013";
              var i = Math.floor(Math.log10(parseFloat(e))),
                  a = Object(se.a)(0, t, n - i);
              return le(e, a)
          }

          function pe(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
              return "$".concat(oe(e, t))
          }
          var ue = function() {
                  var e = Object(i.useState)(3),
                      t = Object(d.a)(e, 2),
                      n = t[0],
                      a = t[1];
                  return Object(i.useEffect)((function() {
                      var e = setInterval((function() {
                          a((function(e) {
                              return (e + 1) % 4
                          }))
                      }), 500);
                      return function() {
                          return clearInterval(e)
                      }
                  }), []), ["Loading Vaults", n > 0 ? "." : "\u2008", n > 1 ? "." : "\u2008", n > 2 ? "." : "\u2008"].join("")
              },
              ce = n(394),
              ye = n(887),
              me = n(7),
              be = n(896),
              ge = n(897),
              _e = n(885),
              Te = n(886),
              ve = (i.Component, n(379), n(845), n(902)),
              De = function(e) {
                  var t = e.platformTVL,
                      n = (e.tvls, e.priceAUTO),
                      a = e.totalPendingAUTO,
                      s = e.totalStaked,
                      r = e.harvestAll,
                      d = (e.chain, e.numHarvestable),
                      l = void 0 === d ? 0 : d,
                      o = e.showBuyAuto,
                      f = void 0 === o || o,
                      p = Object(ve.a)(r),
                      u = Object(i.useCallback)((function() {
                          p.mutate()
                      }), [p]);
                  return Object(k.jsx)("div", {
                      className: "max-w-3xl w-full m-auto my-6 text-left px-4",
                      children: Object(k.jsxs)(q.a, {
                          container: !0,
                          spacing: 3,
                          children: [Object(k.jsx)(q.a, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              md: 7,
                              children: Object(k.jsxs)("div", {
                                  className: "flex-auto rounded-lg",
                                  children: [Object(k.jsxs)("div", {
                                      className: "font-semibold text-3xl",
                                      children: ["TVL ", pe(t, 0)]
                                  }), Object(k.jsx)("div", {
                                      className: "font-semibold"
                                  }), Object(k.jsxs)(ye.a, { in: f,
                                      children: [Object(k.jsxs)("div", {
                                          className: "font-semibold",
                                          children: ["RAKE ", pe(n)]
                                      }), Object(k.jsx)("button", {
                                          onClick: function() {
                                              return window.open("https://exchange.pancakeswap.finance/#/swap?outputCurrency=".concat(O.a.AUTOv2Address))
                                          },
                                          className: "btn btn-secondary py-1 mt-1",
                                          children: "Buy RAKE"
                                      })]
                                  })]
                              })
                          }), Object(k.jsx)(q.a, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              md: 5,
                              children: Object(k.jsxs)("div", {
                                  className: "",
                                  children: [Object(k.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [Object(k.jsx)("div", {
                                          className: "font-semibold",
                                          children: "Total Deposit"
                                      }), Object(k.jsx)("div", {
                                          className: "text-right",
                                          children: Object(k.jsx)("div", {
                                              children: pe(s)
                                          })
                                      })]
                                  }), Object(k.jsx)(ye.a, { in: f,
                                      children: Object(k.jsxs)("div", {
                                          className: "flex justify-between",
                                          children: [Object(k.jsx)("div", {
                                              className: "font-semibold",
                                              children: "RAKE Rewards"
                                          }), Object(k.jsxs)("div", {
                                              className: "text-right",
                                              children: [Object(k.jsx)("div", {
                                                  className: a > 0 ? "text-green-600 dark:text-green-500" : "",
                                                  children: oe(a)
                                              }), Object(k.jsx)("div", {
                                                  className: "text-sm",
                                                  children: pe(a * n)
                                              }), Object(k.jsx)(ye.a, { in: a > 1e-6,
                                                  children: Object(k.jsx)("button", {
                                                      className: "btn-secondary mt-1",
                                                      onClick: u,
                                                      disabled: p.isLoading,
                                                      children: p.isLoading ? "Harvesting..." : "Harvest all (".concat(l, " vaults)")
                                                  })
                                              })]
                                          })]
                                      })
                                  })]
                              })
                          })]
                      })
                  })
              },
              he = Object(i.memo)(De),
              Ie = n(68),
              Se = n(889),
              xe = n(890),
              Ce = function(e) {
                  var t = e.pool,
                      n = e.chain,
                      i = void 0 === n ? "bsc" : n;
                  return Object(k.jsxs)(q.a, {
                      container: !0,
                      spacing: 1,
                      className: "text-xs",
                      children: [Object(k.jsx)(q.a, {
                          item: !0,
                          sm: 6,
                          xs: 12,
                          md: 3,
                          children: Object(k.jsxs)("div", {
                              style: {
                                  textAlign: "left",
                                  paddingBottom: "5px"
                              },
                              children: [Object(k.jsxs)("div", {
                                  children: [" ", Object(k.jsx)("b", {
                                      children: "Vault Details"
                                  })]
                              }), Object(k.jsxs)("div", {
                                  children: ["Asset:", Object(k.jsx)("a", {
                                      target: "_blank",
                                      href: t.wantLink,
                                      style: {
                                          textDecoration: "none",
                                          color: "inherit",
                                          paddingLeft: "3px"
                                      },
                                      children: Object(k.jsx)("u", {
                                          children: t.wantName
                                      })
                                  }), Object(k.jsxs)("span", {
                                      style: {
                                          color: "grey",
                                          display: isNaN(t.APR) ? "none" : ""
                                      },
                                      children: [" ($", ne()(t.wantPrice.toFixed(2)), ")"]
                                  })]
                              }), Object(k.jsxs)("div", {
                                  children: ["RAKE multiplier:  ", (t.poolInfo.allocPoint / 100).toFixed(2), "x "]
                              }), Object(k.jsxs)("div", {
                                  children: ["Type:  ", t.stratType ? t.stratType : "auto-compounding", " "]
                              }), Object(k.jsxs)("div", {
                                  children: ["Farm name:  ", t.farmName ? t.farmName : "", " "]
                              }), Object(k.jsxs)("div", {
                                  children: ["Farm contract:", Object(k.jsxs)("a", {
                                      target: "_blank",
                                      href: O.a.blockExplorerURLBase[i] + "address/" + t.farmContractAddress,
                                      style: {
                                          textDecoration: "none",
                                          color: "inherit"
                                      },
                                      children: [" ", Object(k.jsx)("u", {
                                          children: "view"
                                      })]
                                  })]
                              }), Object(k.jsxs)("div", {
                                  children: ["Vault contract:", Object(k.jsxs)("a", {
                                      target: "_blank",
                                      href: O.a.blockExplorerURLBase[i] + "address/" + t.poolInfo.strat,
                                      style: {
                                          textDecoration: "none",
                                          color: "inherit"
                                      },
                                      children: ["  ", Object(k.jsx)("u", {
                                          children: "view"
                                      })]
                                  })]
                              })]
                          })
                      }), Object(k.jsx)(q.a, {
                          item: !0,
                          sm: 6,
                          xs: 12,
                          md: 3,
                          children: Object(k.jsxs)("div", {
                              style: {
                                  textAlign: "left",
                                  paddingBottom: "5px"
                              },
                              children: [Object(k.jsxs)("div", {
                                  children: [" ", Object(k.jsx)("b", {
                                      children: "APY Calculations"
                                  }), " "]
                              }), Object(k.jsxs)("div", {
                                  children: [" Farm APR: ", isNaN(t.APR) ? "TBD" : (100 * t.APR).toFixed(1) + "%", Object(k.jsxs)("span", {
                                      style: {
                                          color: "grey",
                                          display: isNaN(t.APR) ? "none" : ""
                                      },
                                      children: [" (", ne()((100 * t.APR / 364).toFixed(2)), "% daily)"]
                                  })]
                              }), Object(k.jsxs)("div", {
                                  children: [" Optimal compounds per year: ", isNaN(t.compoundsPerYear) ? "TBD" : ne()(t.compoundsPerYear), " "]
                              }), Object(k.jsxs)("div", {
                                  children: [" Farm APY: ", isNaN(t.APY) ? "TBD" : ne()((100 * t.APY).toFixed(1)) + "%", "  "]
                              }), Object(k.jsxs)("div", {
                                  children: [" RAKE APR: ", isNaN(t.APR_AUTO) ? "TBD" : (100 * t.APR_AUTO).toFixed(1) + "%", Object(k.jsxs)("span", {
                                      style: {
                                          color: "grey",
                                          display: isNaN(t.APR_AUTO) ? "none" : ""
                                      },
                                      children: [" (", ne()((100 * t.APR_AUTO / 364).toFixed(2)), "% daily)"]
                                  })]
                              }), Object(k.jsxs)("div", {
                                  children: [" Total APY: ", isNaN(t.APY_total) ? "TBD" : ne()((100 * t.APY_total).toFixed(1)) + "%", " "]
                              })]
                          })
                      }), Object(k.jsx)(q.a, {
                          item: !0,
                          sm: 6,
                          xs: 12,
                          md: 3,
                          children: Object(k.jsxs)("div", {
                              style: {
                                  textAlign: "left",
                                  paddingBottom: "5px"
                              },
                              children: [Object(k.jsxs)("div", {
                                  children: [" ", Object(k.jsx)("b", {
                                      children: "Fees"
                                  }), " "]
                              }), Object(k.jsxs)("div", {
                                  children: [" Controller fee: ", t.controllerFeeText]
                              }), Object(k.jsxs)("div", {
                                  children: [" Platform fee: ", t.platformFeeText || "none"]
                              }), Object(k.jsxs)("div", {
                                  children: [" RAKE buyback rate: ", t.buybackrateText]
                              }), Object(k.jsxs)("div", {
                                  children: [" Max entrance fee: ", t.entranceFeeText, " "]
                              }), Object(k.jsx)("div", {
                                  children: " Withdrawal fee: none "
                              })]
                          })
                      }), t.notes && t.notes.length > 0 && Object(k.jsxs)(q.a, {
                          item: !0,
                          sm: 6,
                          xs: 12,
                          md: 3,
                          children: [Object(k.jsx)("div", {
                              className: "font-bold",
                              children: "Notes"
                          }), t.notes && t.notes.map((function(e) {
                              return Object(k.jsx)("div", {
                                  children: e
                              })
                          }))]
                      })]
                  })
              },
              Ve = Object(i.memo)(Ce);
          var je = function() {
                  var e = Object(i.useState)(!1),
                      t = Object(d.a)(e, 2),
                      n = t[0],
                      a = t[1];
                  return {
                      isShowing: n,
                      toggle: function() {
                          ! function() {
                              for (var e = 0; e < 100; e++) localStorage.removeItem(e + "Accepted")
                          }(), a(!n)
                      },
                      toggleAccept1: function(e, t) {
                          localStorage[t + "Accepted"] = Boolean(e)
                      },
                      hasAccepted: function(e) {
                          var t = localStorage[e + "Accepted"] || !1;
                          return "true" === t && (t = !0), "false" === t && (t = !1), t
                      }
                  }
              },
              ke = {
                  tiny: "10px",
                  small: "14px",
                  medium: "16px",
                  large: "18px",
                  h1: "60px",
                  h2: "50px",
                  h3: "40px",
                  h4: "32px",
                  h5: "24px",
                  h6: "20px"
              },
              Ee = ("\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700,800');\n\n  html, body, #root {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n   overflow-y:auto;\n    text-rendering: optimizeLegibility;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  \t-webkit-text-size-adjust: 100%;\n    -webkit-overflow-scrolling: touch;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;  \n  }\n\n  button {\n    border-style: none;\n    line-height: 1em;\n    background-image: none;\n    outline: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n\n  [tabindex] {\n    outline: none;\n    width: 100%;\n    height: 100%;\n  }\n\n  a, p, h1, h2, h3, h4, h5, h6 {\n  \ttext-decoration: none;\n  \tmargin: 0;\n  }\n\n  h1 {\n    font-size: ".concat(ke.h1, "\n  }\n  h2 {\n    font-size: ").concat(ke.h2, "\n  }\n  h3 {\n    font-size: ").concat(ke.h3, "\n  }\n  h4 {\n    font-size: ").concat(ke.h4, "\n  }\n  h5 {\n    font-size: ").concat(ke.h5, "\n  }\n  h6 {\n    font-size: ").concat(ke.h6, '\n  }\n\n  a {\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;  \n    text-decoration: none;\n    color: inherit;\n    outline: none;\n  }\n\n  b,\n  strong {\n    font-weight: inherit;\n    font-weight: bolder;\n  }\n\n  ul, li {\n  \tlist-style: none;\n  \tmargin: 0;\n  \tpadding: 0;\n  }\n\n  * {\n    box-sizing: border-box !important;\n  }\n\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block;\n  }\n  audio,\n  canvas,\n  progress,\n  video {\n    display: inline-block;\n  }\n\n  input[type="color"],\n  input[type="date"],\n  input[type="datetime"],\n  input[type="datetime-local"],\n  input[type="email"],\n  input[type="month"],\n  input[type="number"],\n  input[type="password"],\n  input[type="search"],\n  input[type="tel"],\n  input[type="text"],\n  input[type="time"],\n  input[type="url"],\n  input[type="week"],\n  select:focus,\n  textarea {\n    font-size: 16px;\n  }\n'), function(e) {
                  var t = e.isShowing,
                      n = e.hide,
                      i = e.toggleAccept1,
                      s = e.hasAccepted,
                      d = e.autoFarmPid,
                      l = e.depositCallBack;
                  return t ? r.a.createPortal(Object(k.jsx)(a.a.Fragment, {
                      children: Object(k.jsx)("div", {
                          className: "modal-outer",
                          id: "modal",
                          children: Object(k.jsxs)("div", {
                              className: "modal-inner max-w-3xl m-auto flex flex-col space-y-6",
                              children: [Object(k.jsx)("h2", {
                                  children: "IMPORTANT NOTICE!"
                              }), Object(k.jsxs)("div", {
                                  className: "content",
                                  children: ["This is a permanent lock vault!", Object(k.jsx)("br", {}), "Only RAKE Rewards can be withdrawn, ", Object(k.jsx)("strong", {
                                      style: {
                                          color: "red"
                                      },
                                      children: "not your initial token deposit"
                                  }), ".", Object(k.jsx)("br", {}), "80% of locked value goes to RAKE buyback/burn & 20% goes to bR34P buyback/burn!!"]
                              }), Object(k.jsx)("div", {
                                  children: Object(k.jsxs)("form", {
                                      action: "",
                                      children: [Object(k.jsx)("input", {
                                          onClick: function(e) {
                                              return i(e.target.checked, d)
                                          },
                                          type: "checkbox",
                                          id: "ak0",
                                          name: "ak0"
                                      }), Object(k.jsx)("label", {
                                          htmlFor: "ak0",
                                          children: "I ACKNOWLEDGE THAT I HAVE READ AND UNDERSTOOD THE ABOVE NOTICE "
                                      })]
                                  })
                              }), Object(k.jsxs)("div", {
                                  className: "actions",
                                  children: [Object(k.jsx)("button", {
                                      style: {
                                          float: "left"
                                      },
                                      className: "toggle-button btn btn-error",
                                      onClick: n,
                                      children: "BACK"
                                  }), Object(k.jsx)("button", {
                                      style: {
                                          float: "right"
                                      },
                                      className: "toggle-button btn btn-primary",
                                      onClick: function(e) {
                                          s(d) ? l() : alert("Please accept terms above before proceeding")
                                      },
                                      children: "PROCEED"
                                  })]
                              })]
                          })
                      })
                  }), document.body) : null
              }),
              Re = function(e) {
                  var t = e.pid,
                      n = e.pool,
                      a = e.userStakedWantToken,
                      s = e.userWantsBalance,
                      r = e.userPendingAUTO,
                      l = e.priceAUTO,
                      o = e.deposit,
                      f = e.withdraw,
                      p = e.hasAutoRewards,
                      u = void 0 === p || p,
                      c = je(),
                      y = c.isShowing,
                      m = c.toggle,
                      b = c.toggleAccept1,
                      g = c.hasAccepted,
                      _ = Object(ve.a)(o),
                      T = Object(ve.a)(f),
                      v = Object(ve.a)(f),
                      D = Object(i.useState)(""),
                      h = Object(d.a)(D, 2),
                      I = h[0],
                      S = h[1],
                      x = Object(i.useState)(""),
                      C = Object(d.a)(x, 2),
                      V = C[0],
                      j = C[1],
                      E = Object(i.useCallback)((function(e) {
                          var i = function() {
                              for (var e = 0; e < 100; e++) localStorage.removeItem(e + "Accepted")
                          };
                          if (e && e.preventDefault(), "MoonLocker" === n.farmName) {
                              if (!0 !== g(n.autoFarmPid)) return m(), void i();
                              console.log("Has accepted All"), y && m()
                          }
                          i(), _.mutateAsync({
                              pid: t,
                              amt: I
                          }).then((function() {
                              return S("")
                          }))
                      }), [I, _, t]),
                      R = Object(i.useCallback)((function(e) {
                          e.preventDefault(), T.mutateAsync({
                              pid: t,
                              amt: V
                          }).then((function() {
                              return j("")
                          }))
                      }), [V, T, t]),
                      w = Object(i.useCallback)((function() {
                          v.mutate({
                              pid: t,
                              amt: "0"
                          })
                      }), [T, t]);
                  return n.wantLockedTotal || (n.wantLockedTotal = 0), Object(k.jsxs)("div", {
                      className: "my-5 p-3 mx-3 border dark:border-gray-900 shadow-lg dark:bg-gray-900 rounded-lg flex-auto m-auto",
                      children: [Object(k.jsx)(Ee, {
                          isShowing: y,
                          hide: m,
                          toggleAccept1: b,
                          hasAccepted: g,
                          autoFarmPid: n.autoFarmPid,
                          depositCallBack: E
                      }), Object(k.jsx)("div", {
                          style: {
                              color: "red"
                          },
                          children: "Venus" === n.farmName ? "Deposits closed" : ""
                      }), Object(k.jsxs)("div", {
                          className: "flex items-stretch space-y-3 md:space-y-0 md:space-x-3 flex-col md:flex-row",
                          children: [Object(k.jsxs)("div", {
                              className: "flex-auto flex flex-col",
                              children: [Object(k.jsxs)("div", {
                                  className: "flex justify-between flex-auto",
                                  children: [Object(k.jsx)("div", {
                                      className: "font-semibold",
                                      children: "Balance"
                                  }), Object(k.jsxs)("div", {
                                      onClick: function() {
                                          return S(s)
                                      },
                                      className: "cursor-pointer text-right",
                                      children: [fe(s), " (", pe(s * n.wantPrice), ")"]
                                  })]
                              }), Object(k.jsxs)("form", {
                                  onSubmit: E,
                                  children: [Object(k.jsxs)("div", {
                                      className: "relative",
                                      children: [Object(k.jsx)("input", {
                                          className: "mt-1 dark:bg-gray-800 border dark:border-gray-800 border-gray-300 rounded p-2 w-full mb-2",
                                          onChange: function(e) {
                                              return S(e.target.value)
                                          },
                                          value: I,
                                          type: "number",
                                          step: "any",
                                          min: "0",
                                          inputMode: "decimal",
                                          placeholder: "0",
                                          disabled: _.isLoading
                                      }), Object(k.jsx)("div", {
                                          className: "text-xs btn-tertiary absolute right-0 text-blue-500 cursor-pointer",
                                          style: {
                                              padding: "0.3rem",
                                              top: "50%",
                                              transform: "translateY(-50%)",
                                              right: "0.5rem"
                                          },
                                          onClick: function() {
                                              return S(s)
                                          },
                                          children: "MAX"
                                      })]
                                  }), Object(k.jsx)("button", {
                                      className: "btn btn-primary w-full",
                                      disabled: _.isLoading,
                                      children: _.isLoading ? "Depositing..." : "Deposit"
                                  })]
                              })]
                          }), Object(k.jsxs)("div", {
                              className: "flex-auto",
                              children: [Object(k.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [Object(k.jsx)("div", {
                                      className: "font-semibold",
                                      children: "Deposit "
                                  }), Object(k.jsxs)("div", {
                                      onClick: function() {
                                          return j(a)
                                      },
                                      className: "cursor-pointer text-right",
                                      children: [fe(a), " (", pe(a * n.wantPrice), ")", Object(k.jsxs)("div", {
                                          className: "text-xs text-gray-500",
                                          children: [oe(a / parseFloat(J.a.utils.formatUnits(n.wantLockedTotal, n.wantDecimals)) * 100, 2), "% of vault"]
                                      })]
                                  })]
                              }), Object(k.jsxs)("form", {
                                  onSubmit: R,
                                  children: [Object(k.jsxs)("div", {
                                      className: "relative",
                                      children: [Object(k.jsx)("input", {
                                          className: "mt-1 dark:bg-gray-800 border dark:border-gray-800 border-gray-300 rounded p-2 w-full mb-2",
                                          value: V,
                                          onChange: function(e) {
                                              return j(e.target.value)
                                          },
                                          type: "number",
                                          step: "any",
                                          min: "0",
                                          inputMode: "decimal",
                                          placeholder: "0",
                                          disabled: T.isLoading
                                      }), Object(k.jsx)("div", {
                                          className: "text-xs btn-tertiary absolute right-0 text-blue-500 cursor-pointer",
                                          style: {
                                              padding: "0.3rem",
                                              top: "50%",
                                              transform: "translateY(-50%)",
                                              right: "0.5rem"
                                          },
                                          onClick: function(e) {
                                              return j(a)
                                          },
                                          children: "MAX"
                                      })]
                                  }), "DEGEN" === n.farmName && Object(k.jsx)("button", {
                                      disabled: !0,
                                      className: "btn btn-primary w-full",
                                      children: "N/A"
                                  }), "DEGEN" !== n.farmName && Object(k.jsx)("button", {
                                      className: "btn btn-primary w-full",
                                      disabled: V <= 0 || f.isLoading,
                                      children: T.isLoading ? "Withdrawing..." : "".concat(r > 1e-6 ? "Harvest & " : "", "Withdraw")
                                  })]
                              })]
                          }), u && Object(k.jsxs)("div", {
                              className: "text-left flex sm:flex-col flex-wrap space-y-1",
                              children: [Object(k.jsx)("div", {
                                  className: "font-semibold",
                                  children: "RAKE\xa0Rewards"
                              }), Object(k.jsx)("div", {
                                  className: "flex flex-auto flex-col justify-end text-right sm:text-left",
                                  children: Object(k.jsxs)("div", {
                                      children: [Object(k.jsx)("div", {
                                          className: "md:text-lg sm:font-semibold leading-none",
                                          children: fe(r)
                                      }), Object(k.jsx)("div", {
                                          className: "text-gray-500",
                                          children: pe(r * l)
                                      })]
                                  })
                              }), Object(k.jsx)("button", {
                                  disabled: !r || 0 == parseFloat(r) || T.isLoading,
                                  onClick: w,
                                  className: "btn btn-secondary w-full",
                                  children: T.isLoading || v.isLoading ? "Harvesting..." : "Harvest"
                              })]
                          })]
                      })]
                  })
              },
              we = Object(i.memo)(Re),
              $e = {
                  egg: {
                      url: "https://assets.coingecko.com/coins/images/13951/small/JNnBWAE4XEJD9Ty7x8A1RlJ8dvA7hcOe7C1LkQSWwuSlD6HcCz3V8fN44B6du2k4owhlLJZU3r6M6HcK0dkpMe53kkqYsESpfx9w8vU8t_PnykuyaGnLKXLJeZqEAP1C9Wi3G3sqfbTeHi32_msxtMMyUmIRgzBbDdp-adg6mIbst_8a7JknMgmdkORNydmX4Ptk8YUtZhoWewY.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  viking: {
                      url: "https://assets.coingecko.com/coins/images/14072/small/2_%282%29.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  br34p: {
                      url: n.p + "static/media/br34p.23efc365.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  rake: {
                      url: j,
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  wbnb: {
                      url: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  auto: {
                      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADeCAYAAABSZ763AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMvgAADL4Bfll0hwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15fFTlvT/wz/c5sychC1uiQEACWMBkJkErVDEhgEtxrVDbX1Vq99sqVWuv1mLVaxWr1npvtVp7r3XpgtiqXVSWELRWRQyZCQFJQJGAAgIh6ySZmXO+vz8CyBJCMuecOWdmnvfr5euFk5lzvsnMZ56zPAtBslRR0RZ3Rsb2QiGUMQCPYdaGEVEeM4YyUy4RhgJaDkAEILv3VewCyHfw32GAIgc31wowA3SAmZqJuJkIzczczEx7haAmZqWpo+OUpq1bJ/RY8ftKvcjqAtJFWVn1MFWNTQVoMiAmA9pEgMYAGGlRSXsAbiKiBgCbANokBG2sqanYZ1E9aUUGzwTFxcszFMU5jVn7PDPOIsIZAI2wuq6B4U8B1AHiXSJeq6qxmrq68zutrirVyOAZoKzsPR9zy0xNQwVAnwcwBYDD6roMEgOonojXahpVOxxD/lVTMy1sdVHJTgYvTn5/9VhAKyfiC5ipHIDb4pISJUbENcz0GqCuCQbnBq0uKBnJ4A1CWVn16ZqmXcbMVwA0wep6bKKJCK8SiZfWr694x+pikoUM3kmUlVWN1zTMZ8blACZaXY/NNTDjRU3jZRs2zP7Q6mLsTAavD0VFr7gzM10XAnQtgPMg/05xoCDAT3u93qVvvz2jy+pq7EZ+oI7g96+YwKxcR0RfBjjX6npSRDPASwHtqWBw7hari7ELGTwApaXVZ2ua9h0AFwNQrK4nRTGA14XgJ9avn/2a1cVYLW2DV15e7Wht5UuZ8QOA/VbXk2ZqhaBfDxlCf1uzpiJmdTFWSMPg3Sn8/nMuAeinAMZbXU2aawLw8IQJ+59dtmyBanUxiZRGwWMqLa06X9Pop+i9wS3ZRyMRP1xU1LwsXQKYFsELBFZUMit3A5hsdS1Sf7ieGXeEQrOrra7EbCkdvLKyqvGqip8CuMzqWqRBWaNpdGtd3awGqwsxS0oGr6xsZbaqih8C+B7SpytXiqEoEf+fy9Vz79q1F7VZXY3RUi54JSUrryAS9wFIktEAUv/4UwD/GQzOfsnqSoyUMsGbOnXVSKeTHmDGxVbXIpliBTNuCoUqP7a6ECMIqwvQ704RCFR/w+nEOhm6lDaXCG+VlFR9HeCkbzCS+hcoLl4+QgjlUYBmW12LlEj8uqK4vldTM3OX1ZXEK2mDV1Kyah4RPQIgz+paJEu0CkE3rV8/669WFxKPpAteeXm1p7VVu5MZ37G6Fsl6RLxUVdWbk216iqQKXknJqolEeE4OQpWO0QCoVyfT6IekubgSCFRdSEQrZeikPkwClNV+/8pLrS5koGzf4s2f/7yydevQW5jxYyRBvZKlmAi/zc4WP7X7qAdbf5AP9kB5CkCF1bVIyYOZqjye7uvs3OPFtsErK3ujQNOiS5lxhtW1SMmHmTerqnNBff15O6yupS+2DF5xcfVUIbSlAE6xuhYpqe0B1KvsOAWh7S6uBAJVFwqhLocMnaTfSED5R0lJ1VyrCzmWrYIXCKz+EjOe+WxBDknSLYMIfwwEqr5idSFHss2hpt+/6lqAfgmbfRmkg4ICjzjjjCFKUVGmUlDgFiNHesTw4W7KznYIIQgZGcrhz4mmEXd2RgEAkQhzS0uEm5uj2oEDEW5ujvLu3d3a9u1hddu2sLZrV7emaWzZ73UMjUi7sbZ2zjNWFwLYJHh+f9U3AfwCNqkn1WVlKXTOOcMcFRXDnX5/tiM312nKl100yrxzZ5e2Y0eX1tQUVt96qzm2bt0BKy/zM8CLg8HZj1pYAwAbfNBLSlbfSMR3WF1HOpg2Lddx1VWj3DNm5DmcTkr4e//3v+/uufvuzXaY3PauYLDyV1YWYOmKNiUlq74jQ2e+iophzm99a5xnwoQMOWdor5+VlFSpoVDl/1hVgGXB8/tX/T+A7rNq/+mgsNAnfvSjCd6zz851Wl2L3RDhrpKSlR2h0JynrNi/JRcySkpWLwDov2GDQ91Udckl+a4//OHMLBm6EyIi8WAgsOpKK3ae8OD1dnbmR63Ydzrw+RR64IGpvsWLT/e53Yk/j0sygpl+Y8V9voR++P3+FX5m/h1SZ7VUW8nKctBjj/kzysuHuayuJYk4iPj3paXLyxK504QFr6zsjQJA/FHeHDdHTo6THn/cnzllSpb8Uhs08mqa4w/FxdWjErXHhARv0qQ3s1Q1ugyggkTsL904HAL33z81Y+LETHnVMn4jhdBeKCtbmZ2InZkevPnzn1e83p6nIdcrMM1tt030lpZmy5ZOv0mxmPK/8+c/b/oXmOnB27Jl6GLI8XSmufzyAtcll+TL2bINQsSVjY15PzF7P6YGz+9ffRGAG8zcRzobMcItrr9+vNfqOlINEd1o9jQSph2e+P0rJhBpjzPLS9pmue22Sd6sLIdpf9/ubo337o1o7e0xDodV7uiIcnt7jN1uQZmZTsrIUGjYMBcVFHiFEMk/yewRCBC/Li5evdmshVNMCV5x8fIMQPyBmbLM2L4ElJbmOM45J8/Qm+P790e1f/97f3TdugOxDRva1E8+6dJ4AIMLXC6BsWN9yrhxGaKoKEP53OeylIkTMxWzOl8nSCaR9vvp09+a9fbbMwzvX2pK8BTFcR8z5GxgJvr2t8d6jNpWTU1r7Lnnmrrfeqs5Fs8wnkhEQ2Njh9rY2KEuX47oocdHjnSL0tIcZdq0XEdpaY6jqyu51pwkotO7urp+DuAmw7dt9AYPzvD8rNHblT5TWprjeOIJf6be7ezZ06MtWdIYfvPN/baekct62sJgcM7LRm7R0EOBsrI3Cg5Oqy6Z6LLLCnT3TKmpaYl99avr2mXoBkI8dOaZ1fmGbtG4Td0pVDXyG8i1DEzl8ylUXj5c17ldTU1L7Prr6zra2mK2GR5uc0NjMe1RI1cpMix4gcB5XwfoPKO2J/VtzpzhTq9XxP0B2Ls3ov34x/Wd0ahmZFkpjxmz/P7V1xq1PUOCd+aZ1fnM2mIjtiX17wtfGKbrgtgDD2zpki1dfIj47t4+x/oZErxoVHsIQEL6uKUzIQhlZTlxH2Y2NHTGqqv3Rk/+TKkvzJSlaZGHjdiW7uCVlq6+AsBFBtQincTUqVnKkCHx3zD/8593RIysJx0x0/nFxVW6Vx7WFbyyspXZmsZy+oYEKS6OvyN0JML8+uuytTOCEHhgypRqXbdzdAVPVZUfAxihZxvSwI0fH/9kRbW1LbH2dlWe2xljpNOp3axnA3EH74wzVp0G8Df07FwanAkTsuJ+v4LBVnm/zlj/UVZWNT7eF8f9RioKLQEgh6Mk0Nix3rhbvPr6tuTqr2V/LlXlu+J9cVzB8/tXlgOYE+9OpcHLzXWS2x3//bsPP+yUN+4MR18sLq6aFc8r4wjenQIQ98SzMyl+Q4e64j466erSeO/eHhk8EwiBO+Lp0TLoN7Ok5AuXQU7jkHD5+Z64W7v9+yMDGt4jxaWkpKTqi4N90aCCN3/+8wqR+M/B7kTSb8gQR9wtXktLVMbOXLf3HgkO3KCevHVr3nwAEwdVkmQItzv+Oz/t7bKLmJmI6PTS0pmXDeY1A343y8urHQDdMviyJCO43Urch5qyQ7T5NI1vHczsZAMOXmurehkzTouvLEkvV/zXVhCN2md1yBQ2YcuWvAF3JRvwu6lp4rvx1SMZwaFjTiMbrcqa0ojo+oE+d0DBKy5edS4RJ3RueelYqTSJV2piRmkgsGr6QJ47oOAJQT/QV5IkpQfmgWXlpF+jfv/rE4DY2oE8VxocIQiPPebPGMhzCwo84pRT3HF1GWtujmrbtoUT1mVs+/ZO7b77Gu2w5LIVNCGin1+//oKt/T3ppMNMmGPXEcnQmaWsLNv0hSPz8pwiLy87YXNcZmQ40rlDtmB2Xgug3xkZ+n0ziopecRNhvqFlSVKKY8ZXi4pe6XcAQb/By8pyXQxgqKFVSVLqy8vIcPc7K0O/wWMmw2ZVkqR0QoSr+/v5CYN3cJDfFwyvSJLSw3mBQFXhiX54wuBpGuZDXsmUpHgJgK/s54d9Y8agOn1KknQ0ZrriRD/rM3glJaunAJhkWkWSlB4mFxev7jNHJ2jx+HIzq5GkdKEofWepz+ARycNMSTICM/d5uHlc8A42jXFPWyZJ0pFoQmnpa0XHPnpc8IhYzh4mSQZSVUflsY8d11eTCMc9STIHM+P++7eEB/Lc6dPznDNnDo27X+eTT37U3dycmKHoBw5E5ADAo80B8MSRDxx1n66s7D2fqrZ+CDlRre1cd91Y9/e+N9Yb7+uvvPLdtu3bw3IOCAsQodvj8Z729tszDo/YOOpQk7llJmToJMlQzPB0d/cc1QvsqOBpGioSW5IkpQdmPipbx1xcobMTWYwkpQtmfP7I/z8cvOLi5RkAJie8IklKA0Qonj79rcPn6IeDJ4Q4EwMYkS5JUjzYGQ53Hp4w7IhDTTrLinIkKV0IQYcPNw8HjxkyeJJkIuY+gkdEZ1hTjiSlB2YczpgAgLKy6mGQa5lLkqmIkH8wa73Bi8VU2dpJUgJEo+rngIPBI5K3ESQpEQ5l7dA5ngyeJCWEOCp4crFJSUoAIbRJwGfBG2NhLZKUNph7sybKy6s9AA23uB5JShOUX1S0xS0OHFDHQM6fKUmJQtnZTaOEEIo8zJSkBIpGUSg0TRttdSGSlE6EwBgB2WNFkhJtmCDiPKurkKT0wnmCWa5/J0kJNlQIQblWVyFJaUa2eJKUaESUJwAMsboQSUonzMgWkPNoSlKiuQUAl9VVSFKaccngSVLiuQSzDJ4kJRa7BRHiXoFGkqR4kOsESzFLkmQmwYyo1UVIUnrhiCBCxOoyJCm9UI8AZPAkKcEiMniSlHgRAaDH6iokKc30CIBara5CktIJM7UIZuy3uhBJSidE3CyI+IDVhUhSOjkYPNniSVIiMYv9gpmbrS5EktIJkdYsmGmv1YVIUjphpv0OIcQOZs3qWpISEVBQ4BFjxvhEfr5beL0Keb0KMjIcpKqMcFjljo4Yh8Mq79gR1j76qFNrb1fZ6rolazHzdgez2A7I4A1EVpZCpaW5jtLSHIffn6OMGeNVPB5lUNs4cCDCDQ0d6vr1LbGamgOxzZs7VE2TWUwnDgc1OXJytB0tLWDI9RP65PMpNGvWcOeFF+Y7S0qyHYqi78+Um+uis8/Oc5x9dp4DANraolxdvTf66qt7IqFQq2pI0ZKdaa2tPTsda9ZUdPv9q/YCJGeUPkJhoU9cc80Yd0XFMJfX6zBtP0OGOOnSS09xXXrpKa6dO7u0v/zl48iLL34S6emRzWCK2r1160U9hz5R2yGncgcAFBVlKAsXFrrLy4c79bZugzVqlFcsWlTkueaaMe6lSz/uWbZsZyQclueEqYSZm4DDC1OKRiuLsQOvV9D114/3/P73ZZmVlSMSHroj5ea66LvfHedZuvSsrHnz8uXUHCmEiBoA4GCLp21K51O8uXNHOG+4Ybx36FC3rf4Iw4a56fbbT/fOmTPS+eGHnfL8LyXQJuBg8IjERub0O6Jxu4l+8IPxniuvHGXrVuWss3Id06blOIgI6fg+pZiNwMHgOZ1afSRiqy970xUW+sR9903OGDcuMynmnXE6iRSFoGmAvP2QvKLRyPvAwXO8d9+dvR/gT60tKXGmTh2iPP54IDNZQnckIQhWnn9KevCujRsvaAYOX1wBANRZVE1CnXVWruORR4ozc3KcSfvpJZLhS0604dC/jgieeNeKUhJpxoyhjgcfPCPD5zPvvlyi9IYv6RrstEZEaw/9W3z2IK/t++mpYerUIco993wuw+lMnQ8rEWTLl0SY+Z1D/z78KRQi+z0AMUsqMllhoU88+OAZGWb2QLGKPOxMFhT1er21h/7vcPBqaqaFAaq3pijzuN1E//Vfk33Z2cl7TncyRAQhUvbXSxWht9+e0XXof4467krFw82bb57omTAhc3BDCJKQEASS2bOxo7N11LGXplE1EX8nsQWZp7JyuPPiiwtMuzne1RXDhg3tsbq61tiHH3ZqO3aEtZaWmBYOx+B2C3g8Co0Y4aYxY7zK6adnKYFAtmPs2AxBJiVECAFVlUO87IiIqo/8/6OC53AM+ZemtXYzw5PYsozn8yn0wx8Wec3YdijUov7jH7sjb7yxL9rT03dPrnBYQzgc4+bmHt68uU1bsWJPFABOOcVHF1wwwjVvXoErL89laAKJels+eYPdXpjR7fV63jrysePeeL+/6q8AKhJWlUluvLHIs2DBKEOXmQ6FWtQnn/you75e/7g5l0vBJZcUuK65Zox7yJCTn38qCmigV2RVVcOxPcuuvPLdtu3bw7I5tASvCgZnzz/ykT7eSa5KVDlmGTcuQ3zpS6cYFrrOzhgvWbK5a9Giuk4jQgcAkYiKF17YGbn66vc6DrWGRpEXWuxGrDzukWMfYMZxT0o2CxeO9hh1c3nLlg71m9+s7XjttT1RwPhDuNbWCN977+auJUsaurq7jRmAQCQvtNiJohzfmB336QyFZjcCSNrxeaee6hWVlSMMWeU2GGyNLVoU6ty1K2z6SdNrr+2O/uhHGzrb2qKG7Eu2enbBW2pqKj849tETNAv8stnlmOXqq0e7jWjtampaYrfcUhcOhxPXp6C+vlW95Zb6TiP2KVs923ihrwf7/IQK4XzR3FrM4XYLmj1bf2u3dWununjxxnA0mvhrEQ0NbdrPfra504jbAmbdtpAGjhkv9fV4n8Fbv/6895l5s7klGa+iYrgjI8Oh69PW2RnjO+7YlNCW7ljr1u1Xn3mmSffyafJw02pcf/DU7Tj9HJNRn0m1s/PPH6n7Zvljj33Y/ckn5p/TncwzzzT1bNzYpvtqi2z1rMMs/nqin50weJrGy2DGZTyTeDyCyspydPWCrq9vU//5z92GXtqPFzPjkUe2dqk6JxmTubOM5nCofznRD08YvA0bZn9IhDfNqcl4gUCOonfIz+9+91G3nb5rGhvbtTVr9ur6IpAtnjWIsKamZk7TiX5+kk8qPW10QWYxorULBg/YbiavP/5xR4+eCY6IZKtnBWZ+tr+f9xu8SGTf3wHsM7QikxQXZ+sK3iuv7IoYVYuRPvigQ9u0qV3nF4JMXoLt7+iIvNrfE/oN3saNCyIALzO2JnOMG5cR93FmT4+KNWv22eLcri9VVZ/qPNw0qhJpIIj4j1u3XtTvVekBfFi1p2Dz5YTy8pyUmRn/bYT33++IWXn74GTeffeAruJk8BJKE+Lkp2gnDV4wOHcLM1YYU5M5xo3L0DXQta6uxXbndkfauTOsdXbqubwpk5dAr/TVRexYAzo8I6Jf66/HPMOH65t6fdu2sK2DBwAtLfF3o5EtXuJo2sCyMqDgBYOz/g3Qe/pKMo/Pp2+2n507u2x9KA0ALS36Ok/L2wrmI8L6urpZA5o+ZcAXJITAb+IvyVx6u4np/VAnQiSib9EEt1smz3z0yECfOeDgDRlCfwNw0mNXK3g8+joldnXZf64EvR22MzJSb2pDm2ksKtr3z4E+ecDBW7OmIsZMv4ivJnOpqr7WQFHsf/UhFGpRu7s1jve/bds6bX84ncyYsWTZsgUDvlYwqHtfodAbLwDYNOiqTBbWeW0kGVoDn0/fDIV2vl2S/Pj9UOhfgxrDOsibzndqAD8wuNeYr7MzpqvFGznSbft53YcPj7/GWExDT49cWM884p7ebAziFYPdRTBY+TLAtppxuqNDX/DGjPHaPnijR/virlHv30fqV20wWNFv97C+xPFmEhPR7YN/nXmamvTdDjj99CxbzzTtcikoLPTGXeOOHfa/XZKsmLU7ABr0F1tc36K1tZVvABh0ys2yY0eXqmfcmt+vb2SD2YqLsxW3O/7vhp07u2zfQSA50cuh0Jy4hs7FffiiabHbAeiensAIkYiGPXu64/5WLyjwiAkTsmx7uDlz5lBd88hs3y5bPBP0qKp2d7wvjvvDVld3/jYi/m28rzdaQ4O+oTNz5owwbY0FPZxOgfLy4bqCp/dvIx2PmR/dsGH2h/G+Xte3vMsVedAua6fX1rbqul4+b16BMzPTftm74IJ850CmeD+RaFRDMGjvTuDJh3fFYsrDeragK3hr117Uxky36tmGUfQOnfH5FLriigJD11rQS1EEvvIVfes/bNrUpnZ3279nTjJhxo83bqzo0LMN3ec1oVDliwAPuKuMWbZvD2ufftqt6wN21VWj3MOHe2zTi+Wqq0a5TjlF362O995rse0A3+TEfwuFZv9D71YMuaAQi+FmAK1GbEuPqqq9uqZv8PkcuOmmIq8dxq+NGuUTX/vaaF3LpTEzVqzQN3pdOkqborgMOcIzJHj19bP3EFHcV3iMYsTUfNOnD3UsWDDK0pM9l0vBXXdN9upds33jxna1qUkuzWUcvqOmZuYuI7Zk2CX02tqKpwBUn/SJJvrgg061sbFD94WEb397rGfGjKGW3NsjIvzkJ5O848frG1UPAMuX77HlBE7JiJmqgsHKZ4zanoH3roidTvEfAPYbt83BW7Zsp+4Pm8MhsHjx6b5AIDehPVqICDffPMGj9/YBALS1RfmVV+wxOW8K2Keq2vfj6aFyIobeNF63rmI3QIuM3OZgvfrqnsju3fHfTD/E63VgyZIpGRUVIxLS8rlcCu6883PeefOMWbP9hRc+joTDOqehlgAARLihvn72HiO3afg3+u7dT2/Jz7+2AIDf6G0PBDOgqowZM/T19gB6W77zzhvmzMlx0vr1LTGz1hYfPdonHnrojIxAINeQkIfDKi9evCnc0yNP7/Ri5v8NBmc/ZvR2TekmpSjZPwHQYMa2B+Lll3dFduww5qICEeHyy091/fa3gcySkhxDv6icToFrril0P/lkaeZpp2Ua9l4891xTT1ubHJFggE0+n2+xGRs27bp5aelrRZrmrAIwxKx99Ofss/McDz9cnGHkNpkZa9ceiD33XFOPnrXQXS4FX/xivuuqq0a5Ro70GPrl19QU1r72tffarVjbL8V0AI5ZweB5W8zYuKk3rAKBqguZ8Qez93Mi99wz2WfUsszH2ratU1u1am9k3brm2JYtHdrJ1jfw+Rzw+3Mc55471DFz5jCn3gma+sLMWLSornPdOn29eCSwpuHaurrKv5u1A9MDEQisuoOZbjR7P33Jy3PSM89Myxo6VN+8myfT0RHjjz4Ka598EtZaWmJaOKzC4SD4fAqNGOGmU0/1KmPGeIURS0T356WXPo7cf/+WLlN3khb4gWBw9r1m7sH04M2f/7zS2DhsKRFXmr2vvkybluv41a+KMxR9U2/a3rZtHdrXv76+o6dH9svUh1cFg29+ebBTOQyW6fepNm1axsOGLXxFUbS5AI0we3/H+uSTbs3hIAoE7D3YVY9wWOUbbqjr3L8/IkOnAzNv9ngi8z/++FvdZu8rIYM/N26s6FAU1wIAnyRif8d68smPul99dVdK3kyOxTQsXrwpvH277BqmBzN2A3Tl2rUXtSVifwkbdV1TM3MXEX0VQGei9nkIM3DvvVvCa9c2p9RFB2bGkiUNXW+9tT+lfi8LdGiatiAUqvw4UTtM6HQHtbWzQsy4DkDCPyixmIbbbqsPh0KpMShU0xi//OXWrn/+U/bH1IeiRLRww4Y5GxK514TPrrVnzzMf5Odf3QjQxUhw8GMxxooVn0bGjvUpepf2slI0quHnP28I/+1vqXn4nECqEPSd2tpZryR6x5Z8+HbvfrYhP3/hTgAXIcH3+FSVUV29Lzp8uEtMmmTvaf360tkZ41tv3Rh+/fV98vBSHwb4ptrayj9bsXPLPni7dz+9IT9/4QEAcxK9b2bgzTf3x/bt6+Zp03KdDodtJxg7SmNjh7poUahT/5roEjPuCIVmP2nV/i39xt+9++ma/PxrewCUW7H/hoYO9c0398dKS3McOTku297oY2a8+OInkdtv3xQ+cMD+S4olgbtCocr/trIAW3zYAoHqbzBrv0CCz/kOcTgEFiw41f3NbxZ69I76NtrOnV3aQw9t6XrnndS6ImsRJsLttbWVlq/1aIvgAUBJyeoFRPwoAMs++aee6hGLFhV5zjlnqNPqFVTb26P87LM7ev70p509sZi8RWcAlRk3hkKVz1pdCGCj4AFAaenqKzQNjwNsSsfmgSoqylCuvnq0u7JypDPRXc1aWqL84osfR/70p5097e1yaI9BYsziB6FQxVKrCznEVsEDgJKSqrlE+D8Ahg7piUdhoU/Mm5fvmjt3hGvECPOm/dM0xoYNbbFXX90dXb58T1TOg2moDiJaWFs7q8rqQo5ku+ABQEnJ6ilEvBTAqVbXAgBCEKZNy3Gce+5QZ1lZrmPsWJ/Qeyja1RXDxo3tsXXrDsRWrvw0umuX/ukqpOPsIaIv19bOClldyLFsGTwAOPPM6vxoVFsKoNjqWo6Vl+ek0tIcx7hxGUphoU+MHu0TI0a4hMejkMdz9IXijo4Yd3bG+OOPu7UdO8La9u1hrbGxQ62ra4vJwaqm2qRp4st1dRU7rS6kL7YNHgBMmvRmlscTecqqIUXxEIKQmalQLMaQkw1ZhVdFo8rX9U6zbiZbB68Xk9+/ehGAxbDodoOUNBjAIxMm7L9n2bIFtu5kkATB61VSsvp8In4CQLbVtUj2Q8TtqkrfN3O6BiMlTQsSCs1aLkR0NjNvtroWyXY2CUEVyRI6IImCBwDr11+wNTdXqSDCE+g9rJDSHBEvVZTsOTU1lR9YXctgJM2h5rECgRWVzOIxK6aTkGxhHxFuqK2tfNXqQuKRVC3ekWpr51YRRc4BsMLqWqSEW+N0inOTNXRAErd4n2EqKVm1kEjcCYsmz5USphXgn/Wu2mPcAiJWSIHg9Sou/vcIIXp+AfClVtciGY+IlwPaTbW1cy2ZMMtoKRO8Q4qLqy4WAg8AGGl1LZIReBcgbgkGZ1m+3LeRUi54AFBW9p5P01pvALCIGbqWM5YsEyHCU+Gw++cNDee0W12M0VIyeIeUlFSdO7p5yQAAAlFJREFUKgQvZqYvW12LNHBEvJxZuTUYrPjI6lrMktLBOyQQqJrJjLsBlFhdi9SvWmbtjlBozptWF2K2tAjeIX7/ynJA3AUbjnhIZ8y8mQj3B4OVLyf71cqBSqvg9WLy+6suBfATgCZYXU2aayTih4uKmpfZvVOz0dIweL3mz39e2bIl72JAfB/gaVbXk174PSLxP7W1b/zD7FV57Cptg3ckv3+Fn0h8l5muhMVTHqYwjYhXMvPjweCcNVYXYzUZvCMcXD56IYCrAAy1uJxUsY8IfxYCv0+2jsxmksHrw5Qpz7uczryLiHAVM82GbAUHSwPwBhEvzc5WXlqzpsL09eaSjQzeSQQCVYUAX8lMVwCYbHU9NreRiP4qhPpCTc2cJquLsTMZvEEIBKoKmXE5gK8AmGh1PTbRQISXNI3/GgrNbrS6mGQhgxcnv796LKCVAzgPvQuvWD4PaCIwo5sI7wB4HVDXBINzg1bXlIxk8AxQXl7taW3FOcxcwYzPE6HY6tmwjUNRACGA1xJRdXY2/Vues+kng2eC6dPf8nZ1dZcCPB3AWcw4gwj5Vtc1EMzYTYQ6In6XWbzj9XrWv/32jC6r60o1MngJMmXKa3mK4phChMmAmCyENknTqJAII5H494EB3s2M7UTUANAmTdPeZ+6u37Bh3oEE15KWZPAsVlT0invIEDGaWRQyK6MBGs7MeUScByCPWeT2/psJoCz03tpw4rNzyk4AUQAqwO0AMTM1E2kHADT3/hv7AezTNDQ5HNGmtjZtx9atF/VY8gtLAID/Dx6A+iCefN6bAAAAAElFTkSuQmCC",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  busd: {
                      url: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BUSD-BD1/logo.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  usdt: {
                      url: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/USDT-6D8/logo.png",
                      rounded: !0,
                      bg: !1,
                      margin: 0
                  },
                  kebab: {
                      url: "https://bscscan.com/token/images/kebabfinance_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  usdc: {
                      url: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=010",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  btcb: {
                      url: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=010",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  eth: {
                      url: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=010",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  dot: {
                      url: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=010",
                      rounded: !0,
                      bg: "white",
                      margin: 1
                  },
                  link: {
                      url: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=010",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  cake: {
                      url: "https://cryptologos.cc/logos/pancakeswap-cake-logo.svg?v=010",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  uni: {
                      url: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010",
                      rounded: !0,
                      bg: "white",
                      margin: 0
                  },
                  sxp: {
                      url: "https://cryptologos.cc/logos/swipe-sxp-logo.svg?v=010",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  vai: {
                      url: "https://bscscan.com/token/images/venus-vai_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  band: {
                      url: "https://bscscan.com/token/images/bandtoken_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  twt: {
                      url: "https://bscscan.com/token/images/trust_32.png?v=1",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  xvs: {
                      url: "https://bscscan.com/token/images/venus_32.png",
                      rounded: !0,
                      bg: !1,
                      margin: 0
                  },
                  alpha: {
                      url: "https://bscscan.com/token/images/alpha_32.png?=v2",
                      rounded: !0,
                      bg: !1,
                      margin: 0
                  },
                  inj: {
                      url: "https://bscscan.com/token/images/injective_32.png",
                      rounded: !0,
                      bg: !1,
                      margin: 0
                  },
                  ust: {
                      url: "https://bscscan.com/token/images/terra-ust_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  btcst: {
                      url: "https://bscscan.com/token/images/btcst_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  wsote: {
                      url: "https://bscscan.com/token/images/soteria_32.png",
                      rounded: !0,
                      bg: "white",
                      margin: 0
                  },
                  front: {
                      url: "https://bscscan.com/token/images/frontier_32.png?=v1",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  helmet: {
                      url: "https://bscscan.com/token/images/helmet_32.png",
                      rounded: !0,
                      bg: "white",
                      margin: 0
                  },
                  egld: {
                      url: "https://bscscan.com/token/images/elrond_32.png?v=2",
                      rounded: !0,
                      bg: !1,
                      margin: 0
                  },
                  bdo: {
                      url: "https://bscscan.com/token/images/bdollar_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  sbdo: {
                      url: "https://bscscan.com/token/images/bdollar-share_32.png",
                      rounded: !1,
                      bg: !1,
                      margin: 0
                  },
                  mdx: {
                      url: "https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c.png"
                  },
                  wht: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png"
                  },
                  husd: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/4779.png"
                  },
                  hbtc: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/6941.png"
                  },
                  hltc: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"
                  },
                  hbch: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png"
                  },
                  hdot: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png"
                  },
                  hfil: {
                      url: "https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png"
                  },
                  hpt: {
                      url: "https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/0xe499ef4616993730ced0f31fa2703b92b50bb536.png"
                  },
                  filda: {
                      url: "https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/0xe36ffd17b2661eb57144ceaef942d95295e637f0.png",
                      rounded: !0
                  },
                  lhb: {
                      url: "https://raw.githubusercontent.com/mdexSwap/token-icons/main/heco/0x8f67854497218043e1f72908ffe38d0ed7f24721.png"
                  },
                  hard: {
                      url: "https://bscscan.com/token/images/hardprotocol_32.png",
                      rounded: !0
                  },
                  bscx: {
                      url: "https://bscscan.com/token/images/bscex_32.png",
                      rounded: !0,
                      bg: "white"
                  },
                  lit: {
                      url: "https://bscscan.com/token/images/litentry_32.png",
                      bg: "white",
                      rounded: !0
                  },
                  unfi: {
                      url: "https://bscscan.com/token/images/unifi_32.png",
                      rounded: !0
                  },
                  bch: {
                      url: "https://bscscan.com/token/images/bitcoincash_32.png"
                  },
                  ditto: {
                      url: "https://bscscan.com/token/images/ditto_32.png",
                      rounded: !0,
                      darkBg: "dark:bg-white"
                  },
                  ctk: {
                      url: "https://bscscan.com/token/images/certik_32.png"
                  },
                  lina: {
                      url: "https://bscscan.com/token/images/linear_32.png",
                      rounded: !0,
                      bg: "white"
                  },
                  hget: {
                      url: "https://assets.coingecko.com/coins/images/12453/small/Hedget.png?1599944809",
                      rounded: !0
                  },
                  reef: {
                      url: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130"
                  },
                  beth: {
                      url: "https://bscscan.com/token/images/binance-beth_32.png"
                  },
                  comp: {
                      url: "https://bscscan.com/token/images/compound_32.png?v1"
                  },
                  yfi: {
                      url: "https://bscscan.com/token/images/yfi_32.png"
                  },
                  xrp: {
                      url: "https://bscscan.com/token/images/xrp_32.png",
                      bg: "white",
                      rounded: !0
                  },
                  ada: {
                      url: "https://bscscan.com/token/images/cardano_32.png",
                      bg: "white",
                      rounded: !0
                  },
                  eos: {
                      url: "https://assets.coingecko.com/coins/images/738/small/eos-eos-logo.png?1547034481",
                      darkBg: "dark:bg-white",
                      rounded: !0
                  },
                  sfp: {
                      url: "https://assets.coingecko.com/coins/images/13905/small/z_u91wou_400x400.jpg?1612798329",
                      rounded: !0
                  },
                  mamzn: {
                      url: "https://bscscan.com/token/images/mirror-amzn_32.png"
                  },
                  mgoogl: {
                      url: "https://bscscan.com/token/images/mirror-google_32.png"
                  },
                  mnflx: {
                      url: "https://bscscan.com/token/images/mirror-nflx_32.png"
                  },
                  mtsla: {
                      url: "https://bscscan.com/token/images/mirror-tsla_32.png"
                  }
              },
              Oe = function(e) {
                  var t = e.token,
                      n = Object(Ie.a)(e, ["token"]);
                  if (!t) return null;
                  var i = t.url,
                      a = t.rounded,
                      s = t.bg,
                      r = t.darkBg,
                      d = t.margin;
                  return Object(k.jsx)("img", Object(L.a)({
                      src: i,
                      className: h()(a && "rounded-full shadow-sm", s && "bg-".concat(s), r, d && "p-".concat(d), "w-6 h-6 sm:w-8 sm:h-8")
                  }, n))
              },
              Le = function(e) {
                  var t = e.summary,
                      n = e.pool,
                      a = e.hasAutoRewards,
                      s = void 0 === a || a,
                      r = e.initiallyOpen,
                      l = void 0 !== r && r,
                      o = Object(Ie.a)(e, ["summary", "pool", "hasAutoRewards", "initiallyOpen"]),
                      f = Object(d.a)(t, 6),
                      p = (f[0], f[1]),
                      u = f[2],
                      c = (f[3], f[4]),
                      y = f[5],
                      m = Object(i.useState)(l),
                      b = Object(d.a)(m, 2),
                      g = b[0],
                      _ = b[1],
                      T = Object(i.useCallback)((function() {
                          return _((function(e) {
                              return !e
                          }))
                      }), []),
                      v = Object(i.useMemo)((function() {
                          return u.toLowerCase().replace(" lp", "").split("-")
                      }), [u]),
                      D = Object(d.a)(v, 2),
                      I = D[0],
                      S = D[1],
                      x = 100 * (n.APR + n.APR_AUTO) / 364,
                      C = n.newMultiplierAt,
                      V = Date.now() < C,
                      j = Date.now() > C,
                      E = "Venus" === n.farmName ? "( Venus )" : "";
                  E = "MoonLocker" === n.farmName ? "( MoonLocker )" : E;
                  var R, w = "Venus" === n.farmName ? "Disabled" : "",
                      $ = j ? n.newMultiplier : p;
                  return Object(k.jsxs)("div", {
                      className: "text-left py-2 text-sm sm:text-base border-b dark:border-gray-700 pl-3 pr-2",
                      children: [Object(k.jsx)("a", {
                          onClick: T,
                          children: Object(k.jsxs)(q.a, {
                              container: !0,
                              spacing: 1,
                              wrap: "nowrap",
                              alignItems: "center",
                              className: "cursor-pointer",
                              children: [Object(k.jsxs)(q.a, {
                                  item: !0,
                                  className: "flex space-x-1 sm:w-16",
                                  children: [Object(k.jsx)(Oe, {
                                      token: $e[I]
                                  }), S ? Object(k.jsx)(Oe, {
                                      style: {
                                          marginLeft: "-0.75rem"
                                      },
                                      token: $e[S]
                                  }) : Object(k.jsx)("div", {
                                      style: {
                                          marginLeft: "-0.75rem"
                                      },
                                      className: "w-6 sm:w-8"
                                  })]
                              }), Object(k.jsxs)(q.a, {
                                  item: !0,
                                  className: "flex-auto flex flex-col",
                                  children: [Object(k.jsxs)("div", {
                                      children: [Object(k.jsxs)("span", {
                                          className: "font-semibold",
                                          children: [u, " ", E, " ", Object(k.jsx)("span", {
                                              style: {
                                                  color: "red"
                                              },
                                              children: w
                                          })]
                                      }), "\xa0"]
                                  }), Object(k.jsxs)("div", {
                                      className: "text-xs sm:text-sm font-semibold flex flex-wrap",
                                      children: ["bsc" === o.chain && Object(k.jsxs)(k.Fragment, {
                                          children: [Object(k.jsxs)("span", {
                                              className: "rounded px-1 dark:text-white bg-blue-100 dark:bg-blue-900",
                                              children: [$, V && Object(k.jsxs)(k.Fragment, {
                                                  children: ["\xa0\u2192\xa0", n.newMultiplier]
                                              })]
                                          }), "\u2009"]
                                      }), Object(k.jsxs)("div", {
                                          className: "text-gray-500 dark:text-gray-400 font-semibold",
                                          children: ["TVL\xa0$", (R = parseInt(c), R > 1e12 ? "".concat(ne()((R / 1e12).toFixed(1)), "T") : R > 1e9 ? "".concat(ne()((R / 1e9).toFixed(1)), "B") : R > 1e6 ? "".concat(ne()((R / 1e6).toFixed(1)), "M") : R > 1e3 ? "".concat(ne()((R / 1e3).toFixed(1)), "K") : R)]
                                      })]
                                  })]
                              }), Object(k.jsxs)(q.a, {
                                  item: !0,
                                  className: "w-20 sm:w-24 text-right font-semibold",
                                  children: [Object(k.jsx)("div", {
                                      className: "",
                                      children: re(y)
                                  }), Object(k.jsx)("div", {
                                      className: "text-xs sm:text-base text-gray-500 dark:text-gray-400",
                                      children: de(x)
                                  })]
                              }), Object(k.jsxs)(q.a, {
                                  item: !0,
                                  className: "w-20 sm:w-24 text-xs sm:text-sm text-right font-semibold",
                                  children: [Object(k.jsx)("div", {
                                      className: h()(o.userWantsBalance > 0 ? "text-green-600 dark:text-green-500" : "text-gray-500 dark:text-gray-400"),
                                      children: fe(o.userWantsBalance, 2)
                                  }), Object(k.jsx)("div", {
                                      className: h()(o.userStakedWantToken > 0 ? "text-green-600 dark:text-green-500" : "text-gray-500 dark:text-gray-400"),
                                      children: fe(o.userStakedWantToken, 2)
                                  }), "bsc" === o.chain && Object(k.jsx)("div", {
                                      className: h()(o.userPendingAUTO > 1e-6 ? "text-green-600 dark:text-green-500" : "text-gray-500 dark:text-gray-400"),
                                      children: fe(o.userPendingAUTO, 2)
                                  })]
                              }), Object(k.jsx)(q.a, {
                                  item: !0,
                                  className: "sm:w-8 w-7",
                                  children: g ? Object(k.jsx)(Se.a, {}) : Object(k.jsx)(xe.a, {})
                              })]
                          })
                      }), Object(k.jsxs)(ye.a, { in: g,
                          children: [Object(k.jsx)(we, Object(L.a)({
                              pool: n,
                              hasAutoRewards: s
                          }, o)), Object(k.jsx)("div", {
                              className: "mx-3 mb-6",
                              children: Object(k.jsx)(Ve, {
                                  pool: n,
                                  chain: o.chain
                              })
                          })]
                      })]
                  })
              },
              Pe = Object(i.memo)(Le),
              Ne = function(e, t) {
                  return e === t ? Object(k.jsx)("div", {
                      style: {
                          transform: "scaleY(0.7)"
                      },
                      children: "\u25b2"
                  }) : e === "-" + t ? Object(k.jsx)("div", {
                      style: {
                          transform: "scaleY(0.7)"
                      },
                      children: "\u25bc"
                  }) : Object(k.jsxs)("div", {
                      className: "flex flex-col inline-block leading-none",
                      style: {
                          fontSize: 9,
                          transform: "scaleY(0.7)"
                      },
                      children: [Object(k.jsx)("div", {
                          children: "\u25b2"
                      }), Object(k.jsx)("div", {
                          children: "\u25bc"
                      })]
                  })
              },
              Ae = function(e) {
                  var t = e.sortField,
                      n = e.setSortField,
                      a = e.chain,
                      s = (Object(Ie.a)(e, ["sortField", "setSortField", "chain"]), Object(i.useCallback)((function() {
                          n((function(e) {
                              switch (e) {
                                  case "-apy":
                                      return "apy";
                                  case "apy":
                                      return null;
                                  default:
                                      return "-apy"
                              }
                          }))
                      }), [n])),
                      r = Object(i.useCallback)((function() {
                          n((function(e) {
                              switch (e) {
                                  case "-tvl":
                                      return "tvl";
                                  case "tvl":
                                      return null;
                                  default:
                                      return "-tvl"
                              }
                          }))
                      }), [n]);
                  return Object(k.jsx)("div", {
                      className: "sticky top-0 bg-white dark:bg-black border-b dark:border-gray-700 text-left py-2 text-xs sm:text-sm pl-3 pr-2 text-gray-500 dark:text-gray-400 select-none",
                      children: Object(k.jsxs)(q.a, {
                          container: !0,
                          spacing: 1,
                          wrap: "nowrap",
                          alignItems: "flex-end",
                          children: [Object(k.jsxs)(q.a, {
                              item: !0,
                              className: "flex-auto cursor-pointer",
                              onClick: r,
                              children: [Object(k.jsx)("div", {
                                  className: "font-semibold",
                                  children: "Token"
                              }), Object(k.jsxs)("div", {
                                  className: "font-semibold flex space-x-1",
                                  children: [Ne(t, "tvl"), Object(k.jsx)("div", {
                                      children: "TVL"
                                  })]
                              })]
                          }), Object(k.jsxs)(q.a, {
                              item: !0,
                              className: "w-20 sm:w-24 text-right font-semibold cursor-pointer",
                              onClick: s,
                              children: [Object(k.jsxs)("div", {
                                  className: "flex justify-end items-center space-x-1",
                                  children: [Ne(t, "apy"), Object(k.jsx)("div", {
                                      children: "APY"
                                  })]
                              }), Object(k.jsx)("div", {
                                  className: "",
                                  children: "Daily APR"
                              })]
                          }), Object(k.jsxs)(q.a, {
                              item: !0,
                              className: "w-20 sm:w-24 text-right font-semibold",
                              children: [Object(k.jsx)("div", {
                                  children: "Balance"
                              }), Object(k.jsx)("div", {
                                  children: "Deposit"
                              }), "bsc" === a && Object(k.jsx)("div", {
                                  children: "Rewards"
                              })]
                          }), Object(k.jsx)(q.a, {
                              item: !0,
                              className: "w-7 sm:w-8"
                          })]
                      })
                  })
              },
              qe = Object(i.memo)(Ae),
              Me = Object(k.jsxs)("div", {
                  className: "dark:text-yellow-400 text-yellow-600 text-sm leading-tight mt-2",
                  children: [Object(k.jsx)("div", {
                      style: {
                          fontWeight: "bold",
                          fontSize: "16px"
                      },
                      children: " WARNING "
                  }), Object(k.jsx)("div", {
                      children: " These farms have NOT been reviewed by the autofarm\xa0team. "
                  }), Object(k.jsxs)("div", {
                      children: [" ", Object(k.jsx)("b", {
                          children: "DYOR"
                      }), ", use at your own risk.  "]
                  })]
              }),
              Fe = function(e) {
                  var t = e.degen,
                      n = e.hasDegen,
                      a = (e.toggleDegen, e.farmChoices),
                      s = void 0 === a ? [] : a,
                      r = e.setSelectedFarm,
                      d = e.selectedFarm,
                      l = e.hideEmpty,
                      o = e.setHideEmpty,
                      f = Object(i.useCallback)((function() {
                          o((function(e) {
                              return !e
                          }))
                      }), [o]);
                  return Object(k.jsxs)("div", {
                      className: "py-1 px-3 space-y-2",
                      children: [Object(k.jsx)("div", {
                          className: "flex",
                          children: Object(k.jsx)(ye.a, { in: n,
                              children: Object(k.jsx)("div", {
                                  className: "flex items-center"
                              })
                          })
                      }), Object(k.jsxs)("div", {
                          children: [Object(k.jsx)("div", {
                              className: "font-semibold text-base text-gray-500 dark:text-gray-400 leading-none mb-2",
                              children: "Farm"
                          }), Object(k.jsx)("div", {
                              className: "flex space-x-2 text-sm items-center overflow-x-auto",
                              children: s.map((function(e) {
                                  var t = e.farm,
                                      n = e.farmName;
                                  return Object(k.jsx)("div", {
                                      onClick: function() {
                                          return r("All" === n ? null : n)
                                      },
                                      className: h()(d === n || null == d && "All" === n ? "dark:bg-white dark:text-black bg-gray-700 text-white" : "dark:bg-gray-900 dark:hover:bg-gray-800 bg-gray-100 hover:bg-gray-200", "cursor-pointer rounded-full px-3 py-1 transition"),
                                      children: n
                                  }, t)
                              }))
                          })]
                      }), Object(k.jsx)("div", {
                          className: "flex justify-end pt-3",
                          children: Object(k.jsxs)("div", {
                              className: "flex items-center leading-none space-x-2 rounded dark:bg-gray-900 p-2 select-none cursor-pointer dark:hover:bg-gray-800 text-sm",
                              children: [Object(k.jsx)("div", {
                                  children: Object(k.jsx)("label", {
                                      className: "cursor-pointer",
                                      htmlFor: "hideEmpty",
                                      children: "Staked only"
                                  })
                              }), Object(k.jsx)("input", {
                                  type: "checkbox",
                                  className: "cursor-pointer form-checkbox h-5 w-5 text-gray-600",
                                  checked: l,
                                  name: "hideEmpty",
                                  id: "hideEmpty",
                                  onChange: f
                              })]
                          })
                      }), Object(k.jsx)("div", {
                          className: "flex-auto",
                          children: Object(k.jsx)(ye.a, { in: !!t,
                              children: Me
                          })
                      })]
                  })
              },
              ze = Object(i.memo)(Fe),
              Be = n(895),
              Ue = n(900),
              We = [{
                  id: 56,
                  c: "bsc",
                  label: "BSC"
              }],
              He = Object(Be.a)(Object(Ue.a)("id"), We),
              Ke = (Object(Be.a)(Object(Ue.a)("c"), We), function(e) {
                  var t = e.chain,
                      n = e.activeChain,
                      a = e.setChain,
                      s = (e.chainId, Object(i.useCallback)((function() {
                          a(t.c)
                      }), [t, a])),
                      r = t.c === n;
                  return Object(k.jsx)("a", {
                      onClick: s,
                      className: h()("text-2xl font-semibold cursor-pointer transition", r ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500", !r && "hover:text-gray-500 dark:hover:text-gray-400"),
                      children: t.label
                  })
              }),
              Xe = function(e) {
                  var t, n = e.chain,
                      i = e.setChain,
                      a = e.chainId,
                      s = He[a];
                  return Object(k.jsxs)("div", {
                      className: "px-3",
                      children: [Object(k.jsx)("div", {
                          className: "flex space-x-3",
                          children: We.map((function(e) {
                              return Object(k.jsx)(Ke, {
                                  chain: e,
                                  activeChain: n,
                                  setChain: i,
                                  chainId: a
                              }, e.id)
                          }))
                      }), Object(k.jsx)(ye.a, { in: !1,
                          children: Object(k.jsxs)("div", {
                              className: "mt-2 text-yellow-600 dark:text-yellow-400 pb-2 sm:text-base text-sm",
                              children: [Object(k.jsxs)("div", {
                                  className: "font-semibold",
                                  children: ["Your wallet is connected to the ", (null === s || void 0 === s || null === (t = s.c) || void 0 === t ? void 0 : t.toUpperCase()) || "wrong", " network."]
                              }), Object(k.jsx)("div", {
                                  children: "Please switch your network to enable your balances, deposits and withdrawals."
                              })]
                          })
                      })]
                  })
              },
              Ye = Object(i.memo)(Xe),
              Qe = n(176),
              Ze = n(903),
              Ge = n(245),
              Je = n.n(Ge),
              et = n(397),
              tt = JSON.parse(et.result),
              nt = function(e, t) {
                  return function(n) {
                      var i = n.pools,
                          a = n.batch;
                      return Promise.all(i.map((function(n) {
                          var i = n.pid,
                              s = Object(Ie.a)(n, ["pid"]);
                          return new Promise((function(n, r) {
                              var d = e(Object(L.a)({
                                  pid: i
                              }, s)).call.request({}, (function(e, a) {
                                  if (e) return console.log(e), void r(e);
                                  var d = a;
                                  !1 !== t && (d = J.a.utils.formatUnits(a.toString(), t || s.pool.wantDecimals)), n({
                                      pid: i,
                                      data: d
                                  })
                              }));
                              a.add(d)
                          }))
                      }))).then((function(e) {
                          return e.map((function(e) {
                              var t = e.pid,
                                  n = e.data;
                              return Object(Qe.a)({}, t, n)
                          })).reduce(Ze.a, {})
                      }))
                  }
              },
              it = function(e) {
                  var t = e.autoContract,
                      n = e.address,
                      i = Object(Ie.a)(e, ["autoContract", "address"]);
                  return nt((function(e) {
                      var i = e.pid;
                      return t.np.methods.pendingAUTO(i, n)
                  }), 18)(i)
              },
              at = function(e) {
                  var t = e.address,
                      n = Object(Ie.a)(e, ["address"]);
                  return nt((function(e) {
                      return e.contract.np.methods.balanceOf(t)
                  }))(n)
              },
              st = function(e) {
                  var t = e.address,
                      n = e.autoContractAddress,
                      i = Object(Ie.a)(e, ["address", "autoContractAddress"]);
                  return nt((function(e) {
                      return e.contract.np.methods.allowance(t, n)
                  }), !1)(i)
              },
              rt = function(e) {
                  var t = e.autoContract,
                      n = e.address,
                      i = Object(Ie.a)(e, ["autoContract", "address"]);
                  return nt((function(e) {
                      var i = e.pid;
                      return t.np.methods.stakedWantTokens(i, n)
                  }))(i)
              },
              dt = function(e, t, n, a, s, r, l) {
                  var o, f = Object(i.useMemo)((function() {
                          return n && a && function(e, t) {
                              return function(n) {
                                  return n = n.toLowerCase(), {
                                      p: new e.eth.Contract(Je.a.abi, n, (function(e, t) {
                                          e && console.log(e)
                                      })),
                                      np: new t.eth.Contract(Je.a.abi, n, (function(e, t) {
                                          e && console.log(e)
                                      }))
                                  }
                              }
                          }(n, a)
                      }), [n, a]),
                      p = Object(i.useMemo)((function() {
                          return n && a && function(e, t, n) {
                              var i = O.a.autoFarmV2ContractAddress[n];
                              return {
                                  p: new e.eth.Contract(tt, i, (function(e, t) {
                                      e && console.log(e)
                                  })),
                                  np: new t.eth.Contract(tt, i, (function(e, t) {
                                      e && console.log(e)
                                  }))
                              }
                          }(n, a, r)
                      }), [n, a, r]),
                      u = Object(i.useMemo)((function() {
                          var t, n;
                          return f && (null === e || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.poolsDisplayOrder) || void 0 === n ? void 0 : n.map((function(t) {
                              var n = e.data.pools[t];
                              return {
                                  pid: t,
                                  pool: n,
                                  contract: f(n.wantAddress)
                              }
                          })))
                      }), [null === e || void 0 === e || null === (o = e.data) || void 0 === o ? void 0 : o.poolsDisplayOrder, f]),
                      c = Object(i.useMemo)((function() {
                          return u && Object(Be.a)((function(e) {
                              return e.pid
                          }), u)
                      }), [u]),
                      y = O.a.autoFarmV2ContractAddress[r];
                  return {
                      userData: Object(Q.a)(["userData", {
                          address: t,
                          chain: r
                      }], (function() {
                          var e = new a.BatchRequest,
                              n = Promise.all(["bsc" === r && it, at, st, rt].map((function(n) {
                                  return n && n({
                                      pools: u,
                                      address: t,
                                      autoContract: p,
                                      autoContractAddress: y,
                                      batch: e
                                  })
                              })));
                          return e.execute(), n.then((function(e) {
                              var t = Object(d.a)(e, 4);
                              return {
                                  pendingAUTO: t[0],
                                  balances: t[1],
                                  allowances: t[2],
                                  staked: t[3]
                              }
                          }))
                      }), {
                          enabled: !!s && !!u && !!t && !!p,
                          initialData: {},
                          refetchInterval: 1e4
                      }),
                      autoContract: p,
                      poolsByPid: c
                  }
              },
              lt = {},
              ot = G.a.create({
                  baseURL: O.a.serverURLBase2
              }),
              ft = (G.a.create({
                  baseURL: O.a.serverURLBaseHeco
              }), function() {
                  return ot.get("get_stats").then((function(e) {
                      return e.data
                  }))
              }),
              pt = function() {
                  return ot.get("get_farms_data").then((function(e) {
                      return e.data
                  }))
              },
              ut = function(e) {
                  var t, n, a, s, r, l, p, u, c = e.chain,
                      y = e.setChain,
                      m = e.web3,
                      b = e.web3_np,
                      g = e.address,
                      _ = e.connectionOK,
                      T = e.notify,
                      v = e.chainId,
                      D = Object(i.useState)(!1),
                      h = Object(d.a)(D, 2),
                      I = h[0],
                      S = h[1],
                      x = Object(i.useCallback)((function() {
                          S((function(e) {
                              return !e
                          })), ne(null)
                      }), [S]);
                  Object(i.useEffect)((function() {
                      S(!1)
                  }), [c, S]), Object(i.useEffect)((function() {
                      56 === v && "heco" === c && y("bsc"), 128 === v && "bsc" === c && y("heco")
                  }), [v]);
                  var C = Object(Q.a)("bsc-stats", ft, {
                          refetchInterval: 3e4
                      }),
                      V = C,
                      j = Object(Q.a)("bsc-farm", pt),
                      E = j,
                      R = (null === E || void 0 === E || null === (t = E.data) || void 0 === t ? void 0 : t.degenRowOnwards) < (null === E || void 0 === E || null === (n = E.data) || void 0 === n || null === (a = n.table_data) || void 0 === a ? void 0 : a.length),
                      w = dt(E, g, m, b, _, c, v),
                      $ = w.userData,
                      L = Object(i.useMemo)((function() {
                          var e;
                          return {
                              bsc: null === (e = C.data) || void 0 === e ? void 0 : e.platformTVL
                          }
                      }), [C.data]),
                      P = null === L || void 0 === L ? void 0 : L.bsc,
                      N = Object(i.useMemo)((function() {
                          var e;
                          return Object(B.a)(Object(U.a)(null === $ || void 0 === $ || null === (e = $.data) || void 0 === e ? void 0 : e.pendingAUTO))
                      }), [null === $ || void 0 === $ || null === (s = $.data) || void 0 === s ? void 0 : s.pendingAUTO]),
                      A = Object(i.useMemo)((function() {
                          var e;
                          return Object(B.a)(Object(U.a)(Object(W.a)((function(e, t) {
                              var n, i, a;
                              return e * ((null === E || void 0 === E || null === (n = E.data) || void 0 === n || null === (i = n.pools) || void 0 === i || null === (a = i[t]) || void 0 === a ? void 0 : a.wantPrice) || 0)
                          }), null === $ || void 0 === $ || null === (e = $.data) || void 0 === e ? void 0 : e.staked)))
                      }), [null === $ || void 0 === $ || null === (r = $.data) || void 0 === r ? void 0 : r.staked, null === E || void 0 === E || null === (l = E.data) || void 0 === l ? void 0 : l.pools]),
                      q = Object(i.useCallback)((function(e) {
                          var t, n, i, a, s, r = e.pid,
                              d = e.amt;
                          if (d) {
                              var l = w.autoContract,
                                  o = 1 === (d.match(/,/g) || []).length ? d.replace(",", ".") : d,
                                  f = null === $ || void 0 === $ || null === (t = $.data) || void 0 === t || null === (n = t.pendingAUTO) || void 0 === n ? void 0 : n[r],
                                  p = function(e) {
                                      return new Promise((function(t, n) {
                                          l.p.methods.deposit(e, J.a.utils.parseUnits(o, 18)).send({
                                              from: g
                                          }, (function(e, t) {
                                              e && console.log(e)
                                          })).on("error", (function(e) {
                                              n(e)
                                          })).on("transactionHash", (function(e) {
                                              T("Deposit pending..."), console.log(e, "pending...")
                                          })).on("receipt", (function(e) {
                                              if (console.log(e, "receipt"), !lt[e.blockHash]) {
                                                  lt[e.blockHash] = !0;
                                                  var n = "Deposit complete!";
                                                  f > 0 && (n += " ".concat(fe(f), " Rake Harvested")), T(n), $.refetch(), t(e)
                                              }
                                          })).on("confirmation", (function(e, t) {}))
                                      }))
                                  },
                                  u = null === (i = w.poolsByPid) || void 0 === i ? void 0 : i[r];
                              if (!(null === (a = $.data) || void 0 === a ? void 0 : a.allowances[r]) || ee.a.from(null === (s = $.data) || void 0 === s ? void 0 : s.allowances[r].toString()).lt(J.a.utils.parseUnits(d, 18))) {
                                  T("Approval required.");
                                  var y = u.contract,
                                      m = O.a.autoFarmV2ContractAddress[c];
                                  return new Promise((function(e, t) {
                                      y.p.methods.approve(m, J.a.utils.parseUnits("5", 76)).send({
                                          from: g
                                      }, (function(e, t) {
                                          e && console.log(e)
                                      })).on("error", (function(e) {
                                          console.log(e), t(e)
                                      })).on("transactionHash", (function(e) {
                                          T("Approving..."), console.log(e, "Approving...")
                                      })).on("receipt", (function(t) {
                                          console.log("receipt"), lt[t.blockHash] ? console.log("hashCompletionHandled") : (lt[t.blockHash] = !0, T("Approval complete!"), e(p(r)))
                                      })).on("confirmation", (function(e, t) {
                                          console.log(t, "confirmation")
                                      }))
                                  }))
                              }
                              return p(r)
                          }
                      }), [$.data, w.autoContract, w.poolsByPid, g, T]),
                      M = Object(i.useCallback)((function(e) {
                          var t = e.pid,
                              n = e.amt;
                          if (n) {
                              var i = w.autoContract,
                                  a = 1 === (n.match(/,/g) || []).length ? n.replace(",", ".") : n,
                                  s = J.a.utils.parseUnits(a, 18);
                              return new Promise((function(e, n) {
                                  i.p.methods.withdraw(t, s).send({
                                      from: g
                                  }, (function(e, t) {
                                      e && console.log(e)
                                  })).on("error", (function(e) {
                                      console.error(e), n(e)
                                  })).on("transactionHash", (function(e) {
                                      T("Withdraw pending..."), console.log(e, "pending...")
                                  })).on("receipt", (function(t) {
                                      console.log(t, "receipt"), lt[t.blockHash] || (lt[t.blockHash] = !0, T("Withdraw complete"), $.refetch(), e(t))
                                  })).on("confirmation", (function(e, t) {}))
                              }))
                          }
                      }), [w.autoContract, T, g, $.refetch]),
                      F = Object(i.useCallback)(Object(f.a)(o.a.mark((function e() {
                          var t, n, i, a, s;
                          return o.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return t = w.autoContract, n = new m.BatchRequest, i = Object.keys(E.data.pools), a = i.filter((function(e) {
                                          return $.data.pendingAUTO[e] > 1e-6
                                      })), s = a.map((function(e) {
                                          return new Promise((function(i, a) {
                                              return n.add(t.p.methods.withdraw(e, 0).send.request({
                                                  from: g
                                              }, (function(e, t) {
                                                  if (e) return a(e);
                                                  i(t)
                                              })))
                                          }))
                                      })), n.execute(), e.next = 8, Promise.all(s);
                                  case 8:
                                      return e.next = 10, new Promise((function(e) {
                                          return setTimeout(e, 7e3)
                                      }));
                                  case 10:
                                      $.refetch(), T("All rewards harvested");
                                  case 12:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), [w.autoContract, T, g, null === (p = $.data) || void 0 === p ? void 0 : p.pendingAUTO, $.refetch, E.data, m]),
                      Z = Object(i.useState)(null),
                      G = Object(d.a)(Z, 2),
                      te = G[0],
                      ne = G[1];
                  Object(i.useEffect)((function() {
                      ne(null)
                  }), [c, ne]);
                  var ie = Object(i.useMemo)((function() {
                          var e;
                          return Object(H.a)((function(e) {
                              return [{
                                  farm: null,
                                  farmName: "All"
                              }].concat(Object(z.a)(e))
                          }), Object(K.a)((function(e) {
                              return e.farmName
                          })), (function(e) {
                              return e.map((function(e) {
                                  return {
                                      farm: e.farm,
                                      farmName: e.farmName
                                  }
                              }))
                          }), (function(e) {
                              return e.map((function(e) {
                                  var t, n = Object(d.a)(e, 1)[0];
                                  return null === E || void 0 === E || null === (t = E.data.pools) || void 0 === t ? void 0 : t[n]
                              }))
                          }), (function(e) {
                              var t, n;
                              return I ? e.slice(null === E || void 0 === E || null === (t = E.data) || void 0 === t ? void 0 : t.degenRowOnwards) : e.slice(0, null === E || void 0 === E || null === (n = E.data) || void 0 === n ? void 0 : n.degenRowOnwards)
                          }))((null === E || void 0 === E || null === (e = E.data) || void 0 === e ? void 0 : e.table_data) || [])
                      }), [null === E || void 0 === E ? void 0 : E.data, I]),
                      ae = Object(i.useState)(null),
                      se = Object(d.a)(ae, 2),
                      re = se[0],
                      de = se[1],
                      le = Object(i.useState)(!1),
                      oe = Object(d.a)(le, 2),
                      pe = oe[0],
                      me = oe[1],
                      be = Object(i.useMemo)((function() {
                          var e;
                          return Object(H.a)(pe ? function(e) {
                              return e.filter((function(e) {
                                  var t, n, i = Object(d.a)(e, 1)[0];
                                  return (null === (t = $.data) || void 0 === t || null === (n = t.staked) || void 0 === n ? void 0 : n[i]) > 1e-6
                              }))
                          } : X.a, re ? Object(Y.a)((function(e) {
                              var t, n, i = Object(d.a)(e, 6),
                                  a = i[0],
                                  s = (i[1], i[2], i[3], i[4]),
                                  r = i[5];
                              null === E || void 0 === E || null === (t = E.data) || void 0 === t || null === (n = t.pools) || void 0 === n || n[a];
                              return "apy" === re ? parseFloat(r) : "-apy" === re ? -parseFloat(r) : "tvl" === re ? parseFloat(s) : "-tvl" === re ? -parseFloat(s) : 0
                          })) : X.a, (function(e) {
                              return te ? e.filter((function(e) {
                                  var t, n, i = Object(d.a)(e, 1)[0];
                                  return (null === E || void 0 === E || null === (t = E.data) || void 0 === t || null === (n = t.pools) || void 0 === n ? void 0 : n[i]).farmName === te
                              })) : e
                          }), (function(e) {
                              var t, n;
                              return I ? e.slice(null === E || void 0 === E || null === (t = E.data) || void 0 === t ? void 0 : t.degenRowOnwards) : e.slice(0, null === E || void 0 === E || null === (n = E.data) || void 0 === n ? void 0 : n.degenRowOnwards)
                          }))((null === E || void 0 === E || null === (e = E.data) || void 0 === e ? void 0 : e.table_data) || [])
                      }), [I, null === E || void 0 === E ? void 0 : E.data, te, re, $.data, pe]),
                      ge = Object(i.useMemo)((function() {
                          var e, t;
                          return (null === (e = $.data) || void 0 === e ? void 0 : e.pendingAUTO) && Object.values(null === (t = $.data) || void 0 === t ? void 0 : t.pendingAUTO).filter((function(e) {
                              return e >= 1e-6
                          })).length
                      }), [$.data]),
                      _e = Object(i.useMemo)((function() {
                          var e, t = null === (e = j.data) || void 0 === e ? void 0 : e.pools;
                          if (!t) return !1;
                          var n = Object.keys(t).find((function(e) {
                              return !!t[e].newMultiplierAt
                          }));
                          return n ? t[n].newMultiplierAt : void 0
                      }), [j.data]),
                      Te = Object(i.useMemo)((function() {
                          return Date.now()
                      }), []),
                      ve = Object(i.useMemo)((function() {
                          return Te < _e
                      }), [Te, _e]),
                      De = Object(i.useCallback)((function(e) {
                          var t = e.days,
                              n = e.hours,
                              i = e.minutes,
                              a = e.seconds;
                          if (e.completed) return Object(k.jsx)("div", {
                              children: "New multipliers in effect"
                          });
                          var s = [t && "".concat(t, "d"), "".concat(n, "h"), "".concat(i, "m"), "".concat(a, "s")].filter(Boolean).join(" ");
                          return Object(k.jsxs)("div", {
                              className: "leading-none",
                              children: ["New RAKE multipliers in", Object(k.jsx)("span", {
                                  className: "bg-blue-100 dark:bg-blue-900 p-1 rounded text-sm ml-2 whitespace-nowrap font-semibold",
                                  children: s
                              })]
                          })
                      }), []);
                  return Object(k.jsxs)("div", {
                      className: "max-w-3xl m-auto flex flex-col space-y-6 bgImageLeft",
                      children: [Object(k.jsx)(he, {
                          stats: V,
                          platformTVL: P,
                          tvls: L,
                          priceAUTO: null === V || void 0 === V || null === (u = V.data) || void 0 === u ? void 0 : u.priceAUTO,
                          totalPendingAUTO: N,
                          totalStaked: A,
                          chain: c,
                          showBuyAuto: "bsc" === c,
                          harvestAll: F,
                          numHarvestable: ge
                      }), E.isLoading && Object(k.jsx)("div", {
                          className: "text-center py-5 text-xl font-semibold text-gray-500",
                          children: Object(k.jsx)(ue, {})
                      }), Object(k.jsxs)(ye.a, { in: E.isSuccess,
                          timeout: 2e3,
                          children: [ve && Object(k.jsx)("div", {
                              className: "text-center bg-gray-100 dark:bg-gray-900 p-3 my-4 rounded-lg",
                              children: Object(k.jsx)(ce.a, {
                                  date: _e,
                                  renderer: De
                              })
                          }), Object(k.jsx)(Ye, {
                              chain: c,
                              setChain: y,
                              chainId: v
                          }), Object(k.jsx)(ze, {
                              degen: I,
                              hasDegen: R,
                              toggleDegen: x,
                              selectedFarm: te,
                              setSelectedFarm: ne,
                              farmChoices: ie,
                              hideEmpty: pe,
                              setHideEmpty: me
                          }), Object(k.jsxs)("div", {
                              className: "max-w-3xl m-auto",
                              children: [Object(k.jsxs)("div", {
                                  className: "flex flex-col relative",
                                  children: [Object(k.jsx)(qe, {
                                      sortField: re,
                                      setSortField: de,
                                      chain: c
                                  }), null === be || void 0 === be ? void 0 : be.map((function(e, t) {
                                      var n, i, a, s, r, d;
                                      if (e) {
                                          var l = e[0],
                                              o = E.data.pools[l];
                                          return Object(k.jsx)(Pe, {
                                              pid: l,
                                              summary: e,
                                              pool: o,
                                              userPendingAUTO: null === $ || void 0 === $ || null === (n = $.data) || void 0 === n || null === (i = n.pendingAUTO) || void 0 === i ? void 0 : i[l],
                                              userWantsBalance: null === $ || void 0 === $ || null === (a = $.data) || void 0 === a || null === (s = a.balances) || void 0 === s ? void 0 : s[l],
                                              userStakedWantToken: null === $ || void 0 === $ || null === (r = $.data.staked) || void 0 === r ? void 0 : r[l],
                                              priceAUTO: null === V || void 0 === V || null === (d = V.data) || void 0 === d ? void 0 : d.priceAUTO,
                                              withdraw: M,
                                              deposit: q,
                                              hasAutoRewards: "bsc" === c && !I,
                                              chain: c
                                          }, l)
                                      }
                                  }))]
                              }), Object(k.jsx)("div", {
                                  className: "text-sm text-center text-gray-500 my-3",
                                  children: "Auto-compound assets. Earn RAKE."
                              })]
                          })]
                      }), Object(k.jsx)("div", {
                          className: "pt-64"
                      })]
                  })
              },
              ct = n(182),
              yt = (n(852), n(39)),
              mt = function(e) {
                  Object(N.a)(n, e);
                  var t = Object(A.a)(n);

                  function n(e) {
                      var i;
                      return Object(P.a)(this, n), (i = t.call(this, e)).notify = function(e) {
                          return ct.c.dark(e)
                      }, i.render = function() {
                          var e = {
                              v2: !0,
                              notify: i.notify,
                              connectionOK: i.props.connectionOK,
                              connected: i.props.connected,
                              chainId: i.props.chainId,
                              address: i.props.address,
                              web3: i.props.web3,
                              web3_np: i.props.web3_np,
                              chain: i.props.chain,
                              setChain: i.props.setChain
                          };
                          return Object(k.jsxs)("div", {
                              children: [Object(k.jsxs)("div", {
                                  style: {
                                      minHeight: "630px"
                                  },
                                  children: [Object(k.jsx)(ct.b, {
                                      transition: ct.a,
                                      position: "bottom-left",
                                      hideProgressBar: !0,
                                      autoClose: 3e3,
                                      newestOnTop: !1,
                                      closeOnClick: !0,
                                      rtl: !1,
                                      pauseOnFocusLoss: !0,
                                      draggable: !0,
                                      pauseOnHover: !0
                                  }), Object(k.jsx)(yt.c, {
                                      children: Object(k.jsx)(yt.a, {
                                          path: "/",
                                          children: Object(k.jsx)(ut, Object(L.a)({}, e))
                                      })
                                  }), "prod" == O.a.mode ? "" : Object(k.jsxs)("h3", {
                                      children: ["Mode: ", O.a.mode]
                                  })]
                              }), Object(k.jsx)(F, {})]
                          })
                      }, i.state = {
                          page: "v2_vaults"
                      }, i
                  }
                  return n
              }(i.PureComponent),
              bt = new _.a,
              gt = {
                  display: {
                      logo: w,
                      name: "Binance Chain Wallet",
                      description: "Binance Smart Chain Wallet"
                  },
                  package: v.BscConnector,
                  options: {
                      supportedChainIds: [56]
                  },
                  connector: function() {
                      var e = Object(f.a)(o.a.mark((function e(t, n) {
                          var i;
                          return o.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return i = new t(n), e.next = 3, i.activate();
                                  case 3:
                                      return e.abrupt("return", i.getProvider());
                                  case 4:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      })));
                      return function(t, n) {
                          return e.apply(this, arguments)
                      }
                  }()
              };

          function _t(e) {
              var t = new u.a(e);
              return t.eth.extend({
                  methods: [{
                      name: "chainId",
                      call: "eth_chainId",
                      outputFormatter: t.utils.hexToNumber
                  }]
              }), t
          }
          var Tt = function() {
                  var e = Object(i.useState)(C ? "dark" : "light"),
                      t = Object(d.a)(e, 2),
                      n = t[0],
                      a = t[1],
                      s = Object(i.useCallback)((function() {
                          a((function(e) {
                              return "light" === e ? "dark" : "light"
                          }))
                      }), [a]),
                      r = Object(i.useMemo)((function() {
                          return {
                              theme: n,
                              toggleTheme: s
                          }
                      }), [n, s]);
                  Object(i.useEffect)((function() {
                      "dark" === n ? (document.documentElement.classList.add("dark"), localStorage.theme = "dark") : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"))
                  }), [n]);
                  var l = Object(i.useState)(null),
                      p = Object(d.a)(l, 2),
                      m = p[0],
                      _ = p[1],
                      v = Object(i.useState)(!1),
                      D = Object(d.a)(v, 2),
                      h = D[0],
                      I = D[1],
                      S = Object(i.useState)(null),
                      x = Object(d.a)(S, 2),
                      j = x[0],
                      E = x[1],
                      w = Object(i.useState)(null),
                      $ = Object(d.a)(w, 2),
                      O = $[0],
                      L = $[1],
                      P = Object(i.useState)(null),
                      N = Object(d.a)(P, 2),
                      A = N[0],
                      q = N[1],
                      M = Object(i.useState)("bsc"),
                      F = Object(d.a)(M, 2),
                      z = F[0],
                      B = F[1],
                      U = Object(i.useMemo)((function() {
                          return {
                              "custom-bsc": gt,
                              walletconnect: {
                                  package: b.a,
                                  options: {
                                      rpc: {
                                          56: "https://bsc-dataseed.binance.org/",
                                          128: "https://http-mainnet-node.huobichain.com/"
                                      }
                                  }
                              }
                          }
                      }), []),
                      W = Object(i.useMemo)((function() {
                          return new y.a({
                              network: "binance",
                              cacheProvider: !0,
                              providerOptions: U
                          })
                      }), [U]),
                      H = Object(i.useCallback)(function() {
                          var e = Object(f.a)(o.a.mark((function e(t, n) {
                              return o.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          if (n.on) {
                                              e.next = 2;
                                              break
                                          }
                                          return e.abrupt("return");
                                      case 2:
                                          n.on("disconnect", (function() {
                                              return Q()
                                          })), n.on("accountsChanged", (function(e) {
                                              return q(e[0])
                                          })), n.on("chainChanged", (function(e) {
                                              return L(t.utils.hexToNumber(e))
                                          }));
                                      case 5:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t, n) {
                              return e.apply(this, arguments)
                          }
                      }(), []),
                      K = Object(i.useCallback)(function() {
                          var e = Object(f.a)(o.a.mark((function e(t) {
                              var n, i, a, s;
                              return o.a.wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                          if (t && t.eth) {
                                              e.next = 2;
                                              break
                                          }
                                          return e.abrupt("return", !1);
                                      case 2:
                                          return e.next = 4, W.connect();
                                      case 4:
                                          return n = e.sent, e.next = 7, t.eth.net.getId();
                                      case 7:
                                          return i = e.sent, a = Object(c.getProviderInfo)(n), s = !1, 56 != i && 128 != i || (s = !0), "isWalletConnect" == a.check && (s = !0), e.abrupt("return", s);
                                      case 13:
                                      case "end":
                                          return e.stop()
                                  }
                              }), e)
                          })));
                          return function(t) {
                              return e.apply(this, arguments)
                          }
                      }(), [W]),
                      X = Object(i.useCallback)(Object(f.a)(o.a.mark((function e() {
                          var t, n, i, a, s;
                          return o.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      return e.next = 2, W.connect();
                                  case 2:
                                      return t = e.sent, n = _t(t), e.next = 6, H(n, t);
                                  case 6:
                                      return e.next = 8, n.eth.getAccounts();
                                  case 8:
                                      return i = e.sent, a = i[0], e.next = 12, n.eth.net.getId();
                                  case 12:
                                      return s = e.sent, e.next = 15, n.eth.chainId();
                                  case 15:
                                      return e.sent, e.next = 18, K(n);
                                  case 18:
                                      e.sent, _(n), I(!0), E(!0), L(s), q(a);
                                  case 24:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), [H, W]);
                  Object(i.useEffect)((function() {
                      W.cachedProvider && (W.cachedProvider.includes("walletconnect") ? W.clearCachedProvider() : X())
                  }), []);
                  var Y = Object(i.useMemo)((function() {
                          if (!m) return null;
                          var e = new u.a(56 === O ? "https://bsc-dataseed.binance.org/" : "https://http-mainnet-node.huobichain.com");
                          return e.eth.extend({
                              methods: [{
                                  name: "chainId",
                                  call: "eth_chainId",
                                  outputFormatter: e.utils.hexToNumber
                              }]
                          }), e
                      }), [m, O]),
                      Q = Object(i.useCallback)(Object(f.a)(o.a.mark((function e() {
                          return o.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      if (m) {
                                          e.next = 2;
                                          break
                                      }
                                      return e.abrupt("return");
                                  case 2:
                                      if (!(m && m.currentProvider && m.currentProvider.close)) {
                                          e.next = 5;
                                          break
                                      }
                                      return e.next = 5, m.currentProvider.close();
                                  case 5:
                                      return e.next = 7, W.clearCachedProvider();
                                  case 7:
                                      _(null), I(!1), E(null), L(null), q(null);
                                  case 12:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), [m, W]);
                  return function() {
                      for (var e = 0; e < 100; e++) localStorage.removeItem(e + "Accepted1"), localStorage.removeItem(e + "Accepted2")
                  }(), Object(k.jsx)(V.Provider, {
                      value: r,
                      children: Object(k.jsx)(T.a, {
                          client: bt,
                          children: Object(k.jsx)(g.a, {
                              children: Object(k.jsxs)("div", {
                                  className: "relative min-h-screen",
                                  children: [Object(k.jsx)(R, {
                                      onConnect: X,
                                      connected: h,
                                      connectionOK: j,
                                      address: A,
                                      resetApp: Q
                                  }), Object(k.jsx)(mt, {
                                      connectionOK: j,
                                      connected: h,
                                      chainId: O,
                                      address: A,
                                      web3: m,
                                      web3_np: Y,
                                      chain: z,
                                      setChain: B
                                  })]
                              })
                          })
                      })
                  })
              },
              vt = Object(i.memo)(Tt),
              Dt = function(e) {
                  e && e instanceof Function && n.e(3).then(n.bind(null, 906)).then((function(t) {
                      var n = t.getCLS,
                          i = t.getFID,
                          a = t.getFCP,
                          s = t.getLCP,
                          r = t.getTTFB;
                      n(e), i(e), a(e), s(e), r(e)
                  }))
              };
          r.a.render(Object(k.jsx)(a.a.StrictMode, {
              children: Object(k.jsx)(vt, {})
          }), document.getElementById("root")), Dt()
      }
  },
  [
      [853, 1, 2]
  ]
]);
//# sourceMappingURL=main.b5919439.chunk.js.map

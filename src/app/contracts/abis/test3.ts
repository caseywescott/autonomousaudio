export const test1Abi= [
    {
        "type": "function",
        "name": "increase_balance",
        "inputs": [
          {
            "name": "amount",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "increase_balance_slider",
        "inputs": [
          {
            "name": "amount",
            "type": "core::felt252"
          },
          {
            "name": "slider",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_slider",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "get_balance",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      }
      
]
export const test1Abi= [
        {
          "type": "function",
          "name": "name_get",
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
        },
        {
          "type": "function",
          "name": "name_set",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            }
          ],
          "outputs": [],
          "state_mutability": "external"
        },
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
          "name": "increase_balance2",
          "inputs": [
            {
              "name": "name",
              "type": "core::felt252"
            },
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
          "name": "note_test",
          "inputs": [],
          "outputs": [
            {
              "type": "core::array::Array::<core::integer::u32>"
            }
          ],
          "state_mutability": "external"
        },
        {
          "type": "function",
          "name": "note_test1",
          "inputs": [
            {
              "name": "inarr",
              "type": "core::array::Array::<core::felt252>"
            }
          ],
          "outputs": [
            {
              "type": "core::array::Array::<core::felt252>"
            }
          ],
          "state_mutability": "view"
        }
      ]
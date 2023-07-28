mock node
---

### local node
```
anvil -f https://mainnet.era.zksync.io
```

### set balance
```
curl http://localhost:8545 -X POST -H "Content-Type: application/json"   --data '{"method":"anvil_setBalance","params":["0x6A82Fa5Cf82Ef724d1F1955fECc27DDd0758132E", "0x021e19e0c9bab2400000"],"id":1,"jsonrpc":"2.0"}'
```

### set stroage
```
curl  -H "Content-Type: application/json"  -X POST --data '{"jsonrpc": "2.0", "method": "hardhat_setStorageAt", "id": 1, "params": ["0x6a05464cb3D7b20ad3e4203C2B181F1B50f62b77", "0x33", "0x0000000000000000000000006A82Fa5Cf82Ef724d1F1955fECc27DDd0758132E"]}' http://localhost:8545
```
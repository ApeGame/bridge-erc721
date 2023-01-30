## bridge contract

### 1、down package

```
yarn
```

### 2、 add config.ts

- add config to config.ts

```
# proxyadmin and owner cannot be the same account

export const CONTRACTS: { [network: string]: any } = {
  bscmainnet: {
    proxyAdmin: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    proxyAdminPrivate:
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    owner: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    ownerPrivate:
      "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    bridge: "0x71C95911E9a5D330f4D621842EC243EE1343292e",
  },
};


```

### 3、add network.ts

- add network to network.ts

```
/* eslint-disable node/no-unpublished-import */
import { NetworksUserConfig } from "hardhat/types";
import { CONTRACTS } from "./config";

export const networks: NetworksUserConfig = {
  hardhat: {},
  bscmainnet: {
    url: "https://bsc-dataseed4.binance.org/",
    chainId: 56,
    accounts: [CONTRACTS.bscmainnet.ownerPrivate],
  },
};
```

### 4、deploy

- deploy contract

```
npx hardhat run scripts/bridge-deploy.ts --network bscmainnet

# <Fill in the corresponding contract address into config.ts when the deployment is complete>
```

### 5、Other scripts

#### 1、set admin

```typescript
# modify user address which you want to set
const user: string = "0x2CF88b803C96ED43Ef9b35c9FEdE49dfc79EAb35";

```
- bridge

```
# Modify user address in bridge-setAdmin.ts 
npx hardhat run scripts/bridge-setAdmin.ts --network bscmainnet
```

#### 2、 upgrade(use when upgrade contract )

```
# compilation Contract
npx hardhat compile

# upgrade blindbox
npx hardhat run scripts/bridge-upgrade.ts --network bscmainnet
```

### defer

- [hardhat](https://hardhat.org/getting-started/)
- [ethers.js](https://docs.ethers.io/v5/getting-started/)
- [web3.sj](https://web3js.readthedocs.io/en/v1.2.11/getting-started.html)
- [chai docs](https://www.chaijs.com/api/bdd/)
- [axios docs](https://axios-http.com/docs/intro)

import { MyNFT } from "./../typechain/MyNFT.d";
import { utils, Wallet } from "ethers";
import { expect, util, assert } from "chai";
import { ethers } from "hardhat";
import { BridgeNFT } from "../typechain/BridgeNFT";

let ABridgeContract: BridgeNFT;
let BBridgeContract: BridgeNFT;

let Aerc721: MyNFT;
let Berc721: MyNFT;

const A = new Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff82",
  ethers.provider
);
const B = new Wallet(
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690E",
  ethers.provider
);

const withdrawer = new Wallet(
  "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656c",
  ethers.provider
);
describe("test actress", function () {
  before(async function () {
    const bridgeNftFactoryA = await ethers.getContractFactory("BridgeNFT");
    const contractA = await bridgeNftFactoryA.deploy();
    await contractA.initialize();
    ABridgeContract = await ethers.getContractAt(
      "BridgeNFT",
      contractA.address
    );
    await contractA.setBridgeGas(300000, 50000, 200000);

    const bridgeNftFactoryB = await ethers.getContractFactory("BridgeNFT");
    const contractB = await bridgeNftFactoryB.deploy();
    await contractB.initialize();
    BBridgeContract = await ethers.getContractAt(
      "BridgeNFT",
      contractB.address
    );
    await contractB.setBridgeGas(300000, 50000, 200000);

    const mockerc721A = await ethers.getContractFactory("MyNFT");
    Aerc721 = await mockerc721A.deploy("AAAA Token", "A");

    const mockerc721B = await ethers.getContractFactory("MyNFT");
    Berc721 = await mockerc721B.deploy("BBBB Token", "B");

    await Aerc721.adminMint(A.address, 1);
    await Aerc721.adminMint(A.address, 2);
    await Aerc721.adminMint(B.address, 3);

    const chainId = await A.getChainId();
    await contractA.setDestNftAddr(
      Aerc721.address,
      [chainId],
      [Berc721.address]
    );

    await contractB.setDestNftAddr(
      Berc721.address,
      [chainId],
      [Aerc721.address]
    );

    const wallet = (await ethers.getSigners())[0];

    await wallet.sendTransaction({
      to: A.address,
      value: utils.parseEther("10"),
    });

    await wallet.sendTransaction({
      to: B.address,
      value: utils.parseEther("10"),
    });
  });

  it("check destNftAddr", async function () {
    const chainId = await A.getChainId();
    expect(
      await ABridgeContract.destNFTAddr(Aerc721.address, chainId)
    ).to.equal(Berc721.address);

    expect(
      await BBridgeContract.destNFTAddr(Berc721.address, chainId)
    ).to.equal(Aerc721.address);

    await expect(
      ABridgeContract.connect(A).setDestNftAddr(
        Berc721.address,
        [chainId],
        [Aerc721.address]
      )
    ).to.be.revertedWith("Admin: caller is not the admin");

    await expect(
      ABridgeContract.setDestNftAddr(
        Berc721.address,
        [chainId],
        [Aerc721.address, Berc721.address]
      )
    ).to.be.revertedWith("length mismatch");

    await expect(
      ABridgeContract.connect(A).delDestNftAddr(Berc721.address, chainId)
    ).to.be.revertedWith("Admin: caller is not the admin");
  });

  it("set payee", async function () {
    await expect(ABridgeContract.setPayee(withdrawer.address))
      .to.emit(ABridgeContract, "SetPayee")
      .withArgs(withdrawer.address);

    expect(await ABridgeContract.getPayee()).to.equal(withdrawer.address);

    await expect(
      ABridgeContract.connect(A).setPayee(withdrawer.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("set tx fee", async function () {
    const chainId = await A.getChainId();
    const fee = ethers.utils.parseEther("0.002");
    await ABridgeContract.setTxFee([chainId], [fee]);
    expect(await ABridgeContract.destTxFee(chainId)).to.equal(fee);

    await BBridgeContract.setTxFee([chainId], [fee]);
    expect(await BBridgeContract.destTxFee(chainId)).to.equal(fee);

    await expect(
      ABridgeContract.connect(A).setTxFee([chainId], [fee])
    ).to.be.revertedWith("Admin: caller is not the admin");

    await expect(
      ABridgeContract.setTxFee([chainId], [fee, 1])
    ).to.be.revertedWith("length mismatch");
  });

  it("bridge", async function () {
    const chainId = await A.getChainId();
    await expect(
      ABridgeContract.connect(A).bridge(Aerc721.address, 3, chainId, A.address)
    ).to.be.revertedWith("Only bridge can be used");

    await Aerc721.setBridge(ABridgeContract.address, true);
    await expect(
      ABridgeContract.connect(A).bridge(Aerc721.address, 3, chainId, A.address)
    ).to.be.revertedWith("not token owner");

    await expect(
      ABridgeContract.connect(A).bridge(Aerc721.address, 2, chainId, A.address)
    ).to.be.revertedWith("insufficient fee");

    await expect(
      ABridgeContract.connect(A).bridge(
        Aerc721.address,
        2,
        chainId,
        A.address,
        { value: ethers.utils.parseEther("0.0001") }
      )
    ).to.be.revertedWith("insufficient fee");

    await expect(
      ABridgeContract.connect(A).bridge(
        Aerc721.address,
        2,
        chainId,
        A.address,
        { value: ethers.utils.parseEther("0.003") }
      )
    ).to.be.revertedWith("ERC721: burn caller is not owner nor approved");

    await Aerc721.connect(A).approve(ABridgeContract.address, 2);

    await expect(
      ABridgeContract.connect(A).bridge(
        Aerc721.address,
        2,
        chainId,
        A.address,
        {
          value: ethers.utils.parseEther("0.003"),
        }
      )
    )
      .to.emit(ABridgeContract, "Sent")
      .withArgs(
        A.address,
        Aerc721.address,
        2,
        chainId,
        A.address,
        Berc721.address
      );

    expect(
      await ethers.provider.getBalance(ABridgeContract.getPayee())
    ).to.equal(await ABridgeContract.destTxFee(chainId));

    await expect(Aerc721.ownerOf(2)).to.be.revertedWith(
      "ERC721: owner query for nonexistent token"
    );
  });

  it("sendTo", async function () {
    const chainId = await A.getChainId();
    await expect(
      BBridgeContract.connect(A).sendTo(chainId, Berc721.address, 3, A.address)
    ).to.be.revertedWith("Admin: caller is not the admin");

    await expect(
      BBridgeContract.sendTo(chainId, Berc721.address, 3, A.address)
    ).to.be.revertedWith("Only bridge can be used");

    await Berc721.setBridge(BBridgeContract.address, true);

    await expect(BBridgeContract.sendTo(chainId, Berc721.address, 3, A.address))
      .to.emit(BBridgeContract, "Received")
      .withArgs(A.address, Berc721.address, 3, chainId);

    expect(await Berc721.ownerOf(3)).to.equal(A.address);
  });

  it("bridgeCallBack", async function () {
    await expect(
      ABridgeContract.connect(A).bridgeCallBack(A.address, Aerc721.address, 4)
    ).to.be.revertedWith("Admin: caller is not the admin");

    await expect(
      ABridgeContract.bridgeCallBack(A.address, Aerc721.address, 1)
    ).to.be.revertedWith("ERC721: token already minted");

    await expect(ABridgeContract.bridgeCallBack(A.address, Aerc721.address, 2))
      .to.emit(ABridgeContract, "Callback")
      .withArgs(A.address, Aerc721.address, 2);

    expect(await Aerc721.ownerOf(2)).to.equal(A.address);
  });
});

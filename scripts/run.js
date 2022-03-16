const { hexStripZeros } = require("ethers/lib/utils");

// const main = async () => {
    // const [owner, randomPerson] = await hre.ethers.getSigners();
    // const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    // const domainContract = await domainContractFactory.deploy();

    // await domainContract.deployed();
    // console.log("contract deployed to:", domainContract.address);
    // console.log("Contract deployed by:", owner.address);

    // const txn = await domainContract.register("vincent");

    // await txn.wait();


    // const domainOwner = await domainContract.getAddress("vincent");
    // console.log("Owner of Domain:", domainOwner);

    // console.log("Contract deployed to: ", domainContract.address);

    // =====================================================

    const main = async () => {
        const domainContractFactory = await hre.ethers.getContractFactory('Domains');
        // We pass in "ninja" to the constructor when deploying
        const domainContract = await domainContractFactory.deploy("ninja");
        await domainContract.deployed();
      
        console.log("Contract deployed to:", domainContract.address);
      
        // We're passing in a second variable - value. This is the moneyyyyyyyyyy
        let txn = await domainContract.register("mortal",  {value: hre.ethers.utils.parseEther('0.1')});
        await txn.wait();
      
        // const address = await domainContract.getAddress("mortal");
        console.log("Owner of domain mortal:", address);
      
        const balance = await hre.ethers.provider.getBalance(domainContract.address);
        console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
      }
      
      const runMain = async () => {
        try {
          await main();
          process.exit(0);
        } catch (error) {
          console.log(error);
          process.exit(1);
        }
      };
      
      runMain();

runMain();
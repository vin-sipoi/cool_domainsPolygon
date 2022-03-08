const { hexStripZeros } = require("ethers/lib/utils");

const main = async () => {
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

    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    
    //Pass Vinc to the constructor 
    const domainContract = await domainContractFactory.deploy("Vin-cent");

    await domainContract.deployed();

    // Passing the money variable 
    let txn = await domainContract.register("sipoi", {value: hre.ethers.utils.parserEther('0.1')});
    await txn.wait();

    const address = await domainContract.getAddress("sipoi");
    console.log("Owner of domain sipoi: ", address);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));

};
    const runMain = async () => {
        try {
            await main();
            process.exit(0);
        } catch (error) {
            console.log(error)
            process.exit(1);
        }
};

runMain();
const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("sipoi");
    await domainContract.deploy();

    console.log("Contract deployed to: ", domainContract.address);

    let txn = await domainContract.register("Vincent", {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();

    console.log("Minted domain vincent.sipoi");

    text = await domainContract.setRecord("vincent", "Am I Vincent Sipoi and just minted my NFT on Polygon");
    await txn.wait();
    console.log("Set record for vincent.sipoi");

    const address = await domainContract.getAddress("vincent");
    console.log("Owner of domain: ", address)

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance: ", hre.ethers.utils.formartEther(balance));
}


const runMain = async () =>{
    try {
        await main();
        process.exit(0);
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}


runMain();
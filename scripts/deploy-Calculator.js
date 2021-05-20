const hre = require("hardhat");

const main = async () => {

  const Calculator = await hre.ethers.getContractFactory('Calculator');
  const calculator = await Calculator.deploy();

  await calculator.deployed();

  console.log("Calculator deployed to:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
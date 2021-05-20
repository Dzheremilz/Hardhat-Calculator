const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Calculator', () => {

  let Calculator;
  let calculator;

  beforeEach(async () => {
    Calculator = await ethers.getContractFactory('Calculator');
    calculator = await Calculator.deploy();
  });

  describe('Addition', () => {
    it('Should addition 2 numbers correctly', async () => {
      expect(await calculator.add(2, 3)).to.equal(5);
      expect(await calculator.add(-2, 3)).to.equal(1);
      expect(await calculator.add(2, -3)).to.equal(-1);
      expect(await calculator.add(-2, -3)).to.equal(-5);
    });
  });

  describe('Subtraction', () => {
    it('Should subtract 2 numbers correctly', async () => {
      expect(await calculator.sub(2, 3)).to.equal(-1);
      expect(await calculator.sub(-2, 3)).to.equal(-5);
      expect(await calculator.sub(2, -3)).to.equal(5);
      expect(await calculator.sub(-2, -3)).to.equal(1);
    });
  });

  describe('Multiplication', () => {
    it('Should multiply 2 numbers correctly', async () => {
      expect(await calculator.mul(2, 0)).to.equal(0);
      expect(await calculator.mul(2, 3)).to.equal(6);
      expect(await calculator.mul(2, -3)).to.equal(-6);
      expect(await calculator.mul(-2, -3)).to.equal(6);
    });
  });

  describe('Division', () => {
    it('Should revert: can not divide by zero', async () => {
      await expect(calculator.div(2, 0)).to.be.revertedWith('Calculator: can not divide by zero');
    });

    it('Should divide 2 numbers correctly', async () => {
      expect(await calculator.div(2, 3)).to.equal(0);
      expect(await calculator.div(3, -3)).to.equal(-1);
      expect(await calculator.div(-3, -3)).to.equal(1);
      expect(await calculator.div(0, -3)).to.equal(0);
    });
  });

  describe('Modulo', () => {
    it('Should revert: can not modulo by zero', async () => {
      await expect(calculator.mod(2, 0)).to.be.revertedWith("Calculator: can not modulo by zero");
    });

    it('Should modulo 2 numbers correctly', async () => {
      expect(await calculator.mod(2, 3)).to.equal(2);
      expect(await calculator.mod(2, -3)).to.equal(2);
      expect(await calculator.mod(-2, 3)).to.equal(-2);
    });
  })
})
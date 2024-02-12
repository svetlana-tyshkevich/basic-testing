import { getBankAccount, BankAccount, InsufficientFundsError } from '.';

describe('BankAccount', () => {
  const bankAccount = getBankAccount(1278);
  test('should create account with initial balance', () => {
    expect(bankAccount.getBalance()).toBe(1278);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => bankAccount.withdraw(1356)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => bankAccount.transfer(1378, new BankAccount(0))).toThrow(Error);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => bankAccount.transfer(50, bankAccount)).toThrow();
  });

  test('should deposit money', () => {
    expect(bankAccount.deposit(1000).getBalance()).toBe(2278);
  });

  test('should withdraw money', () => {
    expect(bankAccount.withdraw(120).getBalance()).toBe(2158);
  });

  test('should transfer money', () => {
    expect(bankAccount.transfer(500, new BankAccount(0)).getBalance()).toBe(
      1658,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});

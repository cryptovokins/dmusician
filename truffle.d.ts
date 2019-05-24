declare type _contractTest = (accounts: string[]) => void;
declare function contract(name: string, test: _contractTest): void;
declare interface TransactionMeta {
  from: string,
}
declare interface TransactionMetaTokenSale {
  from: string,
  value: number,
}

declare interface Contract<T> {
  "new"(): Promise<T>,
  deployed(): Promise<T>,
  at(address: string): T,
}

declare interface TokenInstance {
  name():any;
  symbol():string;
  
  totalSupply():Promise<any>;
  balanceOf(account: string): Promise<any>;
  transfer(account: string, token:number, meta?:TransactionMeta): Promise<any>;
  approve(account: string, amount: number, meta?: TransactionMeta): Promise<any>;
  allowance(account1: string, account2: string, meta?: TransactionMeta): Promise<any>;
  transferFrom(fromAccount: string, toAccount: string, amount:number, meta?: TransactionMeta): Promise<any>;
}


interface Artifacts {
  require(name: "./contracts/Token.sol"): Contract<TokenInstance>
}

declare var artifacts: Artifacts;

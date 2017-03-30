//Exercise goal to be as explicit as possible with given code.

//let bankAccount = {
//    money: 2000,
//    deposit(value) {
//        this.money += value;
//    }
//};

//let myself = {
//    name: "Max",
//    bankAccount: bankAccount,
//    hobbies: ["Sports", "Cooking"]
//};

//myself.bankAccount.deposit(3000);

//console.log(myself);


type BankAccount = { money: number, deposit: (value: number) => void };

let bankAccount: {money: number, deposit: (value: number) => void} = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies:string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
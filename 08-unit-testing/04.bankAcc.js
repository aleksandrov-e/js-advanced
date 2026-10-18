
function createAccount(name, balance) {
    if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('Invalid account name!');
    }

    if (typeof balance !== 'number' || !Number.isFinite(balance) || balance < 0) {
        throw new Error('Invalid initial balance!');
    }

    return {
        name,
        balance,

        deposit(amount) {
            if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) {
                throw new Error('Invalid deposit amount!');
            }

            this.balance += amount;
            return this.balance;
        },

        withdraw(amount) {
            if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) {
                throw new Error('Invalid withdrawal amount!');
            }

            if (amount > this.balance) {
                throw new Error('Insufficient funds!');
            }

            this.balance -= amount;
            return this.balance;
        },

        toString() {
            return `Account: ${this.name} | Balance: ${this.balance}`;
        }
    };
}

const account = createAccount('Ivan', 100);

account.deposit(50);
console.log(account.balance); // 150

account.withdraw(30);
console.log(account.balance); // 120

console.log(account.toString());
// Account: Ivan | Balance: 120

account.withdraw(500);
// Error: Insufficient funds!
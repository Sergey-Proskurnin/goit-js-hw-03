// Напиши скрипт управления личным кабинетом интернет банка.
//  Есть объект account в котором необходимо реализовать методы для работы
//   с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let objectTransaction = {};
    
    objectTransaction.type = type;
    
    objectTransaction.amount = amount;
    objectTransaction.id = Math.random() * 10 ** 17;
    // objectTransaction.id = Date.now();

    return objectTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return (this.balance += amount);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      
    if (this.balance < amount) {
      return `Cнятие ${amount} не возможно, недостаточно средств`;
    }
    this.balance -= amount;
    return 'Операция проведена успешно';
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      transaction.id === id
        ? console.log(transaction)
        : console.log(`Трансакции по id: ${id} в истории трансакций не надено`);
    }
    return;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      transaction.type === type
        ? total += transaction.amount
        : 'Error'
      
    }
    return total;
  },
};

console.log(account.createTransaction(1500, Transaction.DEPOSIT));
// console.log(account.createTransaction(1800, Transaction.WITHDRAW));
// console.log(account.createTransaction(1700, Transaction.DEPOSIT));
// console.log(account.createTransaction(1500, Transaction.WITHDRAW));
// console.log(account.createTransaction(1500, Transaction.WITHDRAW));

console.log(account.deposit(1500));
console.log(account.deposit(1500));
console.log(account.deposit(1500));
console.log(account.deposit(1500));
// console.log(account.createTransaction(100, Transaction.DEPOSIT));
// console.log(account.createTransaction(1300, 'deposit'));
console.log(account.withdraw(1500));
console.log(account.withdraw(1500));
console.log(account.withdraw(1500));
console.log(account.withdraw(1500));
console.log(account.withdraw(1500));
console.log(account.withdraw(1500));
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(1611182701828));
console.log(account.getTransactionDetails(1611182701828));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));


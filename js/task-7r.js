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
    const objectTransaction = {
      amount: amount,
      type: type,
      id: Math.random() * 10**16,
    };
    return objectTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    createTransaction();
    this.transactions.push(objectTransaction);
    return (this.balance = objectTransaction.amount);
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
    createTransaction();
    objectTransaction.type = 'deposit'
    this.transactions.push(objectTransaction);
    return this.balance < objectTransaction.amount
      ? `Cнятие ${objectTransaction.amount} не возможно, недостаточно средств`
      : (this.balance = this.balance - objectTransaction.amount);
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
    for (let transaction of transactions) {
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
    for (let transaction of transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
// console.log(account.createTransaction(100, Transaction.DEPOSIT));
// console.log(account.createTransaction(1300, Transaction.DEPOSIT));
// console.log(account.createTransaction(1500, Transaction.DEPOSIT));
// console.log(account.createTransaction(1800, Transaction.WITHDRAW));
// console.log(account.createTransaction(1700, Transaction.DEPOSIT));
// console.log(account.createTransaction(1500, Transaction.WITHDRAW));
// console.log(account.createTransaction(1500, Transaction.WITHDRAW));
console.log(withdraw(200));

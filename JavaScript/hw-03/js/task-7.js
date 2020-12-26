/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
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
  createTransaction(amount, type, id) {
    const trans = {
      type,
      amount,
      id
    };
    return trans;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    this.transactions.push(
      this.createTransaction(
        amount,
        Transaction.DEPOSIT,
        this.transactions.length + 1
      )
    );
    return `DEPOSIT: ${amount}`;
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
    if (amount > this.balance) {
      return "недостатньо коштів";
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(
          amount,
          Transaction.WITHDRAW,
          this.transactions.length + 1
        )
      );
      return `WITHDRAW: ${amount}`;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Balance: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let obj of this.transactions) {
      for (let key in obj) {
        if (obj[key] === id) {
          return obj;
        }
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmount = 0;
    for (let obj of this.transactions) {
      for (let key in obj) {
        if (obj[key] === type) {
          totalAmount += obj.amount;
        }
      }
    }
    return `Total ${type} ${totalAmount}`;
  }
};

console.log(account.deposit(3000));
console.log(account.withdraw(2000));
console.log(account.deposit(3000));
console.log(account.withdraw(400));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.transactions);

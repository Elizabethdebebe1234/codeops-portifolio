class BankConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000
        return cls._instance

class Account:
    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance
        self.observers = []
        self.history = []


    @property
    def balance(self):
        return self.__balance
    
    def subscribe(self, observer):
        self.observers.append(observer)

    def _notify(self, message):
        for observer in self.observers:
           observer.update(message)

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Must be positive")
        self.__balance += amount
        self.history.append(("deposit", amount))
        self._notify(f"{amount} ETB deposited into {self.account_number}")

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient balance")
        self.__balance -= amount
        self.history.append(("withdraw", amount))
        self._notify(f"{amount} ETB withdrawn from {self.account_number}")


    def undo_last(self):
        if not self.history:
            print("No transaction to undo.")
            return

        transaction = self.history.pop()
        action, amount = transaction

        if action == "deposit":
          self.__balance -= amount

        elif action == "withdraw":
          self.__balance += amount



    

    def statement(self):
        print("----- Addis Bank Statement -----")
        print("Account Type: Regular Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")
        print()


class SavingsAccount(Account):
    def __init__(self, owner, number, balance):
      super().__init__(owner, number, balance)
      self.rate = BankConfig().interest_rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("----- Addis Bank Statement -----")
        print("Account Type: Savings Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")
        print(f"Interest Rate: {self.rate * 100}%")
        print()


class CurrentAccount(Account):
    def __init__(self, owner, number, balance):
       super().__init__(owner, number, balance)
       self.overdraft_limit = BankConfig().overdraft_limit

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Must be positive")

        if amount > self.balance + self.overdraft_limit:
            raise ValueError("Insufficient balance")

        self._Account__balance -= amount
        self.history.append(("withdraw", amount))
        self._notify(f"{amount} ETB withdrawn from {self.account_number}")

    def statement(self):
        print("----- Addis Bank Statement -----")
        print("Account Type: Current Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")
        print(f"Overdraft Limit: {self.overdraft_limit} ETB")
        print()




class AccountFactory:

    @staticmethod
    def create(kind, owner, number, balance=0):

        if kind == "savings":
            return SavingsAccount(owner, number, balance)

        elif kind == "current":
            return CurrentAccount(owner, number, balance)

        else:
            raise ValueError("Invalid account type")



class SMSAlert:
    def update(self, message):
        print(f"SMS Alert: {message}")


class AuditLog:
    def update(self, message):
        print(f"Audit Log: {message}")


bank = [
    AccountFactory.create(
        "savings",
        "Almaz",
        "CBE-1001",
        1500
    ),

    AccountFactory.create(
        "current",
        "Dawit",
        "CBE-1002",
        800
    )
]

sms = SMSAlert()
audit = AuditLog()

for acc in bank:
    acc.subscribe(sms)
    acc.subscribe(audit)


# Perform some operations
bank[0].deposit(500)
bank[0].add_interest()

bank[1].deposit(200)
bank[1].withdraw(1200)

# Polymorphic loop
for acc in bank:
    acc.statement()

config1 = BankConfig()
config2 = BankConfig()

print(config1 is config2)
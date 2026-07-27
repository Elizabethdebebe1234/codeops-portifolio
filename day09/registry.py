from bank import Account


def binary_search(items, target):
    left = 0
    right = len(items) - 1

    while left <= right:
        mid = (left + right) // 2

        if items[mid] == target:
            return mid

        elif items[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

    return -1


class AccountRegistry:

    def __init__(self):
        self.by_number = {}
        self.order = []

    def add(self, acc):
        self.by_number[acc.account_number] = acc
        self.order.append(acc.account_number)

    def list_all(self):
        accounts = []

        for number in self.order:
            accounts.append(self.by_number[number])

        return accounts

    def top_by_balance(self, n=5):
        accts = sorted(
            self.by_number.values(),
            key=lambda a: a.balance,
            reverse=True
        )
        return accts[:n]

    def find_by_number(self, number):
        nums = sorted(self.by_number)      # sorted account numbers

        i = binary_search(nums, number)

        if i >= 0:
            return self.by_number[nums[i]]

        return None

    def total_transactions(self, number):
        account = self.find_by_number(number)

        if account is None:
            return 0

        return self._sum_history(account.history)

    def _sum_history(self, history):
        if len(history) == 0:
            return 0

        action, amount = history[0]

        return amount + self._sum_history(history[1:])
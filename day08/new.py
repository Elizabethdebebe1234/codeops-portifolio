from bank import bank
from registry import AccountRegistry

registry = AccountRegistry()

for acc in bank:
    registry.add(acc)

print("Top account:")
for acc in registry.top_by_balance():
    print(acc.owner, acc.balance)

print()

found = registry.find_by_number("CBE-1001")
print("Found:", found.owner)

print()

print("Total Transactions:")
print(registry.total_transactions("CBE-1001"))
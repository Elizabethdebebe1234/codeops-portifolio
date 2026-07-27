from bank import AccountFactory
from collections import deque


# -------------------------------
# Branch Tree
# -------------------------------
class Branch:
    def __init__(self, name):
        self.name = name
        self.children = []      # Sub-branches
        self.accounts = []      # Accounts in this branch

    def total_balance(self):
        # Balance of this branch
        total = sum(account.balance for account in self.accounts)

        # Add balances of all child branches
        for child in self.children:
            total += child.total_balance()

        return total


# -------------------------------
# Create Branches (3 Levels)
# -------------------------------
head = Branch("Head Office")

north = Branch("North Region")
south = Branch("South Region")

bishoftu = Branch("Bishoftu Branch")


# Connect branches
head.children.append(north)
head.children.append(south)

north.children.append(bishoftu)


# -------------------------------
# Create Accounts
# -------------------------------
acc1 = AccountFactory.create(
    "savings",
    "Almaz",
    "CBE-1001",
    1500
)

acc2 = AccountFactory.create(
    "current",
    "Dawit",
    "CBE-1002",
    800
)

acc3 = AccountFactory.create(
    "savings",
    "Abel",
    "CBE-1003",
    2500
)


# -------------------------------
# Add Accounts to Branches
# -------------------------------
head.accounts.append(acc1)

north.accounts.append(acc2)

bishoftu.accounts.append(acc3)


# -------------------------------
# Recursive Total Balance
# -------------------------------
print("Total Bank Balance:")
print(head.total_balance())


# -------------------------------
# Transfers Graph
# -------------------------------
transfers = {
    "CBE-1001": ["CBE-1002", "CBE-1003"],
    "CBE-1002": ["CBE-1003"],
    "CBE-1003": []
}


# -------------------------------
# Breadth First Search (BFS)
# -------------------------------
def bfs(graph, start):

    visited = set()

    queue = deque([start])

    while queue:

        node = queue.popleft()

        if node not in visited:

            visited.add(node)

            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append(neighbor)

    return visited


# -------------------------------
# Test BFS
# -------------------------------
print("\nAccounts reachable from CBE-1001:")
print(bfs(transfers, "CBE-1001"))
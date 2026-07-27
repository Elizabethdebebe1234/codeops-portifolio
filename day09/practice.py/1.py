class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def insert(root, value):
    # If the tree is empty, create a new node
    if root is None:
        return Node(value)

    # Insert into the left subtree
    if value < root.value:
        root.left = insert(root.left, value)

    # Insert into the right subtree
    else:
        root.right = insert(root.right, value)

    return root


def inorder(root):
    # Base case
    if root is None:
        return

    # Visit left subtree
    inorder(root.left)

    # Visit root
    print(root.value)

    # Visit right subtree
    inorder(root.right)


# Create an empty tree
root = None

# List of balances
balances = [1500, 800, 2000, 1200, 500, 1700]

# Insert each balance into the tree
for balance in balances:
    root = insert(root, balance)

# Print balances in sorted order
print("Balances in sorted order:")
inorder(root)
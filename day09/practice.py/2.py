def height(node):
    if node is None:
        return 0
    
    left_height = height(node.left)
    right_height = height(node.right)
    return max(left_height, right_height) + 1
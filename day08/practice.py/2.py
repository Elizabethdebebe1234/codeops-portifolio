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


balances = [100, 300, 500, 700, 900, 1200, 1500]

print(binary_search(balances, 700))
print(binary_search(balances, 900))
print(binary_search(balances, 400))
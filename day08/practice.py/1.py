def total(nums):
    # Base case: when list is empty
    if len(nums) == 0:
        return 0

    # Recursive case:
    return nums[0] + total(nums[1:])


numbers = [1, 2, 3, 4]

print(total(numbers))
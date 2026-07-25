def has_pair(nums, target):
    left = 0
    right = len(nums) - 1

    while left < right:
        current_sum = nums[left] + nums[right]

        if current_sum == target:
            return True

        elif current_sum < target:
            left += 1

        else:
            right -= 1

    return False


numbers = [1, 2, 3, 4, 5, 6]

print(has_pair(numbers, 7))
print(has_pair(numbers, 10))
print(has_pair(numbers, 20))
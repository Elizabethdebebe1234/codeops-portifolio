import heapq

# Create an empty priority queue
tasks = []

# Push five tasks (priority, task)
heapq.heappush(tasks, (3, "Wash clothes"))
heapq.heappush(tasks, (1, "Finish assignment"))
heapq.heappush(tasks, (5, "Watch TV"))
heapq.heappush(tasks, (2, "Study Python"))
heapq.heappush(tasks, (4, "Go shopping"))

print("Tasks in priority order:")

# Pop all tasks
while tasks:
    priority, task = heapq.heappop(tasks)
    print(f"Priority {priority}: {task}")
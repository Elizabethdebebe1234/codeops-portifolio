def dfs(graph, start):
    visited = set()

    def explore(node):
        # Base case
        if node in visited:
            return

        # Visit the node
        visited.add(node)

        # Visit all neighbors recursively
        for neighbor in graph[node]:
            explore(neighbor)

    # Start the DFS
    explore(start)

    return visited


# Example graph
graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": [],
    "E": []
}

# Test
print(dfs(graph, "A"))
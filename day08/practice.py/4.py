accounts = [
    ("Almaz", 1500),
    ("Dawit", 800),
    ("Sara", 2500),
    ("Abel", 1200)
]

sorted_accounts = sorted(accounts, key=lambda x: x[1], reverse=True)

print(sorted_accounts)
# Store a bill total (ETB) and number of people in variables.
bill = 1000
people = 4

# Write a function split_bill(total, people, tip_rate=0.10).
def split_bill(total, people):
    tip = total * 0.10
    total = total + tip
    return total / people

# Use it to compute the per-person amount, tip included.
share = split_bill(bill, people)

# Loop over a list of names and print each person's share.
names = ["Almaz", "Dawit", "Tigist", "Abel"]

for name in names:
    print(name, "pay", share, "ETB")
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.__quantity = quantity

    @property
    def quantity(self):
        return self.__quantity

    @quantity.setter
    def quantity(self, value):
        if value < 0:
            raise ValueError("Quantity cannot be negative.")
        self.__quantity = value

    def restock(self, n):
        self.quantity += n

    def sell(self, n):
        if n > self.quantity:
            print("Not enough products in stock.")
        else:
            self.quantity -= n

    def display(self):
        print(f"{self.name} | {self.price} ETB | Quantity: {self.quantity}")



product1 = Product("Laptop", 50000, 10)
product2 = Product("Phone", 25000, 20)
product3 = Product("Mouse", 1000, 50)


product1.sell(3)


product1.display()
product2.display()
product3.display()
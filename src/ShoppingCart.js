class ShoppingCart {
    constructor() {
        this.items = []
    }

    addItem(itemName, quantity, price) {
        const newItem = {}
        newItem.name = itemName
        newItem.quantity = quantity
        newItem.pricePerUnit = price

        this.items.push(newItem)
    }

    getItems() {
        return this.items;
    }

    clear() {
        this.items = []
    }

    total() {
        function sumCart(cartTotal, item) {
            const itemTotal = item.pricePerUnit * item.quantity
            return cartTotal + itemTotal
        }
        return this.items.reduce(sumCart, 0)
    }
}

module.exports = ShoppingCart
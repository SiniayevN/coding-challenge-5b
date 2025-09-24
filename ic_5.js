let products = [
    { name: "Laptop", price: 999.99, weight: 2.5 },
    { name: "Smartphone", price: 699.99, weight: 0.2 },
    { name: "Desk Chair", price: 89.99, weight: 9.0},
    { name: "Bookcase", price: 129.99, weight: 15.0 },
    { name: "Headphones", price: 199.99, weight: 0.4 }
];

function calculateShipping (weight) {
    return weight * 2.5
}
console.log (calculateShipping(10));




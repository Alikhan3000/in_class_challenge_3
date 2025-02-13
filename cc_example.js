//task 5
let orders = [
{id: 101, customer: "Alice", total: 300},
{id: 102, customer: "Bob", total: 450},
{id: 103, customer: "Charlie", total: 200},

];

function findOrders(orders, orderId) {
return orders.find(order => order.id === orderId)

}

//console.log(findOrders(orders, 101));

some_order = findOrders(orders, 101)
console.log(`${some_order.customer} has an order id: ${some_order.id}, with a total of $${some_order.total}`);


//task 6

let inventory = {
    items: [],
    addItem (name, quantity){
        this.items.push({name, quantity});
    },

    removeLatestItem() {
        this.items.pop();

    },

    removeFirstItems() {    
        this.items.shift();
    }
};

inventory.addItem("Monitor", 5);    
inventory.addItem("Keyboard", 10);  
inventory.addItem("Mouse", 3)

console.log(inventory.items);//viewing all items
inventory.removeLatestItem();//removing lates item
console.log(inventory.items);//removing first item
inventory.removeFirstItems();//view items remaining


//task 7 

let employees = [
    {name: "Alice", position: "Developer", salary: 70000},
    {name: "Bob", position: "Designer", salary: 60000},
    {name: "Charlie", position: "Manager", salary: 90000}

    
    ];

function findEmployees (employees, name){

    return employees.find(employee => employee.name === name)


}
console.log(findEmployees(employees, "Charlie"));


// //task 8

// let ordersA = [
// {id: 1, customer: "Alice"},
// {id: 2, customer: "Bob"}

// ];


// let ordersB = [
//     {id: 3, customer: "Charlie"},
//     {id: 4, customer: "David"}
    
//     ];

//     function combineOrders(order1, order1) {
//         return[...order1, ...order2]

//     }

// console.log(combineOrders(ordersA, ordersB));

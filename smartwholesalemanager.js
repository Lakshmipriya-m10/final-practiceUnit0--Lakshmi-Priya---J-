
/*START
CREATE array customerDetails with customer objects (Name, Age, PhoneNumber)  

FUNCTION addCustomer(name, age, phonenumber, callback)  
    CREATE newCustomer 
    ADD newCustomer into customerDetails array  
    CALL callback function with updated customerDetails  
END FUNCTION  

FUNCTION showUpdatedList(updatedList)  
    DISPLAY "New Customer added successfully"  
    DISPLAY updated customer list  
END FUNCTION  

CALL addCustomer("Ria", 45, "903-888-1111", showUpdatedList)  
CALL addCustomer("Arjun", 65, "903-856-8955", showUpdatedList)  

REMOVE first customer from customerDetails  using shift operation
STORE removed customer in deletedCustomer  
DISPLAY deletedCustomer  

FOR EACH customer 
    IF customer age > 60 THEN  
        DISPLAY customer name + " eligible for senior citizen discount 10%"  
    END IF  
END FOR  

DISPLAY total number of customers  

SORT customerDetails by Name in ascending order using alphabetical comparison  

DISPLAY sorted customerDetails  

INCLUDES to check customer
DISPLAY Customer found or not

CREATE productDetails array (Product, Price, Stock)  

CREATE customerOrder array (Product, Quantity)  

SET taxRate = 0.10  
SET total = 0  

DISPLAY "CUSTOMER BILL"  

FOR i from 0 to customerOrder length DO  
    FOR j from 0 to productDetails length DO  

        IF order product matches product product THEN  

            GET quantity from order  
            GET price from product  

            CALCULATE itemTotal = quantity * price  
            CALCULATE tax = itemTotal * taxRate  
            CALCULATE finalAmount = itemTotal + tax  

            DISPLAY product name  
            DISPLAY quantity  
            DISPLAY price  
            DISPLAY subtotal  
            DISPLAY tax  
            DISPLAY total  

            ADD finalAmount to total  

        END IF  

    END FOR  
END FOR  

FOR EACH product IN productDetails DO  
    IF stock == 0 THEN  
        DISPLAY "OUT OF STOCK"  
    ELSE IF stock < 10 THEN  
        DISPLAY "LOW STOCK"  
    END IF  
END FOR  

FOR ..OF 
DISPLAY updated productDetails stock  

*/
//1.Declaration
let customerDetails = [
{Name:"Ram", Age:25,PhoneNumber:"903-8543156"},
{Name:"Meenu", Age:35,PhoneNumber:"903-854-4556"},
{Name:"Dharshan", Age:38,PhoneNumber:"903-844-4556"},
{Name:"John", Age:68,PhoneNumber:"903-744-4556"},
{Name:"Hari", Age:73,PhoneNumber:"903-764-4546"}
];

// 2.Add Customer -Callback function
function addCustomer(name, age, phone, callback) {
  let newCustomer = {
    Name: name,
    Age: age,
    PhoneNumber: phone
  };

  customerDetails.push(newCustomer);
  callback(customerDetails);

}
console.log("----------------------------------------------");

  function showUpdatedList(updatedList) 
{
  console.log("New Customer added successfully!");
  console.log("----------------------------------------------");
  console.log("Customer Updated List:", updatedList);
}

//3.adding new customer

addCustomer("Ria", 45, "903-888-1111", showUpdatedList);
addCustomer("Arjun",65,"903-856-8955",showUpdatedList);

//4.Deleting customer
//console.log("Delete Customer",customerDetails.shift());
let deletedCustomer = customerDetails.shift();
console.log("**************************************");
console.log("Deleted Customer:", deletedCustomer);
console.log("**************************************");

// 4.Senior citizen discount check
customerDetails.forEach((customer) => {
  if (customer.Age > 60) {
    console.log(customer.Name + " is eligible for senior citizen discount 10% on every Tuesday");
  } 
});

console.log("----------------------------------------------");
console.log("Total Customers: " + customerDetails.length);
console.log("----------------------------------------------");

//5.Sorting Customer Name inAscending Order
customerDetails.sort((a, b) => {
  return a.Name.localeCompare(b.Name);
});
console.log("Customer details in ascending order: ",customerDetails);

//6.Find customer
console.log("**************************************");
let searchName = "John";

for (let i = 0; i < customerDetails.length; i++) {
  if (customerDetails[i].Name.includes(searchName)) {
    console.log("Customer found:", customerDetails[i]);
  }
}
console.log("**************************************");
//7.Product Details
let productDetails = [
    { Product: "Rice Bag", Price: 22, Stock: 0 },
    { Product: "Sugar Bag 1lb", Price: 3, Stock: 50 },
    { Product: "Oil-3lb", Price: 10, Stock: 60 },
    { Product: "Bread", Price: 5, Stock: 80 },
    { Product: "Soda", Price: 6, Stock: 90 }
];

let customerOrder = [
    { Product: "Rice Bag", Quantity: 3 },
    { Product: "Oil-3lb", Quantity: 2 },
    { Product: "Soda", Quantity: 5 }
];

//8.customer bill calculation

let taxRate = 0.10;
let total = 0;

console.log("----- CUSTOMER BILL -----");

for (let i = 0; i < customerOrder.length; i++) {
    for (let j = 0; j < productDetails.length; j++) {

        if (customerOrder[i].Product === productDetails[j].Product) {

            let qty = customerOrder[i].Quantity;
            let price = productDetails[j].Price;

            let itemTotal = qty * price;
            let tax = itemTotal * taxRate;
            let finalAmount = itemTotal + tax;

            console.log(customerOrder[i].Product);
            console.log("Qty:", qty);
            console.log("Price:", price);
            console.log("Subtotal: $" + itemTotal.toFixed(2));
            console.log("Tax (10%): $" + tax.toFixed(2));
            console.log("Total: $" + finalAmount.toFixed(2));
            console.log("-------------------");

            total += finalAmount;
        }
    }
}

//9.Check Stock
productDetails.forEach((item) => {
  if (item.Stock === 0) {
    console.log(item.Product + " is OUT OF STOCK");
  } else if (item.Stock < 10) {
    console.log(item.Product + " is LOW STOCK");
  }
});

//10. Display Update Stock
console.log("-----------------");
console.log("\nUpdated Product Stock:");

for (let product of productDetails) {
  console.log(product);
}







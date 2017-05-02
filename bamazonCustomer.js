var inquirer = require("inquirer");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'A#47TXon0RPk3!lY4ftP77XNF',
    database: 'bamazon_db'
});

// This is where we initiate the MySQL connection and test it
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    // console.log("connected as id " + connection.threadId); 
});

//First display all of the items available for sale. Include the ids, names, and prices of products for sale.
var showProducts = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw (err);
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item ID: " + res[i].item_id + "|| Product Name: " + res[i].product_name + "|| Price: " + res[i].price
            );
        } // End of for loop   
        console.log("_________________________");        
    }); // End of connection query 
}; // End of showProducts
showProducts();

// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
var runSearch = function() {
    inquirer.prompt({
        name: "itemChoice",
        type: "input",
        message: "\nWelcome to BAMazon, the greatest frigging store in the world. Type in the Item ID for the product you want to buy:"
    }).then(function(answer) {
            connection.query("Select * from products where item_id ='" + answer.itemChoice + "'"),
                function(err, res) {
                    if (err) throw err;
                    console.log("Good");
                };        
    });
    //End of then()
} //End of runSearch()
runSearch();

// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

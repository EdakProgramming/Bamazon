-- CREATE DATABASE Bamazon_DB;

USE Bamazon_db;


create TABLE products(
item_id int(10) auto_increment,
product_name varchar(100),
department_name varchar(100),
price decimal(10,2),
stock_quantity int(10),
primary key(item_id)
);


insert into products(product_name, department_name, price, stock_quantity)
values	("Xbox", "Electronics", 250.00, 400),
		("PS4", "Electronics", 245.00, 900),
        ("65 inch Vizio LED TV", "Electronics", 999.99, 80),
        ("Canon laser printer", "Office Supplies", 249.99, 125),
        ("Go Pro camera", "Electronics", 145.00, 432),
        ("Massage chair", "Furniture", 2999.00, 20),
        ("Travel pillow", "Travel", 19.99, 900),
        ("Gun safe", "Guns & Ammo", 149.99, 18),
        ("9 mm ammo", "Guns & Ammo", 12.99, 500),
        ("Bose headphones", "Electronics", 329.00, 38),
        ("Alienware laptop", "Electronics", 1495.99, 12),
        ("Red Bull 8 oz.", "Drinks", 1.50, 875);
        
        
        



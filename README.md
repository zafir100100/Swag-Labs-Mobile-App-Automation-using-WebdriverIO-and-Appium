# Swag Labs Mobile App Automation using Appium

## Scenario

### Scenario 01: Verify locked out user

- Launch Swag Labs Mobile Application
- Scroll down in the Login screen and get locked out username and password for all users.
- Login to the application with the credential you got in step 2.
- Assert locked out error message

### Scenario 02: Verify order place successfully

- Launch Swag Labs Mobile Application
- Scroll down in the Login screen and get standard username and password for all users.
- Login to the application with the credential you got in step 2.
- Assert successful login
- Select filter button in top right corner and select "Price (low to high)"
- Scroll down and find the product "Sauce Labs Fleece Jacket"
- Get price of the product "Sauce Labs Fleece Jacket"
- Click on "ADD TO CART" button for product "Sauce Labs Fleece Jacket"
- Assert after clicking on "ADD TO CARD" button, same button changed to "REMOVE" button for product "Sauce Labs Fleece Jacket".
- Scroll up and find the product "Sauce Labs Bike Light"
- Get price of the product "Sauce Labs Bike Light"
- Click on "Sauce Labs Bike Light" product
- Assert "Sauce Labs Bike Light" Product name and Product Price from 11.
- Click on "ADD TO CART" button in the "Sauce Labs Bike Light" product description screen.
- Assert "CART" icon has badge count "2".
- ~~Click on "CART" button in the top right corner.~~
- ~~Assert two product is showing which are added to cart from 8 and 14~~
- ~~Click on "CHECKOUT" button~~
- ~~Set "First Name", "Last Name" and "Zip/Postal Code"~~
- ~~Click "CONTINUE" button~~
- ~~Assert "Item total" by sum up to product price.~~
- ~~Click on "FINISH" button.~~
- ~~Assert Checkout is completed.~~

## Technology and Tool Used
- Webdriverio
- Appium
- Allure Report
- Visual Studio Code

## Prerequisite
- Node.js

## How to run this project
- Clone the project
- Execute the following command on the project directory  
`npm install`
- Set device capabilities in
`wdio.config.js`
- Execute the following command on the project directory  
`npx wdio run wdio.conf.js`

## Generate Allure Report
- Generate the report:
  ```
  allure generate allure-results --clean -o allure-report
  ```
- Serve the report:
  ```
  allure serve allure-results
  ```     

## Video of Automation Output

https://github.com/user-attachments/assets/34506539-e88d-47b5-964a-ae29dabaeca5

## Allure Reports
![image](https://github.com/user-attachments/assets/478e0fba-e263-4422-bb98-3bbadaef7777)
![image](https://github.com/user-attachments/assets/fdb2c7b6-721c-46be-bdb5-c66eb161cf11)
![image](https://github.com/user-attachments/assets/cc9b9ed5-9cad-4eb9-baed-dc839d88bb56)
![image](https://github.com/user-attachments/assets/fd9ca7ab-d027-4dfc-8da8-04e1d8e4bfc3)
![image](https://github.com/user-attachments/assets/27cfbd92-c713-4580-92c3-8e076042e5b8)
![image](https://github.com/user-attachments/assets/8c364ebb-4d6c-4678-bed5-7471866e3e13)





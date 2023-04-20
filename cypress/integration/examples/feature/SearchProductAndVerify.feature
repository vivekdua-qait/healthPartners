Feature: Add product and verify user is able to procced

Background: Login into the application
Given User Login into the application with "vivekdua09@gmail.com" and "Shop@009"
Then User verify it lands on homePage and verify "Vivek"

Scenario: Add to the product to cart by searching in textbox and remove from cart
Given User search for the product "Samsung Tab A8 32GB Grey Wifi (Old Version)" in search box
When User add the product "Samsung Tab A8 32GB Grey Wifi (Old Version)" to the basket and verify 
Then Verify User is able to delete the added product and message is displayed

Scenario: Select product to cart from hamburger menu and verify
Given User select the item from the "New Releases"
Then Verify User is able to select a product and pre order

Scenario: Select Product from Today's deal and proceed till payment
Given User selects the item from today's deal
Then User clicks on Buy now and verify payment page



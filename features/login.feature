Feature: The complete funcitonality has been covered in 2 Scenarios with the below breakdown

Scenario Outline: To verify that a user is able to register on automation practice and logout and login using same credentials
Given The user is on home page and clicks on Sign in button
When User enters the details <username> to register and logs in
Then User will be able to logout and login again using same <username> credentials
Examples:
|username|
|sampletest_215@gmail.com  |

 Scenario: To verify that a user is able to add product to the cart and navigate till the payment page with correct details
 Given User logs in to the website
 When Searching for a product and add the product to the cart
 Then The product details get displayed correctly on the payment page

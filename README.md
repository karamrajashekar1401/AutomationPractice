# AutomationPractice
Automation Webdriverio Cucumber

Tools/ Technologies used : WebdriverIo and Cucumber, node js, Visual Studio

Feature file: The complete funcitonality has been covered in 2 Scenarios with the below breakdown

Scenario 1:
1) Launches the browser and navigats to Automation practice landing page
2) Clicks on Sign in and navigates to login page
3) Provides an email address and navigates to Registration page
4) Creates an account by entering sample data in personal information and address details and then clicks on Register.
5) Logs out of the site and logs in again
6) Verifies that the corerct first name and last name gets displayed.
7) Logs out and closes the browser

Scenario 2: 
1) Launches the browser and navigats to Automation practice landing page
2) Clicks on Sign in and navigates to login page
3) Provides valid creadentials and logs in to the site
4) Searches for a product and add the product to the cart
5) Proceed to checkout through all the pages till Payment details page
6) On payment details page, validates that the product added in step 4 is displayed.
7) Logs out and closes the browser

Run: 

Load the project into Visual studio
run the command: npx wdio run ./wdio.conf.js

Instructions:

POM has been used to develop the code
All the pages are available in ../features/pages/*.page.js
Step definition is located @ ../features/step-definitions/all.step.js
Allure reports will be created under ../features/reports/allure-results
Screenshots will be available under ../features/reports/screenshots

Any queries: karamrajashekar1401@gmail.com

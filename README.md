# Password Generator

Goal:
Create an application that generates a random password based on user-selected criteria

User's password choice consists from 8 to 128 characters which may or may not include:
- lower case letters
- upper case letters
- numbers
- special characters

I started with psedo-code:
    1. Ask user to enter the password length
    2. Run While loop to check that user's response is:
        a. whithin a requested length
        b. number - to avoid typing random symbol
    3. Ask user to choose characters that are going to be included in password
    4. Run alert to display user's password choice
    5. Create a for loop equals to the length of user's choice password
    6. Set up variables for password characters string
    7. Use CharAt method to returns a random character at the specified index in a string
    8. Using If function to randomly select from the "randomly selected characters"
    9. Push method adds "randomly selected characters" to an array
    10. Set up variable to generate randomly characters from the array of randomly selected characters
    11. Create a function that returns randomly generated password.

I arrage variables and code different from what we are tought during class. Maybe it's not appropriate from the coding standpoint, 
but I feel more comfortable doing it this way so far untill I fully understand what goes and where. It looks more structured and orgized  
to me so far. I really have a hard time to follow Javascript language.

You can find my work here:
https://github.com/sdemkovich/Password-Generator
https://sdemkovich.github.io/Password-Generator/

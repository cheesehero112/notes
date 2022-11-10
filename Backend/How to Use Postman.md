# How to use Postman

...as of 11/9/22

## GET

1) Type the endpoint URL I want to test and put it in the field on top
2) Make sure to select "GET" on the left of the field
3) Click "SEND" button on the right
4) Whatever data that's supposed to return should be displayed in the "body"
5) Alternatively, you can click on the "console" on the bottom to see the entire response



## PUT

1. Type the endpoint URL I want to test and put it in the field on top
2. Make sure to select "PUT" on the left of the field
3. Open the "Headers" tab. Take a look at the list and make sure everything inside of your fetch method header is included. If not, add to the list. (If I don't need some of them, I can uncheck the box)
4. Open the "Body" tab. Choose "raw" and "JSON". In the field below, type exactly what my fetch body is expecting. Make sure to use double quotes if there are strings.
5. Click "SEND" button on the right
6. If everything worked, I should get some data back in the "body" below
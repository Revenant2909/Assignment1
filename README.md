# Assignment Mobilicis India Private Limited

(https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
#To Setup the project<br>
Download the zip or fork the repository then open it in your IDE here for ex. Vscode.<br>
Go to each directory api and client using cd and do npm install or yarn install to install all the dependencies.<br>
#To Run the project<br> 
Type npm start in both terminals again using the cd commandline for ex. 
Step: 1 cd client
Step: 2 npm start
Similarly do the same for api
now your application should be running on 
for ex "http://localhost:3000/api/users" on either port 3000 or 8800.<br>
As given in the assignment I've made seperate calls in the backend for each query for simplicity.
Which can be found in api/routes/user.js
------------------------------------------------------------------------
#The user.js looks like this<br>
------------------------------------------------------------------------
To view any query just uncomment that query and save then refresh the page to see the results.

![Screenshot 2023-04-24 140327](https://user-images.githubusercontent.com/101965527/233944118-8158391d-f128-413b-842b-dddb2da01f89.png)
Ps : Could not show all 1000 in the screensnip so the snips contain the start and end of table.
![Screenshot 2023-04-24 141035](https://user-images.githubusercontent.com/101965527/233945578-09ae6d92-9803-4a94-a17a-227a0214f6a5.png)


![Screenshot 2023-04-24 141047](https://user-images.githubusercontent.com/101965527/233945596-4e475af9-8644-416b-bd45-6d2cc3be34cc.png)

#QUERY 1

![image](https://user-images.githubusercontent.com/101965527/233951480-1d529f9a-8097-453a-94f7-994aea2936d6.png)

#Results for the first query 38 such entries.<br> 
Q1: USERS WITH INCOME LESS THAN 5 AND CAR BMW OR MERCEDES 

![Screenshot 2023-04-24 141155](https://user-images.githubusercontent.com/101965527/233953246-9318d425-147b-40e5-a6d2-fbf0fba1fd73.png)

![Screenshot 2023-04-24 141204](https://user-images.githubusercontent.com/101965527/233953253-1b4f3651-730e-4ce2-b65a-52cf173d10a6.png)

#QUERY 2
![Screenshot 2023-04-24 140558](https://user-images.githubusercontent.com/101965527/233944215-f47ac626-a670-48ce-afc6-d17679025a14.png)
#Results for the second query 406 such entries.<br> 

Q2: QUERY TO GET MALES WITH PHONE PRICE GREATER THAN 10,000

![Screenshot 2023-04-24 145305](https://user-images.githubusercontent.com/101965527/233956046-ce9c8f10-36d4-49c3-8f0b-5c390c006299.png)

![Screenshot 2023-04-24 145312](https://user-images.githubusercontent.com/101965527/233956054-e0493738-f6a5-4bb1-aba8-bc7a354345a8.png)


#QUERY 3

![Screenshot 2023-04-24 140607](https://user-images.githubusercontent.com/101965527/233944178-4e309c00-81a8-4dc0-8223-25a09f1921d8.png)

#Results for the third query 76 Entries.<br>
Q3: QUERY FOR LAST NAME STARTS WITH 'M' AND QUOTE LENGTH GREATER THAN 15 AND EMAIL INCLUDES LAST NAME

![Screenshot 2023-04-24 141949](https://user-images.githubusercontent.com/101965527/233947549-d747c2a3-b26e-4260-8a6c-22f4b225be96.png)

![Screenshot 2023-04-24 141956](https://user-images.githubusercontent.com/101965527/233947560-16574cfe-baac-4e73-85f9-7e3c90ed0147.png)
#QUERY 4 

![Screenshot 2023-04-24 140628](https://user-images.githubusercontent.com/101965527/233944189-a2204dad-4e60-439a-9212-a92d39a8481d.png)

#Results for the 4th query 45 Entries.<br> 
Q4: Users which have a car of brand “BMW”, Mercedes-Benz or “Audi” and whose email does not include any digit.

![Screenshot 2023-04-24 142313](https://user-images.githubusercontent.com/101965527/233948279-82a82006-bb14-4749-9287-1f4eaf1454ef.png)

![Screenshot 2023-04-24 142319](https://user-images.githubusercontent.com/101965527/233948293-36ad1e79-d748-4f05-80fe-48e1d6475086.png)

#QUERY 5

![image](https://user-images.githubusercontent.com/101965527/233951925-705d2225-0eb2-4b78-923c-9976918bea93.png)

#Results for the 5th query 10 Entries.<br> 
Q5: Show the data of top 10 cities which have the highest number of users and their average income.

![Screenshot 2023-04-24 142729](https://user-images.githubusercontent.com/101965527/233949259-083623ef-16c6-49a9-84e4-d92ca7e8129b.png)

# Assignment : Mobilicis India Private Limited

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
# To Setup the project<br>
Download the zip or fork the repository then open it in your IDE here for ex. Vscode.<br>
Go to each directory api and client using cd and do npm install or yarn install to install all the dependencies.<br>
# To Run the project<br> 
Type npm start in both terminals again using the cd commandline for ex.<br> 
Step: 1 cd client<br> 
Step: 2 npm start<br> 
Similarly do the same for api<br> 
now your application should be running on 
for ex "http://localhost:3000/api/users" on either port 3000 or 8800.<br>
As given in the assignment I've made seperate calls in the backend for each query for simplicity.<br> 
Which can be found in api/routes/user.js
<br> 
#The user.js looks like this<br>
<br> 
To view any query just uncomment that query and save then refresh the page to see the results.

![Screenshot 2023-04-24 140327](https://user-images.githubusercontent.com/101965527/233944118-8158391d-f128-413b-842b-dddb2da01f89.png)

The default query loads the entire table.<br>
Ps : Could not show all 1000 in the screensnip so the snips contain the start and end of table.

![Screenshot 2023-04-24 141035](https://user-images.githubusercontent.com/101965527/233945578-09ae6d92-9803-4a94-a17a-227a0214f6a5.png)


![Screenshot 2023-04-24 141047](https://user-images.githubusercontent.com/101965527/233945596-4e475af9-8644-416b-bd45-6d2cc3be34cc.png)

#QUERY 1

![image](https://user-images.githubusercontent.com/101965527/233951480-1d529f9a-8097-453a-94f7-994aea2936d6.png)

#Results for the first query 38 such entries.<br> 
Q1: Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

![Screenshot 2023-04-24 141155](https://user-images.githubusercontent.com/101965527/233953246-9318d425-147b-40e5-a6d2-fbf0fba1fd73.png)

![Screenshot 2023-04-24 141204](https://user-images.githubusercontent.com/101965527/233953253-1b4f3651-730e-4ce2-b65a-52cf173d10a6.png)

#QUERY 2

![Screenshot 2023-04-24 140558](https://user-images.githubusercontent.com/101965527/233944215-f47ac626-a670-48ce-afc6-d17679025a14.png)

#Results for the second query 406 such entries.<br> 

Q2: Male Users which have phone price greater than 10,000.

![Screenshot 2023-04-24 145305](https://user-images.githubusercontent.com/101965527/233956046-ce9c8f10-36d4-49c3-8f0b-5c390c006299.png)

![Screenshot 2023-04-24 145312](https://user-images.githubusercontent.com/101965527/233956054-e0493738-f6a5-4bb1-aba8-bc7a354345a8.png)


#QUERY 3

![Screenshot 2023-04-24 140607](https://user-images.githubusercontent.com/101965527/233944178-4e309c00-81a8-4dc0-8223-25a09f1921d8.png)

#Results for the third query 76 Entries.<br>
Q3: Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

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
# Client Side

The main component is the Home.jsx<br>
Using UseStates to set Data and UseEffect hook to call our function<br>

![Screenshot 2023-04-24 151054](https://user-images.githubusercontent.com/101965527/233961509-4f44f8b9-a49c-4154-9505-66d1bfa6e288.png)

Both the tables use conditional rendering to only show the table<br> containing the data and not the null.<br>  

This is the First (Main table) that shows all user data depending on the api call.<br>

![Screenshot 2023-04-24 151252](https://user-images.githubusercontent.com/101965527/233961531-334bdf01-7632-4545-904d-349fedd999b2.png)

This is the Second as the table structure is different so to keep it simple we created a new table that will render when it's type of data is set ie. "avgIncome"<br>

![Screenshot 2023-04-24 151332](https://user-images.githubusercontent.com/101965527/233961544-d59c2e42-ba50-4c17-9063-66f03ab6422a.png)

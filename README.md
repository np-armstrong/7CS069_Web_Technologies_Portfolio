# 7CS069_Web_Technologies_Portfolio
A repository for the web application development project for MSc Computer Science Module Web Technologies.

# Motorbike Rental Web Application. 

## Overview

The application is divided into two main parts:

1. **Frontend**: A React application that provides the user interface for the application. Users can view available motorbikes, make a booking, and manage their bookings/listings through this interface.

2. **Backend**: A Laravel API that provides data to the frontend and handles business logic. The API has endpoints for user authentication, motorbike listing, and booking management.

## Installation and running the app

### Step 1: Clone the main repo to your local environment

### Step 2: Create a MySQL server and database 

For this project, I used DBngin (https://dbngin.com/) to run my MySQL server. upon opening the application, use the + button to create a new server. Change the service to MySQL, name the server and use the default port 3306. 

To create the DB. Ensure you have MySQL installed. To create the DB for this project, TablePlus. Upon loading Table plus, click the database icon or use (⌘ + K)/(CTRL + K) to open the database window. In this window, click 'new...' and create a new MySQL database called 'rideon_api' - This is already specified in the .env file. (https://tableplus.com/blog/2018/06/mysql-create-database.html) 

### step 3: Install, migrate and run the Backend
(In the terminal)

1. Navigate to the backend directory: ```cd backend```

2. Install dependencies: ```composer install```

3. Run migrations and seed the database: ```php artisan migrate:fresh --seed```

3. Run the server: ```php artisan serve```

### Install and Run the Frontend
(In a fresh terminal)

#### To run in development mode: 

1. Navigate to the frontend directory: ```cd frontend``` -> ```cd ride-on```

2. Install dependencies: ```npm install```

3. Start the application: ```npm start```

#### To run in production mode

1. Navigate to the frontend directory: ```cd frontend``` -> ```cd ride-on```

2. Install serve (https://www.npmjs.com/package/serve): 
 ```npm install -g serve```

3. Run the build version with serve: 
```serve -s build``` 

## Acknowledgements

React Bootstrap: https://react-bootstrap.netlify.app/ 
CSS backgrounds: https://10015.io/ 
icons by: https://icons8.com/ 

#### Images by: 
Gijs Coolen: https://unsplash.com/photos/black-and-silver-naked-motorcycle-on-road-during-daytime--5rcxih1e44?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash
  
cottonbro studio: https://www.pexels.com/photo/man-repairing-a-motorcycle-5803320/

Nick Wehrli: https://www.pexels.com/photo/photo-of-man-riding-bicycle-4054069/ 
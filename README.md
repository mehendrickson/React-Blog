# React Blog
## About
This is a blog starter project using React and Node.js. The project connects to a MongoDB for 
handing user authentication and storing content.

The database is managed on the backend using Mongoose. The API support authentication using Google OAuth
and allows users to create an account using an email.

The front end is styled using Materialize CSS. 

## Set Up
In order to run the project, you will have to create a file called dev.js in the config folder. You should
copy over the prod.js file contents and then fill in with your development configuration. Alternatively,
you could create a 'env = production' environment variable and create environment variables on your machine.
This is not recommended because it will make your development environment less portable.

For ease of development, the concurrently package is used to run the front end and backend servers at the
same time. You can start the application using 'npm run dev' on your development PC. In development mode,
server requests are proxied to the backend from the client side.

The app is setup for heroku deployment. The scripts section of package.json will need to be modied to 
release in other environment.

Before running the application, you will have to run 'npm install' in the root directory and in the 
client directory.

## Getting Started

The react side of the application lives in the client folder. The root project contains the server.

In order to get Admin features, you should manually navigate to www.yourdomain.com/admin/login. This will 
bring you to a login page where you can login or create an account if no accounts are found in the user
database. Once you create an account, you will not be able to create another one from this page, so be
careful not to lose your password.

Once are logged in, you will see an add post button and a dashboard button on the main page. This will
allow you to add a post or access the admin dashboard.  

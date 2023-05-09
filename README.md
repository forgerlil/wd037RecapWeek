# Recap Week

## Day 01

### Scaffold backend REST API with ExpressJS

The API will have a single resource called ducks (for today).
Learning goals for this step are:

- Environment variables
- Routers → express.Router()
- Controllers
- Models → Mongoose
- CRUD
- Error handling
- Async handlers (optional)
- Git (local) and GitHub (remote) setup
- Deployment

### Step by step on how we achieved this:

1. Installed express, nodemon, dotenv, mongoose and express-validator
2. Created a index.js file with a basic scaffold for our server
3. Created a new MongoDB database on MongoDB Atlas
4. Instantiated a connection in our db folder, exported and called it on server.js
5. Created a mongoose duck schema and model
6. Set a route for ducks in our api
7. Created controller functions to enable CRUD operations for our duck documents
8. Created a middleware to enable error handling
9. Created a middleware to validate incoming data (body and params)

## Day 02

### Scaffold frontend React application

Goal is to scaffold a front end SPA with React to interact with our API
Learning goals for this step are:

- Using Vite
- Revisiting hooks,
- Routing with React Router DOM
- Styling is done with Tailwind but learning it is not a necessity for these sessions
- Network requests with Axios → better error handling
- Components: NavBar, Layout, RubberDuckCard
- Pages: Home, addDuck CreateDuck component → POST to backend API
- Deployment

### Step by step on how we achieved this:

1. We created a new app scaffold with Vite, and installed react-router-dom, axios, react-toastify and tailwindcss
2. Wrapped our App component with a Router component, and created our first routes (Home and AddDuck)
3. Created a NavBar component and a Layout component to wrap our routes
4. In our Home component we created a useEffect hook to fetch all ducks from our API
5. Created a RubberDuckCard component to display each duck
6. In our AddDuck component we created a useState hook to handle the form data, and a handleSubmit function to POST the data to our API
7. Deployed our app to Netlify

The remainder of the app was added at a later point, and is not part of the recordings. Feel free to check the remaining code!

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

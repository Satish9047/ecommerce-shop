# ESHOP {full stack E-commerse app}

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Seeder](#running-the-seeder)
- [Running the Application](#running-the-application)

## Installation

### Prerequisites

- Node.js (v16 or higher)
- pnpm (Package Manager)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Satish9047/ecommerce-shop.git

2. **Install Server Dependencies:**
   Navigate to the server directory and install the dependencies:
   ```bash
   cd server
   pnpm install

3. **Install Client Dependencies**
    Navigate to the client directory and install the dependencies:
   ```bash
   cd ../client
   pnpm install

4. **Set Up Environment Variables**
   In the server directory, create a .env file by copying the contents of .env.example:
   
       cd ../server
       cp .env.example .env

   Open the .env file and replace the placeholder values with your actual configuration:
  
       NODE_ENV=development
       PORT=8080
       MONGOD_CONNECTION_STRING=your_mongodb_connection_string
       JWT_SECRET=your_jwt_secret
       PAYPAL_CLIENT_ID=your_paypal_client_id

5. **Running the Application**
   Run Database Seeder
   If you need to import or destroy data in your database, you can run the following commands:
   
       a. Import data:
          pnpm run data:import
       b. Destroy data:
          pnpm run data:destroy
   
7. **Start the Application**
   To start both the client and server in development mode, run the following command from the server directory:
   
         pnpm run pre

   This will start the server on the specified port and the client on its development server.

8. **Access the Application**
   The client should be accessible at http://localhost:3000 (or another port if configured differently).
   The server will be running at http://localhost:8080 (or the port specified in your .env file).
   
 

# Running the Project

This repository contains two folders: `client` and `server`, corresponding to the frontend and backend projects, respectively.

## Prerequisites

- Node 18.17.1
- NPM 9.6.7

### Step 1: Clone the Repository

To get started, clone this repository to your local machine using the following command:

```bash
    git clone https://github.com/alvaroclavijo/git-commit-history-app.git
```

## Server Project (Backend)

### Step 2: Configure the Server Project

In the server folder, create a file named .env.

Open the .env file and add the following lines:

```bash
GITHUB_OWNER=alvaroclavijo
GITHUB_REPO=git-commit-history-app
GITHUB_TOKEN=<TOKEN>
```

The GITHUB_TOKEN value you can find [here](https://docs.google.com/document/d/1GPQBVO7msW2X6xVXAZ6sGmRbZFe5zpCgdm2MlEliedU/edit?usp=sharing)

If you want to use different values, make sure the values are correct for your project.

### Step 3: Run the Server Project

From the terminal, navigate to the server folder:

```bash
cd server
```

Run the following command to start the server project:

```bash
npm install
```

```bash
npm run start
```

The server project will be available at http://localhost:8080.

## Client Project (Frontend)

### Step 4: Configure the Client Project

In the client folder, create a file named .env in the project's root directory.

Open the .env file and add the following line

```bash
VITE_API_URL=http://localhost:8080
```

### Step 5: Run the Client Project

From the terminal, navigate to the client folder:

```bash
cd client
```

Run the following command to start the client project:

```bash
npm install
```

```bash
npm run dev
```

The client project will be available at http://localhost:5173.

That's it! You can now run both the client and server projects by following these instructions. Make sure you have Node.js and npm installed on your system before getting started.

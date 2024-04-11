# Customer Database Management System

This is a Shopping App built using vite React and json server.

## Getting Started

These instructions will help you set up a development environment and run the application on your local machine.


### Installation

1. Clone the repository or download the source code.

```bash

    git clone https://github.com/jayanth2308/shop.git

```

2. Navigate to the project directory.


```bash

   cd client

```

3. Install the project dependencies Seperately for frontend and json-server.

```bash

   npm install

```

## Running the Application

To start the development server and run the application, use the following commands

1.Run the json server in the first terminal 
```bash

     npm install json-server --save-dev


```
after installing package run this command in the second terminal
```bash

     npx json-server --watch db.json --port 3001

```
2.Now open another terminal and run the following commands
```bash

   cd client

```

```bash

     npm run dev

```

## In case  if u you're encountering a security error related to running scripts in PowerShell while executing json-server.first run this command

```bash

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


```
second run this command
```bash

     npx json-server --watch db.json --port 3000
```
the jsonserver will start at PORT:3001

The application runs at PORT:5173

## Features

This Platform allows you to:

- Add the customer ,edit and delete the customer .

## Contributing

Feel free to contribute to this project if you'd like to add more features or improve it.

## Acknowledgments

Thank you for using this Platform!
Happy coding!

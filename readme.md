# Libraryly

[![Contributors](https://img.shields.io/github/contributors/dsckgec/libraryly.svg)](https://github.com/dsckgec/libraryly/graphs/contributors) [![Forks](https://img.shields.io/github/forks/dsckgec/libraryly.svg)](https://github.com/dsckgec/libraryly/network/members) [![Issues](https://img.shields.io/github/issues/dsckgec/libraryly.svg)](https://github.com/dsckgec/libraryly/issues) [![Pull Request](https://img.shields.io/github/issues-pr-closed-raw/dsckgec/libraryly)](https://github.com/dsckgec/libraryly/pulls)


An online library management solution

## Contents

1. [Description](#description)
1. [Project structure](#project-structure)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Description

A software solution to handle the primary functions of a library, which include managing books as well as members. This solution involves maintaining a database for entering new books, recording the issue of books as well as user profiles.

### What's the problem?

Libraries play a crucial role in the society, being the gateway of knowledge and culture. With the development of digital content, it becomes increasingly important to manage and maintain the catalogue of books with a scalable and reliable **Library Management System** that supports the general requirements of a library. Managing a library through paper work can be very time consuming and it has its own risks like files and records getting lost or damaged.

### How can this project help?

Our project presents an e-platform to libraries of all sizes, which help maintain the data of books, being added or issued, along with due dates, issuers, fine calculation and other primary functions of a library. 

### The idea

Users: <br />
We have three kinds of users in our system
- Librarian: Responsible for adding and maintaining the catalogue of books and issues as well as members of the library.
- Member: Members can browse the catalogue of books, request for issuing or adding more books.
- Admin: The admin has control over the entire system and has CRUD permissions for librarians, members as well has books.

Registration: <br />
Librarians and regular members can register an account on the platform but can only start using after profile approval by the admins (for librarians) and admin / librarian (for users). 

Books: <br />
Each book will have a unique identification number and parameters like title, author, subject, **category**, publication date etc, on basis of which the book can be searched in the catalogue. Members can request the authority to add a book to the catalogue by filling up a form. The system should be able to maintain the the issuing, return and renew of books.

## Project structure

The current project structure is as follows:
```
libraryly
  ├── .github/            github related files like PR templates, contribution guidelines  
  ├── controllers/        controller functions for every route. controllers make calls to services
  ├── models/             database schema / models go here
  ├── routes/             routes or endpoint definitions go here. routes make calls to controllers
  ├── services/           files that process and query the database go here
  ├── tests/              directory for endpoint testing
  ├── views/              the frontend of the project in ejs, css and js
  ├── utils/              utility or helper functions go here
  ├── .env                environment variables used in the project
  ├── .gitignore          stores files and directories to be ignored in commits
  ├── .prettierrc         configuration for prettier to help maintain a common code formatting
  ├── app.js              entry point for our project
  ├── LICENSE             the open source license
  ├── package.json        metadata of the project
  ├── package-lock.json   stores version of every package used in the project
  ├── readme.md           details and instructions about the project go here

```

## Project roadmap

> TODO: update this section before 15th April

The project currently does the following things.

- Feature 1
- Feature 2
- Feature 3

See below for our proposed future steps.

- Feature 1
- Feature 2
- Feature 3

## Getting started

Everyone is welcomed to contribute to our project. Mentioning in bold, **you do not need to know the tech stack and tools beforehand to be a part of our project**. This is a learn-and-build projects where the contributors build alonside learning the various concepts and technologies involved. Below are a few prerequisites and installation guides

### Prerequisites

#### Softwares needed

- A web browser
- Node and npm

####  Knowledge needed

The best way to learn the following is to google each and everything!

- Very basic understanding of git and github:
  - What are repositories (local - remote - upstream), issues, pull requests
  - How to clone a repository, how to fork a repository, how to set upstreams
  - Addiing, commiting, pulling, pushing changes to remote repositories

- For backend:
  - [Reading this blog on overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
  - [Reading this blog on APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - [Reading this blog on npm](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
  - Creating a free MongoDB cluster and fetching the connection URI. (you may read my gist on how to - [here](https://gist.github.com/singhayushh/426f10353a8051593828e92c139ebdbc))

- For frontend:
  - Understanding the differences between HTML and EJS
  - Using variables, if else, loops in ejs
  - CSS !

### Installing

A step by step series of instructions that tell you how to get the project running locally is given below. Google every issue you face following the below instructions or just ask us in our discord / whatsapp group.

- Fork and clone the repository followed by opening the project in your text editor (with a terminal)
- create a `.env` file, copy the contents from `.env.example` file to `.env`. Replace the values of `PORT`, `MONGO_URI` and `JWT_SECRET` with your own values. 
- In the terminal, make sure you are in the project directory.
- run the command `npm install` or `npm i` - (you should learn when and why to use this command!)
- run the command `npm start` - you will then receive a message mentioning of an address where the project is live
- open the browser and browse to the above address!

## Live demo

> TODO: deploy over heroku or netlify or some other platform with CI/CD support

## Built with

**Backend:**

- [Express](https://expressjs.com/) - a nodejs framework
- [Mongo DB](https://www.mongodb.com/) and the [Mongoose](https://mongoosejs.com/) ODM

**Frontend:**

- [EJS](https://ejs.co/) which just HTML with more powers
- CSS
- Jquery

## Contributing

Please read [contributing.md](/.github/contributing.md) for details on our contribution guidelines, and the process for submitting pull requests to us.

## Authors

<a href="https://github.com/DSCKGEC/libraryly/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=DSCKGEC/libraryly" />
</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- 

# Libraryly

[![Contributors](https://img.shields.io/github/contributors/dsckgec/libraryly.svg)](https://github.com/dsckgec/libraryly/graphs/contributors) [![Forks](https://img.shields.io/github/forks/dsckgec/libraryly.svg)](https://github.com/dsckgec/libraryly/network/members) [![Issues](https://img.shields.io/github/issues/dsckgec/libraryly.svg)](https://github.com/dsckgec/libraryly/issues) [![Pull Request](https://img.shields.io/github/issues-pr-closed-raw/dsckgec/libraryly)](https://github.com/dsckgec/libraryly/pulls)

An online library management solution

<details><summary>Frontend Theming Conventions</summary>

## Theme
    Neumorphism

## Website theme color hexcodes
   main(background) - #f2f3f7      
   standard- #ff8303 

## Acessibilities
- Neumorphic box shadows
         
    ```
    box-shadow: 
    /* logo shadow */
    0px 0px 2px #5f5f5f,
    /* offset */
    0px 0px 0px 5px #ecf0f3,
    /*bottom right */
    8px 8px 15px #a7aaaf,
    /* top left */
    -8px -8px 15px #ffffff;
    ```

- Neumorphic box-shadow(elevated)  
     ```
    box-shadow: 13px 13px 20px #cbced1,
              -13px -13px 20px #ffffff;
    ```

- Neumorphic box-shadow(dropped)   
    ```
    box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
    ```

- Standard border radius    
    border-radius: 25px;

- padding:  30px (minimum)  
    
- Margin ->   mininum- 16px.

</details>

## Contents

-   [Libraryly](#libraryly)
    -   [Contents](#contents)
    -   [Description](#description)
        -   [What's the problem we are trying to solve?](#whats-the-problem-we-are-trying-to-solve)
        -   [How can Libraryly help?](#how-can-libraryly-help)
        -   [The idea](#the-idea)
    -   [Project structure](#project-structure)
    -   [Project roadmap](#project-roadmap)
    -   [Getting started](#getting-started)
        -   [Prerequisites](#prerequisites)
            -   [Softwares needed](#softwares-needed)
            -   [Knowledge needed](#knowledge-needed)
        -   [Installing](#installing)
    -   [Live demo](#live-demo)
    -   [Built with](#built-with)
    -   [Contributing](#contributing)
    -   [Authors](#authors)
    -   [License](#license)
    -   [Acknowledgments](#acknowledgments)

## Description

A software solution to handle the primary functions of a library, which include managing books as well as members. This solution involves maintaining a database for entering new books, recording the issue of books as well as user profiles.

### What's the problem we are trying to solve?

Libraries play a crucial role in the society, being the gateway of knowledge and culture. With the development of digital content, it becomes increasingly important to manage and maintain the catalogue of books with a scalable and reliable **Library Management System** that supports the general requirements of a library. Managing a library through paperwork can be very time-consuming and it has its own risks like files and records getting lost or damaged.

### How can Libraryly help?

Our project presents an e-platform to libraries of all sizes, which help maintain the data of books, being added or issued, along with due dates, issuers, fine calculation and other primary functions of a library.

### The idea

Users: <br />
We have three kinds of users in our system

-   Librarian: Responsible for adding and maintaining the catalogue of books and issues as well as members of the library.
-   Member: Members can browse the catalogue of books, request for issuing or adding more books.
-   Admin: The admin has control over the entire system and has CRUD permissions for librarians, members and books.

Registration: <br />
Librarians and regular members can register an account on the platform but can only start using after profile approval by the admins (for librarians) and admin / librarian (for users).

Books: <br />
Each book will have a unique identification number and parameters like title, author, subject, **category**, publication date etc, on basis of which the book can be searched in the catalogue. Members can request the authority to add a book to the catalogue by filling up a form. The system should be able to maintain the the issuing, return and renew of books.

## Project structure

The current project structure is as follows:

```
/
  ├── .github/            github related files like PR templates, contribution guidelines
  ├── controllers/        controller functions for every route. controllers make calls to services
  ├── middlewares/        middlewares for various routes go here
  ├── models/             database schema / models go here
  ├── routes/             routes or endpoint definitions go here, routes make calls to controllers
  ├── services/           files that process and query the database go here
  ├── tests/              directory for endpoint testing
  ├── views/              the frontend of the project in EJS, CSS and js
  ├── utils/              utility or helper functions go here
  ├── .env                environment variables used in the project
  ├── .gitignore          stores files and directories to be ignored in commits
  ├── .prettierrc         configuration for prettier to help maintain a common code formatting
  ├── app.js              entry point for our project
  ├── LICENSE             the open source license
  ├── package.json        metadata of the project
  ├── package-lock.json   stores version of every package used in the project
  └── readme.md           details and instructions about the project go here

```

## Project roadmap

> TODO: update this section before 15th April

The project currently does the following things.

-   Feature 1
-   Feature 2
-   Feature 3

See below for our proposed future steps.

<details><summary>Click to expand</summary>
	
-   Sign-up/Login Page for users/librarians (Frontend validation included)

    Sign-Up User/Librarian page details-

    Fields

    -   Name
    -   Email - (validated via regex)
    -   Password - (min length 6)
    -   Picture - ( Store in Cloudinary)
    -   Phone - (validated as 10 digit or not, via regex)
    -   Address - (google map api, if it’s free)
    -   Username- Validated via ajax (username taken or not)
    -   Option - user/librarian

    Admin-side controls

    -   Status
    -   Groups

    Login Page - User / Librarian / Admin
    (Based on the role it will automatically redirect to respective dashboards)

    -   Username
    -   Password
    -   Groups

-   Dashboard Page for Admins

    All-in-one management.

    -   User - Approve/Ban/Disapprove
    -   Librarian - Approve/Ban/Disapprove
    -   All book requests

-   Dashboard Page for Users - Add book/Request book
    -   Contain all books taken and display the fine(if any)
    -   All books added by the User
-   Dashboard Page for librarian
    -   check user request/add book
    -   New Requests-approve/disapprove/ask for more or less time
    -   Verify Book Details
    -   A separate tab if book not returned
    -   All books added by the librarian
-   Add Book Page- (for librarian/user)

    Book Details (Frontend validation included)

    Fields

    -   Category
    -   Title
    -   ISBN
    -   Price
    -   Pages
    -   Description
    -   Author
    -   Publisher
    -   Inventory

        Admin/Librarian Side Controls:-

    -   Status- Check Book details and add to the library.

-   Request Book Page
    For Users-can request books for a fixed time period

    Fields:

    -   ISBN
    -   \_id
    -   Time start
    -   Time end
        Admin/Libarian side controls:-
    -   Returned-yes/no

    For Librarians-

    -   Can grant book request/deny them or change the time-period

-   A notification tab in User/Librarian dashboard
    -   Will notify when a user request a book/gets approved
    -   When their add book request gets approved
    -   If book not returned, Notify from time to time.

</details>

## Getting started

Everyone is welcomed to contribute to our project. Mentioning in bold, **you do not need to know the tech stack and tools beforehand to be a part of our project**. This is a learn-and-build projects where the contributors build alongside learning the various concepts and technologies involved. <br />Below are a few prerequisites and installation guides:

### Prerequisites

#### Softwares needed

-   A web browser
-   Node and npm

#### Knowledge needed

The best way to learn the following is to google each and everything!

-   Very basic understanding of git and github:

    -   What are repositories (local - remote - upstream), issues, pull requests
    -   How to clone a repository, how to fork a repository, how to set upstreams
    -   Adding, committing, pulling, pushing changes to remote repositories

-   For backend:

    -   [Reading this blog on overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
    -   [Reading this blog on APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
    -   [Reading this blog on npm](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
    -   Creating a free MongoDB cluster and fetching the connection URI. (you may read my gist on how to - [here](https://gist.github.com/singhayushh/426f10353a8051593828e92c139ebdbc))

-   For frontend:
    -   Understanding the differences between HTML and EJS.
    -   Using variables, if else, loops in EJS.
    -   CSS !

### Installing

A step by step series of instructions that tell you how to get the project running locally is given below. Google every issue you face following the below instructions or just ask us in our Discord / WhatsApp group.

-   Fork and clone the repository followed by opening the project in your text editor (with a terminal)
-   create a `.env` file, copy the contents from `.env.example` file to `.env`. Replace the values of `PORT`, `MONGO_URI` and `JWT_SECRET` with your own values. You can use our development database as well. `MONGO_URI=mongodb+srv://luna:lovegood@libraryly.a1lod.mongodb.net/LibrarylyDB?retryWrites=true&w=majority`
-   In the terminal, make sure you are in the project directory.
-   run the command `npm install` or `npm i` - (you should learn when and why to use this command!)
-   run the command `npm start` - you will then receive a message mentioning of an address where the project is live
-   open the browser and browse to the above address!

## Live demo

> TODO: deploy over heroku or netlify or some other platform with CI/CD support

## Built with

**Backend:**

-   [Express](https://expressjs.com/) - a NodeJS framework
-   [Mongo DB](https://www.mongodb.com/) and the [Mongoose](https://mongoosejs.com/) DOM

**Frontend:**

-   [EJS](https://ejs.co/) which just HTML with more powers
-   CSS
-   Jquery

## Contributing

Please read [contributing.md](/.github/contributing.md) for details on our contribution guidelines, and the process for submitting pull requests to us.

## Authors

<a href="https://github.com/DSCKGEC/libraryly/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dsckgec/libraryly" />
</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   [contributors-img](https://contrib.rocks)

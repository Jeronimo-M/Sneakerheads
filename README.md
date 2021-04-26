# Sneakerheads

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Sneakerheads** is a community based marketplace app where users can post their sneakers for sale as well as comment and like other posts from their fellow peers to show support. 

<br>

## MVP

The **Sneakerheads** MVP wants to deliver a functional app that displys it's product page with intended CSS, authentication with ability to sign up and/or sign in, and a product details page that has includes the likes and comment section.
<br>

### Goals

- _Full CRUD_
- _Four table design_
- _User association page_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Used for all front end work_ |
|   React Router   | _Sets up routes for React side_ |
| Rails | _Models to interact with database_ |
|     Ruby on Rails      | _Our server with a RESTful API_ |
|  CSS  | _Styling for client side_ |

<br>

### Client (Front End)

#### Wireframes

(https://www.figma.com/file/4H4dQICJw6eFzz9fPqQ19T/Sneakerheads?node-id=0%3A1)

#### Component Tree

[Component Tree](https://www.figma.com/file/84hGy2QoxkOE68bAMjvG01/Component-Tree?node-id=0%3A1)

#### Component Architecture

``` structure

src
|__ screens/
      |__ Products.jsx
      |__ CreateProducts.jsx
      |__ ProductDetails.jsx
      |__ EditProducts.jsx
      |__ UserAccount.jsx
      |__ Login.jsx
      |__ Register.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ products.js
|__ App.css
|__ index.css
|__ index.js
```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Out Rails Models    |    H     |     3 hrs      |      hrs     |     TBD    |
| Build Rails Controllers |    H     |     5 hrs      |      hrs     |     TBD     |
| Heroku Setup               |     M     |     2 hrs      |      hrs     |     TBD     |
| Develop Products.jsx page According to Wireframe|     H     |     6 hrs      |      hrs     |     TBD     |
| Comment Functionality on Product Details  |     L     |     6 hrs      |      hrs     |     TBD     |
| User Authorization Setup |     H    |     5 hrs      |      hrs     |     TBD     |
| Build Out Landing Page   |     M     |     2 hrs      |      hrs     |     TBD     |
| Build Out Login Screen   |     M     |     2 hrs      |      hrs     |     TBD     |
| Build Out Register Screen |    M      |     2 hrs      |      hrs     |     TBD     |
| Overall CSS         |    M      |     6 hrs      |      hrs     |     TBD     |
| Media Queries       |    L      |     2 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     41 hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

(https://app.diagrams.net/#G1-Bjg2vA7OrKhrX92-TanI86V76LU4LU8)
<br>

***

## Post-MVP

- Add ability to add sub-comments
- Add Like feature to all comments
- Add a responsive search bar
- Implement an in-app chat

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

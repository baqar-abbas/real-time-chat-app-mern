# real-time-chat-app-mern

| Full Stack Chat App               |
| --------------------------------- |
| ![image](/images/chatwelcome.JPG) |
| ![image](/images/chatsignup.JPG)  |
| ![image](/images/chatlogin.JPG)   |

<div align="center">

  <img src="/images/logo.webp" alt="logo" width="200"  height="auto" />
  <br/>

  <h3><b>README</b></h3>

</div>

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [Chat App] <a name="about-project"></a>

> **[CHAT-APP]** This project is a real-time chat application developed using the MERN stack along with Socket io for real time client server communication. It provides a user-friendly platform for registered users to engage in instant messaging. Key features include user authentication for secure sign-up and sign-in processes, the ability to send and receive messages instantly, and real-time chat functionality. This application offers a seamless communication experience, enabling users to connect and converse with friends effortlessly.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://docs.pmnd.rs/zustand/getting-started/introduction">Zustand</a></li>
    <li><a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>
    <li><a href="https://daisyui.com/components/">Daisy UI</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">ExpressJS</a></li>
    <li><a href="https://socket.io/docs/v4/">Socket io</a></li>
    <li><a href="https://nodejs.org/en">NodeJS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">Mongo DB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Design the Application to handle responsiveness for small, medium, large devices]**
- **[Design and implement the functionality Sign up and Sign in users]**
- **[Desgin and implement the functionality real time chat using MERN & Socket IO]**
- **[The application allows users to signup, login, send and receive messages]**
- **[Implemented the notifications functionality using React Toast]**
- **[Implemented authentication using JWT and validations included for error handling ]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

- [Live Deployment link on render](https://chat-app-caez.onrender.com)

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- GitHub Account, VScode and Node Js Environment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

##

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com:baqar-abbas/real-time-chat-app-mern.git
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Install & setup

Install this project with:

```sh
  npm install
  cd frontend
  npm install (for frontend)
  Setup .env file and environmental variables
  PORT=<set port>
  MONGO_DB_URI=<Mongo DB uri >
  JWT_SECRET=<command for generating json web token for jwt authentication
  openssl rand -base64 32>
  NODE_ENV=development
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage

To run the project, execute the following command:

```sh
  For starting the backend: In the root directory -> npm run server
  For starting the frontend: cd frontend -> npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Run tests

To run tests, run the following command:

```sh
  NA
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Baqar Abbas**

- GitHub: [@Baqar](https://github.com/baqar-abbas)
- Twitter: [@BaqarAbbas9](https://twitter.com/BaqarAbbas9)
- LinkedIn: [Baqar Abbas](https://www.linkedin.com/in/baqar-abbas/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **[More options in chat will be added]**
- [ ] **[New functionalities will be incorporated]**
- [ ] **[Functionality of attachements of files and images will be added]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/baqar-abbas/real-time-chat-app-mern/issues/new).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, give it a star.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank HUMANTEK for the idea of this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

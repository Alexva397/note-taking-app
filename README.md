# Note Taking App

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)



## Description

This App is designed as an easy way to keep track of tasks and take notes. 

With this program, the user can quickly save and delete notes to help them stay organized!

Each note is saved on the back end and will repopulate if the user leaves the site.

If you would like to use the app now, it is deployed here:

[Note Taking App](https://pure-lowlands-90041.herokuapp.com/)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#test)
- [Resources](#resources)
- [Challenges](#challenges)
- [Questions](#questions)

## Installation

  In order to run the app on your local system, please clone the repository and follow the steps in installation and usage.

  The Repo contains a package.json file that includes all dependencies.

  In order to run the application, navigate to the directory on your command line and run: 
  
  ```
  npm i
  ```

  This will install express.js to handle all the file routing.

  This will also install a unique ID generator, making each note the user creates easy for the server to identify.

  The final dependency in the package is nodemon, this will automatically restart your server when edits are made to the code.


## Usage 
  
  Once the installation process is complete, the user can start the server by running the following command

  ```
  node server.js
  ```

  The User will be given a PORT number and they can access the app by pasting **http://localhost:8675/** in their browser search bar.

  Once displayed with the homepage, the app will be usable.


## Video

[![Demo Video](https://img.youtube.com/vi/rBFv3fq7YII/0.jpg)](https://www.youtube.com/watch?v=rBFv3fq7YII)


## Contributing

If you would like to contribute to the repository, please fork and submit pull requests. All pull requests will be reviewed and approved/denied by the owner of the repository.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)


## Tests

  There are not any tests written for this repository.


## Resources

These resources made a huge difference during the development process of this app:

[Express.js Static Files](https://expressjs.com/en/starter/static-files.html)

[ID Generator](https://www.npmjs.com/package/generate-unique-id)


## Challenges

Getting a seperate js file to handle routing was giving me issues. 

I finally settled on writing all my routing code within the server.js file and got the app functioning. 

I was then able to go in and move the code for the api routes to a seperate file and export it correctly.

## Questions

  If you have any questions regarding the repo, please contact me at one of the following:
    
  [Github](https://github.com/Alexva397)

  [LinkedIn](https://www.linkedin.com/in/alexander-vadeboncoeur-287039aa/)

  [asvadeboncoeur@gmail.com](mailto:asvadeboncoeur@gmail.com)

This project is set up with 2 standalone folder structures. When you clone down and do an `ls` you will see `classroom-rhythm-api` and `classroom-rhythm-frontend/`

In order to execute this project, you will need to `gradle eclipse` inside of `classroom-rhythm-api` and `npm install` inside of `classroom-rhythm-frontend/`


Note: The only java code currently in the api is enough to run the server and see the hal browser at `localhost:8080`. It is available for a future iteration if an api is to be designed for the project. 

`classroom-rhythm-frontend/` can run a server simultaneously at `localhost:1234` and will render the application in the browser.

Future iterations can `fetch` data from the api at `localhost:8080` and render it on the front end at `localhost:1234`
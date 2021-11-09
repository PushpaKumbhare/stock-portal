##Readme

###Requirements:
- nodejs 14 
- postgres 11

###Setup:
####Backend Server (Express JS):
- install dependencies with npm
- update DB config in the config file
- uncomment  `db.sync()` and run  `node app.js` to create tables in DB. Break process when tables are created
- run server by running `npm start` in server directory

####Web Application( React JS):
- update API endpoint in application to point backend API server
- build production bundle using `npm build` in webapp directory
- deploy production build using a web server like Apache or Nginx.


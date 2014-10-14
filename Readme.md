ClientDemo
==========

# Setup
* Install node.js (see http://nodejs.org for installation instructions)
* Run `npm install`
* run `npm install -g bower`

# Start the app

 * Copy the file .env.example to .env
 * Fill in the two variables you've received from Telenor MVNO (X-TELENOR-KEY and CLIENT-ID) into .env
 * Run bower install
 * Run `npm start` or, if that one fails, `node web.js`
 * The app will start and the console will display the port the app has started on.
 * Browse to http://localhost:{PORT}, where PORT is displayed in the prev step

The app will now perform requests to a Client.Api located at http://localhost:3000 (for now).

# Run tests
 * Run `npm test`

# Debugging
The server-side environment includes node-inspector, which makes it possible to debug the node application. To start debugging, run `npm run-script debug`.

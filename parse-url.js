const url = require('url');

// The URL we want to parse ( parse === analyse)
const exampleUrl = '/about?name=Jane&city=Boston';

// Check URL doc for the meaning of parameters
const parsedUrl = new URL(exampleUrl,'https://mybaseurl.com');

// Show the results
console.log('Parsed query string:');
console.log(parsedUrl.searchParams); // { name: 'Jane', city: 'Boston' }

// Example without a query string
const urlNoQuery = '/about';
const parsedUrlNoQuery = new URL(urlNoQuery, 'http://bybaseurl.com');
console.log(parsedUrlNoQuery.searchParams); // {}
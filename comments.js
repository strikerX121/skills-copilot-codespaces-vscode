// Create a webserver
// Listen for requests
// Parse the request
// Handle the request
// Respond to the request
// Close the request

// Import the http module
const http = require('http');
// Import the fs module
const fs = require('fs');
// Import the url module
const url = require('url');

// Import the comments module
const comments = require('./comments.js');

// Create a web server
const server = http.createServer(function (request, response) {
  // Log the request
  console.log(`New request: ${request.url}`);

  // Parse the request
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Handle the request
  if (path === '/') {
    // Respond to the request
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>Hello World!</h1>');
    response.end();
  } else if (path === '/comments') {
    // Respond to the request
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(comments));
    response.end();
  } else if (path === '/comments/add') {
    // Parse the body
    let body = '';
    request.on('data', function (chunk) {
      body += chunk;
    });
    request.on('end', function () {
      // Add the comment
      comments.push(body);
      // Respond to the request
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(comments));
      response.end();
    });
  } else if (path === '/comments/delete') {
    // Parse the body
    let body = '';
    request.on('data', function (chunk) {
      body += chunk;
    });
    request.on('end', function () {
      // Delete the comment
      comments.splice(body, 1);
      // Respond to the request
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(comments));
      response.end();
    });
  } else {
    // Respond to the request
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('<h1>Not Found</h1>');
    response.end();
  }
});

// Listen for requests
server.listen
# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The browser sends a request with this "https://www.techtonic.com/" string to a Domain Name System for looks up IP address, in its databases, waits for a response, and then sends the request for view the page with the found IP address. The found server contacts the browser and sends it the content of the page.

## From start to finish how does that data reach you to be rendered in the browser?

At the moment when the browser receives data from the web resource, it begins to parsing html, CSS, scripts and builds the DOM tree (document object model), and on the basis of this DOM tree the Render Tree is built and the build process begins. Each Render Tree node will be allocated with the exact coordinates defining the place of its display on the screen. The next step is drawing, which involves a full crawl of the Render Tree, during which each node will be drawn using the internal interface.

## What code is rendered in the browser?

In a browser rendered an HTML code and interprets it into what we see visually.

## What is the server-side code’s main function?

The main function the server-side code’s is to control what information is sent to the user.
The server-side code's runs on servers and interacts with the backend, the database.

## What is the client-side code’s main function?

The main function the Client-side code's is handling the structure and presentation of that data to the user.
The client-side code mostly to do with the user interface, with which the user interacts.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

On the client-side are created only one instance of assets (HTML, CSS, JS, Images, etc.), because one-time instance downloaded on client-side it can be reuse again

## How many instances of the server-side code are available at any given time?

The server is not limited by the instances of the server-side code at any given time because to produce the final web pages that we see in the browser, the server might fill an HTML template with contents from a database.

## What is runtime?

Runtime describes the execution time of a computer program, from its beginning to its completion

## How many instances of the databases connected to the server application are created?

It is possible to run multiple instances of the database connected to the server application 

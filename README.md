# Flight Ticket Booking API Gateway


<h3>Introduction to the API Gateway Service</h3>
<p>
    Flight Ticket Booking API Gateway Service is a Node.js-based microservice that acts as a single entry point for various services in the flight ticket booking system. This service facilitates user registration, authentication, and routing requests to the appropriate microservices while implementing essential features such as JWT token authentication, rate limiting, and reverse proxy.
</p>


<h3>High Level Design of Project</h3>
<img src="/src/High-Level-Design.png" alt="High level design of project"/>


<h3>Features of the API Gateway Service</h3>
<p>
<ol>
<li><p><b>User Registration and Sign Up:</b> Implemented APIs for user registration and sign-up using JWT tokens for secure authentication and bcrypt for storing passwords securely.</p></li>
<li><p><b>Rate Limiter:</b>Integrated rate limiting functionality to limit the number of requests made to the API to prevent abuse and ensure fair usage.</p></li>
<li><p><b>Reverse Proxy:</b>Configured a reverse proxy to enable access to multiple services through a single gateway, providing a streamlined experience for clients.</p></li>
</ol>
</p>

**Sequence Diagram for Sign in functionality**

![Sequence diagram](src/Sequence_diagram_for_signin.PNG)

**High level overview of this service**



Some of the snapshots from this service are:

1. Rate limiting in action

![Rate limiting in action](src/Rate_Limiting_in_action.PNG)

2. Flights Booking Service being routed by the reverse proxy

![Flights Booking Service Routing](src/Flights_Booking_Service_API_Routing.PNG)

3. Flights Search Service being routed by the reverse proxy

![Flights Search Service Routing](src/Flights_Search_Service_API_Routing.PNG)

<h3>Technologies Used</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MySQL</li>
<li>Sequelize ORM</li>
</ul>

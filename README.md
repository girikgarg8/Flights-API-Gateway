# Flight Ticket Booking API Gateway


<h3>Introduction</h3>
<p>
    Flight Ticket Booking API Gateway Service is a Node.js-based microservice that acts as a single entry point for various services in the flight ticket booking system. This service facilitates user registration, authentication, and routing requests to the appropriate microservices while implementing essential features such as JWT token authentication, rate limiting, and reverse proxy.
</p>


<h3>Design</h3>
<img src="/src/High-Level-Design.png" alt="High level design of project"/>


<h3>Features of the API Gateway Service</h3>
<p>
<ol>
<li><p><b>User Registeration and Sign Up:</b> Implemented APIs for user registration and sign-up using JWT tokens for secure authentication and bcrypt for storing passwords securely.</p></li>
<li><p><b>Rate Limiter:</b>Integrated rate limiting functionality to limit the number of requests made to the API to prevent abuse and ensure fair usage.</p></li>
<li><p><b>Reverse Proxy:</b>Configured a reverse proxy to enable access to multiple services through a single gateway, providing a streamlined experience for clients.</p></li>
</ol>
</p>

<h3>Technologies Used</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MySQL</li>
<li>Sequelize ORM</li>
</ul>

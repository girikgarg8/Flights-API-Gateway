We use bcrypt js package in order to hash the password before saving to the User table. 

Bcrypt is a hashing based algorithm -> from the cipher text, we can't decode back the plain text.

We use triggers (known as hooks in Sequelize), to compute the hash of the password before inserting the record into the table.

Authentication: verifying the identity from the request vs Authorization: checking what all permissions someone has

For authentication, there are many third party packages available like Passport, however we'll be using custom authentication in our service.
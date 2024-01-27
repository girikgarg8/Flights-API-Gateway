We use bcrypt js package in order to hash the password before saving to the User table. 

We use triggers (known as hooks in Sequelize), to compute the hash of the password before inserting the record into the table.
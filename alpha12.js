// 12.	Enhance security by hashing and salting user passwords before storing them in the database. (use bcrypt).

const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
}

const password = "alpha@123";
hashPassword(password)
  .then((hashedPassword) => {
    console.log(`password: ${password}`);
    console.log(`hashed password: ${hashedPassword}`);
  })
  .catch((error) => console.log(error));
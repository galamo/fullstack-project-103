const assert = require("assert");
const axios = require("axios");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");
const { faker } = require("@faker-js/faker");
dotenv.config();

const URL = "http://localhost:3500";
describe("GET Customers/:id Integration test", () => {
  it("GET Customers/:NotExistingCustomer", async () => {
    const result = await axios.get(`${URL}/customers/-1`);
    const customers = result?.data?.customers;
    assert.equal(typeof customers, "object");
    assert.equal(Array.isArray(customers), true);
    assert.equal(customers?.length, 0);
  });

  it("GET Customers/:ExistingCustomer", async () => {
    const query = `INSERT INTO customers 
    (company, last_name, first_name, email_address, job_title)
     VALUES (?, ?, ?, ?, ?);`;
    const connection = await getConnection();
    const email = faker.internet.email();
    const fakeUser = {
      company: faker.internet.userName(),
      firstName: faker.internet.userName(),
      email: email,
      lastName: faker.internet.userName(),
      jobTitle: faker.internet.userName(),
    };
    await connection?.execute(query, [
      fakeUser.company,
      fakeUser.lastName,
      fakeUser.firstName,
      fakeUser.email,
      fakeUser.jobTitle,
    ]);
    await new Promise((r) => setTimeout(r, 500));

    const result = await axios.get(`${URL}/customers/${email}`);
    const customers = result?.data?.customers;
    assert.equal(customers[0].email_address, fakeUser.email);
    assert.equal(customers[0].first_name, fakeUser.firstName);

    await connection?.execute(
      "DELETE FROM customers where email_address = ? ",
      [email]
    );
  });
});

const getConnection = async () => {
  try {
    return await mysql2.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_SCHEMA,
      port: Number(process.env.MYSQL_PORT) || 3306,
    });
  } catch (error) {
    console.log(error);
  }
};

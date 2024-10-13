const assert = require("assert");
const axios = require("axios");
const { faker } = require("@faker-js/faker");

const URL = "http://localhost:3500";
describe("POST login/ Integration test", () => {
  it("POST create new user ", async () => {
    const userName = faker.internet.email();
    const password = faker.internet.password();

    const result = await axios.post(`${URL}/auth/register`, {
      userName,
      password,
    });
    console.log(result);
  });

  it("GET create new user ", async () => {
    // INSERT INTO DB USER
    const userName = "admin@admin.com";
    const password = "1234";

    const result = await axios.post(`${URL}/auth/login`, {
      userName,
      password,
    });
    console.log(result.data);
  });

  it("CHECK protected with JWT", async () => {
    const result = await axios.get(`${URL}/protected`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6W3siaWQiOjEsInVzZXJOYW1lIjoiYWRtaW5AYXNkc2RzZG1pbi5jb20iLCJyb2xlIjoiYWRtaW4ifV0sImlhdCI6MTcyODg0NDE1MywiZXhwIjoxNzI4ODQ3NzUzfQ.lC1xA4XGiP5fjNtdxdY77RE2XcgfT38sZc5Q2qjz5Ng",
      },
    });
    console.log(result.data);
  });
});

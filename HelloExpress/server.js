const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    number: faker.phone.number("###-###-####"),
    username: faker.internet.userName(),
    userId: faker.datatype.uuid(),
  }
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
    name: faker.company.name(),
    companyId: faker.datatype.uuid(),
  }
  return newCompany;
}

const newFakeCompany = createCompany();
const newFakeUser = createUser();


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.get("/api/users/new", (req, res)=> {
  res.json(newFakeUser)
})


app.get("/api/company/new", (req, res)=> {
  res.json(newFakeCompany)
})

app.get("/api/user/company", (req, res) => {
  res.json([newFakeUser, newFakeCompany])
})

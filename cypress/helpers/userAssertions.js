export const expectUserBody = (user) => {
    expect(user.id).to.be.a('number');
    expect(user.name).to.be.a('string');
    expect(user.email).to.be.a('string');
};

export const expectUsersList = (users) => {
  expect(users).to.be.an('array');
  expect(users.length).to.eq(10);

  expect(users[0].id).to.be.a('number');
  expect(users[0].name).to.be.a('string');
  expect(users[0].email).to.be.a('string');
};

export const expectStatus = (response, expectedStatus) => {
  expect(response.status).to.eq(expectedStatus);
};
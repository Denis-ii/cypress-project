Cypress.Commands.add('getUserById', (id, options = {}) => {
  return cy.request({
    method: 'GET',
    url: `/users/${id}`,
    ...options
  });
});

Cypress.Commands.add('getUsers', () => {
  return cy.request('GET', '/users');
});

Cypress.Commands.add('createUser', (user) => {
  return cy.request('POST', '/users', user);
});

Cypress.Commands.add('updateUser', (id, user) => {
  return cy.request('PUT', `/users/${id}`, user);
});

Cypress.Commands.add('patchUser', (id, userData) => {
  return cy.request('PATCH', `/users/${id}`, userData);
});

Cypress.Commands.add('deleteUser', (id) => {
  return cy.request('DELETE', `/users/${id}`);
});


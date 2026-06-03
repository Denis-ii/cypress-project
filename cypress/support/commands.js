import { USERS_ENDPOINT, getUserByIdEndpoint } from '../helpers/apiEndpoints';

Cypress.Commands.add('getUserById', (id, options = {}) => {
  return cy.request({
    method: 'GET',
    url: getUserByIdEndpoint(id),
    ...options
  });
});

Cypress.Commands.add('getUsers', () => {
  return cy.request('GET', USERS_ENDPOINT);
});

Cypress.Commands.add('createUser', (user) => {
  return cy.request('POST', USERS_ENDPOINT, user);
});

Cypress.Commands.add('updateUser', (id, user) => {
  return cy.request('PUT', getUserByIdEndpoint(id), user);
});

Cypress.Commands.add('patchUser', (id, userData) => {
  return cy.request('PATCH', getUserByIdEndpoint(id), userData);
});

Cypress.Commands.add('deleteUser', (id) => {
  return cy.request('DELETE', getUserByIdEndpoint(id));
});


import { expectStatus, expectUserBody, expectUsersList } from '../../../helpers/userAssertions';
const NOT_FOUND_USER_ENDPOINT = '/users/999999';
const WRONG_ENDPOINT = '/wrong-endpoint';

describe('Users API', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });
    it('should return 404 for non-existing user', () => {
      cy.getUserById(9999, {failOnStatusCode: false})
      .then((response) => {
        expectStatus(response, 404);
        expect(response.body).to.be.empty;
      });
    }); 

    it('should return 404 for wrong endpoint', () => {
      cy.request({
        method: 'GET',
        url: WRONG_ENDPOINT,
        failOnStatusCode: false
      })
      .then((response) => {
        expectStatus(response, 404);
      });
    });
   
 });

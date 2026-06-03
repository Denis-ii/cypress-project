import { expectStatus, expectUserBody, expectUsersList } from '../../../helpers/userAssertions';

describe('Users API - GET', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('should get user by id', () => {
    cy.getUserById(1)
      .then((response) => {
        expectStatus(response, 200);

        expect(response.body.id).to.eq(1);
        expect(response.body.name).to.eq('Leanne Graham');
        expect(response.body.email).to.eq('Sincere@april.biz');

        expectUserBody(response.body);
      });
  });

  it('should get users list', () => {
    cy.getUsers()
      .then((response) => {
        expectStatus(response, 200);

        expectUsersList(response.body);

        expect(response.body[0].id).to.eq(1);
        expect(response.body[0].email).to.eq('Sincere@april.biz');
      });
  });
});

// для запуска через терминал npx cypress run --spec "cypress/e2e/api/users.cy.js" через купрес - npx cypress open
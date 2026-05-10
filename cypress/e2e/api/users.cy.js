const USERS_ENDPOINT = '/users';
const USER_BY_ID_ENDPOINT = '/users/1';

describe('Users API', () => {
    it('should get user by id', () => {
        cy.request('GET', USER_BY_ID_ENDPOINT)
        .then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(1);
            expect(response.body.name).to.eq('Leanne Graham');
            expect(response.body.email).to.eq('Sincere@april.biz');

            expect(response.body.id).to.be.a('number');
            expect(response.body.name).to.be.a('string');
            expect(response.body.email).to.be.a('string');


        });
    });

    it('should get users list', () => {
        cy.request('GET', USERS_ENDPOINT)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.eq(10);
            expect(response.body[0].id).to.eq(1);
            expect(response.body[0].email).to.eq('Sincere@april.biz');

            expect(response.body[0].id).to.be.a('number');
            expect(response.body[0].email).to.be.a('string');
        });
    });

      it('should create user', () => {
    cy.request('POST', USERS_ENDPOINT, {
      name: 'Denis',
      email: 'denis@test.com',
      role: 'qa'
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Denis');
      expect(response.body.email).to.eq('denis@test.com');
      expect(response.body.role).to.eq('qa');
      expect(response.body.id).to.exist;
    });
  });

    it('should update user with PUT', () => {
    cy.request('PUT', USER_BY_ID_ENDPOINT, {
      name: 'Updated Denis',
      email: 'updated@test.com',
      role: 'qa automation'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Updated Denis');
      expect(response.body.email).to.eq('updated@test.com');
      expect(response.body.role).to.eq('qa automation');
      expect(response.body.id).to.eq(1);
    });
  });

    it('should update user with PATCH', () => {
    cy.request('PATCH', USER_BY_ID_ENDPOINT, {
      email: 'patched@test.com'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.email).to.eq('patched@test.com');
      expect(response.body.id).to.eq(1);
    });
  });

    it('should delete user', () => {
    cy.request('DELETE', USER_BY_ID_ENDPOINT)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});

// для запуска через терминал npx cypress run --spec "cypress/e2e/api/users.cy.js" через купрес - npx cypress open
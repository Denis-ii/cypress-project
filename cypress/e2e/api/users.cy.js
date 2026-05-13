const USERS_ENDPOINT = '/users';
const USER_BY_ID_ENDPOINT = '/users/1';
const NOT_FOUND_USER_ENDPOINT = '/users/999999';
const WRONG_ENDPOINT = '/wrong-endpoint';

const newUser = {
  name: 'Denis',
  email: 'denis@test.com',
  role: 'qa'
};

const updatedUser = {
  name: 'Updated Denis',
  email: 'updated@test.com',
  role: 'qa automation'
};

const patchedUser = {
  email: 'patched@test.com'
};


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
    cy.request('POST', USERS_ENDPOINT, newUser)
     .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(newUser.name);
      expect(response.body.email).to.eq(newUser.email);
      expect(response.body.role).to.eq(newUser.role);
      expect(response.body.id).to.exist;
    });
  });

    it('should update user with PUT', () => {
    cy.request('PUT', USER_BY_ID_ENDPOINT, updatedUser)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedUser.name);
      expect(response.body.email).to.eq(updatedUser.email);
      expect(response.body.role).to.eq(updatedUser.role);
      expect(response.body.id).to.eq(1);
    });
  });

    it('should update user with PATCH', () => {
    cy.request('PATCH', USER_BY_ID_ENDPOINT, patchedUser)
      .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.email).to.eq(patchedUser.email);
      expect(response.body.id).to.eq(1);
    });
  });

    it('should delete user', () => {
    cy.request('DELETE', USER_BY_ID_ENDPOINT)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }); 

    it('should return 404 for non-existing user', () => {
    cy.request({
      method: 'GET',
      url: NOT_FOUND_USER_ENDPOINT,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.be.empty;
    });  
  }); 

    it('should return 404 for wrong endpoint', () => {
    cy.request({
     method: 'GET',
     url: WRONG_ENDPOINT,
     failOnStatusCode: false
    }).then((response) => {
     expect(response.status).to.eq(404);
    });
  });
   
});

// для запуска через терминал npx cypress run --spec "cypress/e2e/api/users.cy.js" через купрес - npx cypress open
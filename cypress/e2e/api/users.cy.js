const NOT_FOUND_USER_ENDPOINT = '/users/999999';
const WRONG_ENDPOINT = '/wrong-endpoint';

describe('Users API', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });
    it('should get user by id', () => {
      cy.getUserById(1)
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
      cy.getUsers()
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
      cy.get('@users').then((users) => {
        cy.createUser(users.newUser)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.name).to.eq(users.newUser.name);
          expect(response.body.email).to.eq(users.newUser.email);
          expect(response.body.role).to.eq(users.newUser.role);
          expect(response.body.id).to.exist;
        });
      });
    });

    it('should update user with PUT', () => {
      cy.get('@users').then((users) => {
        cy.updateUser(1, users.updatedUser)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(users.updatedUser.name);
          expect(response.body.email).to.eq(users.updatedUser.email);
          expect(response.body.role).to.eq(users.updatedUser.role);
          expect(response.body.id).to.eq(1);
        });
      });
    });

    it('should update user with PATCH', () => {
      cy.get('@users').then((users) => {
        cy.patchUser(1, users.patchedUser)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.email).to.eq(users.patchedUser.email);
          expect(response.body.id).to.eq(1);
        });
      });
    });

    it('should delete user', () => {
      cy.deleteUser(1)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
    }); 

    it('should return 404 for non-existing user', () => {
      cy.getUserById(9999, {failOnStatusCode: false})
      .then((response) => {
        expect(response.status).to.eq(404);
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
        expect(response.status).to.eq(404);
      });
    });
   
 });

// для запуска через терминал npx cypress run --spec "cypress/e2e/api/users.cy.js" через купрес - npx cypress open
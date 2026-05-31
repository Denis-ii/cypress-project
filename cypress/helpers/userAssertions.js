export const expectUserBody = (user) => {
    expect(user.id).to.be.a('number');
    expect(user.name).to.be.a('string');
    expect(user.email).to.be.a('string');
};
describe('Login Page Authentication', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/login')
})

  it('logs in with correct credentials', () => {

    //Enters username
    cy.get('input#username')
      .type('tomsmith')
      .should('have.value', 'tomsmith')

    //Enters password
    cy.get('input#password')
      .type('SuperSecretPassword!')
      .should('have.value', 'SuperSecretPassword!')

    cy.get('.fa-sign-in').click()

    //Check if on the right page
    cy.get('#content .example h2').should('have.text', ' Secure Area')

    //Logout
    cy.get('.icon-2x.icon-signout').click()

    //Check if back to the inital Login Page
    cy.get('#content .example h2').should('have.text', 'Login Page')
  })
  
  it('invalid login error message check', () => {

    //Input incorrect credentials
    cy.get('input#username')
      .type('darthvader')
      .should('have.value', 'darthvader')

    cy.get('input#password')
      .type('Iamyourfather!')
      .should('have.value', 'Iamyourfather!')

    cy.get('.fa-sign-in').click()

    //Page should return an error message
    cy.get('div#flash').should('contain', 'Your username is invalid!')

  })
})

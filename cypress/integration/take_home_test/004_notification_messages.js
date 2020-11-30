describe('Notification Message Check', () => {

  it('clicks to load a message', () => {

    cy.visit('http://the-internet.herokuapp.com/notification_message_rendered')

    //Click on the licnk to load a new message
    cy.get('div#content a').click()
    cy.get('div#flash').should('have.class', 'flash notice')
  })
})

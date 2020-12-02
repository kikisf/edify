describe('Notification Message Check', () => {

  it('clicks to load a message', () => {

    //Navigate to the page
    cy.visit('http://the-internet.herokuapp.com/notification_message_rendered')

    //Click on the link to load a notification message
    cy.get('div#content a').click()
    cy.get('div#flash').should('have.class', 'flash notice')
  })
})

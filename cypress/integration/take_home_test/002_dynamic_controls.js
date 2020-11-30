describe('changing elements asynchronously', () => {

  it('removes element', () => {

    //Navigates to the site
    cy.visit('http://the-internet.herokuapp.com/dynamic_controls')

    //Removes checkbox element
    cy.get('form#checkbox-example > button[type="button"]')
      .click()
      .should('have.text', 'Add')
  })

  it('enables input field', () => {

    cy.get('form#input-example > button[type="button"]')
      .click()
      .should('have.text', 'Disable')
  })
})

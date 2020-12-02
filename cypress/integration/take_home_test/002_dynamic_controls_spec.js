describe('Changing Elements Asynchronously', () => {

  it('removes element', () => {

    //Navigates to the site
    cy.visit('http://the-internet.herokuapp.com/dynamic_controls')

    //Removes checkbox element
    cy.get('form#checkbox-example > button[type="button"]')
      .click()
      .should('have.text', 'Add')
    cy.get('p#message').should('contain', "It's gone!")

    //Adds checkbox element
    cy.get('form#checkbox-example > button[type="button"]')
      .click()
      .should('have.text', 'Remove')
    cy.get('input#checkbox').should('be.visible')
  })

  //Enables and disables input field
  it('enables input field', () => {

    cy.get('form#input-example > button[type="button"]')
      .click()
      .should('have.text', 'Disable')
    //// TODO: assert that text 'It's enabled!' shows up
    //// TODO: add test to disbale the imput field

  })
})

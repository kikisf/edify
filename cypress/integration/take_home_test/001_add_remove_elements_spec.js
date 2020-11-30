describe('Add and Remove Elements', () => {

  it('adds an element', () => {
    //Navigates to the site
    cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')

    //Clicks on "Add Element" button
    cy.contains('Add Element')
      .click()
      .should('have.text', 'Add Element')
  })

  it('deletes an element', () => {

    //Clicks on "Delete" to delete an element
    cy.contains('Delete')
      .click()

    //Asserts that an element has been deleted
    cy.get('Delete').should('not.exist')
  })
})

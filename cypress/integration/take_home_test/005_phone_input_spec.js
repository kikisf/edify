describe('React Phone Number Input "without country select" variant', () => {

  //Checks the summary section phone number field
  it('the summary page', () => {

    //Navigate to the page
    cy.visit('https://catamphetamine.gitlab.io/react-phone-number-input/#without-country-select')

    cy.get('section:nth-of-type(1) > form > input')
      .type('14151231231')
    cy.get('section:nth-of-type(1) > p:nth-of-type(3) > code:nth-of-type(2)')
      .should('contain', '14151231231' )
  })

  //Checks the 'country="US"' section phone number field
  it('country="US"', () => {

    cy.get('section:nth-of-type(2) > form > input')
      .type('14151231231')
    cy.get('section:nth-of-type(2) > p:nth-of-type(3) > code:nth-of-type(2)')
      .should('contain', '14151231231')
  })

  //Checks the 'country="US" / international' section phone number field
  it('country="US" / international', () => {

    cy.get('section:nth-of-type(3) > form > input')
      .type('14151231231')
    cy.get('section:nth-of-type(3) > p:nth-of-type(3) > code:nth-of-type(2)')
      .should('contain', '14151231231')
  })

  //Checks the 'country="US" / international / withCountryCallingCode' section phone number field
  it('country="US" / international / withCountryCallingCode', () => {

    cy.get('section:nth-of-type(4) > form > input')
      .type('4151231231')
    cy.get('section:nth-of-type(4) > p:nth-of-type(4) > code:nth-of-type(2)')
      .should('contain', '4151231231')
  })

  //Checks the 'defaultCountry="US"' section phone number field
  it('defaultCountry="US"', () => {

    cy.get('section:nth-of-type(5) > form > input')
      .type('4151231231')
    cy.get('section:nth-of-type(5) > p:nth-of-type(3) > code:nth-of-type(2)')
      .should('contain', '4151231231')
  })

  //Checks the 'No country' section phone number field
  it('No country', () => {

    cy.get('section:nth-of-type(6) > form > input')
      .type('14151231231')
    cy.get('section:nth-of-type(6) > p:nth-of-type(2) > code:nth-of-type(2)')
      .should('contain', '14151231231')
  })

  //Checks the 'Adding country <select/>' dropdown menu
  it('Adding country <select/>', () => {

    cy.get('div > section:nth-of-type(2) select').select('Belgium +32')
    cy.get('section:nth-of-type(8) > p:nth-of-type(4) > code')
      .should('contain', 'BE')
  })
})

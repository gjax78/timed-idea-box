describe('App renders', () => {
  it('As a user, I should be able to visit the page and it will render the correct elements', () => {
    cy.visit('http://localhost:3000')
      .contains('IdeaBox')
      .get('form')
        .type('select')
  })

  it('should be able to select an idea and add a description', () => {
    cy.visit('http://localhost:3000')
      cy.get('select[name="title"]')
      .select('Pick an idea')
      .should('have.value', ' ')
      cy.get('select[name="title"]')
      .select('Dishes')
      .should('have.value', 'Dishes')
      cy.get('select[name="title"]')
      .select('Laundry')
      .should('have.value', 'Laundry')
      cy.get('select[name="title"]')
      .select('Sweep')
      .should('have.value', 'Sweep')
      cy.get('select[name="title"]')
      .select('Vacuum')
      .should('have.value', 'Vacuum')
    cy.get('input[name="description"]')
      .type('text')
  })

  it('should be able to display the three existing ideas', () => {
    cy.visit('http://localhost:3000')
      .contains('Bluetooth rotary phone')
    cy.visit('http://localhost:3000')
      .contains('Bring back bowing')
    cy.visit('http://localhost:3000')
      .contains('Waterproof books')
  })

  it('should be able to add a new idea', () => {
    cy.visit('http://localhost:3000')
    .get('button')
    .click({multiple: true})
  })


})
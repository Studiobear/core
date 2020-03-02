describe('Svelte template app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Hello world!')
  })
})

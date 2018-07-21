describe('Coba Saya', function () {
  it('Login', function () {
  	cy.visit('http://otmproduct.cartenzgroup.com')
  	cy.get('#login_button').should('be.visible')
  	cy.get('#userid_field').type('flocs').should('have.value','flocs')
  	cy.get('#password_field').type('coflocs!')
  	cy.get('#login_password > i.fa.btn-see-password.fa-eye-slash.btn-see-password-show').click()
  	cy.get('#password_field').should('have.value','coflocs!')
  	cy.get('#login_button').click()
  })
})

describe('Coba akses ke Manajemen Dasbor',function () {
	it('Akses Dasbos', function () {
		cy.get('#\\31 _menu > span > div > h4').contains('Manajemen Dasbor').click()
	})
})
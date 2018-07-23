describe('Login Page', function () {
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

describe('Landing Page',function () {
	it('Akses ke Landing Page', function () {
		cy.get('#\\31 _menu > span > div > h4').contains('Manajemen Dasbor').click()
		cy.get('.title-menu').should('have.text','Dasbor')
	})
	it.skip('Next Slide', function () {
		cy.get('.glyphicon.glyphicon-chevron-right').click()
		cy.get('.header').contains('Status Objek Pajak')
		cy.get('.glyphicon.glyphicon-chevron-right').click()
		cy.get('.header').contains('Transaksi Usaha')
	})
	it.skip('Prev Slide', function () {
		cy.wait(500)
		cy.get('.glyphicon.glyphicon-chevron-left').click()
		cy.get('.header').contains('Transaksi Usaha')
		cy.get('.glyphicon.glyphicon-chevron-left').click()
		cy.get('.header').contains('Status Objek Pajak')
	})
	it('Akses ke OTM Page', function () {
		cy.reload()
		cy.get('#userid_field').type('flocs').should('have.value','flocs')
  		cy.get('#password_field').type('coflocs!')
  		cy.get('#login_button').click()
		cy.get('#\\31 _menu > span > div > h4').contains('Manajemen Dasbor').click()
		cy.get('.title-menu').should('have.text','Dasbor')
		cy.get('.btn.btn-primary.pull-right').eq(0).click()
	})
})
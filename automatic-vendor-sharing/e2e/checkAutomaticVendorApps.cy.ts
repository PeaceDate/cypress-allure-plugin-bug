const appButtonPosition: number = 0;

const appsData = [
    {
        headerSelector: 'h1',
        subHeaderSelector: 'h2',
        appNameText: "App 1",
        headerText: 'Bi-Directional',
        host: 3001
    },
    {
        headerSelector: 'h1',
        subHeaderSelector: 'h2',
        appNameText: "App 2",
        headerText: 'Bi-Directional',
        host: 3002
    }
]

appsData.forEach(
    (property: {
        headerSelector: string
        subHeaderSelector: string
        appNameText: string,
        headerText: string,
        host: number
    }) => {

        describe(`Automatic vendor sharing`, () => {
            context(`Check ${property.appNameText}`, () => {
                beforeEach(() => {
                    cy.visit(Cypress.env(`localhost${property.host}`))
                })
    
                it(`Check ${property.appNameText} built and running`, () => {
                    cy.get(property.headerSelector)
                        .contains(property.headerText)
                        .should('be.visible');
                    cy.get(property.subHeaderSelector)
                        .contains(property.appNameText)
                        .should('be.visible');
                })
            })
        })
    })

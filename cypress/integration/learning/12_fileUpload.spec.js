describe('File upload Test', () => {

    it('file upload test case', () => {
        cy.log('file upload test case')
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const fileUpload = 'Just Do It.jpg'
        cy.get('#fileUpload').attachFile(fileUpload).next().should('have.text', 'Just Do It.jpg')
    })

    it('file Drag and Drop test case', () => {
        cy.log('file Drag and Drop test case')
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const fileUpload = 'Just Do It.jpg'
        cy.get('#file').attachFile(fileUpload)
        cy.get('.box__success').should('contain.text', 'Done')
    })

    it('multiple file upload test case', () => {
        cy.log('multiple file upload test case')
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const fileUpload1 = 'Just Do It.jpg';
        const fileUpload2 = 'sample.txt';
        const fileUpload3 = 'example.json';

        cy.get('#filesToUpload')
            .attachFile(fileUpload1)
            .attachFile(fileUpload2)
            .attachFile(fileUpload3)
        cy.get('#main > div > p:nth-child(6) > strong').should('contain.text', 'Files You Selected:')
        cy.get("ul[id='fileList'] li").should('have.length', 2)
    })

    it.only('change file name while uploading', () => {
        cy.log('change file name while uploading')
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const fileUpload = 'Just Do It.jpg';

        cy.get('#filesToUpload')
            .attachFile({ filePath: fileUpload, fileName: 'JustDoItNow.jpg' })
        cy.get('#main > div > p:nth-child(6) > strong').should('contain.text', 'Files You Selected:')
        cy.get("ul[id='fileList'] li").should('have.length', 1)
    })

    it('simple file upload', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#fileUpload').attachFile(yourFixturePath)
        //test
        //     const special = 'file.spss';
        //     cy.fixture(yourFixturePath, 'binary')
        //     .then(Cypress.Blob.binaryStringToBlob)
        //      .then((fileContent) => {
        //   cy.get('#fileUpload').attachFile({ fileContent, fileName: 'yourFixturePath', mimeType: 'application/octet-stream', encoding: 'utf-8' });
    });
})
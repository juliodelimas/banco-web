const { Builder, Browser, By, until } = require('selenium-webdriver');
const expect = require('chai').expect;

describe('Login', () => {

    it('usando credenciais válidas', async () => {
        // Arrange (Preparar)
        const navegador = await new Builder()
            .forBrowser(Browser.CHROME)
            .build();
        await navegador.get('http://localhost:4000/');

        // Act (Executar)
        await navegador.findElement(By.id('username')).sendKeys('julio.lima');
        await navegador.findElement(By.id('senha')).sendKeys('123456');
        await navegador.findElement(By.css('.btn')).click();

        // Assert (Checar)
        const titulo = await navegador.findElement(By.css('#app-section h4')).getText();
        expect(titulo).to.be.eq('Realizar Transferência');
    });
});
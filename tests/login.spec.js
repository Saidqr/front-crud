const {test, expect} = require('@playwright/test');
test.describe('Pruebas de Autenticación en React', () => {
    test('Debería mostrar error con credenciales inválidas',
        async ({page}) => {
// 1. Navegar a tu aplicación React (usualmente localhost en desarrollo)
            await page.goto('');
// 2. Localizar e interactuar con los campos (Playwright espera que sean editables automáticamente)
            const emailInput =
                page.locator('input[name="email"]');
            const passwordInput =
                page.locator('input[name="password"]');
// Rellenar campos y presionar Tab/Enter
            await emailInput.fill('ivan.luna@email.com');
            await emailInput.press('Tab');
// Rellenar campos y presionar Tab/Enter
//await emailInput.fill('admin@correo.com');
//await emailInput.press('Tab');

            await passwordInput.fill('12345');
            await passwordInput.press('Enter');
// 3. Localizar la alerta por su clase CSS
            const alertaError = page.locator('.alert-danger');
// 4. Aserción web inteligente (Espera automáticamente hasta 5 segundos a que el texto aparezca)
            await expect(alertaError).toHaveText('Credenciales de Mock inválidas');
        });
});

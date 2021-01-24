/*
добавить 
кейсы 
1-проверка модалки с часовым поясом
2-проверка на результат полодительный и отрицательный в модалке часовоей пояс(нажать да или нет)
 

*/
describe('raspisanie', () => {
    beforeEach(() => {
        cy.authTutor();
        cy.visit('');
        cy.wait(5000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get(':nth-child(3) > a > span').click() //наджимаем на ТО

    });
/*
    it('timeZone', () => {
        cy.wait(35000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.logo-img').click(); //нажимаем на лого
        cy.get(':nth-child(3) > a > span').click() //наджимаем на ТО
        cy.wait(35000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.reload()//перезагрузка страницы

    }) //timeZone- проверка появления модалки через 30 сек после перезода на стр ТО
   */

    it('yesOtNo', () => {
        cy.wait(70000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.modal-check-time__btns-wrap > :nth-child(1) > label').click()//нажимаем на кнопку да в модалке
        cy.reload()
        cy.wait(70000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.modal-check-time__btns-wrap > :nth-child(2) > label').click()// нажимаем на кнопку нет в модалке
        cy.reload()//перезагрузка страницы
        cy.get('.test-item-time__btns-wrap > :nth-child(1) > label').click()// нажимаем на кнопку да
        cy.reload()//перезагрузка страницы
        cy.get('.test-item-time__btns-wrap > :nth-child(1) > label').click()// нажимаем на кнопку нет
        
    })//yesOtNo - проверка на да или нет в модалке время
  

}); //основной
//тесты на страницу отмена урока из лк препода
/*
0-проверка кнопок
1-отмена по причине Это инициатива ученика
2-отмена по причине Поменялись планы
3-отмена по причине Хочу перенести занятие
4-отмена по причине Согласовал(а) с учеником перенос занятия
5-отмена по причине Заболел(а)
6-отмена по причине Часы были открыты по ошибке
7-отмена по причине Технические проблемы
8-отмена по причине Беру отпуск


*/

describe('canceling a lesson', () => {
    beforeEach(() => {
        cy.authTutor();
        cy.visit('');
        cy.wait(5000) //тайм аут в 1 секунду = 1000 мили секунд
        
    })
/*
       
    it('no canceling', () =>{
        
        cy.get(':nth-child(1) > :nth-child(11) > div > .button').click()//нажимаем на кнопку отмена
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.cancel-lesson__button').click()//нажимаем на кнопку отменить урок
        cy.get('.radio-group > :nth-child(1)').click()//нажимаем напротив Это инициатива ученика 
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(2)').click()//нажимаем напротив Поменялись планы
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(3)').click()//нажимаем напротив Хочу перенести занятие
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(4)').click()//нажимаем напротив Согласовал(а) с учеником перенос занятия
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(5)').click()//нажимаем напротив Заболел(а)
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(6)').click()//нажимаем напротив  Часы были открыты по ошибке
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(7)').click()//нажимаем напротив Технические проблемы
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(8)').click()//нажимаем напротив Беру отпуск
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.checkbox__checker').click()//ставим галочку в Помочь согласовать расписание или проинформировать ученика
        cy.reload()//перезагружаем страницу
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.textarea') .type(Cypress.env('primer'))//вводим пример в поле ввода комментарий
        cy.get('.cancel-lesson__button').click()//нажимаем на кнопку отменить урок
        cy.reload()//перезагружаем страницу

    })//no canceling- проврека кнопок на страницы отмены урока преподом
*/


it ('This is a student initiative', () => {
        cy.get(':nth-child(1) > :nth-child(11) > div > .button').click()//нажимаем на кнопку отмена
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.radio-group > :nth-child(1)').click()//нажимаем напротив Это инициатива ученика 
        cy.get('.cancel-lesson__button').click()//нажимаем на кнопку отменить урок
        cy.wait(3000) //тайм аут в 1 секунду = 1000 мили секунд
        cy.get('.modal-popup-content__buttons > :nth-child(1)').click()//нажимаем на кнопку перейти на главную страницу
        

})//This is a student initiative-Это инициатива ученика+создаём такой же урок перейдя по назначить новый урок


/*
it ('Changed plans', () => {
})//Changed plans-Поменялись планы

it ('I want to postpone class', () => {
})// I want to postpone class-Хочу перенести занятие

it ('Agreed with the student to transfer the lesson', () => {
})//Agreed with the student to transfer the lesson-Согласовал(а) с учеником перенос занятия

it ('Sick', () => {
}) //Sick-Заболел(а)

it ('The clock was opened by mistake', () => {
})// The clock was opened by mistake-Часы были открыты по ошибке

it ('Technical problems', () => {
})// Technical problems-Технические проблемы

it ('Take a vacation', () => {
}) //Take a vacation-Беру отпуск
*/

})//основной
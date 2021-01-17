/*
cy.get('.modal-popup__close').click() //закрытие перехода в календарь
нужно будет добавить тесты для страницы авторизации и регистрации для препода 
тесты
1-личная карточка препода+после переход на гл личного кбинета препода
2-прокликать главную страницу
1,1-телефон+номер телефона,почта,телега
1,2-аватар личная карточка 
1,3-тестирование для преподов(все тесты+переход на эти тесты)
1,4-закладки заплонированные и прошедшие уроки
выход из лк
*/

describe('lk_prepoda', () => {
    beforeEach(() => {
        cy.authTutor();
        cy.visit('');
                
    });

    it('анкета преподавателя', () => {
        cy.get('.profile-icon > path')
            .click()//открытие выпадашки по аватару
        cy.get(':nth-child(1) > .btn-header-popup')
            .click()//нажимаем на переходим в оичную карточку препода
        cy.get('.profile__submit-edit')
            .click()//нажимаем на кнопку редактировать анкетные данные учителя
        //cy.get('.profile__submit-intro').click()//нажатие на кнопку сохранить изменения
        cy.get('.profile__checkbox')
            .click() //выбираем не берёт ву 
        cy.get('.profile__submit-edit')//нажимаем на кнопку редактировать анкетные данные учителя
        cy.get('.profile__checkbox')
            .click() //выбираем берёт ву
        cy.get('.profile__submit-edit')//нажимаем на кнопку редактировать анкетные данные учителя
        cy.get('#about')
            .click()//расскажите о себе(выбираем поле для ввода);
        cy.get('#about')
            .type(Cypress.env('primer')) //расскажите о себе(заполняем поле для ввода)
        cy.get('#professional_background')
            .click()//расскажите о своём профессиональном опыте (выбираем поле для ввода)
        cy.get('#professional_background')
            .type(Cypress.env(
            'primer'))//расскажите о своём профессиональном опыте(заполняем поле для ввода)
        cy.get('#pupils_achievements')
            .click()//Расскажите об образовательных целях и достижениях ваших учеников (выбираем поле для ввода)
        cy.get('#pupils_achievements')
            .type(Cypress.env('primer'))//Расскажите об образовательных целях и достижениях ваших учеников(заполняем поле для ввода)
        cy.get('#name')
            .click() //имя (выбираем поле для ввода)
        cy.get('#name')
            .type(Cypress.env('primer')) // имя (заполняем поле для ввода)
        cy.get('#surname')
            .click() //отчество (выбираем поле для ввода)
        cy.get('#surname')
            .type(Cypress.env('primer'))// отчество (заполняем поле для ввода)
        cy.get('#middlename')
            .click() //фамилия (выбираем поле для ввода)
        cy.get('#middlename')   
            .type(Cypress.env('primer')) // фамилия (заполняем поле для ввода)
        cy.get('#education')
            .click() //Расскажите о своём образовании (выбираем поле для ввода)
        cy.get('#education')
            .type(Cypress.env('primer')) ///Расскажите о своём образовании (заполняем поле для ввода)
        cy.get('#certificates')
            .click() //Ваши сертификаты (выбираем поле для ввода)
        cy.get('#certificates')
            .type(Cypress.env('primer')) //Ваши сертификаты (заполняем поле для ввода)
        cy.get('#teaching_principles')
            .click() //Расскажите о своих принципах обучения (выбираем поле для ввода)
        cy.get('#teaching_principles')
            .type(Cypress.env('primer')) //Расскажите о своих принципах обучения (заполняем поле для ввода)
        cy.get('.profile__submit-intro')
            .click() //нажатие на кнопку сохранить изменения
        
        cy.get('.logo-img')
            .click(); //нажимаем на лого
        cy.get('.profile-icon > path')
            .click() //открытие выпадашки по аватару
        cy.get(':nth-child(2) > .btn-header-popup')
            .click() //нажатие на кнопка выхода

    });//анкета преподавателя


    it('главная лк препода', () =>{

    //прокликаем все предметы и перейдэм на страницы тестов дял препода
        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="math"]')
            .click()//выбираем предмет(математика)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="en"]')
            .click()//выбираем предмет(английский)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="rus"]')
            .click()//выбираем предмет(русский)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="soc"]')
            .click()//выбираем предмет(социология)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="geo"]')
            .click()//выбираем предмет(география)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="bio"]')
            .click()//выбираем предмет(биология)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.select-subjects-styled')
            .click()//нажимаем на список предметов
        cy.get('[rel="hist"]')
            .click()//выбираем предмет(история)
        cy.get('.btn-pass-test')
            .click()//нажимаем на кнопку пройти тест

        cy.get('.phone-icon')
            .click(); //открытие выпадашки по номеру телефона в хедере
        cy.get('.profile-icon > path')
            .click()//открытие выпадашки по аватару
        cy.get(':nth-child(2) > .btn-header-popup')
            .click() //нажатие на кнопка выхода 
        
    });//главная лк препода


}) //основная
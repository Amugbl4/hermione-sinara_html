const assert = require('chai').assert;

describe('main_page', function () {
    it('header', function () {
        return this.browser
            .url('main.html')
            .click('body > div.page-outer > div.page-outer__top > div > div.swiper-container.main-screen-slider.swiper-container-horizontal > div.main-screen-slider__arrow.color-white.main-screen-slider__arrow--right')
            .assertView('plain', 'body > div.page-outer > div.page-outer__top > header > div > div.header-container')
    });

    it('header-submenu', function () {
        return this.browser
            .url('main.html')
            .click('body > div.page-outer > div.page-outer__top > div > div.swiper-container.main-screen-slider.swiper-container-horizontal > div.main-screen-slider__arrow.color-white.main-screen-slider__arrow--right')
            .assertView('plain', 'body > div.page-outer > div.page-outer__top > header > div > div.header-container')
            .moveToObject('body > div.page-outer > div.page-outer__top > header > div > div.header-container > nav > div:nth-child(2) > a')
            .assertView('hovered', 'body > div.page-outer > div.page-outer__top > header > div > div.header-container')
    });

  /*   it('card-primary(no photo)', function () {
        return this.browser
            .url('main.html')
            .assertView('plain', '#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(1) > div > div.card-primary::before')
            .moveToObject('#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(1) > div > div.card-primary::before')
            .assertView('hovered', '#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(1) > div > div.card-primary::before')
    });

    it('card-primary(photo)', function () {
        return this.browser
            .url('main.html')
            .assertView('plain', '#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(2)')
            .moveToObject('#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(2)')
            .assertView('hovered', '#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(2)')
    }); */

    it('section_with_card', function () {
        return this.browser
            .url('main.html')
            .assertView('plain', '#content-after-screen > section:nth-child(1)')
            .moveToObject('#content-after-screen > section:nth-child(1) > div > div > div.swiper-wrapper > div:nth-child(1)')
            .assertView('hovered', '#content-after-screen > section:nth-child(1)')
    });

    it('work btn all material', function () {
        return this.browser
            .url('main.html')
            .click('#content-after-screen > section:nth-child(1) > div > div > div.section-bottom > div > a')
            .getText('h1')
            .then(function (title) {
                assert.equal(title, 'Медиа')
            });
    });

});  
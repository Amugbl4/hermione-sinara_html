const assert = require('chai').assert;

describe('molecules', function () {
    it('btn-outline-gray', function () {
        return this.browser
            .url('molecules.html')
            .assertView('plain', 'body > div.page-outer > div.page-outer__top > div > div.container.pt-header > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button')
            .moveToObject('body > div.page-outer > div.page-outer__top > div > div.container.pt-header > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button')
            .assertView('hovered', 'body > div.page-outer > div.page-outer__top > div > div.container.pt-header > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button')
    });

    it('btn-red', function () {
        return this.browser
            .url('molecules.html')
            .assertView('plain', 'body > div.page-outer > div.page-outer__top > div > div.container.pt-header > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button')
            .moveToObject('body > div.page-outer > div.page-outer__top > div > div.container.pt-header > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button')
            .assertView('hovered', 'body > div.page-outer > div.page-outer__top > div > div.container.pt-header > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button')
    });

    it('header', function () {
        return this.browser
            .url('molecules.html')
            .assertView('plain', '.header-container')
    });

    it('footer', function () {
        return this.browser
            .url('molecules.html')
            .assertView('plain', '.footer')
    });

    it('dropdown-select', function () {
        return this.browser
            .url('molecules.html')
            .assertView('plain', 'body > div.page-outer > div.page-outer__top > div > div.container.py-10 > div > div > span > span.selection > span')
            .click('body > div.page-outer > div.page-outer__top > div > div.container.py-10 > div > div > span > span.selection > span')
            .assertView('hovered', 'body > div.page-outer > div.page-outer__top > div > div.container.py-10 > div > div > span > span.selection > span')
    } )
});
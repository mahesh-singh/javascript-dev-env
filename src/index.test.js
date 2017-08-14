import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index', () => {
    it('should say hello world', (done) => {
        const index_page = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(
            index_page,
            function(err, window) {
                const h1_tag = window.document.getElementsByTagName('h1')[0];
                expect(h1_tag.innerHTML).to.equal('hello world');
                done();
                window.close();
            });
    });
});
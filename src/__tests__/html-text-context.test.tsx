import React from 'react';
import renderer from 'react-test-renderer';

describe('HtmlTextContext component', () => {
    const { HtmlTextContext } = require('../html-text/html-text-context');

    test('have exported a default class', () => {
        expect(HtmlTextContext).toBeDefined();
    });

    test.todo('write other tests');
});
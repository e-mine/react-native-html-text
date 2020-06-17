import React from 'react';
import renderer from 'react-test-renderer';

describe('HtmlText component', () => {
    const HtmlText = require('../html-text/html-text').default;

    test('have exported a default class', () => {
        expect(HtmlText).toBeDefined();
    });

    test('renders correctly', () => {
        const tree = renderer.create(<HtmlText />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
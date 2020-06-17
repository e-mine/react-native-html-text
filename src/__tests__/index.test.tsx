test('have exported all library elements', () => {
    const { HtmlText, HtmlTextContext, defaultContextValues } = require('../');
    expect(HtmlText).toBeDefined();
    expect(HtmlTextContext).toBeDefined();
    expect(defaultContextValues).toBeDefined();
});
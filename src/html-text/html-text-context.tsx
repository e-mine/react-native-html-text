import React from 'react';

const standardStyles: any = {
    bold: {
        fontWeight: 'bold'
    },
    italic: {
        fontStyle: 'italic'
    }
};

const defaultValues = {
    styles: {
        b: {
            ...standardStyles.bold
        },
        strong: {
            ...standardStyles.bold
        },
        i: {
            ...standardStyles.italic
        }
    }
};

const HtmlTextContext = React.createContext(defaultValues);

export { HtmlTextContext, defaultValues as defaultContextValues };
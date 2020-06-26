import React from 'react';
import { TextStyle } from 'react-native';

interface ElementStyles {
    [key: string]: TextStyle
}

const standardStyles: ElementStyles = {
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic'
    },
    lineThrough: {
        textDecorationLine: 'line-through'
    },
    monospace: {
        fontFamily: 'monospace'
    },
    underline: {
        textDecorationLine: 'underline'
    }
};

export interface HtmlTextContextValue {
    allowLinks: boolean,
    styles: ElementStyles
}

export const defaultContextValues: HtmlTextContextValue = {
    allowLinks: false,
    styles: {
        a: {
            ...standardStyles.underline,
            color: 'blue'
        },
        address: {
            ...standardStyles.italic
        },
        area: {
            display: 'none'
        },
        b: {
            ...standardStyles.bold
        },
        blockquote: {
            marginVertical: '10em',
            marginHorizontal: 40
        },
        body: {
            margin: 8
        },
        cite: {
            ...standardStyles.italic
        },
        code: {
            ...standardStyles.monospace
        },
        datalist: {
            display: 'none'
        },
        dd: {
            marginLeft: 40
        },
        del: {
            ...standardStyles.lineThrough
        },
        dfn: {
            ...standardStyles.italic
        },
        dl: {
            marginVertical: '1em'
        },
        em: {
            ...standardStyles.italic
        },
        fieldset: {
            marginHorizontal: 2,
            paddingTop: '0.35em',
            paddingBottom: '0.625em',
            paddingHorizontal: '0.75em',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'gray'
        },
        figure: {
            marginVertical: '1em',
            marginHorizontal: 40
        },
        h1: {
            fontSize: 32,
            marginVertical: '0.67em',
            fontWeight: 'bold'
        },
        h2: {
            fontSize: 24,
            marginVertical: '0.83em',
            fontWeight: 'bold'
        },
        h3: {
            fontSize: 18,
            marginVertical: '1em',
            fontWeight: 'bold'
        },
        h4: {
            fontSize: 16,
            marginVertical: '1.33em',
            fontWeight: 'bold'
        },
        h5: {
            fontSize: 13,
            marginVertical: '1.67em',
            fontWeight: 'bold'
        },
        h6: {
            fontSize: 11,
            marginVertical: '2.33em',
            fontWeight: 'bold'
        },
        head: {
            display: 'none'
        },
        hr: {
            ...standardStyles.lineThrough,
            marginVertical: '0.5em'
        },
        i: {
            ...standardStyles.italic
        },
        ins: {
            ...standardStyles.underline
        },
        kbd: {
            ...standardStyles.monospace
        },
        legend: {
            paddingHorizontal: 2
        },
        link: {
            display: 'none'
        },
        mark: {
            backgroundColor: 'yellow',
            color: 'black'
        },
        menu: {
            marginVertical: '1em',
            paddingLeft: 40
        },
        ol: {
            marginVertical: '1em',
            paddingLeft: 40
        },
        p: {
            marginVertical: '1em'
        },
        param: {
            display: 'none'
        },
        pre: {
            ...standardStyles.monospace,
            marginVertical: '1em'
        },
        s: {
            ...standardStyles.lineThrough
        },
        samp: {
            ...standardStyles.monospace
        },
        script: {
            display: 'none'
        },
        small: {
            fontSize: 11
        },
        strike: {
            ...standardStyles.lineThrough
        },
        strong: {
            ...standardStyles.bold
        },
        style: {
            display: 'none'
        },
        sub: {
            textAlignVertical: 'bottom',
            fontSize: 11
        },
        sup: {
            textAlignVertical: 'top',
            fontSize: 11
        },
        table: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'gray'
        },
        title: {
            display: 'none'
        },
        u: {
            ...standardStyles.underline
        },
        ul: {
            marginVertical: '1em',
            paddingLeft: 40
        },
        var: {
            ...standardStyles.italic
        }
    }
};

export const HtmlTextContext = React.createContext(defaultContextValues);
import postcss from 'postcss';
import postcssJs from 'postcss-js';
import transform from 'css-to-react-native';

export const toJSS = (cssText?: string) => {
    if (cssText) {
        const root = postcss.parse(cssText);
        return postcssJs.objectify(root);
    }
    return null;
};

export const toRN = (cssText?: string) => {
    try {
        const output = toJSS(cssText);
        const result = Object.keys(output).map((rules) => [rules, output[rules]]);
        return transform(result);
    } catch (e) {
        return null;
    }
};
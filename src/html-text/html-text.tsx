import React from 'react';
import { Text, TextProps } from 'react-native';
import { parse, NodeType } from 'node-html-parser';
import { decode } from 'he';
import { toRN } from '../helpers/transform';

import { HtmlTextContext } from './html-text-context';

interface Predefinitions {
    [key: string]: {
        content?: string;
        beforeContent?: string;
        afterContent?: string;
    }
}

const predefinitions: Predefinitions = {
    address: {
        afterContent: '\n'
    },
    article: {
        afterContent: '\n'
    },
    aside: {
        afterContent: '\n'
    },
    blockquote: {
        afterContent: '\n'
    },
    body: {
        afterContent: '\n'
    },
    br: {
        content: '\n'
    },
    dd: {
        afterContent: '\n'
    },
    details: {
        afterContent: '\n'
    },
    div: {
        afterContent: '\n'
    },
    dl: {
        afterContent: '\n'
    },
    dt: {
        afterContent: '\n'
    },
    fieldset: {
        afterContent: '\n'
    },
    figcaption: {
        afterContent: '\n'
    },
    figure: {
        afterContent: '\n'
    },
    footer: {
        afterContent: '\n'
    },
    form: {
        afterContent: '\n'
    },
    h1: {
        afterContent: '\n'
    },
    h2: {
        afterContent: '\n'
    },
    h3: {
        afterContent: '\n'
    },
    h4: {
        afterContent: '\n'
    },
    h5: {
        afterContent: '\n'
    },
    h6: {
        afterContent: '\n'
    },
    header: {
        afterContent: '\n'
    },
    hr: {
        content: '\n\n'
    },
    img: {
        beforeContent: '\n',
        afterContent: '\n'
    },
    legend: {
        afterContent: '\n'
    },
    li: {
        afterContent: '\n'
    },
    p: {
        afterContent: '\n'
    }
};

const isValidStyle = (style?: any) =>
    Object.keys(style || {}).length > 0;

type HtmlTextProps = {
    forwardedProps: React.PropsWithChildren<TextProps>,
    forwardedRef?: React.Ref<Text>
} & TextProps;

class HtmlTextFormatter extends React.PureComponent<HtmlTextProps> {

    private renderChildren(node: any, index: number) {
        const { styles } = this.context;

        return node.childNodes.map((childNode: any, nodeIndex: number) => {
            if (childNode.nodeType === NodeType.ELEMENT_NODE) {
                const tagName = childNode.tagName;

                const predefinition = predefinitions[tagName];
                if (predefinition?.content) {
                    return predefinition?.content;
                }

                const style = styles[tagName];
                const inlineStyle = toRN(childNode.getAttribute('style'));
                const content = this.renderChildren(childNode, index + 1);

                return [
                    predefinition?.beforeContent,
                    (
                        isValidStyle(style) || isValidStyle(inlineStyle)
                            ? <Text key={index * nodeIndex} style={[style, inlineStyle]}>{content}</Text>
                            : content
                    ),
                    predefinition?.afterContent
                ];
            }

            if (childNode.nodeType === NodeType.TEXT_NODE) {
                return decode(childNode.rawText);
            }

            return null;
        });
    }

    render() {
        const { forwardedRef, forwardedProps } = this.props;

        const content = String(forwardedProps.children);
        const root = parse(content, { lowerCaseTagName: true, pre: true });

        return <Text {...forwardedProps} ref={forwardedRef}>{this.renderChildren(root, 1)}</Text>;
    }
}

HtmlTextFormatter.contextType = HtmlTextContext;

type ForwardedProps = {
    children: string
} & TextProps;

const HtmlText = (props: ForwardedProps, ref?: React.Ref<Text>) =>
    <HtmlTextFormatter forwardedProps={props} forwardedRef={ref} />;

const HtmlTextToExport = React.forwardRef(HtmlText);

HtmlTextToExport.displayName = 'HtmlText';

export default HtmlTextToExport;
import React from 'react';
import { Text, TextProps } from 'react-native';
import { parse, NodeType } from 'node-html-parser';
import { decode } from 'he';

import { HtmlTextContext } from './html-text-context';

type Props = TextProps & {
    forwardedRef?: React.Ref<Text>,
    children: string
};

class HtmlTextFormatter extends React.PureComponent<Props> {

    private renderChildren(node: any, index: number) {
        const { styles } = this.context;

        return node.childNodes.map((childNode: any, nodeIndex: number) => {
            if (childNode.nodeType === NodeType.ELEMENT_NODE) {
                const tagName = childNode.tagName;
                if (tagName === 'br') {
                    return '\n';
                }

                const style = styles[tagName];
                const content = this.renderChildren(childNode, index + 1);
                return style ? <Text key={index * nodeIndex} style={style}>{content}</Text> : content;
            }

            if (childNode.nodeType === NodeType.TEXT_NODE) {
                return decode(childNode.rawText);
            }

            return null;
        });
    }

    render() {
        const { children, forwardedRef } = this.props;

        const content = String(children);
        const root = parse(content, { lowerCaseTagName: true, pre: true });

        return <Text {...this.props} ref={forwardedRef}>{this.renderChildren(root, 1)}</Text>;
    }
}

HtmlTextFormatter.contextType = HtmlTextContext;

const HtmlText = (
    props: Props,
    forwardedRef?: React.Ref<Text>
) => (<HtmlTextFormatter {...props} forwardedRef={forwardedRef} />);

const HtmlTextToExport = React.forwardRef(HtmlText);

HtmlTextToExport.displayName = 'HtmlText';

export default HtmlTextToExport;
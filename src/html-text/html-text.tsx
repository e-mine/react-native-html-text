import React from 'react';
import { Text, TextProps } from 'react-native';
import { parse, NodeType } from 'node-html-parser';
import { decode } from 'he';

const defaultStyles: any = {
    b: {
        fontWeight: 'bold'
    },
    strong: {
        fontWeight: 'bold'
    },
    i: {
        fontStyle: 'italic'
    }
};

export default class HtmlText extends React.PureComponent<TextProps> {

    private renderNode(node: any, index: number) {

        return node.childNodes.map((childNode: any, nodeIndex: number) => {
            if (childNode.nodeType === NodeType.ELEMENT_NODE) {
                const tagName = childNode.tagName;
                if (tagName === 'br') {
                    return '\n';
                }

                const style = defaultStyles[tagName];
                const content = this.renderNode(childNode, index + 1);
                return style ? <Text key={index * nodeIndex} style={style}>{content}</Text> : content;
            }

            if (childNode.nodeType === NodeType.TEXT_NODE) {
                return decode(childNode.rawText);
            }

            return null;
        });
    }

    render() {
        const { children, style } = this.props;

        const content = String(children);
        const root = parse(content, { lowerCaseTagName: true, pre: true });

        const element = <Text style={style}>{this.renderNode(root, 1)}</Text>;
        console.log(element);
        return element;
    }
}
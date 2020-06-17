# @e-mine/react-native-html-text

Transform your simple HTML-formatted text into native (styled) Text elements. This plugin aims to be simple and effective, supporting basic text styling. If you need to render a complete page, this is not what you are searching for.

## Installation

```sh
npm install @e-mine/react-native-html-text
```

## Usage

### Simple text rendering

This is the main use case for this plugin: rendering a HTML-formatted text with basic styling support (bold, italic, line breaks, ...).

```js
import { HtmlText } from "@e-mine/react-native-html-text";

// ...

render() {
    const html = '<b>This</b> is a <i>formatted</i> HTML text with <br/> line <br> breaks.';

    return <HtmlText>{html}</HtmlText>;
}
```

### Custom styles

A more advanced use case is when you need to insert custom styles for HTML tags. Then, you just insert a context provider with your customized styles. It will provide the customization for all HtmlText components in its hierarchy. This way you just need to customize it once near your root component.

```js
import { HtmlText, HtmlTextContext, defaultContextValues } from "@e-mine/react-native-html-text";

// ...

render() {
    const html = '<b>This</b> is a <i>formatted</i> HTML text.';

    const htmlTextContext = {
        ...defaultContextValues.styles, // If you want to "inherit" some styles from the default ones
        styles: {
            h1: {
                fontSize: 26,
                fontWeight: 'bold'
            },
            h2: {
                fontSize: 22,
                fontStyle: 'italic'
            },
            h3: {
                fontSize: 18,
                fontStyle: 'italic'
            }
        }
    };

    return (
        <HtmlTextContext.Provider value={htmlTextContext}>
            ...
            <HtmlText>{html}</HtmlText>
            ...
        </HtmlTextContext.Provider>
    );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

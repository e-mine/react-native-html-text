import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { HtmlText, HtmlTextContext, defaultContextValues } from '@e-mine/react-native-html-text';

export default function App() {
  const html = `<h1>HTML Ipsum &copy; Presents</h1>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2 style="color:red;/*comment:testing*/">Header Level 2</h2>

<ol>
   <li>Lorem ipsum dolor <del>sit amet</del>, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<p>paragraph1</p><p>paragraph2</p>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Vivamus magna.</mark> Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ul>

<code>
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
</code>

<pre><code>
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
</code></pre>`;

  const htmlTextContext = {
    styles: {
      ...defaultContextValues.styles,
      ul: {
        fontStyle: 'italic'
      },
      h1: {
        fontSize: 26
      },
      h2: {
        fontSize: 22
      },
      h3: {
        fontSize: 18
      }
    }
  };

  return (
    <HtmlTextContext.Provider value={htmlTextContext}>
      <View style={styles.container}>
        <HtmlText>{html}</HtmlText>
      </View>
    </HtmlTextContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

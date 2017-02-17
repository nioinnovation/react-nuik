# Twofold ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Twofold is a component made up of two parts: a heading and details. A Twofold is expandable and collapsible. Initially, a Twofold shows summary information and can be subsequently expanded to show more detailed information.

A Twofold is the inner element in an Accordion.

If wrapped in an Accordion, a Twofold's `active` and `onChange` props are automatically handled by the parent Accordion component.

## Example

```javascript

const data = {
  title1: 'Main Summary Here',
  summary1: 'More information about the main topic. ',
  details1: 'An entire paragraph that goes more in depth and is revealed when the Twofold is opened. The header is always visible but the details expand only when the header bar is clicked. You can choose your own icon to indicate that there are more details, but the default icon is a chevron. You can use the default n.io theme or customize the theme to your liking with the class modules listed in the theme object.',
};

class SampleTwofold extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active1: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Twofold</h2>
        <Twofold
          heading={data.title1}
          subheading={data.summary1}
          onChange={() => this.setState({ active1: !this.state.active1 })}
          active={this.state.active1}
        >{data.details1}</Twofold>
      </div>
    );
  }
};

```

## Try it
_an embedded Codepen here_

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Required. If true, Twofold is open. Handled by Accordion component if wrapped inside an Accordion.
| `heading` | `string` | The contents of the heading. Text only(?).
| `subheading` | `string` | The contents of the subheading. Text only(?).
| `icon` | `element` | Defines the icon element. If not defined, defaults to a chevron.
| `onChange` | `function` | Function to handle open and close logic. Handled by Accordion component if wrapped inside an Accordion.
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Twofold.

##Theme

| Name | Description |
| ---  | ----------- |
| `twofold` | Required. Used to style the root element. |
| `detail` | Required. Used to hide the details.|
| `active` | Required. Used to style the details upon expansion.|
| `header` | Used to style the header area. |
| `heading` | Used to style the main summary/header. |
| `subheading` | Used to style subheadings within the summary/header area.|
| `icon` | Used to style the base icon.|
| `iconOpen` | Used to style the open icon.|
| `iconClosed` | Used to style the closed icon.|

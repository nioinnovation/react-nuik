# Twofold ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A Twofold is an expandable component with two parts: a summary and details. Initially, Twofolds show the summary information and they can subsequently be expanded to reveal their details.

A Twofold is the inner element in an Accordion.

If wrapped in an Accordion, a Twofold's `active` and `onChange` props are automatically handled by the parent Accordion component.

## Example

```javascript
const data = {
  title: 'Main Summary Here',
  summary: 'More information about the main topic. ',
  details: 'An entire paragraph that goes more in depth and is revealed when the Twofold is opened. The header is always visible but the details expand only when the header bar is clicked. You can choose your own icon to indicate that there are more details, but the default icon is a chevron. You can use the default niolabs theme or customize the theme to your liking with the class modules listed in the theme object.',
};

class SampleTwofold extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Twofold</h2>
        <Twofold
          heading={data.title}
          subheading={data.summary}
          onChange={() => this.setState({ active: !this.state.active })}
          active={this.state.active}
        >{data.details}</Twofold>
      </div>
    );
  }
};
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Required. If true, Twofold is open.
| `key` | `string` | The unique id of the Twofold. Can be the same as the Twofold's key in its container's state. Required for Twofolds used in an Accordion with the `single` variant.
| `heading` | `string` | The contents of the heading. Text only(?).
| `subheading` | `string` | The contents of the subheading. Text only(?).
| `icon` | `element` | Defines the icon element. If not defined, defaults to a chevron.
| `onChange` | `function` | Function to handle open and close logic.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Twofold.

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

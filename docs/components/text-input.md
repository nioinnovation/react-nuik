# Text Input ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Types of text input include: `email`, `number`, `password`, `tel`, `text`, or `url`.

There is also a single-line variant called 'inline' that can be used for the input of a small amount of text, approximately 15 characters or less, similar to the text length in a button element.

The state of the input is controlled in the container component.

## Example

```javascript
class SampleTextInputs extends React.Component {
  constructor() {
    super();
    this.state = {
      value1: '',
      value2: 'yo'
    };
  }

  render() {
    return (
      <div>
        <h2>Text Inputs</h2>
        <TextInput variant="singleline" label="uncontrolled" helper="helper text here" type="text"/>
        <TextInput value="foo" variant="singleline" label="controlled (static)" helper="helper text here" type="text"/>
        <TextInput value={this.state.value1} onChange={(e) => this.setState({ value1: e.currentTarget.value }) } variant="singleline" label="controlled (dynamic)" helper="helper text here" type="text"/>
        <TextInput value={this.state.value2} onChange={(e) => this.setState({ value2: e.currentTarget.value }) } variant="singleline" label="filled (dynamic)" helper="helper text here" type="text"/>
        <TextInput variant="multiline" label="multiline" helper="more text here" type="text"/>
        <TextInput variant="inline" label="inline" helper="maybe no helper text for these little guys" type="text" />
        <TextInput variant="inline" label="small" type="text" />
        <TextInput variant="inline" label="small" type="text" />
        <TextInput variant="inline" label="small" type="text" />
        <TextInput variant="inline" label="small" type="text" />
        <TextInput variant="inline" label="small" type="text" />
      </div>
    );
  }
}

```

## Try it
_an embedded Codepen here_

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `type` | <code>'email'&#124;'number'&#124;'password'&#124;'tel'&#124;'text'&#124;'url'</code> | Specifies the `type` attribute of the `<input>` element.
| `variant` | <code>'singleLine'&#124;'multiLine'&#124;'inline'</code> | `singleLine` is full-width and scrolls left if necessary, `multiLine` is a `<text-area>` element that wraps and scrolls down if necessary, `inline` is a short, button-shaped input that does not wrap or scroll.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Text Input.
| `label` | `React.Node` | Specifies the label text for the Text Input.
| `helper` | `React.Node` | The content of the helper text that may appear below the input.
| `required` | `string` | Present if the input is required.

## Theme

| Name | Description |
| ---  | ----------- |
| `textInput` | Used for the root element—default is full-width, single-line. |
| `singleLine` | Styles for single-line Text Input. |
| `multiLine` | Styles for single-line Text Input. |
| `inline` | Styles for small, inline Text Input. |
| `small` | Styles for input display. |
| `isInvalid` | Styles for a input that is not valid. |
| `disabled` | Styles for a input that is disabled. |
| `helper` | Styles for the helper element. |
| `label` | Styles for the label element. |
| `labelWithFocus` | Styles for the label element when the input has focus. |
| `labelWithValue` | Styles for the label element when the input has a value. |

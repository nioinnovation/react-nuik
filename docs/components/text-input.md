# Text Input ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A text input asks for textual input. It comes in two variants: singleline and multiline.

A singleline text input is for a single line of text. It could include the following types of input: `email`, `number`, `password`, `tel`, `text`, or `url`.

A multiline text input is used when more than one line of text is expected, similar to a textarea.

The value of the input is controlled in the container component.

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
| `variant` | <code>'singleline'&#124;'multiline'</code> | `singleline` is full-width and scrolls left if necessary, `multiline` is a `<textarea>` element that wraps and scrolls down if necessary.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Text Input.
| `label` | `React.Node` | Specifies the label text for the Text Input.
| `helper` | `React.Node` | The content of the helper text that may appear below the input.

## Theme

| Name | Description |
| ---  | ----------- |
| `textInput` | Required. Used for the root element—default is full-width, single-line. |
| `singleline` | Styles for single-line Text Input. |
| `multiline` | Styles for single-line Text Input. |
| `label` | Styles for the label element. |
| `labelWithFocus` | Styles for the label element when the input has focus. |
| `labelWithValue` | Styles for the label element when the input has a value. |
| `helper` | Styles for the helper element. |

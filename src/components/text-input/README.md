# Text Input ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Single-line or multi-line text input of type: `email`, `number`, `password`, `tel`, `text`, or `url`

## Example

```javascript
<TextInput value={this.state.value1} onChange={(e) => this.setState({ value1: e.currentTarget.value }) } variant="singleline"label="controlled (dynamic)" helper="helper text here" type='text'/>
<TextInput value={this.state.value2} onChange={(e) => this.setState({ value2: e.currentTarget.value }) } variant="singleline"label="filled (dynamic)" helper="helper text here" type='text'/>
<TextInput variant="multiline" label="multiline" helper="more text here" type='text'/>
```
## Properties

| Name | Type | Description |
| --- | --- | --- |
| `type` | <code>'email'&#124;'number'&#124;'password'&#124;'tel'&#124;'text'&#124;'url'</code> | Specifies the `type` attribute of the `<input>` element.
| `variant` | <code>'singleline'&#124;'multiline'</code> | `singleline` is full-width and scrolls left if necessary, `multiline` is a `<textarea>` element that wraps and scrolls down if necessary.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Text Input.
| `label` | `React.Node` | Specifies the label text for the Text Input.
| `helper` | `React.Node` | The content of the helper text that may appear below the input.
| `autoFocus` | `bool` | Will focus this element on mount |

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

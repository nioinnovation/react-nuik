# Text Input ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Single-line or multi-line text input of type: `email`, `number`, `password`, `tel`, `text`, or `url`.

## Example

```javascript
<TextInput variant='inline' type='tel' label='tel' helper='required' required />
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

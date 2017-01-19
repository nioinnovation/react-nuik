# Text Input ![status: Proposal](https://img.shields.io/badge/status-proposal-red.svg)

Single-line or multi-line text input of type: `email`, `number`, `password`, `tel`, `text`, or `url`

## Example

```javascript
<TextInput variant='inline' type='tel' label='phone number' helper='phone number is required' required />
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `type` | `'email'|'number'|'password'|'tel'|'text'|'url'` | Specifies the `type` attribute of the `<input>` element
| `variant` | `'singleLine'|'multiLine'|'inline'` | `singleLine` is full-width and scrolls left if necessary, `multiLine` is a `<text-area>` element that wraps and scrolls down if necessary, `inline` is a short, button-shaped input that does not wrap or scroll
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Text Input
| `label` | `string` | Specifies the label for the Text Input—acts as a placeholder until focus, moves up on text input
| `helper` | `string` | The content of the helper text that may appear below the input
| `required` | `string` | Present if the input is required

## Theme

| Name | Description |
| ---  | ----------- |
| `textInput` | Used for the root element—default is full-width, single-line |
| `singleLine` | Styles for single-line Text Input|
| `multiLine` | Styles for single-line Text Input |
| `inline` | Styles for small, inline Text Input |

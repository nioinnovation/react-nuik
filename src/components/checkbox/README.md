# Checkbox ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Gives the ability to select an item.

## Example

```javascript
<Checkbox label='choice1' value='choice1' onClick={() => this.handleClick('choice1')} checked={this.state.choice1} />
<Checkbox label='disabled' value='none' onClick={() => this.handleClick('disabled')} disabled />
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `type` | `'email'|'number'|'password'|'tel'|'text'|'url'` | Specifies the `type` attribute of the `<input>` element
| `variant` | `'block'|'inline'` | Specifies the direction of the list: stacked or in a line
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Checkbox
| `label` | `React.Node` | Specifies the label for each option in the Checkbox
| `value` | `string` | Specifies the name for the selection when it is submitted
| `checked` | `boolean` | Checkbox is selected

## Theme

| Name | Description |
| ---  | ----------- |
| `checkbox` | Used for the root element |
| `block` | Styles for a column of Checkboxes|
| `inline` | Styles for a row of Checkboxes |
| `checked` | Styles for a checked Checkbox |
| `label` | Styles for the label element |
| `disabled` | Styles for a disabled Checkbox |

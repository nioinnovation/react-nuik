# Checkbox ![status: Proposal](https://img.shields.io/badge/status-prototype-orange.svg)

Gives the ability to select an item.

## Example

```javascript
<Checkbox variant='block' label='Won Tons' value='item59'/>
<Checkbox variant='block' label='Spring Rolls' value='item63'/>
<Checkbox variant='inline' label='small' value='small'/>
<Checkbox variant='inline' label='medium' value='medium'/>
<Checkbox variant='inline' label='large' value='large'/>
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

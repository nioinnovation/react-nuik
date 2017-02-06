# Checkbox ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Gives the ability to select an item.

## Example

```javascript
<Checkbox label='Planes' onChange={() => this.handleClick('planes')} checked={this.state.planes} />
<Checkbox label='disabled checked' onChange={() => this.handleClick('disabled')} disabled checked={true} />

<Checkbox label='choice1' onClick={() => this.handleClick('choice1')} checked={this.state.choice1} />
<Checkbox label='choice2' onClick={() => this.handleClick('choice2')} checked={this.state.choice2} />
<Checkbox label='disabled' onClick={() => this.handleClick('disabled')} checked={true} disabled />
<Checkbox label='disabled unchecked' onChange={() => this.handleClick('disabled')} disabled />
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Checkbox
| `label` | `React.Node` | Specifies the children for each option in the Checkbox.
| `checked` | `boolean` | Checkbox is selected.
| `disabled` | `boolean` | Checkbox is disabled.

## Theme

| Name | Description |
| ---  | ----------- |
| `checkbox` | Required. Used to style the root element. |
| `label` | Styles for the children of the checkbox. Styles for the checkbox itself are found in the label's ::before and ::after psuedo elements|
| `checked` | Styles to apply to the checkbox's children when the checkbox is checked.  |
| `disabled` | Styles for a disabled Checkbox |

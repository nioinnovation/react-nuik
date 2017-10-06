# Checkbox ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The checkbox gives the ability to select an item with three possible states: true, false, and 'mixed' (indeterminate, unknown).

## Example

```javascript
<Checkbox label='Cars' onChange={() => this.handleClick('cars')} checked={this.state.cars} />
<Checkbox label='Trucks' onChange={() => this.handleClick('trucks')} checked={this.state.trucks} />
<Checkbox label='Boats' onChange={() => this.handleClick('boats')} checked={this.state.boats} />
<Checkbox label='Planes' onChange={() => this.handleClick('planes')} checked={this.state.planes} />
<Checkbox label='initially undefined' onChange={() => this.handleClick('other')} checked={this.state.other} />
<Checkbox label='disabled unchecked' disabled checked={false} />
<Checkbox label='disabled checked' onChange={() => this.handleClick('disabled')} disabled checked={true} />
<Checkbox label='disabled undefined' disabled checked='mixed'/>
```
## Properties

| Name | Type | Description |
| --- | --- | --- |
| `label` | `React.Node` | Specifies the label text for each Checkbox.
| `checked` | <code>true &#124; false &#124; 'mixed'</code> | Required. One of three possible states for the Checkbox.
| `disabled` | `boolean` | Checkbox is disabled.
| `mod` | <code>string &#124; Array<string></code> | Apply custom mods from the theme on the Checkbox.

## Theme

| Name | Description |
| ---  | ----------- |
| `checkbox` | Required. Used to style the root element. |
| `input` | Used to style the input element. |
| `label` | Used to style the label element. |
| `checked` | Styles to apply to the label when element is checked. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |
| `unchecked` | Styles to apply to the label when element is not checked. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |
| `mixed` | Styles to apply to the label when element is indeterminate, unknown, or partially checked. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |
| `disabled` | Styles for a disabled Checkbox. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |

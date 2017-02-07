# Checkbox ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The checkbox gives the ability to select an item with three possible states: true, false, and undefined (indeterminate, unknown).

## Example

```javascript
<Checkbox label='Cars' onChange={() => this.handleClick('cars')} checked={this.state.cars} />
<Checkbox label='Trucks' onChange={() => this.handleClick('trucks')} checked={this.state.trucks} />
<Checkbox label='Boats' onChange={() => this.handleClick('boats')} checked={this.state.boats} />
<Checkbox label='Planes' onChange={() => this.handleClick('planes')} checked={this.state.planes} />
<Checkbox label='Panthers' onChange={() => this.handleClick('panthers')} checked={this.state.panthers} />
<Checkbox label='initially undefined' onChange={() => this.handleClick('unknown')} checked={this.state.unknown} />
<Checkbox label='disabled checked' onChange={() => this.handleClick('disabled')} disabled checked={true} />
<Checkbox label='disabled unchecked' disabled checked={false} />
<Checkbox label='disabled undefined' disabled />
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `label` | `React.Node` | Specifies the label for each Checkbox.
| `checked` | <code>true | false |'undefined'</code> | One of three possible states for the Checkbox.
| `disabled` | `boolean` | Checkbox is disabled.
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Checkbox.

## Theme

| Name | Description |
| ---  | ----------- |
| `checkbox` | Required. Used to style the root element. |
| `label` | Styles for the label of the checkbox. Styles for the checkbox itself are found in the label's `::before` and `::after` pseudo elements|
| `checked` | Styles to apply to the checkbox when it is checked.  |
| `unknown` | Styles to apply to the checkbox when it is indeterminate, unknown, or partially checked.  |
| `disabled` | Styles for a disabled Checkbox |

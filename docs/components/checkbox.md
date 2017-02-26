# Checkbox ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The Checkbox gives the ability to select an item with three possible states: true, false, and 'mixed' (indeterminate, unknown).

The `checked` attribute is required. A `checked` attribute with the value `true` will add a checked class, a value of `false` will add an unchecked class, and a value of `'mixed'` will be add a mixed class to the label element.

The click handler is defined outside the component, in the component's container, as shown in the example below. This allows you to define the criteria for the three possible styles/states. In the example, the click handler converts the state to a boolean and toggles between `true` and `false`.

You can use a Checkbox as part of a List or as an element in a form. You can apply any logic you choose.

See Radio Buttons for a container component that allows only one Checkbox in a group to be checked.

See Toggle for a binary (off/on) selector.

## Try it
_an embedded Codepen here_

## Example

```javascript
class SampleCheckboxes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cars: false,
      trucks: false,
      boats: true,
      planes: false,
      other: 'mixed',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    const stateValue = typeof this.state[key] === 'boolean' ? this.state[key] : false;
    this.setState({ [key]: !stateValue });
  }

  render() {
    return (
      <div>
        <h2>Checkboxes</h2>
        <Checkbox label='Cars' onChange={() => this.handleClick('cars')} checked={this.state.cars} />
        <Checkbox label='Trucks' onChange={() => this.handleClick('trucks')} checked={this.state.trucks} />
        <Checkbox label='Boats' onChange={() => this.handleClick('boats')} checked={this.state.boats} />
        <Checkbox label='Planes' onChange={() => this.handleClick('planes')} checked={this.state.planes} />
        <Checkbox label='initially undefined' onChange={() => this.handleClick('other')} checked={this.state.other} />
        <Checkbox label='disabled unchecked' disabled checked={false} />
        <Checkbox label='disabled checked' onChange={() => this.handleClick('disabled')} disabled checked={true} />
        <Checkbox label='disabled undefined' disabled checked='mixed'/>
      </div>
    );
  }
}
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `label` | `React.Node` | Specifies the label text for each Checkbox.
| `checked` | <code>true&#124;false&#124;'mixed'</code> | Required. One of three possible states for the Checkbox.
| `disabled` | `boolean` | Checkbox is disabled.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Checkbox.

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

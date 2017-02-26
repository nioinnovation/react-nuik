# Toggle ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The Toggle gives the ability to select an item with two possible states: `on` and `off`.

The `checked` attribute is required.

The click handler is defined outside the component, in the component's container, as shown in the example below. This allows you to define the criteria for the Toggle. In the example, the click handler converts the state to a boolean and toggles between `true` and `false`.

The label for the Toggle, if defined, will be placed above the toggle element.

You can use a Toggle as part of a List or as an element in a form. You can apply any logic you choose.

See Radio Buttons for a container component that allows only one Toggle in a group to be checked.

See Checkbox for a ternary (off/on/mixed) selector.

## Try it
_an embedded Codepen here_

## Example

```javascript
class SampleToggle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      stage: false,
      hallway: false,
      closet: true,
      safetyValve: true,
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
        <h2>Toggles</h2>
        <Toggle label='Cars' onChange={() => this.handleClick('cars')} checked={this.state.cars} />
        <Toggle label='Trucks' onChange={() => this.handleClick('trucks')} checked={this.state.trucks} />
        <Toggle label='Boats' onChange={() => this.handleClick('boats')} checked={this.state.boats} />
        <Toggle label='Planes' onChange={() => this.handleClick('planes')} checked={this.state.planes} />
        <Toggle label='initially undefined' onChange={() => this.handleClick('other')} checked={this.state.other} />
        <Toggle label='disabled unchecked' disabled checked={false} />
        <Toggle label='disabled checked' onChange={() => this.handleClick('disabled')} disabled checked={true} />
        <Toggle label='disabled undefined' disabled checked='mixed'/>
      </div>
    );
  }
}
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `label` | `React.Node` | Specifies the label text for each Toggle.
| `checked` | <code>true&#124;false&#124;'mixed'</code> | Required. One of three possible states for the Toggle.
| `disabled` | `boolean` | Toggle is disabled.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Toggle.

## Theme

| Name | Description |
| ---  | ----------- |
| `checkbox` | Required. Used to style the root element. |
| `input` | Used to style the input element. |
| `label` | Used to style the label element. |
| `checked` | Styles to apply to the label when element is checked. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |
| `unchecked` | Styles to apply to the label when element is not checked. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |
| `mixed` | Styles to apply to the label when element is indeterminate, unknown, or partially checked. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |
| `disabled` | Styles for a disabled Toggle. Styles for the checkbox itself are found in `::before` and `::after` pseudo elements of the label class. |

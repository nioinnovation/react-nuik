# Checkbox ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The Checkbox gives the ability to select an item with three possible states: true, false, and 'mixed' (indeterminate, unknown).

The `checked` attribute is required. A `checked` attribute with the value `true` will add a checked class, a value of `false` will add an unchecked class, and a value of `'mixed'` will be add a mixed class to the label element.

The click handler is defined outside the component, in the component's container, as shown in the example below. This allows you to define the criteria for the three possible styles/states. In the example, the click handler converts the state to a boolean and toggles between `true` and `false`.

You can use a Checkbox as part of a List or as an element in a form. You can apply any logic you choose.

See Radio Buttons for a container component that allows only one Checkbox in a group to be checked.

See Toggle for a binary (off/on) selector. _(? or Toggle could also be an alternate-style trinary selector?)_

## Try it
_an embedded Codepen here_

## Example

```javascript
class SampleTextInputs extends React.Component {
  constructor() {
    super();
    this.state = {
      value1: '',
      value2: 'yo'
    };
  }

  render() {
    return (
      <div>
        <h2>Text Inputs</h2>
        <TextInput variant="singleline" label="uncontrolled" helper="helper text here" type='text'/>
        <TextInput value="foo" variant="singleline" label="controlled (static)" helper="helper text here" type="text"/>
        <TextInput value={this.state.value1} onChange={(e) => this.setState({ value1: e.currentTarget.value }) } variant="singleline"label="controlled (dynamic)" helper="helper text here" type='text'/>
        <TextInput value={this.state.value2} onChange={(e) => this.setState({ value2: e.currentTarget.value }) } variant="singleline"label="filled (dynamic)" helper="helper text here" type='text'/>
        <TextInput variant="multiline" label="multiline" helper="more text here" type='text'/>
        <TextInput variant="multiline" label="multiline required" helper="required" type='text' required />
      </div>
    );
  }
}

export default SampleTextInputs;
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

# Toggle ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The Toggle is a basic binary selector. It can be toggled on or off and can include a corresponding indicator color.

## Example

```javascript
<Toggle label='closet' onChange={() => this.handleClick('closet')} checked={this.state.closet} onColor='affirmative' offColor='danger'/>
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `label` | `React.Node` | Specifies the label text for each Toggle.
| `checked` | `boolean` | Required. True is `on` false is `off`.
| `disabled` | `boolean` | Toggle is disabled.
| `offColor` | <code>'primary'&#124;'alternate'&#124;'affirmative'&#124;'warning'&#124;'danger'&#124;'default'</code> | Background color used to signal `on`.
| `onColor` | <code>'primary'&#124;'alternate'&#124;'affirmative'&#124;'warning'&#124;'danger'&#124;'default'</code> | Background color used to signal `off`.
| `mod` | <code>string &#124; Array<string></code> | Apply custom mods from the theme on the Toggle.

## Theme

| Name | Description |
| ---  | ----------- |
| `toggle` | Required. Used to style the root element. |
| `label` | Used to style the label element. |
| `checked` | Styles to apply to when element is checked. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |
| `unchecked` | Styles to apply when element is not checked. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |
| `disabled` | Styles for a disabled Toggle. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |

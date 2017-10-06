# Toggle ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The Toggle is a basic binary selector. It can be toggled on or off and can include corresponding indicator colors and label text.

## Example

```javascript
<Toggle onLabel='flow ok' offLabel='flow in error' onChange={() => this.handleClick('flow')} checked={this.state.flow} onColor='affirmative' offColor='danger'/>
<Toggle noLabel onChange={() => this.handleClick('valve')} checked={this.state.valve} />
```
## Properties

| Name | Type | Description |
| --- | --- | --- |
| `offLabel` | `React.Node` | Specifies the label text for unchecked Toggle. Default is text 'off'.
| `onLabel` | `React.Node` | Specifies the label text for checked Toggle. Default is text 'on'.
| `noLabel` | `React.Node` | Renders the toggle only, without any label.
| `checked` | `boolean` | Required. True is `on` false is `off`.
| `disabled` | `boolean` | Toggle is disabled.
| `offColor` | <code>'primary'&#124;'alternate'&#124;'affirmative' 'warning'&#124;'danger'&#124;'unchecked'</code> | Background color used to signal `off`. Default is unchecked color.
| `onColor` | <code>'primary'&#124;'alternate'&#124;'affirmative' 'warning'&#124;'danger'&#124;'checked'</code> | Background color used to signal `on`. Default is checked color.
| `mod` | <code>string &#124; Array<string></code> | Apply custom mods from the theme on the Toggle.

## Theme

| Name | Description |
| ---  | ----------- |
| `toggle` | Required. Used to style the root element. |
| `checked` | Required. Styles to apply to when element is checked. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |
| `unchecked` | Required. Styles to apply when element is not checked. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |
| `input` | Used to style the input element. |
| `label` | Used to style the label element. |
| `primary` | Used to style the primary background color. |
| `alternate` | Used to style the alternate background color. |
| `affirmative` | Used to style the affirmative background color. |
| `warning` | Used to style the warning background color. |
| `danger` | Used to style the danger background color. |
| `default` | Used to style the default background color. |
| `disabled` | Required. Styles for a disabled Toggle. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |

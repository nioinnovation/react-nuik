# Button ![status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)

A general purpose button component.

## Example

```javascript
<Button onClick={this.handleClick} variant="primary">Button<Button>
```
## Properties

| Name | Type | Description |
| --- | --- | --- |
| `href` | `string` | If set, make the Button an `<a>` element rather than a `<button>`.
| `variant` | <code>'primary'&#124;'alternative'&#124;'affirmative'&#124;'warning'&#124;'danger'</code> | Alter the desired semantic variant of the Button.
| `size` | <code>'huge'&#124;'large'&#124;'small'&#124;'tiny'</code> | Alter the size of the Button.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Button.

## Theme

| Name | Description |
| ---  | ----------- |
| `button` | Required. Used for the root element. This button should be of the default style and default size. |
| `link` | Required. Styles for buttons with an href, to bring the anchor tag (<a>) into alignment with button (<button>) styles. |
| `disabled` | Required. Styles for a disabled button. |
| `primary` | Primary button styling. |
| `alternate` | Alternate button styling. |
| `affirmative` | Affirmative action button. |
| `warning` | Warning action button. |
| `danger` | Danger action button. |
| `huge` | Used for "huge" sized buttons. |
| `large` | Used for "large" sized buttons. |
| `small` | Used for "small" sized buttons. |
| `tiny` | Used for "tiny" sized buttons. |

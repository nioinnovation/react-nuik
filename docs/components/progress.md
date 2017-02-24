# Progress Bar ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Shows the level of completion of a task. Takes a required `percent` prop that is a number between 0 and 1.

## Try it
_an embedded Codepen here_

## Example

```javascript
<Progress percent={0.5} variant='primary' />
```

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `variant` | <code>'primary'&#124;'alternate'&#124;'affirmative'&#124;'warning'&#124;'danger'</code> | Alter the fill color of the Progress Bar.
| `percent` | `number` between 0 and 1 | Required. The percent of fill.
| `disabled` | `boolean` | If true, adds a disabled style to the className.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Progress Bar.

## Theme

| Name | Description |
| ---  | ----------- |
| `progress` | Required. Used to style the root element. |
| `primary` | Primary colored fill. |
| `alternate` | Alternate colored fill. |
| `affirmative` | Affirmative colored fill. |
| `warning` | Warning colored fill. |
| `danger` | Danger colored fill. |
| `disabled` | Disabled colored fill. |

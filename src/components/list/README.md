# List ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A List is a wrapper that creates a column made up of rows.

Each row in a list is a container that can incorporate other components.

Lists are best suited to presenting a homogeneous data type or sets of data types.

## Example

```javascript
<List bullet='circle'>
  <Checkbox/>
  <Checkbox/>
  <Checkbox/>
  <Checkbox/>
</List>
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `href` | `string` | Required. The the destination of the list.
| `bullet` | <code>'none'&#124;'circle'&#124;'custom'</code> | The content of the list's bullet.
| `variant` | <code>'ordered'&#124;'unordered'</code> | If set, determines bullets or numbers.

## Theme

| Name | Description |
| ---  | ----------- |
| `list` | Required. Used to render a default list. |

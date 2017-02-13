# List ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A List is a wrapper that creates a column made of rows.

Each row in a list is a container that can incorporate other components.

Lists are best suited to presenting a homogeneous data type or sets of data types.

## Example

```javascript
<List variant='none'>
  <Link href="#" icon="&#x2723;">One</Link>
  <Link href="#" icon="&#x2698;">Two</Link>
  <Link href="#" icon="&#x273F;">Three</Link>
  <Link href="#" icon="&#x2765;">Four</Link>
</List>
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `variant` | <code>'none'&#124;'numbered'</code> | Circle bullets are the default. If set, determines no bullets or numbered bullets.

## Theme

| Name | Description |
| ---  | ----------- |
| `list` | Required. Used to render a default list. |
| `numbered` | Used to render a numbered list. |
| `none` | Used to render a list with no bullets. |
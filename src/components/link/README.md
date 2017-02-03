# Link ![status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)

A general purpose link component.

## Example

```javascript
<Link>Normal Link</Link>
<Link variant="count" data-count="4">Link With Count</Link>
<Link variant="icon" data-icon="⚠️">Link With Icon</Link>
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `count` | `string` | If set, make the link have a count using the `data-count` attribute.
| `icon` | `'string` | Append an icon to the link by using the `data-icon` attribute.

## Theme

| Name | Description |
| ---  | ----------- |
| `link` | Used to render a default link |
| `count` | Used to render a link with a count on it |
| `icon` | Used to render an icon before the link |

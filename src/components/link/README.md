# Link ![status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)

A Link is a clickable component that links to a url.

A Link can include an icon.

A Link with an icon can use variants `before` and `after` to display the icon before or after the link text.

## Example

```javascript
<Link href='#'>Link</Link>
<Link href='http://google.com'>Google</Link>
<Link href='#' icon="&#x21e4;">Link with icon, no variant</Link>
<Link href='#' variant="before" icon="&#x21e4;">Link with icon before</Link>
<Link href='#' variant="after" icon="▶">Link with icon after</Link>
```
## Properties

| Name | Type | Description |
| --- | --- | --- |
| `href` | `string` | Required. The the destination of the link.
| `icon` | 'string' | The content of the icon.
| `variant` | <code>'before'&#124;'after'</code> | If set, determines where to display the link icon (`before` is default).
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Link.

## Theme

| Name | Description |
| ---  | ----------- |
| `link` | Required. Used to render a default link. |
| `before` | Needed to render an icon. Used to style an icon that appears before the link. |
| `after` | Used to style an icon that appears after the link. Needed to render an icon with variant `after`.|

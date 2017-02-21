# Pagination ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)


## Example

```javascript
<Pagination numberOfPages={6} active='link1'>[link1, link2, link3, link4]</Pagination>
```

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `numberOfPages` | <code>'single'&#124;'multi'</code> | Determines whether only one Twofold can be expanded at a time, or whether multiple Twofolds can be open simultaneously. Default is `multi`.
| `active` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Pagination.

## Theme

| Name | Description |
| ---  | ----------- |
| `pagination` | Required. Used to render a default Pagination. |

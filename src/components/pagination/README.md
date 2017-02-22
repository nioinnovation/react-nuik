# Pagination ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A Pagination component provides context, showing both the user's current location and a range of possible navigation destinations.

## Example

```javascript
<Pagination numberOfPages={6} active='link1'>[link1, link2, link3, link4]</Pagination>
```

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `numberOfPages` | `number` | Sets the maximum number of pages visible in the Pagination component before the `prev` or `next` indicator is added.
| `active` | `boolean` | Indicates the current active page.

## Theme

| Name | Description |
| ---  | ----------- |
| `pagination` | Required. Used to render a default Pagination. |
| `active` | Required. Used to render a default Pagination. |

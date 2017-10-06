# Pagination ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A Pagination component provides context, showing both the user's current location and a range of possible navigation destinations.

The Pagination component's children are a list (array) of page urls.

## Example

```javascript
const pages = [
  '#link1',
  '#link2',
  '#link3',
  '#link4',
  '#link5',
  '#link6',
  '#link7',
  '#link8',
];

<Pagination pageRange={3} >{pages}</Pagination>
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `icon` | `React.Node` | Defines the `prev` and `next` icons. Default is a chevron stroke in a circle fill.
| `pageRange` | `number` | Sets the maximum number of pages visible in the Pagination component before the `prev` or `next` indicator is added. Default is 6.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Pagination.
| `children` | `Array<string>` | Required. List of page urls to be linked to in Pagination.

## Theme

| Name | Description |
| ---  | ----------- |
| `pagination` | Required. Used to render a default Pagination. |
| `icon` | Required. Used to style the icon. |
| `prev` | Required. Used to style the `prev` icon. |
| `next` | Required. Used to style the `next` icon. |
| `hidden` | Required. Used to style the icon when there are no previous or next pages. |
| `link` | Used to style the link when it is not active. |
| `active` | Required. Used to style the link when it is active. |

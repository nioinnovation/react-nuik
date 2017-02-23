# Pagination ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A Pagination component provides context, showing both the user's current location and a range of possible navigation destinations.

The component's children are a list (array) of page urls.

## Example

```javascript
const data = [
  '#link1',
  '#link2',
  '#link3',
  '#link4',
  '#link5',
  '#link6',
  '#link7',
  '#link8',
];

<Pagination pageRange={3} >{data}</Pagination>
```

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `icon` | `node` | Defines the `prev` and `next` icons. Default is chevron.
| `pageRange` | `number` | Sets the maximum number of pages visible in the Pagination component before the `prev` or `next` indicator is added.
| `mod` | `string|Array<string>` | Apply custom mods from the theme on Pagination.
| `children` | `Array<string>` | Required. List of page urls to be linked to in Pagination.

## Theme

| Name | Description |
| ---  | ----------- |
| `pagination` | Required. Used to render a default Pagination. |
| `icon` | Required. Used to style the icon. |
| `prev` | Required. Used to style the `prev` icon. |
| `next` | Required. Used to style the `next` icon. |
| `hidden` | Required. Used to style the icon when it is not active. |
| `link` | Used to style the link when it is not active. |
| `active` | Required. Used to style the link when it is active. |

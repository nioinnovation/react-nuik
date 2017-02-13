# Accordion ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

An Accordion is a List made up of collapsible Expansion Cards.

Expansion Cards are components that initially show summary information and can be subsequently expanded to show more detailed information.

## Example

```javascript
<Accordion variant="multi"
```
## Properties

### accordion

| Name | Type | Description |
| --- | --- | --- | --- |
| `variant` | <code>'single'&#124;'multi'</code> | Determines whether only one card can be expanded at a time, or whether multiple cards can be open simultaneously. Default is `multi`.

### card
| Name | Type | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Required. Determines if card is open.
| `columns` | `number` | If set, indicates the number of columns of sub-headings in the summary.

## Theme

| Name | Description |
| ---  | ----------- |
| `accordion` | Required. Used to render a default accordion. |
| `heading` | Used to style the summary/header area. |
| `subheading` | Used to style subheadings within the summary/header area.|
| `icon` | Used to style the open/close icon.|
| `details` | Used to style the detailed information visible upon expansion.|

# Twofold ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Twofold is a component made up of two parts: a heading and details. A Twofold is expandable and collapsible. Initially, a Twofold shows summary information and can be subsequently expanded to show more detailed information.

A Twofold is the inner element in an Accordion.


## Example

```javascript
<Accordion variant="multi">
  <Twofold heading="some short summary" subheading="more short summary">details here</Twofold>
  <Twofold heading="pithy title" subheading="I have more info" active>details here</Twofold>
  <Twofold heading="pick me" subheading="the skinny" active>details here</Twofold>
</Accordion>
```

## Try it
_an embedded Codepen here_

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | If present, Twofold is open.
| `heading` | `string` | The contents of the heading. Text only(?).
| `subheading` | `string` | The contents of the subheading. Text only(?).
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Twofold.

##Theme

| Name | Description |
| ---  | ----------- |
| `heading` | Used to style the summary/header area. |
| `subheading` | Used to style subheadings within the summary/header area.|
| `details` | Used to style the detailed information visible upon expansion.|
| `icon` | Used to style the open/close icon.|

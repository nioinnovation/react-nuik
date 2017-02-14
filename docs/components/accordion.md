# Accordion ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

An Accordion is a List made up of collapsible Twofolds.

Twofold is a component made up of two parts: a heading and details. Twofolds are expandable and collapsible. Initially, a Twofold shows summary information and can be subsequently expanded to show more detailed information.

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
| `variant` | <code>'single'&#124;'multi'</code> | Determines whether only one Twofold can be expanded at a time, or whether multiple Twofolds can be open simultaneously. Default is `multi`.
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Accordion.

## Theme

| Name | Description |
| ---  | ----------- |
| `accordion` | Required. Used to render a default accordion. |

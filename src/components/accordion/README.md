# Accordion ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

An Accordion is a component made up of Twofolds.

A Twofold is an expandable component with two parts: a summary and details. Initially, Twofolds show the summary information and they can subsequently be expanded to reveal their details.

A Twofold is the inner element in an Accordion.

Use the Accordion's `single` variant to have only one Twofold open at a time. Use the `multiple` (default) variant to have multiple elements open at the same time.

## Example

```javascript
<Accordion variant="multiple">
  <Twofold heading="some short summary" subheading="more short summary">details here</Twofold>
  <Twofold heading="pithy title" subheading="I have more info" active>details here</Twofold>
  <Twofold heading="pick me" subheading="the skinny" active>details here</Twofold>
</Accordion>
```

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `variant` | <code>'single'&#124;'multiple'</code> | Determines whether only one Twofold can be expanded at a time, or whether multiple Twofolds can be open simultaneously. Default is `multiple`.
| `singleActive` | 'string' | For the `single` accordion variant, contains the `key` of the single active Twofold.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Accordion.

## Theme

| Name | Description |
| ---  | ----------- |
| `accordion` | Required. Used to render a default Accordion. |

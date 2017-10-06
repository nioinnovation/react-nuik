# Accordion ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

An Accordion is a component made up of Twofolds.

A Twofold is an expandable component with two parts: a summary and details. Initially, Twofolds show the summary information and they can subsequently be expanded to reveal their details.

A Twofold is the inner element in an Accordion. A Twofold that is inside an accordion with the 'single' variant must have a `key` property.

Use the Accordion's `single` variant to have only one Twofold open at a time. Use the `multiple` (default) variant to have multiple elements open at the same time.

## Example

```javascript
<Accordion variant='single' singleActive={this.state.singleActive}>
    <Twofold
      key='active1'
      heading={data.title1}
      subheading={data.summary1}
      onChange={() => this.handleSingleClick('active1')}
      active={this.state.active1}
    >{data.details1}</Twofold>
    <Twofold
      key='active2'
      heading={data.title2}
      subheading={data.summary2}
      onChange={() => this.handleSingleClick('active2')}
      active={this.state.active2}
      >{data.details2}</Twofold>
    <Twofold
      key='active3'
      heading={data.title3}
      subheading={data.summary3}
      onChange={() => this.handleSingleClick('active3')}
      active={this.state.active3}
      >{data.details3}</Twofold>
</Accordion>
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `variant` | <code>'single'&#124;'multiple'</code> | Determines whether only one Twofold can be expanded at a time, or whether multiple Twofolds can be open simultaneously. Default is `multiple`.
| `singleActive` | 'string' | For the `single` accordion variant, contains the `key` of the single active Twofold.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Accordion.
| `children` | `React.Node` | Required. Children are Twofold components that, if used with the `single` variant, must have a `key` property.|

## Theme

| Name | Description |
| ---  | ----------- |
| `accordion` | Required. Used to render a default Accordion. |

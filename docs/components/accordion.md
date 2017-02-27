# Accordion ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

An Accordion is a component made up of Twofolds.

A Twofold is an expandable component with two parts: a summary and details. Initially, Twofolds show the summary information and they can subsequently be expanded to reveal their details.

A Twofold is the inner element in an Accordion.

Use the Accordion's `single` variant to have only one Twofold open at a time. Use the `multiple` (default) variant to have multiple elements open at the same time.

## Example

```javascript
class SampleAccordion extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active1: false,
      active2: false,
      active3: false
    };
  }

  render() {
    return (
      <div>
        <h2>Accordion</h2>
        <Accordion>
          <Twofold
            heading={data.title1}
            subheading={data.summary1}
            onChange={() => this.setState({ active1: !this.state.active1 })}
            active={this.state.active1}
          >{data.details1}</Twofold>
          <Twofold
            heading={data.title2}
            subheading={data.summary2}
            onChange={() => this.setState({ active2: !this.state.active2 })}
            active={this.state.active2}
            >{data.details2}</Twofold>
          <Twofold
            heading={data.title3}
            subheading={data.summary3}
            onChange={() => this.setState({ active3: !this.state.active3 })}
            active={this.state.active3}
            >{data.details3}</Twofold>
        </Accordion>
      </div>
    );
  }
}

```

## Try it
_an embedded Codepen here_

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

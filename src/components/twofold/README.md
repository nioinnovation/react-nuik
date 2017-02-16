# Twofold ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Twofold is a component made up of two parts: a heading and details. A Twofold is expandable and collapsible. Initially, a Twofold shows summary information and can be subsequently expanded to show more detailed information.

A Twofold is the inner element in an Accordion.

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

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | Required. If true ,Twofold is open.
| `heading` | `string` | The contents of the heading. Text only(?).
| `subheading` | `string` | The contents of the subheading. Text only(?).
| `icon` | `element` | Defines the icon element. If not defined, defaults to a chevron.
| `onChange` | `function` | Function to handle open and close logic. _make this internal for this component?_
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Twofold.

##Theme

| Name | Description |
| ---  | ----------- |
| `twofold` | Required. Used to style the root element. |
| `detail` | Required. Used to hide the details.|
| `active` | Required. Used to style the details upon expansion.|
| `header` | Used to style the header area. |
| `heading` | Used to style the main summary/header. |
| `subheading` | Used to style subheadings within the summary/header area.|
| `icon` | Used to style the base icon.|
| `iconClosed` | Used to style the closed icon.|
| `iconOpen` | Used to style the open icon.|

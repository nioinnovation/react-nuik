# Accordion ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

An Accordion is a component made up of Twofolds.

A Twofold is an expandable component with two parts: a summary and details. Initially, Twofolds show the summary information and they can subsequently be expanded to reveal their details.

A Twofold is the inner element in an Accordion. A Twofold that is inside an accordion with the 'single' variant must have a `key` property.

Use the Accordion's `single` variant to have only one Twofold open at a time. Use the `multiple` (default) variant to have multiple elements open at the same time.

## Example

```javascript
const data = {
  'title1': 'some short summary',
  'title2': 'a short title/summary with subheading left blank',
  'title3': 'pick me',
  'summary1': 'you can put a subheading here, or leave it blank',
  'summary3': 'you can add more info here, after the title',
  'details1': 'Lorem ipsum dolor sit amet, tortor dolor sit et eros, adipiscing mi lobortis lorem condimentum mi velit, dui posuere malesuada rutrum, dui morbi neque morbi suscipit. Inceptos quis in quisque eget, auctor imperdiet nam id in sed est. A fringilla, dictum quo mi. Massa mauris diam, sed integer libero erat, auctor nunc interdum posuere enim. Nisl viverra nascetur nec integer elit mauris, lectus scelerisque libero eleifend id dignissim et, ultricies lacus felis pretium, vel euismod molestie, ut nam integer tincidunt quis elit. Architecto varius at quis mi nec viverra, et vehicula, congue sapien est cras suspendisse, conubia pede nulla morbi imperdiet.',
  'details2': 'Augue justo nibh magna bibendum. Interdum maecenas dignissim consequatur egestas neque, mi in neque, eu adipiscing accumsan libero lacus luctus. Facilisis aenean adipiscing suscipit, aliquam vivamus quam a sem. Sit dui montes sit, mauris velit morbi, in aliquam et vestibulum wisi nisl ipsum, turpis platea suspendisse vivamus interdum pellentesque donec, sed nullam. Volutpat sit in convallis lorem, risus ut turpis nulla, adipiscing ut mi. Nec mauris dui sit sed, donec dictum, sem nibh. Aliquam ad nec commodo pellentesque, in nisl fermentum rhoncus, ullamcorper porta pulvinar, et tincidunt lobortis, quis ipsum. Quam wisi id, amet mauris metus at egestas aliquet odio, posuere potenti orci gravida in.',
  'details3': 'Erat nulla lectus mauris tempus nam ultricies, quam sollicitudin, scelerisque ac, tortor ipsum tristique aliquam, lectus ligula turpis urna vel. Mus quae ut, vel ac. Dolor vel nulla et, wisi sit, autem sem sociis consectetuer. Aenean est pellentesque vestibulum vulputate, dignissim ultricies ipsum laoreet, tellus ultrices elit eget mus viverra magna. Felis phasellus amet malesuada, a adipiscing mollis suspendisse varius tincidunt, at mi. Varius scelerisque quis diam vitae erat pellentesque, metus morbi mus ea sed sit nec, tortor id nunc scelerisque purus, quis pede id sem est inceptos, velit quam posuere ipsum nulla. Turpis reiciendis nec molestie aliquam, interdum odio vel nibh ligula sed, posuere etiam ac odio. Ligula sodales placerat lacus cum augue.',
};

class SampleAccordions extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active1: false,
      active2: false,
      active3: false,
      multi1: false,
      multi2: false,
      multi3: false,
      singleActive: '',
    };
  }

  handleSingle(key) {
    this.setState({
      [key]: !(this.state.singleActive === key), // add extra criteria here for true state
      singleActive: key, // keep track of active item
    });
  }

  handleToggle(key) {
    this.setState({
      [key]: !this.state[key],
    });
  }

  render() {
    return (
      <div>
        <h2>Accordion</h2>
        <h3>single variant (one panel open at a time)</h3>
        <Accordion variant='single' singleActive={this.state.singleActive}>
          <Twofold
            key='active1'
            heading={data.title1}
            subheading={data.summary1}
            onChange={() => this.handleSingle('active1')}
            active={this.state.active1}
          >{data.details1}</Twofold>
          <Twofold
            key='active2'
            heading={data.title2}
            subheading={data.summary2}
            onChange={() => this.handleSingle('active2')}
            active={this.state.active2}
            >{data.details2}</Twofold>
          <Twofold
            key='active3'
            heading={data.title3}
            subheading={data.summary3}
            onChange={() => this.handleSingle('active3')}
            active={this.state.active3}
            >{data.details3}</Twofold>
        </Accordion>
        <h3>multiple variant (multiple panels open at a time)</h3>
        <Accordion>
          <Twofold
            heading={data.title1}
            subheading={data.summary1}
            onChange={() => this.handleToggle('multi1')}
            active={this.state.multi1}
          >{data.details1}</Twofold>
          <Twofold
            heading={data.title2}
            subheading={data.summary2}
            onChange={() => this.handleToggle('multi2')}
            active={this.state.multi2}
            >{data.details2}</Twofold>
          <Twofold
            heading={data.title3}
            subheading={data.summary3}
            onChange={() => this.handleToggle('multi3')}
            active={this.state.multi3}
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
| `children` | `React.Node` | Required. Children are Twofold components that, if used with the `single` variant, must have a `key` property.|

## Theme

| Name | Description |
| ---  | ----------- |
| `accordion` | Required. Used to render a default Accordion. |

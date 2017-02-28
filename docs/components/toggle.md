# Toggle ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

The Toggle gives the ability to select an item with two possible states: `on` and `off`.

The `checked` attribute is required. When `checked` is `true` the element is `on`. When `checked` is `false` the element is `off`.

The click handler is defined outside the component, in the component's container, as shown in the example below. This allows you to define actions that happen with the Toggle. In the example, the click handler converts the state to a boolean and toggles between `true` and `false`.

The label for the Toggle, if defined, will be placed above the toggle element.

You can specify the text you would like to appear when the element is `on` in the `onLabel` property.

You can specify the text you would like to appear when the element is `off` in the `offLabel` property.

You can specify `on` and `off` indicator colors for the slide in the `onColor` and `offColor` properties.

Default labels and colors are provided if you do not specify them.

Use the `noLabel` property to indicate you do not wish to display any label.

You can use a Toggle as part of a List or as an element in a form. You can apply any logic you choose.

See Radio Buttons for a container component that allows only one Toggle in a group to be checked.

See Checkbox for a ternary (off/on/mixed) selector.

## Try it
_an embedded Codepen here_

## Example

```javascript
class SampleToggles extends React.Component {
  constructor(props) {
    super();
    this.state = {
      defaultLabel: false,
      noLabel: false,
      stove: true,
      fan: true,
      location: false,
      smokeDetector: true,
      horizontal: false,
      sync: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    const stateValue = typeof this.state[key] === 'boolean' ? this.state[key] : false;
    this.setState({ [key]: !stateValue });
  }

  render() {
    // different ways to specify your labels
    const fan = {
      onLabel: 'fan on',
      offLabel: 'fan off',
    };

    const label = 'location services';
    const disabled = 'disabled';

    return (
      <div>
        <h2>Toggles</h2>
        <h3>default</h3>
        <Toggle onChange={() => this.handleClick('defaultLabel')} checked={this.state.defaultLabel}  />
        <h3>toggles with various 'off' and 'on' colors</h3>
        <div>
          <Toggle offLabel='stove off' onLabel='stove on' onChange={() => this.handleClick('stove')} checked={this.state.stove} offColor='primary' onColor='danger' />
          <Toggle {...fan} onChange={() => this.handleClick('fan')} checked={this.state.fan} offColor='danger' onColor='affirmative' />
          <Toggle offLabel={label} onLabel={label} onChange={() => this.handleClick('location')} checked={this.state.location} offColor='alternate' onColor='warning' />
          <Toggle offLabel={disabled} onLabel='disabled on' disabled onChange={() => this.handleClick('disabled')} checked={true} offColor='alternate' onColor='warning' />
          <Toggle offLabel='disabled off' onLabel={disabled} disabled onChange={() => this.handleClick('disabled')} checked={false} offColor='primary' onColor='danger' />
        </div>
        <h3>custom labels</h3>
        <h4>with default off/on text</h4>
        <div>
          <span>baby monitor</span>
          <Toggle className='inline' onChange={() => this.handleClick('noLabel')} checked={this.state.noLabel}  />
        </div>
        <div>
          <span>smoke detector</span>
          <Toggle className='inline' onChange={() => this.handleClick('smokeDetector')} checked={this.state.smokeDetector}  />
        </div>
        <h4>with 'noLabel' flag</h4>
        <div>
          <span>night mode</span>
          <Toggle noLabel className='horizontal' onChange={() => this.handleClick('horizontal')} checked={this.state.horizontal}  />
        </div>
        <div>
          <span>auto sync</span>
          <Toggle noLabel className='horizontal' onChange={() => this.handleClick('sync')} checked={this.state.sync}  />
        </div>

      </div>
    );
  }
}
```
## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `offLabel` | `React.Node` | Specifies the label text for unchecked Toggle. Default is text 'off'.
| `onLabel` | `React.Node` | Specifies the label text for checked Toggle. Default is text 'on'.
| `noLabel` | `React.Node` | Renders the toggle only, without any label.
| `checked` | `boolean` | Required. True is `on` false is `off`.
| `disabled` | `boolean` | Toggle is disabled.
| `offColor` | <code>'primary'&#124;'alternate'&#124;'affirmative' 'warning'&#124;'danger'&#124;'unchecked'</code> | Background color used to signal `off`. Default is unchecked color.
| `onColor` | <code>'primary'&#124;'alternate'&#124;'affirmative' 'warning'&#124;'danger'&#124;'checked'</code> | Background color used to signal `on`. Default is checked color.
| `mod` | <code>string &#124; Array<string></code> | Apply custom mods from the theme on the Toggle.

## Theme

| Name | Description |
| ---  | ----------- |
| `toggle` | Required. Used to style the root element. |
| `checked` | Required. Styles to apply to when element is checked. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |
| `unchecked` | Required. Styles to apply when element is not checked. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |
| `input` | Used to style the input element. |
| `label` | Used to style the label element. |
| `primary` | Used to style the primary background color. |
| `alternate` | Used to style the alternate background color. |
| `affirmative` | Used to style the affirmative background color. |
| `warning` | Used to style the warning background color. |
| `danger` | Used to style the danger background color. |
| `default` | Used to style the default background color. |
| `disabled` | Required. Styles for a disabled Toggle. Styles for the toggle itself are found in `::before` and `::after` pseudo elements of the label class. |

# Button ![status: Beta](https://img.shields.io/badge/status-beta-yellow.svg)

A general purpose button component.

## Example

```javascript
<Button onClick={this.handleClick} variant="primary">Button<Button>

const SampleButtons = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <h3>Standard</h3>
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="affirmative">Yes</Button>
        <Button variant="alternate">Alternate</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button>Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <h3>Link</h3>
      <div>
        <Button href="#" variant="primary">Link</Button>
        <Button href="#" variant="affirmative">Link</Button>
        <Button href="http://facebook.com" variant="alternate">Facebook</Button>
        <Button href="#" variant="warning">Warning Link</Button>
        <Button href="#" variant="danger">Danger Link</Button>
        <Button href="#">Default</Button>
        <Button href="#" disabled>Disabled</Button>
      </div>
      <h3>Sizes</h3>
      <div>
        <Button size="huge" variant="primary">Huge</Button>
        <Button size="large" variant="primary">Large</Button>
        <Button variant="primary">Default</Button>
        <Button size="small" variant="primary">Small</Button>
        <Button size="tiny" variant="primary">Tiny</Button>
      </div>
    </div>
  );
};
```

## Try it
an embedded Codepen here

<p data-height="265" data-theme-id="0" data-slug-hash="mRPEmb" data-default-tab="css,result" data-user="Knuth" data-embed-version="2" data-pen-title="css only button" class="codepen">See the Pen <a href="http://codepen.io/Knuth/pen/mRPEmb/">css only button</a> by Jenny (<a href="http://codepen.io/Knuth">@Knuth</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `href` | `string` | If set, make the Button an `<a>` element rather than a `<button>`.
| `variant` | <code>'primary'&#124;'alternate'&#124;'affirmative'&#124;'warning'&#124;'danger'</code> | Alter the desired semantic variant of the Button.
| `size` | <code>'huge'&#124;'large'&#124;'small'&#124;'tiny'</code> | Alter the size of the Button.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the Button.

## Theme

| Name | Description |
| ---  | ----------- |
| `button` | Used for the root element. This button should be of the default style and default size. |
| `primary` | Primary button styling. |
| `alternate` | Alternate button styling. |
| `affirmative` | Affirmative action button. |
| `warning` | Warning action button. |
| `danger` | Danger action button. |
| `huge` | Used for "huge" sized buttons. |
| `large` | Used for "large" sized buttons. |
| `small` | Used for "small" sized buttons. |
| `tiny` | Used for "tiny" sized buttons. |

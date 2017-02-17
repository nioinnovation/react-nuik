# List ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

A List is a wrapper that creates a column made of rows.

Each row in a list is a container that can incorporate other components.

Lists are best suited to presenting a homogeneous data type or sets of data types.

## Try it
_an embedded Codepen here_

## Example

```javascript
const SampleLists = () => {
  return (
    <div>
      <h2>Lists</h2>
      <h3>Default</h3>
      <List>
        <p>buy some yogurt</p>
        <p>get a haircut</p>
        <p>finish novel</p>
        <p>call Connie</p>
      </List>
      <h3>Numbered</h3>
      <List variant='numbered'>
        <p>buy some yogurt</p>
        <p>get a haircut</p>
        <p>finish novel</p>
        <p>call Connie</p>
      </List>
      <h3>List of Checkboxes</h3>
      <List variant='none'>
        <Checkbox checked={false} label="buy some yogurt"/>
        <Checkbox checked={true} label="get a haircut"/>
        <Checkbox checked={false} label="visit Ben"/>
        <Checkbox checked={false} label="finish blog"/>
      </List>
      <h3>Menu List</h3>
      <List variant='none'>
        <Link href="#" icon="&#x2723;">One</Link>
        <Link href="#" icon="&#x2698;">Two</Link>
        <Link href="#" icon="&#x273F;">Three</Link>
        <Link href="#" icon="&#x2765;">Four</Link>
      </List>
    </div>
  );
};
```

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `variant` | <code>'none'&#124;'numbered'</code> | Circle bullets are the default. If set, determines no bullets or numbered bullets.
| `mod` | <code>string&#124;Array<string></code> | Apply custom mods from the theme on the List.

## Theme

| Name | Description |
| ---  | ----------- |
| `list` | Required. Used to render a default List. |
| `item` | Required. Styles for a default list item. |
| `numbered` | Styles for a numbered list. |
| `none` | Styles for a list with no bullets. |

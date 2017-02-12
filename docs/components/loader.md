# Loader ![status: Proposal](https://img.shields.io/badge/status-proposal-red.svg)

A Loader/Message

## Example

```javascript
<Loader loading={isLoading} icon={<i className="fa fa-fw fa-check" />}>success!</Loader>
```
## Try it
_an embedded Codepen here_

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `loading` | `boolean` | Show the loading animation. |
| `complete` | `boolean` | Show the result. |
| `result` | <code>undefined&#124;'affirmative'&#124;'warning'&#124;'danger'</code> | The result type. |
| `icon` | `React.Node` | The icon node that should be displayed in the result. |
| `children` | `React.Node` | The message to be displayed in the result.  |

## Theme

| Name | Description |
| ---  | ----------- |
| `loader` | styles loader scrim. |
| `result` | styles for a hidden result box. |
| `complete` | styles for displayed result box. |
| `affirmative` | styles for an affirmative/good result box. |
| `warning` | styles for a warning result box. |
| `danger` | styles for a danger/bad result box. |
| `icon` | styles for the icon in the result box. |
| `message` | styles for the message in the result box. |
| `decorationOuter` | styles for the outer loader animation. |
| `decorationMiddle` | styles for the middle loader animation. |
| `decorationInner` | styles for the inner loader animation. |

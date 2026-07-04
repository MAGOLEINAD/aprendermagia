import * as React from "react"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <link
      key="favicon-light"
      rel="icon"
      type="image/png"
      href="/favicon-light.png"
      media="(prefers-color-scheme: light)"
    />,
    <link
      key="favicon-dark"
      rel="icon"
      type="image/png"
      href="/favicon-dark.png"
      media="(prefers-color-scheme: dark)"
    />,
  ])
}

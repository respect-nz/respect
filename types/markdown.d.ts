declare module '*.md' {
    import React from 'react'
    const attributes: { [key: string]: string | Array<string> | Array<{}> }
    const react: React.VFC<attributes>
    export { attributes, react }
}

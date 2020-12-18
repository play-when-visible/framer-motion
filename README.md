# fm-play-when-visible
An npm package for playing Framer Motion animations when they are rendered in the viewport.

## Installation
To install, run...
```unix
npm install fm-play-when-visible

or

yarn add fm-play-when-visible
```

## Example
```js
import { PlayWhenVisible } from "fm-play-when-visible"

const Component = () => {
    <PlayWhenVisible key="myAnimationName">
        <motion.div>
        </motion.div>
    </PlayWhenVisible>
}
```

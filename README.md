# fm-play-when-visible
An npm package for playing Framer Motion animations when they become visible in the viewport.

## Installation
To install, run...
```unix
npm install fm-play-when-visible

or

yarn add fm-play-when-visible
```

## Example
```js
import React from "react";
import { motion } from "framer-motion";
import { PlayWhenVisible } from "fm-play-when-visible";

const Page = () => {
    return (
        <PlayWhenVisible>
            {({ setupAnimationProps }) => (
                <motion.div
                    {...setupAnimationProps({
                        variants: { from: { opacity: 0 }, to: { opacity: 1 } },
                    })}
                    transition={{
                        delay: 1,
                    }}
                >
                    <p>I am fading in!</p>
                </motion.div>
            )}
        </PlayWhenVisible>
    );
};
```

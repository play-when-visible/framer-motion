# fm-play-when-visible
`fm-play-when-visible` is an npm package for playing Framer Motion animations when they become visible in the viewport.

## Features
- 🛠 **Typescript Support**
- ⚙ **Configurable**
- 🙂 **Easy to Use**

## Installation
Install the package via your favorite package manager.
```
npm install fm-play-when-visible

or

yarn add fm-play-when-visible
```

## PlayWhenVisible Options
| Option                | Default Value | Description                                                                                                                                                                              |
|-----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| playOnce              | false         | If true, the animation only plays once.                                                                                                                                                  |
| sensorOptions         | undefined     | The props for the `VisibilitySensor` from `react-visibility-sensor`, excluding `partialVisibility` and `onChange`. Read more in the [react-visibility-sensor documentation](https://github.com/joshwnj/react-visibility-sensor#props). |
| requireFullVisibility | false         | If true, requires that the animation target is fully visible before playing the animation. (Equivalent to `partialVisibility` from `react-visibility-sensor props`)                            |
| onVisibilityChange    | undefined     | Callback for when the visibility of the animation is changed. (Equivalent to `onChange` from `react-visibility-sensor` props)                                                                        |

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

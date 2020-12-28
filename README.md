# fm-play-when-visible
An npm package for playing Framer Motion animations when they become visible in the viewport.

## Features
- 🛠 **Typescript Support**
- ⚙ **Highly Configurable**
- 🙂 **Easy to Use**

## Installation
Install the package via your favorite package manager.
```
npm install fm-play-when-visible

or

yarn add fm-play-when-visible
```
Additionally, make sure to have framer-motion included in your project.
```
npm install framer-motion

or

yarn add framer-motion
```

## Usage
`fm-play-when-visible` provides the `PlayWhenVisible` component, which handles the animation setup through a child function. The child function has an takes in an object that contains a function called `setupAnimationProps`, which is used to create the props on the `motion` JSX tag. The `PlayWhenVisible` component is used as follows...

```js
import React from "react";
import { motion } from "framer-motion";
import { PlayWhenVisible } from "fm-play-when-visible";

const Page = () => {
    return (
        <PlayWhenVisible>
            // Define the child function
            {({ setupAnimationProps }) => (
                // Define your motion tag
                <motion.div
                    // Create the props
                    {...setupAnimationProps({
                        // Your animation variants
                        variants: { from: { opacity: 0 }, to: { opacity: 1 } },
                    })}
                    // Configure your animation
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

## API

## PlayWhenVisible
The React component that handles the animation. It requires the child function: `({ setupAnimationProps }) => (...Your JSX here)`.

### setupAnimationProps

A function that constructs the animation props based on the variant inputs. You must apply it to the `motion` jsx tag for the animation to work.

```js
<motion.div
    {...setupAnimationProps({
        variants: {
            from: {
                // Your initial animation state
            },
            to: {
                // Your final animation state
            },
        },
    })}
></motion.div>
```

### Options

| Option                | Default Value | Description                                                                                                                                                                              |
|-----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onlyOnce              | false         | If true, the animation plays only once.                                                                                                                                             |
| sensorOptions         | undefined     | The props for the `VisibilitySensor` from `react-visibility-sensor`, excluding `partialVisibility` and `onChange`. Read more in the [react-visibility-sensor props documentation](https://github.com/joshwnj/react-visibility-sensor#props). |
| requireFullVisibility | false         | If true, requires that the animation target is fully visible before playing the animation. (Equivalent to `partialVisibility` from `react-visibility-sensor props`)                            |
| onVisibilityChange    | undefined     | Callback for when the visibility of the animation is changed. (Equivalent to `onChange` from `react-visibility-sensor` props)                                                                        |

## Examples
### Fade In
```js
import React from "react";
import { motion } from "framer-motion";
import { PlayWhenVisible } from "fm-play-when-visible";

const Page = () => {
    return (
        <PlayWhenVisible onlyOnce>
            {({ setupAnimationProps }) => (
                <motion.div
                    {...setupAnimationProps({
                        variants: { from: { opacity: 0 }, to: { opacity: 1 } },
                    })}
                    transition={{
                        delay: 0.5,
                    }}
                >
                    <p>I am fading in!</p>
                </motion.div>
            )}
        </PlayWhenVisible>
    );
};
```

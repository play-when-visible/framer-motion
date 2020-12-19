import { Variant, Variants } from "framer-motion";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

/**
 * The variant inputs for the animation.
 */
interface SetupAnimationPropsArgs {
    variants: {
        from: Variant;
        to: Variant;
    };
}

/**
 * The props required to setup the animation. It always needs to be present on your motion jsx tag.
 */
interface AnimationProps {
    initial: string;
    animate: string;
    variants: Variants;
}

/**
 * The child function arguments for the PlayWhenVisible component.
 */
interface ChildrenArgs {
    /**
     * The props required to setup a Framer Motion animation to be played when it becomes visible in the viewport. It is required for these props to be present on the motion tag for it to work.
     */
    setupAnimationProps: (args: SetupAnimationPropsArgs) => AnimationProps;
}

interface PlayWhenVisibleProps {
    /**
     * If true, the animation only plays once.
     */
    onlyOnce?: boolean;
    /**
     * The child function that handles the animation props.
     */
    children: (args: ChildrenArgs) => React.ReactNode;
}

/**
 * Plays a Framer Motion animation when it becomes visible in the viewport.
 */
export const PlayWhenVisible = ({
    onlyOnce,
    children,
}: PlayWhenVisibleProps) => {
    const [isVisible, setVisible] = useState(false);

    const initialVariantName = "invisible";
    const animateVariantName = "visible";
    const notInViewportVariantName = onlyOnce ? "" : initialVariantName;

    const setupAnimationProps = ({
        variants,
    }: SetupAnimationPropsArgs): AnimationProps => {
        const { from, to } = variants;

        return {
            initial: initialVariantName,
            animate: isVisible ? animateVariantName : notInViewportVariantName,
            variants: {
                [initialVariantName]: from,
                [animateVariantName]: to,
            },
        };
    };

    return (
        <VisibilitySensor onChange={visible => setVisible(visible)}>
            {children({ setupAnimationProps })}
        </VisibilitySensor>
    );
};

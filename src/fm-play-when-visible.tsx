import { Variant, Variants } from "framer-motion";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

/**
 * The variants for the animation.
 */
interface SetupAnimationPropsArgs {
    variants: {
        from: Variant;
        to: Variant;
    };
}

interface AnimationProps {
    initial: string;
    animate: string;
    variants: Variants;
}

interface ChildrenArgs {
    /**
     * Sets up a play when visible animation based on the variants provided.
     */
    setupAnimationProps: (args: SetupAnimationPropsArgs) => AnimationProps;
}

interface PlayWhenVisibleProps {
    /**
     * If true, the animation plays only once.
     */
    onlyOnce?: boolean;
    /**
     * The props for the `VisibilitySensor` from `react-visibility-sensor`, excluding `partialVisibility` and `onChange`. Read more in the [react-visibility-sensor props documentation](https://github.com/joshwnj/react-visibility-sensor#props).
     */
    sensorOptions?: Omit<
        React.ComponentPropsWithoutRef<typeof VisibilitySensor>,
        "onChange" | "partialVisibility"
    >;
    /**
     * If true, requires that the animation children are fully visible before playing the animation. (Equivalent to `partialVisibility` from  the `VisibilitySensor` props)
     */
    requireFullVisibility: boolean;
    /**
     * Callback for when the visibility of the animation is changed. (Equivalent to `onChange` from the `VisibilitySensor` props)
     */
    onVisiblityChange: (visible: boolean) => void;
    /**
     * The child function that creates the animation props.
     */
    children: (args: ChildrenArgs) => JSX.Element;
}

/**
 * Plays a Framer Motion animation when it becomes visible in the viewport.
 */
export const PlayWhenVisible = ({
    onlyOnce,
    sensorOptions,
    requireFullVisibility,
    onVisiblityChange,
    children,
}: PlayWhenVisibleProps) => {
    const [isVisible, setVisible] = useState(false);
    const [hasPlayed, setPlayed] = useState(false);

    const setupAnimationProps = ({
        variants,
    }: SetupAnimationPropsArgs): AnimationProps => {
        const { from, to } = variants;

        const initialVariantName = "invisible";
        const animateVariantName = "visible";

        const calculateCanPlay = () => (onlyOnce ? hasPlayed : isVisible);
        const calculateNonAnimatedVariantName = () =>
            onlyOnce ? "" : initialVariantName;

        return {
            initial: initialVariantName,
            animate: calculateCanPlay()
                ? animateVariantName
                : calculateNonAnimatedVariantName(),
            variants: {
                [initialVariantName]: from,
                [animateVariantName]: to,
            },
        };
    };

    return (
        <VisibilitySensor
            partialVisibility={!requireFullVisibility}
            onChange={visible => {
                if (onVisiblityChange) onVisiblityChange(visible);

                setVisible(visible);

                if (visible && !hasPlayed) setPlayed(true);
            }}
            {...sensorOptions}
        >
            {children({ setupAnimationProps })}
        </VisibilitySensor>
    );
};

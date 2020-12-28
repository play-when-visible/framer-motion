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
 * The props required to setup the animation.
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
     * Sensor options for react-visibility-sensor.
     */
    sensorOptions?: Omit<
        React.ComponentPropsWithoutRef<typeof VisibilitySensor>,
        "onChange" | "partialVisibility"
    >;
    /**
     * If true, requires that the animation target be fully visible before playing the animation.
     */
    requireFullVisibility: boolean;
    /**
     * Called when the visibility of the animation is changed.
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

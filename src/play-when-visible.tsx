import { Variant, Variants } from "framer-motion";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

interface VariantsInput {
    from: Variant;
    to: Variant;
}

type CreateVariantsFn = (variants: VariantsInput) => Variants;

/**
 * The props required to setup the Framer Motion animation. It always needs to be present on the motion JSX tag.
 */
interface SetupProps {
    initial: string;
    animate: string;
}

/**
 * The child function arguments for the PlayWhenVisible component.
 */
interface ChildrenArgs {
    /**
     * The props required to setup a Framer Motion animation to be played when it becomes visible in the viewport. It is required for these props to be present on the motion tag for it to work.
     */
    setupProps: SetupProps;
    /**
     *
     */
    createVariants: CreateVariantsFn;
}

interface PlayWhenVisibleProps {
    /**
     * If true, the animation only plays on the first time it appears in the viewport.
     */
    onlyOnce?: boolean;
    /**
     * The children of The Framer Motion animation.
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

    const createSetupProps = (): SetupProps => ({
        initial: initialVariantName,
        animate: isVisible ? animateVariantName : notInViewportVariantName,
    });

    const createVariants: CreateVariantsFn = (
        variants: VariantsInput
    ): Variants => ({
        invisible: variants.from,
        visible: variants.to,
    });

    return (
        <div>
            <VisibilitySensor onChange={visible => setVisible(visible)}>
                {children({ setupProps: createSetupProps(), createVariants })}
            </VisibilitySensor>
        </div>
    );
};

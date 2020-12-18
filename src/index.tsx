import React, { useEffect, useState } from "react";

interface PlayOnceOptions {
    /**
     * Set to true if the animation should only be played once.
     */
    onlyOnce?: false;
}

interface PlayOnceProps {
    /**
     * The name of the animation. It should be unique.
     */
    key: string;

    /**
     * The options for the animation.
     */
    options?: PlayOnceOptions;

    /**
     * The Framer Motion animation.
     */
    children: React.ReactNode;
}

type AnimationValueFunction = <T extends number | string | boolean>(
    from: T,
    to: T
) => T;

/**
 * Plays a Framer Motion animation when it becomes visible in the viewport.
 */
export const PlayWhenVisible = ({ key, options, children }: PlayOnceProps) => {
    const { onlyOnce } = options!;

    useEffect(() => {
        addAnimation({ key });
    });

    return <div></div>;
};

const TestComponent = () => {
    return (
        <div>
            <PlayWhenVisible key="test">
                {(animationValue: AnimationValueFunction) => {
                    const values = {
                        transformY: animationValue("-500px", "0px"),
                    };
                }}
            </PlayWhenVisible>
        </div>
    );
};

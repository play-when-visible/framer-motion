import React, { useEffect } from "react";

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
     * The framer motion animation.
     */
    children: React.ReactNode;
}

/*** PROTOTYPES ***/
const addAnimation = (options: Omit<PlayOnceProps, "children">) => {
    // Dispatch add
}

/**
 * A component for playing Framer Motion animations when they are loaded into the viewport.
 */
export const PlayOnce = ({ key, options, children }: PlayOnceProps) => {
    const { onlyOnce } = options!;

    useEffect(() => {
        addAnimation({ key, options });
    })

    return <div>
    </div>;
}

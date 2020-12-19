import React from "react";
import { render } from "@testing-library/react";
import { motion } from "framer-motion";
import { PlayWhenVisible } from "./play-when-visible";

describe("PlayWhenVisible component", () => {
    it("renders the animation content", () => {
        const { getByText } = render(
            <PlayWhenVisible>
                {({ setupAnimationProps }) => (
                    <motion.div
                        {...setupAnimationProps({
                            variants: {
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                            },
                        })}
                    >
                        <p>animation content</p>
                    </motion.div>
                )}
            </PlayWhenVisible>
        );

        const animationContent = getByText("animation content");

        expect(animationContent).toBeInTheDocument;
    });
});

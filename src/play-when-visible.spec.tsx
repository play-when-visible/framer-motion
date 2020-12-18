import React from "react";
import { render } from "@testing-library/react";
import { motion } from "framer-motion";
import { PlayWhenVisible } from "./play-when-visible";

describe("PlayWhenVisible component", () => {
    it("renders the animation content", () => {
        const { getByText } = render(
            <PlayWhenVisible>
                {({ setupProps, createVariants }) => (
                    <motion.div
                        {...setupProps}
                        variants={createVariants({
                            from: {
                                opacity: 0,
                            },
                            to: {
                                opacity: 1,
                            },
                        })}
                    >
                        <p>content</p>
                    </motion.div>
                )}
            </PlayWhenVisible>
        );

        const content = getByText(/content/i);

        expect(content).toBeInTheDocument();
    });

    it("plays the animation", () => {
        render(
            <PlayWhenVisible>
                {({ setupProps, createVariants }) => (
                    <motion.div
                        {...setupProps}
                        variants={createVariants({
                            from: {
                                opacity: 0,
                            },
                            to: {
                                opacity: 1,
                            },
                        })}
                    ></motion.div>
                )}
            </PlayWhenVisible>
        );
    });
});

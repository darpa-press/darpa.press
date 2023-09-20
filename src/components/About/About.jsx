import React from "react";

const About = () => {
    return (
        <div class="pt-8 flex-1 flex flex-col gap-2 max-w-[30rem]">
            <p>
                Darpa (<em>est 2017</em>) is a publishing concern very concerned
                with technological friendship, only incapably so. We try to get
                at it via projects which look into information peace, indirect
                talking, difficult tools, negative publicity, and lyric
                bureaucracy.
            </p>
            <p>
                With limited time but flexible means, we produce artists’ books,
                applications, anthologies, republications, musical instruments,
                correspondence, and secrets.
            </p>
            <p>(Unlike other Darpas, ours is a given name, not an acronym.)</p>
            <p class="mt-auto">
                <a
                    href="mailto:secretary@darpa.press"
                    className="underline underline-offset-4 italic decoration-black/10"
                >
                    Please write to our secretary and tell us about your
                    projects →
                </a>
            </p>
        </div>
    );
};

export default About;

import React, { useState } from "react";
import useInterval from "@use-it/interval";

const asterisks = "*⁎✿❀❁✾⊛✢✣✤✥✱✲✳✺✻✼✽❃❉❊❋⧆⩮".split("");

export default () => {
    const [number, setNumber] = useState(
        Math.floor(Math.random() * asterisks.length)
    );
    useInterval(() => {
        setNumber(Math.floor(Math.random() * asterisks.length));
    }, 5000);
    return <span style={{ fontSize: "1em" }}>{asterisks[number]}</span>;
};

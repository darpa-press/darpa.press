import React from "react";

const books = [
    {
        link: "https://deciduous.darpa.press",
        location: "at deciduous.darpa.press",
        number: 1,
        tagline: (
            <>
                “ What could it have been like now, before it was like this now?
                What is the convolution of this other possible row of nows with
                the falloff of our outside afterwards now? ”
            </>
        ),
        statement:
            "What could it have been like now, before it was like this now? What is the convolution of this other possible row of nows with the falloff of our outside afterwards now?",
        title: "Deciduous",
        type: "A codex",
        year: "from 2017–",
        excerpt: [
            <p className="indent" key="1">
                The first Darpa publication is a codex. It contains an
                illustrated guide to recollecting ways that the Internet isn’t.
                It adopts the form of herbal manuals, intended to describe the
                ameliorative properties of plants. Falling within the Internet
                as it is, <em>Deciduous</em>’s fragmented pages address the
                lassitudes of our technical togetherness&hellip;
            </p>,
            <p className="indent" key="2">
                <a href="https://deciduous.darpa.press">Open ⤑</a>
            </p>,
        ],
        media: [{ type: "iframe", url: "https://deciduous.darpa.press" }],
        items: [
            {
                catno: "DC001.01",
                title: "Deciduous",
                type: "a codex",
                location: "at deciduous.darpa.press",
                url: "https://deciduous.darpa.press",
            },
            {
                catno: "DC001.02",
                title: "‘darpa-press/deciduous’",
                type: "source code",
                location: "at github.com",
                url: "https://github.com/darpa-press/deciduous",
            },
        ],
    },
    {
        link: "https://cedar.darpa.press",
        location: "at cedar.darpa.press",
        number: 2,
        statement:
            "tending to zero; too far gone; too-little-too-late; too quixotic; not worth it; not working; uneconomical or inefficient; starry-eyed; in disrepair superannuated, disobedient",
        tagline: (
            <>
                “ &hellip; tending to zero; too far gone; too-little-too-late;
                too quixotic; not worth it; not working; uneconomical or
                inefficient; starry-eyed; in disrepair; superannuated;
                disobedient &hellip; ”
            </>
        ),
        title: "Darpa–Cedar",
        type: "An anthology",
        year: "from 2018–",
        excerpt: [
            <p className="indent" key="1">
                The second Darpa publication is an anthology of lost causes. New
                entries are added, now and then. Only one is displayed at a
                time; it changes on the decimal hour. The colours of the text
                change daily, according to the animals, tools, grain, pasture,
                trees, roots, flowers, fruits and minerals of the revolutionary
                calendar&hellip;
            </p>,
            <p className="indent" key="2">
                <a href="https://cedar.darpa.press">Open ⤑</a>
            </p>,
        ],
        media: [{ type: "iframe", url: "https://cedar.darpa.press" }],
        items: [
            {
                catno: "DC002.01",
                title: "Darpa–Cedar",
                type: "an anthology",
                location: "at cedar.darpa.press",
                url: "https://cedar.darpa.press",
            },
            {
                catno: "DC002.02",
                title: "‘darpa-press/darpa-cedar’",
                type: "source code",
                location: "at github.com",
                url: "https://github.com/darpa-press/darpa-cedar",
            },
            {
                catno: "DC002.03",
                title: "Invitation",
                type: "a (semi-open) letter",
                location: "at invite.darpa.press",
                url: "https://invite.darpa.press",
            },
        ],
    },
    {
        link: "#",
        location: "in a cupboard",
        number: 3,
        statement: "a hidden question — Q ⍜ Q ⍜ — at least, hidden for now",
        tagline: (
            <>
                “ &hellip; a hidden question — Q ⍜ Q ⍜ — at least, hidden for
                now &hellip; ”
            </>
        ),
        title: "?",
        type: "A secret",
        year: "from 201?–",
        excerpt: (
            <p className="indent">
                The third Darpa publication is awaiting the occurrence of an
                art-research residency that was cancelled in June 2020, in which
                it would be hidden amongst the participants’ orientation
                show-bags. However, it was prepared for (and in correspondence
                with) the participants of the <em>previous</em> year’s residency
                in mind&hellip;
            </p>
        ),
        media: [
            { type: "image", url: "/img/dc003.01.jpg" },
            { type: "image", url: "/img/dc003.02.jpg" },
        ],
        items: [
            {
                catno: "DC003.01",
                title: "?",
                type: "a secret",
                location: (
                    <>
                        in a office cupboard at Lasalle College / <br />
                        Institute of Contemporary Art, Singapore
                    </>
                ),
            },
        ],
    },
    {
        link: "https://poiesis.darpa.press",
        location: "at poiesis.darpa.press",
        number: 4,
        statement: "Ho - ver o - ver the stress 🎵",
        tagline: <>“ Ho-ver o-ver the stress &hellip; ”</>,
        title: "Poiesis",
        type: "A word processor",
        year: "2019–",
        excerpt: [
            <p className="indent" key="1">
                The fourth Darpa publication is a word processor for poetic
                text. It counts syllables and guesses (imperfectly) at their
                emphasis. This might help you write. While paperwork has
                exploded, there still isn’t enough poetry. Your writing is saved
                locally, so, if you refresh the page or revisit later, you can
                start where you left off&hellip;
            </p>,
            <p className="indent" key="2">
                <a href="https://poiesis.darpa.press">Open ⤑</a>
            </p>,
        ],
        media: [{ type: "iframe", url: "https://poiesis.darpa.press" }],
        items: [
            {
                catno: "DC004.01",
                title: "Poiesis",
                type: "a word processor",
                location: "at poiesis.darpa.press",
                url: "https://poiesis.darpa.press",
            },
            {
                catno: "DC004.02",
                title: "‘darpa-press/poiesis’",
                type: "source code",
                location: "at github.com",
                url: "https://github.com/darpa-press/poiesis",
            },
        ],
    },
    {
        link: "#",
        location: "at home",
        number: 5,
        statement: "Let us have a care we mistake not one thing for another.",
        tagline: (
            <>
                “ Let us have a care we mistake not one thing for another.
                <br />
                &nbsp;Let us have a care we mistake one not thing for another. ”
            </>
        ),
        title: "Encirculars",
        type: "An atlas",
        year: "from 2018–",
        excerpt: (
            <p className="indent">
                The fifth Darpa publication is a picture atlas which gathers
                social forms that led to but turn from the Internet. Its
                individual pages are dispersed, loose-leaf, to contributors of 
                <em>Darpa-Cedar</em>. The form of the pages follow and transform
                Paul Otlet's unfinished{" "}
                <em>Encyclopaedia Universalis Mundaneum</em>, like a
                discorrective mirror. While the atlas is not publicly viewable,
                you can see one of its pages being embroidered in the press's
                office, above&hellip;
            </p>
        ),
        media: [
            {
                type: "video",
                url: "https://video.darpa.press/Sewing.mp4",
            },
            { type: "image", url: "/img/dc005.02.jpg" },
        ],
        items: [
            {
                catno: "DC005.01",
                title: "Encirculars",
                type: "a loose-leaf atlas (25pp)",
                location: "in homes",
            },
            {
                catno: "DC005.02",
                title: "Page template",
                type: "a .jpx file",
                location: "for computerised embroidery machines",
                url: "https://github.com/darpa-press/encirculars-template",
            },
        ],
    },
    {
        link: "https://keyhole.darpa.press",
        location: "at keyhole.darpa.press",
        number: 6,
        statement: "passed instantly, continuously, sideways, through",
        tagline: (
            <>
                “ &hellip; instantly, continuously, sideways, through &hellip; ”
            </>
        ),
        title: "A keyhole",
        type: "An email address",
        year: "from 2019–",
        excerpt: (
            <React.Fragment>
                <p className="indent">
                    The sixth Darpa publication is an email address that opens
                    to a mailing pool. It is unmaintained, but actively receives
                    and conveys anything that is sent to it. You might also
                    think of it as a chain of microservices, like sleepers who
                    wake each other in order&hellip;
                </p>
                <p className="indent">
                    <a href="https://keyhole.darpa.press">Join ⤑</a>
                </p>
            </React.Fragment>
        ),
        media: [
            { type: "iframe", url: "https://keyhole.darpa.press" },
            { type: "image", url: "/img/dc006.02.jpg" },
        ],
        items: [
            {
                catno: "DC006.01",
                title: "A keyhole",
                type: "an email address",
                location: "via a-keyhole@darpa.press",
                url: "mailto:a-keyhole@darpa.press",
            },
            {
                catno: "DC006.02",
                title: "A keyhole / invitation",
                type: "a notice",
                location: "in Jessie Bullivant’s WORMHOLE exhibition at KNULP",
                url: "http://www.knulps.org/wormhole",
            },
            {
                catno: "DC006.03",
                title: "A keyhole / invitation",
                type: "a website",
                location: "at keyhole.darpa.press",
                url: "https://keyhole.darpa.press",
            },
            {
                catno: "DC006.04",
                title: "A keyhole / invitation",
                type: "a greeting card",
                location: "delivered occasionally",
            },
            {
                catno: "DC006.05",
                title: "A keyhole / invitation",
                type: "a rubber stamp",
                location: "applied onto other endpages & documents",
            },
        ],
    },
    {
        link: "https://teapot.darpa.press",
        location: "via teapot.darpa.press",
        number: 7,
        statement: "permanently movingly permentantly moving permanently",
        tagline: (
            <>“ &hellip; permanently movingly permentantly moving &hellip; ”</>
        ),
        title: "Teapot",
        type: "A redirect",
        year: "from 2021—",
        excerpt: (
            <React.Fragment>
                <p className="indent">
                    The seventh Darpa publication is a primitive redirector. You
                    won’t so much see Teapot while you read it, and you might
                    land in one or another artificial grove, but you might come
                    to terms gradually with a strict, blank schedule that
                    doesn’t make itself known&hellip;
                </p>
            </React.Fragment>
        ),
        media: [{ type: "iframe", url: "https://teapot.darpa.press" }],
        items: [
            {
                catno: "DC007.01",
                title: "Teapot",
                type: "a redirect",
                location: "via teapot.darpa.press",
                url: "https://teapot.darpa.press",
            },
        ],
    },
    {
        link: "https://misolla.darpa.press",
        location: "at misolla.darpa.press",
        number: 8,
        statement: "Or if the well and equal and never",
        tagline: (
            <>
                “ &hellip; or if the good (or well) and equal and never
                &hellip;”
            </>
        ),
        title: "Mi-sol-la",
        type: "An instrument",
        year: "from 2020—",
        excerpt: (
            <React.Fragment>
                <p className="indent">
                    The eighth Darpa publication is an instrument that turns
                    text into music by way of Solresol, a language fabricated in
                    the 19th century to act as a peacemaker between other
                    languages. Solresol is based on the eight-note tonal scale,
                    and it is very difficult to speak or comprehend.{" "}
                </p>
            </React.Fragment>
        ),
        media: [{ type: "iframe", url: "https://misolla.darpa.press" }],
        items: [
            {
                catno: "DC008.01",
                title: "Mi-sol-la",
                type: "an instrument",
                location: "at misolla.darpa.press",
                url: "https://misolla.darpa.press",
            },
            {
                catno: "DC008.02",
                title: "From here / to Mundaneum",
                type: "a livery",
                location: "on a 2000 Honda HR-V",
                url: "",
            },
        ],
    },
    {
        link: "https://retiring.darpa.press",
        location: "at retiring.darpa.press",
        number: 9,
        statement:
            "We worked downward from our difficulties to discover the basic principles at the root of our unhappiness",
        tagline: (
            <>
                “We worked downward from our difficulties to discover the basic
                principles at the root of our unhappiness &hellip; ”
            </>
        ),
        title: "Retiring",
        type: "A negation",
        year: "from 2022—",
        excerpt: (
            <React.Fragment>
                <p className="indent">
                    The ninth Darpa publication is a chapbook which assembles
                    itself in reaction. Every time a new Internet standard is
                    published, one of these is published, also: short recipes
                    for negations found or anticipated in the ever-growing
                    corpus of how things should work.
                </p>
            </React.Fragment>
        ),
        media: [{ type: "iframe", url: "https://retiring.darpa.press" }],
        items: [
            {
                catno: "DC009.01",
                title: "Retiring",
                type: "a negation",
                location: "at retiring.darpa.press",
                url: "https://retiring.darpa.press",
            },
        ],
    },
];

export default books;

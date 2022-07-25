import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useInterval from "@use-it/interval";
import styled from "styled-components";
import arrayChunk from "array-chunk";

import books from "data/books";
import SecretTitle from "components/SecretTitle/SecretTitle";

const Row = styled(Link)`
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

const Cell = styled.div`
    flex: 0 1 25%;
    &:nth-child(1) {
        flex: 0 0 1.5rem;
    }
    &:nth-child(2) {
    }
`;

const isCellHovering = (currentRow, currentCell, totalElements, seconds) => {
    const cellNumber = currentRow * 4 + currentCell;
    const cellToShow = seconds % totalElements;
    const secondCellToShow = (seconds / 2) % totalElements;
    return cellNumber === cellToShow || cellNumber === secondCellToShow;
};

const BookRow = ({
    title,
    number,
    type,
    year,
    location,
    isBlurred,
    isHovering,
    statement,
    replaceLine,
    setIsHovering,
    setStatement,
    totalElements,
    currentRow,
    seconds,
}) => {
    return (
        <Link
            className="md:flex block md:flex-row justify-start pb-8 md:pb-4 md:py-4 px-0 md:h-10 transition-all hover:filter-none !important"
            style={{
                filter: isBlurred ? "blur(10px)" : "none",
            }}
            to={`/v/${number}`}
            key={title}
            onMouseEnter={() => {
                setIsHovering(true);
                setStatement(prepStatement(statement));
            }}
        >
            <Cell>{number}</Cell>
            <Cell>
                {isHovering &&
                isCellHovering(currentRow, 1, totalElements, seconds) ? (
                    replaceLine[0]
                ) : title === "?" ? (
                    <SecretTitle />
                ) : (
                    <em>{title}</em>
                )}
            </Cell>
            <Cell>
                {isHovering &&
                isCellHovering(currentRow, 2, totalElements, seconds)
                    ? replaceLine[1]
                    : type}
            </Cell>
            <Cell>
                {isHovering &&
                isCellHovering(currentRow, 3, totalElements, seconds)
                    ? replaceLine[2]
                    : year}
            </Cell>
            <Cell>
                {isHovering &&
                isCellHovering(currentRow, 4, totalElements, seconds)
                    ? replaceLine[3]
                    : location}
            </Cell>
        </Link>
    );
};

const prepStatement = (statement) => {
    const splitArray = statement.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g);
    const repeatedArray = Array.from({ length: 16 }).fill(splitArray).flat();
    return arrayChunk(repeatedArray, 4);
};

const delay = 333.33333333333;
const BookList = () => {
    const location = useLocation();
    const [isHovering, setIsHovering] = useState(true);
    const [statement, setStatement] = useState(
        prepStatement("Hello, this is a test of the statement test.")
    );
    const [seconds, setSeconds] = useState(Math.floor(new Date() / delay));
    useInterval(() => {
        setSeconds(Math.floor(new Date() / delay));
    }, delay);

    const findId = location.pathname.match(/\/v\/(\d.*)/);
    const id = findId && Number(findId[1]);

    return (
        <div
            className="md:flex md:flex-col flex-1 justify-around mt-8"
            onMouseLeave={() => setIsHovering(false)}
        >
            {[...books].reverse().map((book, index) => (
                <BookRow
                    key={book.number}
                    {...book}
                    isBlurred={id && id !== book.number}
                    isHovering={isHovering}
                    replaceLine={statement[index]}
                    setIsHovering={setIsHovering}
                    setStatement={setStatement}
                    totalElements={books.length * 4}
                    currentRow={index}
                    seconds={seconds}
                />
            ))}
        </div>
    );
};

export default React.memo(BookList);

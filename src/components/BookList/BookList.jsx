import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useInterval from "@use-it/interval";
import styled from "styled-components";
import arrayChunk from "array-chunk";

import books from "data/books";
import SecretTitle from "components/SecretTitle/SecretTitle";

const Table = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    margin-top: 2rem;
`;

const Row = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem 0;
    height: 2.5rem;
    transition: filter 0.125s ease;
    filter: ${(props) => (props.isBlurred ? "blur(10px)" : "none")};
    &:hover {
        filter: none;
    }
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
        <Row
            to={`/v/${number}`}
            key={title}
            isBlurred={isBlurred}
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
        </Row>
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
        <Table onMouseLeave={() => setIsHovering(false)}>
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
        </Table>
    );
};

export default React.memo(BookList);

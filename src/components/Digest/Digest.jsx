import React from "react";
import styled from "styled-components";
import Mailchimp from "react-mailchimp-form";

const Table = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    margin-top: 2rem;
`;

const Form = styled.div`
    padding: 2.5rem 0;
    h1 {
        margin-bottom: 1rem;
    }
    input {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        font-size: 0.8rem;
        padding: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 20em;
    }
    button {
        cursor: pointer;
        font-size: 0.8rem;
        padding: 0.5rem;
        background: none;
        border: 0;
        color: rgba(0, 0, 0, 0.8);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        @media screen and (max-width: 767px) {
            padding: 0.75rem 0;
        }
    }
`;

const Digest = () => {
    return (
        <Table>
            <Form>
                <h1>
                    To receive an occasional digest
                    <br /> of our publishing,
                </h1>
                <Mailchimp
                    action="https://press.us20.list-manage.com/subscribe/post?u=ec5dde8a3c4f18d5e199d0350&amp;id=5871c0aff4"
                    fields={[
                        {
                            name: "EMAIL",
                            placeholder: "enter your email address",
                            type: "email",
                            required: true,
                        },
                    ]}
                    messages={{
                        sending: "Sending...",
                        success: "Thank you for subscribing to the digest.",
                        error: "An unexpected internal error has occurred.",
                        empty: "You must write an e-mail.",
                        duplicate: "You are already subscribed to the digest",
                        button: "Send ➳",
                    }}
                />
            </Form>
        </Table>
    );
};

export default Digest;

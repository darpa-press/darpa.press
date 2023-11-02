import React from "react";
import styled from "styled-components";

import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

import emails from "../../data/emails";

const Form = styled.div`
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
    }
    button {
        cursor: pointer;
        background: none;
        border: 0;
        color: rgba(0, 0, 0, 0.8);
        @media screen and (max-width: 767px) {
            padding: 0.75rem 0;
        }
    }
`;

const Digest = () => {
    const url =
        "https://press.us20.list-manage.com/subscribe/post?u=ec5dde8a3c4f18d5e199d0350&amp;id=5871c0aff4";
    const { loading, error, success, message, handleSubmit } =
        useMailChimpForm(url);
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: "",
    });

    return (
        <div className="flex-1 pt-8">
            <Form>
                <h1>
                    To receive an occasional digest
                    <br /> of our publishing,
                </h1>
                <form
                    className="flex flex-col md:flex-row"
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleSubmit(fields);
                    }}
                >
                    <input
                        id="EMAIL"
                        autoFocus
                        type="email"
                        value={fields.EMAIL}
                        onChange={handleFieldChange}
                        placeholder="enter your email address"
                        className="max-md:w-full md:max-w-[20rem]"
                    />
                    <button className="px-4 max-md:text-left">Send ➳</button>
                </form>
                <div>
                    {loading && "Sending..."}
                    {error && message}
                    {success && "Thank you for subscribing to the digest."}
                </div>
            </Form>
            <div className="pt-12 pb-4">Recently</div>
            <div className="flex flex-col gap-4">
                {emails.map((email) => (
                    <div className="" key={email.date}>
                        <div>
                            <em>{email.title}</em>{" "}
                            <div className="float-right">({email.date})</div>
                        </div>
                        <div></div>
                        <div>{email.summary}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Digest;

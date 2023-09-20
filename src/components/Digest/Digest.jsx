import React from "react";
import styled from "styled-components";

import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

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
                    />
                    <button>Send ➳</button>
                </form>
                <div>
                    {loading && "Sending..."}
                    {error && message}
                    {success && "Thank you for subscribing to the digest."}
                </div>
            </Form>
        </div>
    );
};

export default Digest;

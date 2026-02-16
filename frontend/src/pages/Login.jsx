import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // For now, just log the values
        // console.log("Email:", email);
        // console.log("Password:", password);
        let apiUrl = "http://localhost:5000/api/auth/login";
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        console.log("data", data);


    };

    return (
        <>
            <form className="max-w-sm mx-auto mt-40" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="email-alternative"
                        className="block mb-2.5 text-sm font-medium text-heading"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email-alternative"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password-alternative"
                        className="block mb-2.5 text-sm font-medium text-heading"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password-alternative"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
                        placeholder="••••••••"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <label htmlFor="remember-alternative" className="flex items-center h-5">
                        <input
                            id="remember-alternative"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                            required
                        />
                        <p className="ms-2 text-sm font-medium text-heading select-none">
                            I agree with the{" "}
                            <a href="#" className="text-fg-brand hover:underline">
                                terms and conditions
                            </a>
                            .
                        </p>
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-blue-400"
                >
                    Submit
                </button>
                <div>
                <Link to="/signup" className="font-bold text-pink-400">New to fashionCart? Create an account</Link>

                </div>    
            </form>
            
        </>
    );
}
export default Login
"use client";
import localFont from "next/font/local";
import "./globals.css";
import ParentNav from "./src/Parentlayout";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import SignInForm from "./auth/signin";
import SignUpForm from "./auth/signup";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    // If the token exists, close the modal
    setSignInOpen(!token);
  }, []); // Only run on initial render

  const closeSignIn = () => setSignInOpen(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <ParentNav>
            {/* Overlay logic */}
            <div
              className={`relative ${
                isSignInOpen ? "opacity-30" : "opacity-100"
              }`}
            >
              {children}
            </div>

            {/* Sign In Modal */}
            {isSignInOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-slate-300 p-6 rounded shadow-lg w-96">
                  <div>
                    {toggleForm ? <SignInForm /> : <SignUpForm />}
                    <footer>
                      <h4 className="text-center text-md">
                        You don&apos;t have an account yet?{" "}
                        <span
                          className="text-blue-600 cursor-pointer"
                          onClick={() => setToggleForm(!toggleForm)}
                        >
                          Click here
                        </span>
                      </h4>
                    </footer>
                  </div>

                  <button
                    onClick={closeSignIn}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </ParentNav>
        </Provider>
      </body>
    </html>
  );
}

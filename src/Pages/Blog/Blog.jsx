import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-100 md:py-12">
      <div className="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
        <h1 className="group mx-auto block max-w-sm gap-3 dark:dark:bg-gray-900 sm:max-w-full lg:grid lg:grid-cols-12">
          <img
            src="https://i.ibb.co/7N5jj8M/file.jpg"
            alt=""
            className="h-64 w-full rounded object-cover dark:dark:bg-gray-500 sm:h-96 lg:col-span-7"
          />
          <div className="space-y-2 p-6 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <span className="text-xs dark:dark:text-gray-400">
              November 9, 2022
            </span>
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
            </p>
          </div>
        </h1>
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <h2 className="group mx-auto max-w-sm dark:dark:bg-gray-900">
            <img
              role="presentation"
              className="h-44 w-full rounded object-cover dark:dark:bg-gray-500"
              src="https://i.ibb.co/CQSFJJf/maxresdefault.jpg"
              alt=""
            />
            <div className="space-y-2 p-6">
              <h3 className="text-2xl font-semibold">
                Difference between SQL and NoSQL
              </h3>
              <span className="text-xs dark:dark:text-gray-400">
                November 09, 2022
              </span>
              <p>
                SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called
                RDBMS or Relational Databases, whereas NoSQL is a Non-relational
                or Distributed Database. Comparing SQL vs NoSQL databases, SQL
                databases are table-based databases, whereas NoSQL databases can
                be document-based, key-value pairs, and graph databases.
              </p>
            </div>
          </h2>
          <h2 className="group mx-auto max-w-sm dark:dark:bg-gray-900">
            <img
              role="presentation"
              className="h-44 w-full rounded object-cover dark:dark:bg-gray-500"
              src="https://bit.ly/3DSxKsf"
              alt=""
            />
            <div className="space-y-2 p-6">
              <h3 className="text-2xl font-semibold">
                What is JWT, and how does it work?
              </h3>
              <span className="text-xs dark:dark:text-gray-400">
                November 09, 2022
              </span>
              <p className="grid grid-cols-1">
                <span className="text-lg font-semibold">
                  JSON Web Token, is an open standard used to share security
                  information between two parties — a client and a server.{" "}
                </span>
                <span>
                  JWT differ from other web tokens in that they contain a set of
                  claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted.
                </span>
              </p>
            </div>
          </h2>
          <h2 className="group mx-auto max-w-sm dark:dark:bg-gray-900">
            <img
              role="presentation"
              className="h-44 w-full rounded object-cover dark:dark:bg-gray-500"
              src="https://i.ibb.co/j43fmLV/Java-Script-vs-Node-JS-1.png"
              alt=""
            />
            <div className="space-y-2 p-6">
              <h3 className="text-2xl font-semibold ">
                What is the difference between javascript and NodeJS?
              </h3>
              <span className="text-xs dark:dark:text-gray-400">
                November 09, 2022
              </span>
              <p className="grid grid-cols-1">
                <span className="text-lg font-semibold">JavaScript</span>
                <span>
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed. It
                  is an interpreted scripting language, and the code can only be
                  executed and run in a web browser.
                </span>
                <span className="text-lg font-semibold">Node Js</span>
                <span>
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.Node.js is
                  a cross-platform, open-source JavaScript runtime environment
                  that enables JavaScript to be run on the server.
                </span>
              </p>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Blog;

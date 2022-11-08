import React from "react";

const HomeFAQ = () => {
  return (
    <section className="my-6 rounded-md bg-gray-600 text-gray-100">
      <div className="container mx-auto flex flex-col justify-center px-4 py-8 md:p-8">
        <h2 className="mb-8 text-center text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="w-full rounded-lg border">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What Is a Lawyer?
            </summary>
            <p className="ml-4 -mt-4 px-4 py-6 pt-0 text-gray-400">
              A lawyer provides legal advice and counsel on behalf of someone
              involved in a legal dispute or legal issue. Also called attorneys
              or counselors, lawyers typically represent people before a
              governing body such as a court by conducting legal research,
              gathering relevant documents and witnesses, drafting written
              briefs, and presenting oral arguments.{" "}
            </p>
          </details>
          <details className="w-full rounded-lg border">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How Much Do Lawyers Cost?
            </summary>
            <p className="ml-4 -mt-4 px-4 py-6 pt-0 text-gray-400">
              It depends. Attorneys typically charge by the hour, based on their
              level of experience and other factors, but sometimes they charge a
              flat fee for certain transactions. While a one- or two-hour visit
              might cost a few hundred dollars sometimes the first consultation
              is free, an ongoing legal dispute or issue can cost thousands or
              tens of thousands of dollars. On the other hand, some personal
              injury attorneys don't collect a dime unless you win your case.{" "}
            </p>
          </details>
          <details className="w-full rounded-lg border">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Where Can I Find a Lawyer?
            </summary>
            <p className="ml-4 -mt-4 px-4 py-6 pt-0 text-gray-400">
              Lawyers often advertise their services, and you can typically find
              one in phone books and online directories. Visit FindLaw's
              extensive lawyer directory to search for a lawyer by name,
              location, law firm, or legal issue.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;

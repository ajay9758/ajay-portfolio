import React from "react";

export default function ExperienceCard({
  title,
  company,
  date,
  website = "#",
}) {
  return (
    <>
      <div className="mb-0 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <a href={website} target="_blank">
          <h5 className="mb-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {company}
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </h5>
        </a>
        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
          {title}
        </p>
        <p className="text-sm font-medium text-blue-700 hover:underline focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-blue-500 dark:focus:ring-blue-800">
          Duration : {date}
        </p>
      </div>
    </>
  );
}

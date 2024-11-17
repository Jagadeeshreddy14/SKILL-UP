"use client";

import { useState } from "react";
import Link from "next/link";

export default function AcademicsPage() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const branches = ["CSE", "ECE", "MAE", "MNC"];
  const semesters = [
    "Semester I",
    "Semester II",
    "Semester III",
    "Semester IV",
    "Semester V",
    "Semester VI",
    "Semester VII",
  ];

  const getSubjects = (branch, semester) => {
    const subjects = {
      CSE: {
        "Semester I": [
          {
            name: "Engineering Mathematics-I (MA101)",
            bookLink: "https://example.com/book1",
          },
          {
            name: "Engineering Physics (PH101)",
            bookLink: "https://example.com/book2",
          },
          {
            name: "Electrical Sciences (EC101)",
            bookLink: "https://example.com/book3",
          },
          {
            name: "Computer Programming (CS101)",
            bookLink: "https://example.com/book4",
          },
          {
            name: "Professional Communication (HS101)",
            bookLink: "https://example.com/book5",
          },
          {
            name: "Engineering Graphics (ME102)",
            bookLink: "https://example.com/book6",
          },
        ],
        "Semester II": [
          {
            name: "Engineering Mathematics-II (MA102)",
            bookLink: "https://example.com/book7",
          },
          {
            name: "Data Structures & Algorithms (CS102)",
            bookLink: "https://example.com/book8",
          },
          {
            name: "Digital Design (EC102)",
            bookLink: "https://example.com/book9",
          },
          {
            name: "Semiconductor Devices and Circuits (EC104)",
            bookLink: "https://example.com/book10",
          },
          {
            name: "Engineering Materials (ME103)",
            bookLink: "https://example.com/book11",
          },
        ],
        // Add more semesters and subjects for CSE
      },
      ECE: {
        "Semester I": [
          {
            name: "Engineering Mathematics-I (MA101)",
            bookLink: "https://example.com/book1",
          },
          {
            name: "Engineering Physics (PH101)",
            bookLink: "https://example.com/book2",
          },
          {
            name: "Electrical Sciences (EC101)",
            bookLink: "https://example.com/book3",
          },
          {
            name: "Computer Programming (CS101)",
            bookLink: "https://example.com/book4",
          },
          {
            name: "Professional Communication (HS101)",
            bookLink: "https://example.com/book5",
          },
          {
            name: "Engineering Graphics (ME102)",
            bookLink: "https://example.com/book6",
          },
        ],
        "Semester II": [
          {
            name: "Engineering Mathematics-II (MA102)",
            bookLink: "https://example.com/book7",
          },
          {
            name: "Data Structures & Algorithms (CS102)",
            bookLink: "https://example.com/book8",
          },
          {
            name: "Digital Design (EC102)",
            bookLink: "https://example.com/book9",
          },
          {
            name: "Semiconductor Devices and Circuits (EC104)",
            bookLink: "https://example.com/book10",
          },
          {
            name: "Engineering Materials (ME103)",
            bookLink: "https://example.com/book11",
          },
        ],
        // Add more semesters and subjects for ECE
      },
      // Add MAE, MNC similarly
    };

    return subjects[branch]?.[semester] || [];
  };

  return (
    <div className="p-6 bg-white max-w-3xl mx-auto rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        College Academics
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Select your branch and semester to view available subjects and books.
      </p>

      <label
        htmlFor="branch"
        className="block text-lg font-semibold text-gray-800 mb-2"
      >
        Choose Branch:
      </label>
      <select
        id="branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        className="w-full max-w-xs p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">--Select Branch--</option>
        {branches.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      {branch && (
        <>
          <label
            htmlFor="semester"
            className="block text-lg font-semibold text-gray-800 mb-2"
          >
            Choose Semester:
          </label>
          <select
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full max-w-xs p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select Semester--</option>
            {semesters.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
        </>
      )}

      {branch && semester && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Subjects for {branch} - {semester}
          </h2>
          <ul className="list-none p-0">
            {getSubjects(branch, semester).map((subject, index) => (
              <li key={index} className="mb-3">
                <div className="flex items-center space-x-4">
                  <Link
                    href={`/courses/pages/${branch.toLowerCase()}/${semester.toLowerCase()}/${subject.name
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    legacyBehavior
                  >
                    <a className="text-blue-600 text-lg font-medium hover:text-blue-800">
                      {subject.name}
                    </a>
                  </Link>
                  <a
                    href={subject.bookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 underline hover:text-gray-700"
                  >
                    [Book Link]
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

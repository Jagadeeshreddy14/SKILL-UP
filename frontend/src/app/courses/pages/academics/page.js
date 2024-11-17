"use client";

import { useState } from "react";

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
            bookLink:
              "https://wp.kntu.ac.ir/dfard/ebook/em/Advanced%20Engineering%20Mathematics%2010th%20Edition.pdf",
          },
          {
            name: "Engineering Physics (PH101)",
            bookLink:
              "http://wigner.elte.hu/koltai/griffiths_quantum_mechanics_2nd_edition.pdf",
          },
          {
            name: "Electrical Sciences (EC101)",
            bookLink:
              "https://www.candle.center/_files/ugd/defd98_c60dd719383846e8833d5017e396bd3e.pdf",
          },
          {
            name: "Computer Programming (CS101)",
            bookLink:
              "https://www.cimat.mx/ciencia_para_jovenes/bachillerato/libros/%5BKernighan-Ritchie%5DThe_C_Programming_Language.pdf",
          },
          {
            name: "Professional Communication (HS101)",
            bookLink:
              "https://www.scribd.com/document/492774226/R-C-Sharma-Krishna-Mohan-Business-Correspondence-and-Report-Writing-a-Practical-Approach-to-Business-Technical-Communication-Mc-Graw-Hill-Ind",
          },
          {
            name: "Engineering Graphics (ME102)",
            bookLink:
              "https://soaneemrana.com/onewebmedia/ENGINEERING%20DRAWING%20BY%20N.D%20BHATT.pdf",
          },
        ],
        "Semester II": [
          {
            name: "Engineering Mathematics-II (MA102)",
            bookLink:
              "https://wp.kntu.ac.ir/dfard/ebook/em/Advanced%20Engineering%20Mathematics%2010th%20Edition.pdf",
          },
          {
            name: "Data Structures & Algorithms (CS102)",
            bookLink:
              "https://gnindia.dronacharya.info/IT/3rdSem/Downloads/DataStructure/Books/DATA-STRUCTURE-BOOK-3.pdf",
          },
          {
            name: "Digital Design (EC102)",
            bookLink:
              "https://ia600607.us.archive.org/3/items/DigitalLogicAndComputerDesignByM.MorrisMano2ndEdition/Digital%20Logic%20And%20Computer%20Design%20By%20M.%20Morris%20Mano%20%282nd%20Edition%29.pdf",
          },
          {
            name: "Semiconductor Devices and Circuits (EC104)",
            bookLink:
              "https://s3-us-west-2.amazonaws.com/valpont/uploads/20151124213927/Semiconductor_Device_Fundamentals1.pdf",
          },
          {
            name: "Engineering Materials (ME103)",
            bookLink:
              "https://anupturnedworld.wordpress.com/wp-content/uploads/2016/06/callister-materials-science-and-engineering.pdf",
          },
        ],
        "Semester III": [
          {
            name: "Engineering Mathematics III (MA201)",
            bookLink:
              "https://wp.kntu.ac.ir/dfard/ebook/em/Advanced%20Engineering%20Mathematics%2010th%20Edition.pdf",
          },
          {
            name: "Object Oriented Programming (CS203)",
            bookLink:
              "https://www.anandinstitute.org/pdf/Balaguruswamy%20Object%20Oriented%20Programming%20With%20C++%20Fourth%20Edition%20(3).pdf",
          },
          {
            name: "Discrete Mathematics (CS202)",
            bookLink:
              "https://vijayrampeesa.wordpress.com/wp-content/uploads/2016/02/dms-txt-book.pdf",
          },
          {
            name: "Design and Analysis of Algorithms (CS201)",
            bookLink:
              "http://139.59.56.236/bitstream/123456789/106/1/Introduction%20to%20Algorithms%20by%20Thomas%20%20H%20Coremen.pdf",
          },
          {
            name: "Computer Organization and Architecture (CS207)",
            bookLink:
              "https://www.cse.iitd.ac.in/~rijurekha/col216/edition5.pdf",
          },
          // {
          //   name: "Management Concepts and Technology (HS201)",
          //   bookLink: "https://example.com/book11",
          // },
        ],
        "Semester IV": [
          {
            name: "Operating Systems (CS206)",
            bookLink:
              "https://scs.dypvp.edu.in/documents/e-books/OS/Operating_System_Concepts_8th_EditionA4.pdf",
          },
          {
            name: "Formal Language and Automata Theory (CS205)",
            bookLink:
              "https://www-2.dc.uba.ar/staff/becher/Hopcroft-Motwani-Ullman-2001.pdf",
          },
          {
            name: "Microprocessor and Interfacing (EC208)",
            bookLink:
              "https://adityaeeeb.weebly.com/uploads/4/2/0/0/42007913/mpmc_textbook_godse.pdf",
          },
          {
            name: "Database Management Systems (CS204)",
            bookLink:
              "https://people.vts.su.ac.rs/~peti/Baze%20podataka/Literatura/Silberschatz-Database%20System%20Concepts%206th%20ed.pdf",
          },
          {
            name: "Probability and Statistics (CS203)",
            bookLink:
              "https://tiu-edu.uz/media/books/2024/05/28/1665037283.pdf",
          },
        ],
        "Semester V": [
          {
            name: "Digital Signal Processing (EC301)",
            bookLink: "https://example.com/book7",
          },
          {
            name: "Data Communication (CS301)",
            bookLink: "https://example.com/book8",
          },
          {
            name: "Software Engineering (CS302",
            bookLink: "https://example.com/book9",
          },
          {
            name: "IoT and Embedded System (EC304)",
            bookLink: "https://example.com/book10",
          },
          {
            name: "Artificial Intelligence (CS303)",
            bookLink: "https://example.com/book11",
          },
        ],
        "Semester VI": [
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
        "Semester VII": [
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
                <a
                  href={subject.bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-lg font-medium hover:text-blue-800"
                >
                  {subject.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

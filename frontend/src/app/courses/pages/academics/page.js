// import React from 'react'

// function page() {
//   return (
//     <div>
//       Academics
//     </div>
//   )
// }

// export default page


"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function AcademicsPage() {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');

  const branches = ['CSE', 'ECE', 'MAE', 'MNC'];
  const semesters = ['Semester I', 'Semester II', 'Semester III', 'Semester IV', 'Semester V', 'Semester VI', 'Semester VII'];

  const getSubjects = (branch, semester) => {
    // Example structure for subjects; replace with real data as needed
    const subjects = {
      CSE: {
        'Semester I': ['Engineering Mathematics-I (MA101)', 'Engineering Physics (PH101)', 'Electrical Sciences (EC101)', 'Computer Programming (CS101)', 'Professional Communication (HS101)', 'Engineering Graphics (ME102)'],

        'Semester II': ['Engineering Mathematics-II (MA102)', 'Data Structures & Algorithms (CS102)', 'Digital Degign (EC102)', 'Semiconductor Devices and Circuits (EC104)', 'Engineering Materials (ME103)'],

        'Semester III': ['Engineering Mathematics-III (MA201)', 'Object Oriented Programming (CS203)', 'Discrete Mathematics (CS202)', 'Design and Analysis of Algorithms (CS201)', 'Computer Organization and Architecture (CS207)', 'Management Concepts and Technology (HS201)'],

        'Semester IV': ['Operating Systems (CS206)', 'Formal Language and Automata Theory (CS205)', 'Microprocessor and Interfacing (EC208)', 'Database Management Systems (CS204)', 'Probability and Statistics (MA203)'],

        'Semester V': ['Digital Signal Processing (EC301)', 'Data Communication (CS301)', 'Software Engineering (CS302)', 'IoT and Embedded System (EC304)', 'Artificial Intelligence  (CS303)'],

        'Semester VI': ['Compiler Design (CS304)', 'Computer Networks (CS305)', 'Computer Graphics (CS306)', 'Machine Learning (CS307)', 'Environmental Sciences & Green Technology (ME306)'],
        // Add more semesters and subjects
      },
      ECE: {
        'Semester I': ['Engineering Mathematics-I (MA101)', 'Engineering Physics (PH101)', 'Electrical Sciences (EC101)', 'Computer Programming (CS101)', 'Professional Communication (HS101)', 'Engineering Graphics (ME102)'],

        'Semester II': ['Engineering Mathematics-II (MA102)', 'Data Structures & Algorithms (CS102)', 'Digital Degign (EC102)', 'Semiconductor Devices and Circuits (EC104)', 'Engineering Materials (ME103)'],

        'Semester III': ['Engineering Mathematics-III (MA201)', 'Object Oriented Programming (CS203)', 'Analog Communication (EC207)', 'Electromagnetic Theory (EC201)', 'Measurement & Instrumentation (EC209)', 'Management Concepts and Technology (HS201)'],

        'Semester IV': ['Analog Electronics (EC203)', 'Digital Communication (EC204)', 'Microprocessor and Interfacing (EC208)', 'Signals and Systems (EC202)', 'Probability and Statistics (MA203)'],

        'Semester V': ['Digital Signal Processing (EC301)', 'Control Systems (EC302)', 'Introduction to VLSI Design (EC303)', 'IoT and Embedded System (EC304)', 'Artificial Intelligence  (CS303)'],

        'Semester VI': ['Antenna & Microwave Engineering (EC305)', 'Optical Communication & Networks (EC306)', 'Computer Vision and Image Processing (EC307)', 'Recent Trends in Wireless Communication (EC308)', 'Environmental Sciences & Green Technology (ME306)'],
        // Add more semesters and subjects
      },
      MAE: {
        'Semester I': ['Engineering Mathematics-I (MA101)', 'Engineering Physics (PH101)', 'Electrical Sciences (EC101)', 'Computer Programming (CS101)', 'Professional Communication (HS101)', 'Engineering Graphics (ME102)'],

        'Semester II': ['Engineering Mathematics-II (MA102)', 'Data Structures & Algorithms (CS102)', 'Digital Degign (EC102)', 'Semiconductor Devices and Circuits (EC104)', 'Engineering Materials (ME103)'],

        'Semester III': ['Engineering Mathematics-III (MA201)', 'Solid Mechanics (ME201)', 'Management Concepts and Technology (HS201)', 'Object Oriented Programming (CS203)', 'Thermodynamics (ME202)', 'Electrical Machine (ME203)'],

        'Semester IV': ['Analog Electronics (EC203)', 'Design of Machine Elements (ME204)', 'Kinematics of Machines (ME205)', 'Manufacturing Science (ME206)', 'Probability and Statistics (MA203)', 'Fluid Mechanics (ME207)'],

        'Semester V': ['Digital Signal Processing (EC301)', 'Control Systems (EC302)', 'Dynamics of Machinery (ME301)', 'IoT and Embedded System (EC304)', 'Artificial Intelligence  (CS303)', 'Sensors and Actuators (ME302)'],

        'Semester VI': ['Mechatronics and Automation (ME303)', 'Machine Learning (CS307)', 'Environmental Sciences & Green Technology (ME306)'],
        // Add more semesters and subjects
      },
      // Repeat for ECE, MAE, MNC with corresponding semesters and subjects
    };

    return subjects[branch]?.[semester] || [];
  };

  return (
    <div className="p-6 bg-white max-w-3xl mx-auto rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">College Academics</h1>
      <p className="text-lg text-center text-gray-600 mb-6">Select your branch and semester to view available subjects and books.</p>

      <label htmlFor="branch" className="block text-lg font-semibold text-gray-800 mb-2">Choose Branch:</label>
      <select
        id="branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        className="w-full max-w-xs p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">--Select Branch--</option>
        {branches.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      {branch && (
        <>
          <label htmlFor="semester" className="block text-lg font-semibold text-gray-800 mb-2">Choose Semester:</label>
          <select
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full max-w-xs p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select Semester--</option>
            {semesters.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </>
      )}

      {branch && semester && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subjects for {branch} - {semester}</h2>
          <ul className="list-none p-0">
            {getSubjects(branch, semester).map((subject, index) => (
              <li key={index} className="mb-3">
                <Link
                  href={`/courses/pages/${branch.toLowerCase()}/${semester.toLowerCase()}/${subject.toLowerCase().replace(/ /g, '-')}`}
                  legacyBehavior
                >
                  <a className="text-blue-600 text-lg font-medium hover:text-blue-800">{subject}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

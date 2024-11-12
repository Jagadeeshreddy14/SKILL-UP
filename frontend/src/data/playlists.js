// src/data/playlists.js
const playlists = [
    {
      id: 'introduction',
      title: 'Installing VS Code',
      description: 'Installing VS Code & How Websites Work',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-1', url: 'tVzUXW6siu0?si=hMHSY2r_uoO7pZq3', title: 'Installing VS Code & How Websites Work', watched: false}, // Video IDs only
      ],
    },

    {
      id: 'html',
      title: 'HTML 5',
      description: 'Understanding HTML and becoming familier to it',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-2', url: 'kJEsTjH5mVg?si=ni2Sgh8HYe_Ce8DF', title: 'Your First HTML Website', watched: false},
        {id: 'video-3', url: 'BGeDBfCIqas?si=FV4iWFknZHdcbe-d', title: 'Basic Structure of an HTML Website', watched: false},
        {id: 'video-4', url: 'nXba2-mgn1k?si=iGE3ftjTwQ9L8yDM', title: 'Heading, Paragraphs and Links', watched: false},
        {id: 'video-5', url: '1BsVhumGlNc?si=E1b4UvYXdH3px7Lw', title: 'Image, Lists, and Tables in HTML', watched: false},
        {id: 'video-6', url: 'CyRlWlaJnTY?si=nMl7q4o6vEHYrTuE', title: 'SEO and Core Web Vitals in HTML', watched: false},
        {id: 'video-7', url: 'tLBlhp0SA_0?si=MrxxpXBiiSRQl60g', title: 'Forms and input tags in HTML', watched: false},
        {id: 'video-8', url: 'vnnlUCLfn6I?si=eCTW5UU4wErn2EaK', title: 'Inline & Block Elements in HTML', watched: false},
        {id: 'video-9', url: 'vlAWzsGd-Yk?si=VpsvIicW1saYJyX0', title: 'Id & Classes in HTML', watched: false},
        {id: 'video-10', url: 'XZwBNDGuWGU?si=ODE4lytZ1w2NlK2N', title: 'Video, Audio & Media in HTML', watched: false},
        {id: 'video-11', url: 'fhoDRB53DwY?si=XYrxhGFywhoM8Q2p', title: 'Semantic Tags  in HTML', watched: false},
        {id: 'video-12', url: '5xFRg_TzlAg?si=eLFmz36PIkf6Boav', title: 'Exercise 1 - Pure HTML Media Player', watched: false},
        {id: 'video-13', url: 'cvsbHZcDx8w?si=gD196-hCrk11HYS0', title: 'Entities, Code tag and more on HTML', watched: false},
      ],
    },

    {
      id: 'css',
      title: 'CSS 3',
      description: 'Working with CSS',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-14', url: '1dkfuga2_Ps?si=HaHrvvyvjpw1JAf2', title: 'Introduction to CSS', watched: false},
        {id: 'video-15', url: '-XwZpYIyCEA?si=vFPXb7bYzEzpjjIG', title: 'Inline, Internal & External CSS', watched: false},
        {id: 'video-16', url: 'anGMeDGvZhw?si=OwwZkXbEmKu5sjvn', title: 'Exercise 1 - Solution & Shoutouts', watched: false},
        {id: 'video-17', url: '1cEG1T8beO4?si=J8s9v5IGQNi15tJz', title: 'CSS Selectors MasterClass', watched: false},
        {id: 'video-18', url: 'Xrxd6cEajhM?si=3Xs07NjP0Olrs5HR', title: 'CSS Box Model - Margin, Padding & Borders', watched: false},
        {id: 'video-19', url: 'aFicd4-YTfo?si=LBPrBYdHKVBf2QRD', title: 'CSS Fonts, Text & Color Properties', watched: false},
        {id: 'video-20', url: '4aBolpJoutw?si=MZXFlyhJjxLjMXRk', title: 'Exercise 2 - CSS Challenge', watched: false},
        {id: 'video-21', url: 'uTcpbPMZlFE?si=RJQEfDwu2oJHLRnw', title: 'CSS Specificity & Cascade', watched: false},
        {id: 'video-22', url: 'nkaAJYfRDVk?si=m-ziB1ZkWHvq_-JZ', title: 'CSS Sizing Units - px, rem, em, vh, vw, % & more', watched: false},
        {id: 'video-23', url: 'hRHV5cjEB1w?si=ggI2Xk5uWlxyXlyZ', title: 'CSS Display Property', watched: false},
        {id: 'video-24', url: 'BZJcNU648Tc?si=p8shCcqaH0VhFgNc', title: 'CSS Shadows and Outlines', watched: false},
        {id: 'video-25', url: 'ZIofkptpXO8?si=svnPelhYLSMp72Ie', title: 'Styling Lists using CSS', watched: false},
        {id: 'video-26', url: 'ntlawluDB-c?si=oE6rOTpCR1ahQTi0', title: 'CSS Overflow Property', watched: false},
        {id: 'video-27', url: 'g1HJ65p5YdI?si=q-RuJvkbU_5gzspS', title: 'Exercise 2 - Solutions and Shoutouts', watched: false},
        {id: 'video-28', url: 'cOw6tgH6P20?si=rGfl_JPEuqQXO0jk', title: 'CSS Position Property', watched: false},
        {id: 'video-29', url: 'nm3HrrUuz50?si=Ayo3Mf6zfSrMOgkX', title: 'Exercise 3 - Design this Card', watched: false},
        {id: 'video-30', url: 'ovRU9xHfly4?si=vxLP0KeFDnIx7zaE', title: 'CSS Variables', watched: false},
        {id: 'video-31', url: 'eHye3PxH4jU?si=WakR4lO1vDqi_Kf4', title: 'CSS Media Queries', watched: false},
        {id: 'video-32', url: '2PWgbyL3ex8?si=8WoXR5RIZhcanJr9', title: 'Exercise 3 - Solution', watched: false},
        {id: 'video-33', url: '-WN74rN9OPI?si=_sxCTy4f2noKzUA4', title: 'Exercise 4 - Multi Color Website', watched: false},
        {id: 'video-34', url: '6_UoTF7njLM?si=lvHjpovEt-GU0ePY', title: 'CSS Float & Clear', watched: false},
        {id: 'video-35', url: 'L8NfSewTfxY?si=H1cF7WrwmFDqltdj', title: 'More on CSS Selectors', watched: false},
        {id: 'video-36', url: 'n1T6Ve00j24?si=eM_Ro108N4KR7fn5', title: 'Exercise 4 - Solution & Shoutouts', watched: false},
        {id: 'video-37', url: '8Hk4MmO9ZeQ?si=RGjq7uHlAMJ12B4a', title: 'CSS Exercise 5 - Design this Layout', watched: false},
        {id: 'video-38', url: 'DWk2mndNTHY?si=ox1HXC7Vbd--qVyy', title: 'CSS Flexbox - Ultimate MasterClass', watched: false},
        {id: 'video-39', url: '7AgEjgUtho4?si=yYonKTewU9sEgZWw', title: 'CSS Grid - Ultimate MasterClass', watched: false},
        {id: 'video-40', url: '-uVJlSHueYQ?si=GMc9B137RoEWJn8M', title: 'Exercise 5 - Solution & Shoutouts', watched: false},
        {id: 'video-41', url: 'A5fK2Y8-if8?si=JyA3WgFK_e6SHNg3', title: 'Exercise 6 - Navbar using Flexbox', watched: false},
        {id: 'video-42', url: 'GGlzzLTLzxs?si=4qlSRsg6S5JD-gs6', title: 'CSS Transforms MasterClass', watched: false},
        {id: 'video-43', url: 'SC7GCk1OiVo?si=mArY15s4iLTOzRx9', title: 'Exercise 6 - Solution & Shoutouts', watched: false},
        {id: 'video-44', url: 'zJaiTrw-hu8?si=jSGBWuE-BRngHw_r', title: 'Exercise 7 - Design the Grid', watched: false},
        {id: 'video-45', url: 'pHI4PBFM0wY?si=HpCNWYysN7IfbStn', title: 'CSS Transition Property', watched: false},
        {id: 'video-46', url: 'cDLVIoXW-OQ?si=Onm5flMYQqoTJnYD', title: 'CSS Animations', watched: false},
        {id: 'video-47', url: 'yktqxOHOeR4?si=MAKRdT-ggaHqFz5V', title: 'Exercise 7 - Solution & Shoutouts', watched: false},
        {id: 'video-48', url: 'PIC0Ps_Ci-s?si=ks4UgGsRWRvWLKRU', title: 'Exercise 8 - Bounce Animation', watched: false},
        {id: 'video-49', url: 'ognrhoi0C-w?si=EGSI8HugY1hLYgTE', title: 'CSS Object-fit and Object-cover', watched: false},
        {id: 'video-50', url: 'tSzDHVWG1hI?si=P5OGwPDQuTwxqEr2', title: 'CSS Filters | Sigma Web Development Course', watched: false},
        {id: 'video-51', url: 'chYx6vVzWVw?si=HUrvOxh4is5zX6xd', title: 'Exercise 8: Solution & Shoutouts', watched: false},
        {id: 'video-52', url: 'mpJb9GNxdYI?si=NDtO02J5zC3r3BXb', title: 'Figma Basics in One Video', watched: false},
        {id: 'video-53', url: 'ovKVqo-L2EM?si=Mm1qL401yYj7Kmao', title: 'Netflix Clone Using HTML & CSS', watched: false},
      ],
    },

    {
      id: 'js',
      title: 'JavaScript',
      description: 'JavaScript & JS-DOM',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-54', url: 'NrhP53Divco?si=1NM0VjQt4Wcl1i3g', title: 'Introduction to JavaScript & Installing Node.js', watched: false},
        {id: 'video-55', url: 'HGCDMJXS1cc?si=iyeUSvOglNvg5xMv', title: 'JavaScript Variables, Data Types & Objects', watched: false},
        {id: 'video-56', url: '1R4NGtsj7hw?si=PSZqUPPrdxS76iM_', title: 'JavaScript Conditionals: if, else if,  else ladder', watched: false},
        {id: 'video-57', url: 'y32sWmu-RI4?si=nYxke1w_3i0uS8JH', title: 'JavaScript Loops', watched: false},
        {id: 'video-58', url: 'Jtc3j4ZNZEQ?si=YuhodhBzCfznqLAg', title: 'JavaScript Functions', watched: false},
        {id: 'video-59', url: 'OrWmrQ2wrKU?si=VqZdLxCairvHpnA0', title: 'Exercise 9 - Faulty Calculator', watched: false},
        {id: 'video-60', url: 'uJbYqm7W_mA?si=FTO5MmJUazwjnzEg', title: 'JavaScript Strings', watched: false},
        {id: 'video-61', url: 'nQAUGxt2qoU?si=sjAdpykML2ChF00k', title: 'JavaScript Exercise 9 - Solution & Shoutouts', watched: false},
        {id: 'video-62', url: 'FkEbEfHQAZw?si=SzEJbEfMvbldgKAg', title: 'JavaScript Exercise 10 - Business Name Generator', watched: false},
        {id: 'video-63', url: 'IFZZAaiatcQ?si=XQr3AsZRCLnDygNo', title: 'JavaScript Arrays', watched: false},
        {id: 'video-64', url: 'wPWZqewZ4LA?si=pj2RAbx1sYX2N2Dy', title: 'JavaScript Exercise 10 - Solution', watched: false},
        {id: 'video-65', url: 'ccfq9yW-dYU?si=_JnHzAdauA2nt7Tg', title: 'JavaScript Exercise 11 - Calculate the Factorial', watched: false},
        {id: 'video-66', url: 'oxO1Z5L5S4c?si=tDeJz-pqevnS1mJ_', title: 'Document Object Model in JavaScript', watched: false},
        {id: 'video-67', url: '_8o_BiLAgQM?si=pPmyUaqCDG__s88w', title: 'JavaScript DOM - Children, Parent & Sibling Nodes', watched: false},
        {id: 'video-68', url: 'uFbCTidM-xw?si=aksX4WZeW8NzwPLG', title: 'JavaScript -  Selecting by Ids, Classes, and More', watched: false},
        {id: 'video-69', url: 'Xoz_KYfaSkk?si=01jI31cdhp_UDe9N', title: 'JavaScript Exercise 11 - Solution & Shoutouts', watched: false},
        {id: 'video-70', url: 'V4ohRrvu4Ok?si=gMEQSyBR_m1BfBvQ', title: 'JavaScript Exercise 12 - Color the Boxes', watched: false},
        {id: 'video-71', url: 'KB7GzBv5p4Q?si=AKXmfeOt-68hrka5', title: 'Inserting and Removing Elements using JavaScript', watched: false},
        {id: 'video-72', url: 'mCx5aSEK8YE?si=Nt8uwxB-ZKsSGfuT', title: 'JavaScript Exercise 12 - Solution & Shoutouts', watched: false},
        {id: 'video-73', url: 'KtL-SQ20Q0s?si=i80aS0YZM2FQ09Ex', title: 'JavaScript Exercise 13 - Dynamic Website Builder', watched: false},
        {id: 'video-74', url: 'CO_DAXswOrc?si=otpB7MUbhZQqxmPs', title: 'Events, Event Bubbling, setInterval & setTimeout', watched: false},
        {id: 'video-75', url: '9JaDBYPmiJ0?si=OtwTMPpMdstgLRk5', title: 'JavaScript Callbacks & Promises', watched: false},
        {id: 'video-76', url: 'gRLdHSabW3o?si=Se5b6Q90GiuBLSSk', title: 'Async/Await & Fetch API in JavaScript with Examples', watched: false},
        {id: 'video-77', url: 'UzYRQURh_pY?si=Ik0wyJMgx2opDFSW', title: 'JavaScript Exercise 13 - Solution & Shoutouts', watched: false},
        {id: 'video-78', url: 'WYazkpCQNQw?si=NdqN5hPeJiwOzDhp', title: 'JavaScript Exercise 14 - Hackers Terminal', watched: false},
        {id: 'video-79', url: 'aQn7ssqHYp4?si=r7KXGoNRIjrZESW3', title: 'JavaScript try catch & Error Handling', watched: false},
        {id: 'video-80', url: 'FeBbjzVOeRU?si=3L9uaGBk6SybvvUB', title: 'Classes & Objects - Object Oriented Programming in Js', watched: false},
        {id: 'video-81', url: '9H-Ieq6zjIY?si=rHTvODEjyBfObEZ8', title: 'JavaScript Exercise 14 - Solution & Shoutouts', watched: false},
        {id: 'video-82', url: 'tcQDnqRakxk?si=PTvPoMMRR9Id1nvz', title: 'Advanced JavaScript', watched: false},
        {id: 'video-83', url: 'Vwxs9YJWsx4?si=up2i8GBPxpumTVtP', title: 'JavaScript Interview Questions', watched: false},
        {id: 'video-84', url: 'CYwEq1GdU4E?si=DDUzKNklLj1ES3Jg', title: 'Spotify Clone using HTML, CSS & JavaScript', watched: false},
      ],
    },

    {
      id: 'nodejs',
      title: 'Node.js & Express js',
      description: 'Node.js and Express js ans working with files',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-85', url: 'NoWRBo3Uf8E?si=eeh0HlP7zlf_Loiy', title: 'Backend, Node.js & npm', watched: false},
        {id: 'video-86', url: 'bU69doALJGU?si=yMRaKIAuxbnTWsEx', title: 'CommonJs Vs EcmaScript Modules', watched: false},
        {id: 'video-87', url: 'BTcmvrCTyNg?si=VIpUFIENP0nB0B2i', title: 'Working with Files: fs and path Modules', watched: false},
        {id: 'video-88', url: 'R11tvGM3nDY?si=iBFIZxNA9D-Wsizg', title: 'Introduction to Express Js', watched: false},
        {id: 'video-89', url: 'SksvlZM-5Sk?si=wGTEaazk57KnwTVY', title: 'Response, Request and Routers in Express', watched: false},
        {id: 'video-90', url: 'VELNPK0dK84?si=8F7PildOMgM-gPR0', title: 'Middlewares in Express Js', watched: false},
        {id: 'video-91', url: '1YSVEW3i8OQ?si=wSK0fXgGO1HBrf4n', title: 'Exercise 15 - Clear the Clutter', watched: false},
        {id: 'video-92', url: 'Kah88N8W5rs?si=qGchqc9qmbtPWEAx', title: 'ejs Template Engine in Express', watched: false},
        {id: 'video-93', url: 'bM7bmh955Gs?si=QZhzIg-iTQl66jmM', title: 'Exercise 15 - Solution & Shoutouts', watched: false},
      ],
    },

    {
      id: 'mongodb',
      title: 'MongoDB and Mongoose',
      description: 'Learn MongoDB and CRUD operations using MongoDB and Mongoose',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-94', url: 'oMrKVEedpHg?si=NxB48iOiblreONv0', title: 'Installing MongoDB & MongoDB Compass', watched: false},
        {id: 'video-95', url: '9Om0FMBz1yU?si=4hojNtCZN4ajbNpm', title: 'CRUD Operations in MongoDB', watched: false},
        {id: 'video-96', url: 'wgwo5hbY7SY?si=KK03ryY275gBK7vW', title: 'Installing Mongoose & Using it with Express', watched: false},
        {id: 'video-97', url: 'yDnxgIRcnso?si=y9A5kHJSIMvUgGu6', title: 'Exercise 16 - Dummy Data Generator', watched: false},
      ],
    },

    {
      id: 'tailwind',
      title: 'Tailwind',
      description: 'Tailwind CSS',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-98', url: '-g969furGik?si=pa9Z9BPcoVhspJCO', title: 'Tailwind CSS in one Video', watched: false},
        {id: 'video-99', url: '15jN-KKoSCA?si=qUJj-VL6X_iSyHrU', title: 'Exercise 16 - Solution & Shoutouts', watched: false},
        {id: 'video-100', url: 'eGc35Qj0y4Q?si=VEQJHCL61CNEXa7e', title: 'Exercise 17 - Design This Layout', watched: false},
        {id: 'video-101', url: 'iegMqFnVocA?si=-Eo_YbBzCmf1lF43', title: 'X.com (Twitter) Clone using Tailwind CSS', watched: false},
        {id: 'video-102', url: 'KAIGrGEDm78?si=lDzsfGzd49lXQzu5', title: 'Exercise 17 - Solution & Shoutouts', watched: false},
      ],
    },

    {
      id: 'hosting',
      title: 'Hosting',
      description: 'Hosting an Express app using Hostinger',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-103', url: 'c2A5XJidIDA', title: 'What is Hosting? Where to Host? Which Hosting?', watched: false},
        {id: 'video-104', url: 'AgjdDXofJZ8', title: 'Hosting an Express App on Ubuntu VPS using Hostinger', watched: false},
      ],
    },

    {
      id: 'react',
      title: 'React',
      description: 'React js',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-105', url: "nhSZ4LhIii8", title: "Introduction to React & Why use React?", watched: false},
        {id: 'video-106', url: "S4VH8hddg8c", title: "Components, Props and JSX in React", watched: false},
        {id: 'video-107', url: "zHoWgJD0jw4", title: "Hooks & State in React", watched: false},
        {id: 'video-108', url: "bio2eP5YXyw", title: "The useEffect Hook in React", watched: false},
        {id: 'video-109', url: "VlSNiL_x4mo", title: "The useRef Hook in React", watched: false},
        {id: 'video-110', url: "96DGjqlAIxs", title: "Conditional Rendering & Rendering Lists in React", watched: false},
        {id: 'video-111', url: "KDpm8h8XzC4", title: "Exercise 18 - Display the Cards", watched: false},
        {id: 'video-112', url: "cXkwFjBrWfk", title: "Handling Events in React", watched: false},
        {id: 'video-113', url: "iZdOrqJuPrg", title: "Exercise 18 - Solution & Shoutouts", watched: false},
        {id: 'video-114', url: "SBuZSalHLe0", title: "TodoList App using React, Tailwind & React Icons", watched: false},
        {id: 'video-115', url: "ZP8QyCIUeIA", title: "React Router: Routing in React", watched: false},
        {id: 'video-116', url: "jIbXtgL0qrg", title: "The useContext hook in React", watched: false},
        {id: 'video-117', url: "rRiBpNhFgoM", title: "The useMemo hook in React", watched: false},
        {id: 'video-118', url: "M1ELG5Wgtdo", title: "The useCallback hook in React", watched: false},
        {id: 'video-119', url: "SdzMBWT2CDQ", title: "Handling Forms + Connecting React to Express Backend", watched: false},
      ],
    },

    {
      id: 'redux',
      title: 'Redux',
      description: 'Learn Redux in One video',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-120', url: "J5By-Q4ZhZs", title: "Learn Redux in One video", watched: false}
      ],
    },

    {
      id: 'nextjs',
      title: 'Next.js',
      description: 'Learn Next.js',
      category: 'web-dev', // Add category field
      videos: [
        {id: 'video-121', url: "6XVaVITFOgY", title: "Introduction to Next.js & File based routing", watched: false},
        {id: 'video-122', url: "YuX_R4RGdZw", title: "Server Components in Next.js", watched: false},
        {id: 'video-123', url: "tHTtOJl7ZlI", title: "Script, Link & Image components in Next.js", watched: false},
        {id: 'video-124', url: "0rC-3PyhNnI", title: "Creating APIs in Next.js", watched: false},
        {id: 'video-125', url: "lvU8fMNVivY", title: "Server Actions in Next.js", watched: false},
        {id: 'video-126', url: "nZ2heJVkawQ", title: "Middleware in Next.js", watched: false},
        {id: 'video-127', url: "2JnEq3ZmLH0", title: "Auth.js - Authentication in Next.js", watched: false},
        {id: 'video-128', url: "D7YuI6vOzdY", title: "Dynamic Routes in Next.js", watched: false},
        {id: 'video-129', url: "jWi8d3SJYN0", title: "Layouts in Next.js", watched: false},
        {id: 'video-130', url: "sgNZcK8QIyc", title: "React Project: Password Manager using React, Tailwind, MongoDB & Express | Sigma WebD Tutorial #130", watched: false},
        {id: 'video-131', url: "QtaorVNAwbI", title: "Project GetMeAChai - Patreon Clone in Next.js", watched: false},
        {id: 'video-132', url: "K052tdPqa5U", title: "Understanding next/navigation module in Next.js", watched: false},
        {id: 'video-133', url: "O0UGlA1YVUI", title: "SSR, SSG & ISR in Next.js", watched: false},
        {id: 'video-134', url: "DbVI7QnDnjY", title: "Environment Variables in Next.js", watched: false},
        {id: 'video-135', url: "M6aXSV2HAHo", title: "Styled JSX and other ways to Style in Next.js", watched: false},
        {id: 'video-136', url: "Ojo_lo0djbQ", title: "[Project] Let's Build a Url Shortener in Next.js 15", watched: false},
        {id: 'video-137', url: "izwkombjECA", title: "[Project] Let's Build a LinkTree Clone in Next.js 15", watched: false},
        {id: 'video-138', url: "IW1hcRXK2yQ", title: "Deploying our Next.js App to Vercel", watched: false},
      ],
    },
  ];
  
  export default playlists;
  
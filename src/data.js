
export const portfolio = [
  {
    id: 2,
    title: "Gym AI",
    slug: "gym-ai",
    description:"Guided workouts through artificial intelligence",
    img: "/portfolio-img/gym-ai/preview.png",
    tags: ["rails", "gpt3","sass","bootstrap","heroku","figma","featured"],
    slides: [
      {
        title: "Background",
        details: "A study found that 80% of gym members who get a gym membership quit within 5 months. Those who do go to the gym regularly often lack experience (only 12.5% get a personal coach) and often do not track their progress. In the end,  gym goers often see a drop in their consistency and many end up quitting the gym after failing to achieve their goal.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Solution",
        details: "In order to make training at the gym enjoyable, I created a web app with a small team of developers using artificial intelligence to guide the user with their gym workout. The virtual coach would communicate to the user through a chat based interface to set the user’s goal, create a workout, and track their progress.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/gym-ai/equipment-request.png"]
      },
      {
        title: "Main Features",
        details: `<ul>\n
        <li>Create dynamic, unique responses based on the user’s input</li>\n
        <li>Create a new workout depending on what the user says or requests through natural langauge.</li>\n
        <li>Text to voice so users can hear what th virtual coach is saying to the user.</li>\n
        </ul>`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "Target Market Analysis",
        details: `Our team started first with a product sprint session. We defined our target user as someone who was male, between the age of  18-30, who had little to no gym experience and wanted to achieve muscle hypertrophy through resistance training. Our unique value proposition that differentiated our app from others in the marketplace would be the AI chat interface, removing complicated menus so users can focus on their workout.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
   
        ],
        left_imgs: []
      },
      {
        title: "User Journey",
        details: `The next step was to define the core “tasks” the user would perform in the app. We wanted to find the smoothest way for the user to navigate with as few steps as possible. Because our goal was to simplify the workout process, we knew from the start we would not use any forms, and instead let the AI handle acquiring user input through the chat interface. We finally settled on a user flow that we felt satisfied with.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "",
        details: ``,
        top_imgs: [ ],
        right_imgs: ["/portfolio-img/gym-ai/user-flow.png"],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/gym-ai/wireframe.png"]
      },
      {
        title: "Development",
        details: `As the project manager and developer of the application , I handled various aspects from schema design, routes and controllers, and the core functionality of the AI. The artificial intelligence features were powered by GPT-3, an autoregressive language model that could be accessed through an API.`,
        top_imgs: [],
        right_imgs: ["/portfolio-img/gym-ai/workout-history.png"],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "",
        details: ``,
        top_imgs: [],
        right_imgs: ["/portfolio-img/gym-ai/workout-history.png"],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/gym-ai/wireframe.png"]
      },
      {
        title: "Result & Source",
        details: `The final application was presented in a public demo in Tokyo. Source code of the project is available on github <a href="https://github.com/alvara/gymcoach-ai">here</a>`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      }
    ] 
  },
  {
    id: 2,
    title: "Artistible",
    slug: "artistible",
    description:"Discover and book local artist services",
    img: "/portfolio-img/artistible/preview.png",
    tags: ["meteorjs", "phantomjs","sass","bootstrap","bitbucket","rsync","featured"],
    slides: [
      {
        title: "Background",
        details: "A company that was in business for over 20 years had accumulated thousands of critical sales documents such as invoices, purchase orders, price quotes, and internal custom records. All documents were created in various spreadsheet software (Excel, OpenOffice, LibreOffice), and had a wide range of formats depending on who created it. This made it difficult for management to analyze details about their sales information and required a lot of tedious work to obtain basic information about performance and trends.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Challenge",
        details: "The company needed a way to standardize these documents based on their specific workflow while retaining flexibility to change when necessary. After exploring several out-of-the-box options, it was decided that no option matched these requirements, so a custom solution was needed.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Solution",
        details: "After several discussions, it was decided that a simple ERP system should be built to match the current workflow of how all the documents were generated. This system needed to be flexible and had to be implemented within the local network of the company for security purposes.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/docs-erp/home.png"]
      },
      {
        title: "Main Features",
        details: `<ul>\n
        <li><b>User Roles system</b> for certain users to change status of documents</li>\n
        <li><b>Generate document IDs</b> according to the company's existing incremental formula</li>\n
        <li>System wide <b>currency conversion</b> for automatic  profit margin calculation based on supplier.</li>\n
        <li>Generate <b>live preview of documents</b> with Japanese seal on approved documents</li>\n
        <li><b>Automated export</b> of documents to their local server via Rsync</li>\n
        </ul>`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: ["/portfolio-img/docs-erp/docgen.png"],
        left_imgs: []
      },
      {
        title: "Planning Phase",
        details: `Before doing any coding, it was critical to understand the exact flow of the documents to be managed and generated by the new system. After several discussions with all of the key stakeholders (Management, Sales department, Technical Department), A lvl0 DFD was created to outline the deliverables, along with a detailed description of the schema to determine how the models would be structured. Rough whiteboard sketches were made to visualize quickly how the UI would be laid out.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
          "/portfolio-img/docs-erp/design-dfd.png",
          "/portfolio-img/docs-erp/whiteboard1.png"
        ],
        left_imgs: []
      },
      {
        title: "Development Phase",
        details: `As a full-stack project, the majority of time was spent on the backend, with focus on generating the correct documents with the right information. Once the editor and preview components were built, the app was locally ran on a system in their internal network (Companies request for security) and had exported all documents to their specified locations. A final guided wizard component was created to walk users through the creation of the documents to make document generation fast and painless.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
           "/portfolio-img/docs-erp/docgen-editor.png",
          "/portfolio-img/docs-erp/quote-wizard.png"
        ],
        left_imgs: []
      },
      {
        title: "Final Results",
        details: `The project took a little over a year of development. The end result was an application that satisfied all requirements laid out by the company, and was able to generate all important documents needed for the key stakeholders on their local server.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/docs-erp/home.png"]
      },
      {
        title: "Source Code",
        details: `Unfortunately because an NDA was signed, I am unable to disclose the source code for this project. Specific details such as names have been redacted to protect the confidentiality of the project.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      }
    ] 
  },
  {
    id: 2,
    title: "JP-DOCS ERP",
    slug: "docs-erp",
    description:"ERP system for generating and managing sales documents",
    img: "/portfolio-img/docs-erp/preview.png",
    tags: ["meteorjs", "phantomjs","sass","bootstrap","bitbucket","rsync","featured"],
    slides: [
      {
        title: "Background",
        details: "A company that was in business for over 20 years had accumulated thousands of critical sales documents such as invoices, purchase orders, price quotes, and internal custom records. All documents were created in various spreadsheet software (Excel, OpenOffice, LibreOffice), and had a wide range of formats depending on who created it. This made it difficult for management to analyze details about their sales information and required a lot of tedious work to obtain basic information about performance and trends.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Challenge",
        details: "The company needed a way to standardize these documents based on their specific workflow while retaining flexibility to change when necessary. After exploring several out-of-the-box options, it was decided that no option matched these requirements, so a custom solution was needed.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Solution",
        details: "After several discussions, it was decided that a simple ERP system should be built to match the current workflow of how all the documents were generated. This system needed to be flexible and had to be implemented within the local network of the company for security purposes.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/docs-erp/home.png"]
      },
      {
        title: "Main Features",
        details: `<ul>\n
        <li><b>User Roles system</b> for certain users to change status of documents</li>\n
        <li><b>Generate document IDs</b> according to the company's existing incremental formula</li>\n
        <li>System wide <b>currency conversion</b> for automatic  profit margin calculation based on supplier.</li>\n
        <li>Generate <b>live preview of documents</b> with Japanese seal on approved documents</li>\n
        <li><b>Automated export</b> of documents to their local server via Rsync</li>\n
        </ul>`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: ["/portfolio-img/docs-erp/docgen.png"],
        left_imgs: []
      },
      {
        title: "Planning Phase",
        details: `Before doing any coding, it was critical to understand the exact flow of the documents to be managed and generated by the new system. After several discussions with all of the key stakeholders (Management, Sales department, Technical Department), A lvl0 DFD was created to outline the deliverables, along with a detailed description of the schema to determine how the models would be structured. Rough whiteboard sketches were made to visualize quickly how the UI would be laid out.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
          "/portfolio-img/docs-erp/design-dfd.png",
          "/portfolio-img/docs-erp/whiteboard1.png"
        ],
        left_imgs: []
      },
      {
        title: "Development Phase",
        details: `As a full-stack project, the majority of time was spent on the backend, with focus on generating the correct documents with the right information. Once the editor and preview components were built, the app was locally ran on a system in their internal network (Companies request for security) and had exported all documents to their specified locations. A final guided wizard component was created to walk users through the creation of the documents to make document generation fast and painless.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [
           "/portfolio-img/docs-erp/docgen-editor.png",
          "/portfolio-img/docs-erp/quote-wizard.png"
        ],
        left_imgs: []
      },
      {
        title: "Final Results",
        details: `The project took a little over a year of development. The end result was an application that satisfied all requirements laid out by the company, and was able to generate all important documents needed for the key stakeholders on their local server.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: ["/portfolio-img/docs-erp/home.png"]
      },
      {
        title: "Source Code",
        details: `Unfortunately because an NDA was signed, I am unable to disclose the source code for this project. Specific details such as names have been redacted to protect the confidentiality of the project.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      }
    ] 
  },
  {
    id: 2,
    title: "CSV Job Converter",
    slug: "job-converter",
    description:"An offline utility to convert job files for different laser systems.",
    img: "/portfolio-img/job-converter/preview.png",
    tags: ["electron", "sass","bootstrap","bitbucket","featured"],
    slides: [
      {
        title: "Background",
        details: "A client had two different laser system models in production for processing their products. Before they could process, their engineers needed to prepare csv job files that contained instructions on how the machines should process. These job files, containing hundreds or thousands of commands, would then be imported into the system which could then be executed by a factory worker.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Challenge",
        details: "Although the laser systems did the same work, they were two different models with different operating software, requiring the engineers to create the job files twice because the supported csv formats were different. Due to the size and scale of the job files, their engineer were spending weeks recreating job files.",
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "The Solution",
        details: "To assist our client, I began to work on an offline utility that allowed the engineers to import job files for one system and convert it to the second system.",
        top_imgs: [],
        right_imgs: ["/portfolio-img/job-converter/ui.png"],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "Main Features",
        details: `<ul>\n
        <li><b>Offline support</b> using electron because internet access was difficult inside the factory.</li>\n
        <li><b>processing options</b> to allow the engineers to create variations of their job files for testing purposes.</li>\n
        <li><b>exportable zip</b> to keep all job files within a single file for easy transferring between computer and laser systems.</li>\n
        </ul>`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "Final Results",
        details: `The project took a week of development time in order to build and test with the laser systems. The end result was a utility that allowed the engineers to convert their job files to the proper format for the laser systems.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      },
      {
        title: "Source Code",
        details: `Because an NDA was signed, I am unable to disclose the source code for this project. Specific details such as names have been redacted and changed to protect the confidentiality of the client.`,
        top_imgs: [],
        right_imgs: [],
        bottom_imgs: [],
        left_imgs: []
      }
    ] 
  }
]
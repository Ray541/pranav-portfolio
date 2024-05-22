import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";
import "../components/responsive.css";

const Internship = () => {
  const internships = [
    {
      workType: "Job",
      companyName: "Geopage Consultants",
      companyLocation: "Bengaluru",
      companyRole: "Junior Frontend Web Developer",
      companyDuration: "05/2024 - Present",
      companyFocus: "Modern Web Development",
      companyTasks: [
        "Frontend Web Development",
        "Frontend-Tech.: React, TypeScript, JavaScript, Tailwind CSS",
        "Backend-Tech.: Firebase, Supabase | Version Control: Git",
        "Company focuses on Web Development and Civil Engineering",
      ],
      companyNum: "01",
    },
    {
      workType: "Internship",
      companyName: "AntStack | Fullstack Serverless Consulting Company",
      companyLocation: "Bengaluru",
      companyRole: "Frontend Web Development Intern",
      companyDuration: "11/2023 - 01/2024",
      companyFocus: "Modern Web Development",
      companyTasks: [
        "Frontend Web Development",
        "Frontend-Tech.: React, TypeScript, JavaScript, Tailwind CSS",
        "Backend-Tech.: Firebase, Supabase | Version Control: Git",
        "Participated in POC and completed a Major Project",
      ],
      companyNum: "02",
    },
    {
      workType: "Internship",
      companyName: "techEnvision",
      companyLocation: "Kolhapur",
      companyRole: "Full Stack Web Development Intern",
      companyDuration: "03/2023 - 07/2023",
      companyFocus: "Web Development",
      companyTasks: [
        "Frontend-Tech.: HTML, CSS, Bootstrap-5, Wordpress",
        "Backend-Tech.: PHP, SQL",
        "Advanced JavaScript, jQuey",
        "Worked in Three Projects",
      ],
      companyNum: "03",
    },
    {
      workType: "Internship",
      companyName: "Aphron Software",
      companyLocation: "Sangli",
      companyRole: "Web Development Intern",
      companyDuration: "02/2021 - 03/2021",
      companyFocus: "Web Development",
      companyTasks: [
        "Frontend-Tech.: HTML, CSS, JavaScript",
        "Backend-Tech.: PHP, SQL",
        "Advanced JavaScript",
        "Worked in Two Group Projects",
      ],
      companyNum: "04",
    },
    // {
    //   workType: "Internship",
    //   companyName: "DX Infosystem",
    //   companyLocation: "Sangli",
    //   companyRole: "Mobile Application Development Intern",
    //   companyDuration: "05/2019 to 06/2019",
    //   companyFocus: "Mobile Application Development",
    //   companyTasks: [
    //     "Frontend-Tech: HTML, CSS, Bootstrap Studio",
    //     "Backend-Tech: PHP, SQL",
    //     "Basic JavaScript",
    //     "Worked in One Group Project",
    //     "Worked in Bootstrap Studio Environment",
    //   ],
    //   companyNum: "05",
    // },
  ];

  return (
    <section id="internship-banner">
      <section id="internship" className="container-fluid">
        <h1>Internship</h1>
      </section>
      <div className="internship-holder container-fluid reveal scroll-active">
        <div className="row card-holder reveal scroll-active">
          {internships.map((internship, internship_index) => (
            <div
              className="col-lg-4 col-md-9 p-2 internship-card"
              key={internship_index}
            >
              <div className="itd">
                <i className="bi bi-door-open-fill card-icon me-1"></i>
                <span className="card-title">{internship.workType}</span>
              </div>
              <div>
                <ul>
                  <li>Company: {internship.companyName}</li>
                  <li>Location: {internship.companyLocation}</li>
                  <li>Role: {internship.companyRole}</li>
                  <li>Duration: {internship.companyDuration}</li>
                  <li>Company Focus: {internship.companyFocus}</li>
                  <span className="mt-2">Achievements / Tasks :</span>
                  <ul className="ps-4">
                    {internship.companyTasks.map((task, task_index) => (
                      <li key={task_index}>{task}</li>
                    ))}
                  </ul>
                </ul>
              </div>
              <span className="num-span">{internship.companyNum}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

import React from 'react';

const ResumeTemplate =  React.forwardRef<HTMLDivElement>((_, ref) => {
  const resumeData = {
    firstName: "ABIGAIL",
    lastName: "HALL",
    title: "Senior Business Analyst | Data Analytics Expert",
    email: "linkedin.com",
    location: "San Francisco, CA",
    summary: "Seasoned IT business analyst with over 12 years in business analytics, specializing in data visualization and BI software, including QlikView and SAS. Demonstrated success in leading cross-functional teams to deliver high-impact solutions. Expertise extends to Agile and Scrum methodologies, JIRA, SQL, ETL, and Master Data Management. Proven ability in boosting operational efficiencies and achieving substantial cost savings through strategic data integration projects.",
    keyAchievements: [
      {
        title: "Streamlined reporting processes",
        description: "Developed a new reporting framework that reduced the time required for data analysis by 40%, significantly impacting operational efficiency and cost reduction."
      },
      {
        title: "Enhanced data integration",
        description: "Led a critical data integration project that consolidated multiple data sources into a single, coherent framework, increasing data accessibility for all departments."
      },
      {
        title: "Award for innovation",
        description: "Received the 'Innovator of the Year' award for developing a predictive analytics tool that decreased forecast errors by 25%."
      }
    ],
    skills: [
      "Data Visualization • Agile and Scrum",
      "JIRA • SQL • ETL • Business Intelligence"
    ],
    certification: {
      title: "Certified Scrum Master",
      description: "Certification focusing on Agile project management methodologies, provided by Scrum Alliance."
    },
    additionalSkill: {
      title: "Advanced Data Modeling",
      description: "Comprehensive course on data modeling techniques and best practices."
    },
    experience: [
      {
        title: "Senior Business Analyst",
        company: "Genentech",
        period: "01/2016 - Present",
        location: "South San Francisco, CA",
        achievements: [
          "Led the development of an advanced analytics dashboard that improved decision-making speed for senior management by 25%.",
          "Facilitated over 40 workshops to define and refine project scopes, translating complex data into actionable insights for cross-functional teams.",
          "Conducted in-depth data analysis to validate the feasibility of new dashboard features, which increased user engagement by 15%.",
          "Defined and documented comprehensive data metrics and business rules, significantly enhancing report accuracy and reliability.",
          "Coordinated with stakeholders on BI projects, resulting in a 10% decrease in post-deployment issues.",
          "Provided expert training and support to the operations team, boosting their productivity by 20% in managing production issues."
        ]
      },
      {
        title: "Business Systems Analyst",
        company: "Amgen",
        period: "06/2012 - 12/2015",
        location: "Thousand Oaks, CA",
        achievements: [
          "Implemented a strategic data integration solution that streamlined operations and saved the company $200K annually.",
          "Managed a portfolio of data analytics projects, ensuring alignment with business goals and continuous delivery of value.",
          "Developed user stories and use cases for BI solutions, improving data-driven decision-making across the organization.",
          "Enhanced existing architecture to more robust system, increasing data processing speed by 30%.",
          "Led the documentation efforts for system requirements using JIRA, enhancing team productivity and project tracking."
        ]
      },
      {
        title: "Data Analyst",
        period: "03/2008 - 05/2012",
           location: "Thousand Oaks, CA",
        achievements: [
          "Implemented a strategic data integration solution that streamlined operations and saved the company $200K annually.",
          "Managed a portfolio of data analytics projects, ensuring alignment with business goals and continuous delivery of value.",
          "Developed user stories and use cases for BI solutions, improving data-driven decision-making across the organization.",
          "Enhanced existing architecture to more robust system, increasing data processing speed by 30%.",
          "Led the documentation efforts for system requirements using JIRA, enhancing team productivity and project tracking."
        ]
      }
    ]
  };

 return( <div ref={ref} className="flex w-full h-full bg-gray-100 font-sans text-xs" style={{ width: '210mm', height: '297mm' }}>
      {/* Left Sidebar */}
      <div className="w-2/5 bg-green-700 text-white p-4 space-y-4">
        <div className="text-2xl font-bold tracking-wider">
          {resumeData.firstName} {resumeData.lastName}
        </div>
        
        <section>
          <h3 className="text-sm font-bold mb-2 tracking-wide">KEY ACHIEVEMENTS</h3>
          <div className="space-y-3">
            {resumeData.keyAchievements.map((achievement, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-1 text-green-100 text-xs">{achievement.title}</h4>
                <p className="text-xs leading-tight text-green-50">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold mb-2 tracking-wide">SKILLS</h3>
          <div className="space-y-1">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="text-xs text-green-50">{skill}</div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold mb-2 tracking-wide">CERTIFICATION</h3>
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold text-green-100 text-xs">{resumeData.certification.title}</h4>
              <p className="text-xs text-green-50">{resumeData.certification.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-100 text-xs">{resumeData.additionalSkill.title}</h4>
              <p className="text-xs text-green-50">{resumeData.additionalSkill.description}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Right Main Content */}
      <div className="w-3/5 bg-white p-4 text-gray-800 space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <h1 className="text-lg font-bold text-blue-600 mb-1">{resumeData.title}</h1>
          <div className="flex items-center space-x-3 text-xs text-gray-600">
            <span>📧 Email</span>
            <span>🔗 {resumeData.email}</span>
            <span>📍 {resumeData.location}</span>
          </div>
        </div>

        <section>
          <h2 className="text-sm font-bold mb-2 text-gray-800">SUMMARY</h2>
          <p className="text-xs text-gray-700 leading-tight">{resumeData.summary}</p>
        </section>

        <section>
          <h2 className="text-sm font-bold mb-3 text-gray-800">EXPERIENCE</h2>
          <div className="space-y-4">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">{job.title}</h3>
                    {job.company && (
                      <p className="text-blue-600 font-medium text-xs">{job.company}</p>
                    )}
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{job.period}</p>
                    {job.location && <p>{job.location}</p>}
                  </div>
                </div>
                {job.achievements && (
                  <ul className="space-y-1 ml-3">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-0.5 text-xs">•</span>
                        <span className="text-gray-700 text-xs leading-tight">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});

export default ResumeTemplate;
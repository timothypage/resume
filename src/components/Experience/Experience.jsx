import styles from './Experience.module.css'

const Experience = ({ className }) => {
  return (
    <section class={`${className} ${styles.experience}`}>
      <h2>Experience</h2>
      <For each={experiences}>
        {(exp, i) => (
          <article class={styles.article}>
            <div class={styles.companyInfo}>
              <h3>{exp.company_name}</h3>
              <p>{exp.location}</p>
              <p class={styles.time}>{exp.length_of_service}</p>
            </div>
            <p class={styles.title}>{exp.title}</p>
            <p class={styles.technologies}>Technologies: {exp.technologies}</p>
            <ul class={styles.accomplishments}>
              <For each={exp.accomplishments}>
                {(acc, i) => <li class={styles.accomplishment}>{acc}</li>}
              </For>
            </ul>
          </article>
        )}
      </For>
    </section>
  )
}

const experiences = [
  {
    company_name: 'Xentity',
    location: 'Golden, CO',
    title: 'Geospatial Developer – GeoPlatform.gov',
    length_of_service: 'June 2020 – April 2023',
    technologies:
      'TypeScript, Angular, Node, AWS, Docker, PostgreSQL, Leaflet, Ruby',
    accomplishments: [
      'Built out a serverless application pipeline for rendering map tiles based on ISO 19115 metadata to allow users to preview data before downloading',
      'Created infrastructure to allow execution of unit testing against Pull Requests and nightly automated end-to-end testing',
      'Supported production JVM applications running in AWS Elastic Container Service',
      'Built an automated ETL pipeline for ingesting ISO 19115 Geospatial metadata into GeoNetwork',
      'Designed and Developed an Angular application for publishing government agencies to review their ISO 19115 metadata quality'
    ]
  },
  {
    company_name: 'FJA-US Inc.',
    location: 'Denver, CO',
    title: 'Frontend Developer',
    length_of_service: '2.5 years',
    technologies:
      'TypeScript, React, JQuery, Java/Spring, SQL Server, Oracle, GraphQL',
    accomplishments: [
      'Rewrote the frontend for FJA’s flagship application in React with unit and integration test coverage, greatly improving end user experience and overall software quality',
      'Created a Medicare Explanation of Benefits (EOB) document generator based on Medicare Advantage plan configurations',
      'Supported legacy applications using BackboneJS, JQuery and Java/JSP'
    ]
  },
  {
    company_name: 'Charter Communications',
    location: 'Englewood, CO',
    title: 'Senior Application Developer',
    length_of_service: '2.5 years',
    technologies:
      'Docker, Node, Ruby on Rails, VueJS, React, AngularJS, MongoDB, PostgreSQL',
    accomplishments: [
      'Developed an API middleware in Node to translate TimeWarner app API calls Charter API endpoints, facilitating post-merger customers to use single app experience',
      'Created an auto-deploy framework for Charter’s customer facing web applications in AWS with Rancher, Docker and Gitlab',
      'Developed project management and resource management modules in the MEAN stack (Mongo Express AngularJS Node)',
      'Championed and wrote a microservice in Ruby to generate customizable PDF reports, greatly improving the PMO’s ability to report real time project data'
    ]
  },
  {
    company_name: 'Trinity Applied Internet',
    location: 'Reno, NV',
    title: 'Developer',
    length_of_service: '1.5 years',
    technologies:
      'Ruby on Rails, Django, Joomla, Drupal, Magento, WordPress, JQuery',
    accomplishments: [
      'Developed custom plugins/modules for Joomla! WordPress and Drupal',
      'Created several custom content management systems in Ruby on Rails',
      'Created custom DevOps tools for database backup, deployment and server monitoring'
    ]
  },
  {
    company_name: 'Michigan Department of Community Health',
    location: 'Lansing, MI',
    title: 'IT Contractor',
    length_of_service: '1.5 years',
    technologies: '.NET, SQL Server, StarLIMS',
    accomplishments: [
      'Project Coordinator for upgrading the state’s HL7 messaging from v. 2.3 to 2.5.1',
      'Support and developer for the laboratory information system, which had approx. 200 users across five laboratories in Michigan'
    ]
  }
]

export default Experience

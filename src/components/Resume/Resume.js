import React from 'react';
import './Resume.css';
export default function Resume () {

    return (
        <>
           <section className="resume">
           <a title="Open Resume"  target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAEVY-hUxBM/g6Eq3yZBpQZgQQjQr80OBQ/view?utm_content=DAEVY-hUxBM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Full Resume<span aria-label="link emoji" role="img">🔗</span></a>
               <main>
               <div className="row row1">
                    <h1>Mission Details</h1>

                    <div className="mission">
                        <h2>Team: City of Austin</h2>
                        <h3>Role: UI Engineer</h3>
                        <p>
                        Open source project. Create an accessible website to inform and engage the people of Austin, TX in the upcoming 2020 Census
                        <br/>
                        <br/>
                        Technologies: <span>React + Gatsby, USWDS (United States Web Design System), Cypress</span>
                        <br/>
                        <br/>
                        Contributions:<br/>
                        Collaborated with a remote cross-functional team to meet design specs<br/>
                        Created the FAQ section as an accordion that meets the USWDS design and accessibility standards<br/>
                        Tested component actions with Cypress methods<br/>
                        
                        </p>
                    </div>

                    <div className="mission">
                        <h2>Team: Future Hope</h2>
                        <h3>Role: Full-Stack Engineer</h3>
                        <p>
                        Build a training portal for virtual volunteers to prepare to enter classrooms in rural Ghana
                        <br/>
                        <br/>
                        Technologies: <span>React + Redux, Cloud Firestore, Cypress</span>
                        <br/>
                        <br/>
                        Contributions:<br/>
                        Deployed training portal by expanding on NoSql db<br/>
                        Thoroughly tested UI with Cypress methods<br/>
                        Created data structure for new components
                        </p>
                    </div>

                    <div className="mission">
                    <h2>Team: Droom</h2>
                    <h3>Role: Backend Engineer</h3>
                    <p>
                        Web app where jobseekers can swipe right to apply for jobs and recruiters have easy access to interested applicants.
                        <br/>
                        <br/>
                        Technologies: <span>PostgreSQL, Node.js/Express, JSON Web Tokens, Jest</span>
                        <br/>
                        <br/>
                        Contributions:<br/>
                        Deployed RESTful API with PostgreSQL and Heroku<br/>
                        Delivered clear documentation with apiDOC<br/>
                        Authenticated protected routes with JWT<br/>
                        Tested routes with Jest
                        </p>
                    </div>
                </div>

               </main>                
            </section>


        </>
    )
}

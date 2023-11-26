import React from 'react';

const Home = () => (
    <div className='container'>
        <div className='title'>
            <h2>About Me</h2>
            <p>Hi there ヾ(◍•ᴗ•◍)ﾉ</p>
        </div>
        <div className='row'>
            <div className='card' style={{borderRadius: "20px", borderColor: "rgba(62, 175, 181, 0.2)"}}>
                <div className='card-body' style={{padding: "3rem 1.5rem"}}>
                    <div className='row'>
                        <div className='col-12 col-lg-4' style={{marginBottom: "3rem"}}>
                            <img src='https://avatars.githubusercontent.com/u/86147831?s=400&u=93c04f21985921916a03817c77317e7c2024e9e7&v=4' alt='Kendice' className='img-fluid' id='profile_image'/>
                        </div>
                        <div className='col-12 col-lg-8' style={{paddingLeft: "1.5rem"}}>
                            <h5 className='card-title'>About Me</h5>
                            <p className='card-text'>
                                I am a recent graduate specializing in information and communication technology, with a strong background in web technologies. Over the course of my academic journey, I have seamlessly transitioned from being a proficient office administrator with four years of hands-on experience to a skilled software developer. My professional evolution reflects my commitment to growth and adaptability.
                            </p>
                            <p>
                                My enthusiasm for cutting-edge technologies is evident through my deep-seated passion for exploring novel advancements, particularly in the realm of AI. I consider myself a motivated and inquisitive individual, driven by a relentless desire to learn. Beyond formal education, I actively seek opportunities to broaden my skill set, ensuring that I remain at the forefront of industry trends and developments.
                            </p>
                            <h5 className='card-title' style={{marginTop: "4rem"}}>Skills</h5>
                            <div className='d-flex flex-wrap flex-row justify-content-start mb-3'>
                                <div className='p-2'>
                                    <h6>Programming Languages</h6>
                                        <ul className="icons" style={{listStyleType: "none"}}>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/java.png" alt='java logo' /></div><li>Java</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/javascript.png" alt='javascript logo' /></div><li>JavaScript</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/typescript.png" alt='typescript logo' /></div><li>TypeScript</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/python.png" alt='python logo' /></div><li>Python</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/php.png" alt='php logo' /></div><li>PHP</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/csharp.png" alt='c# logo' /></div><li>C#</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/sql.png" alt='sql logo' /></div><li>SQL</li>
                                        </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Front-End Development</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/html.png" alt='html logo' /></div><li>HTML5</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/css.png" alt='css logo' /></div><li>CSS3</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/sass.png" alt='sass logo' /></div><li>Sass</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/bootstrap.png" alt='bootstrap logo' /></div><li>Bootstrap</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/pug.png" alt='pug logo' /></div><li>Pug</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/handlebars.png" alt='handlebars logo' /></div><li>HandleBars.js</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/react.png" alt='react logo' /></div><li>React.js</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/react.png" alt='react native logo' /></div><li>React Native</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/redux.png" alt='redux logo' /></div><li>Redux</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/materialui.png" alt='materialui logo' /></div><li>Material UI</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/angular.png" alt='angular logo' /></div><li>AngularJS</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/wordpress.png" alt='wordpress logo' /></div><li>Wordpress</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/elementor.png" alt='elementor logo' /></div><li>Elementor</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Back-End Development</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/node.png" alt='nodejs logo' /></div><li>Node.js</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/express.png" alt='express logo' style={{height: '1rem'}}/></div><li>Express.js</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/fastapi.png" alt='fastapi logo' /></div><li>FastAPI</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/flask.png" alt='flask logo' /></div><li>Flask</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/django.png" alt='django logo' /></div><li>Django</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/graphql.png" alt='graphql logo'/></div><li>GraphQL</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>DevOps</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/vercel.png" alt='vercel logo' /></div><li>Vercel</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/render.png" alt='render.com logo' /></div><li>Render.com</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/docker.png" alt='docker logo' /></div><li>Docker</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/aws.png" alt='aws logo' style={{height: '2rem'}} /></div><li>AWS</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Software Development</h6>
                                        <ul className="icons" style={{listStyleType: "none"}}>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/linux.png" alt='linux logo' /></div><li>Linux</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/git.png" alt='git logo' /></div><li>Git</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/github.png" alt='github logo' /></div><li>GitHub</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/jira.png" alt='jira logo' /></div><li>Jira</li>
                                            <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/trello.png" alt='trello logo' /></div><li>Trello</li>
                                        </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Database</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/mongodb.png" alt='mongodb logo' /></div><li>MongoDB</li>
                                        <div><img src="https://s3.us-west-2.amazonaws.com/kendicey.io/mysql.png" alt='mysql logo' /></div><li>MySQL</li>
                                    </ul>
                                </div>
                            </div>
                            <h5 className='card-title' style={{marginTop: "3.5rem"}}>Education</h5>
                            <p className='card-text'>
                                <span className='bold'>Douglas College, CA</span><tr />Post-Degree Diploma, Information and Communication Technology<br/>
                                <span className='italic'>Awards: Dean's List in Fall 2022 & Winter 2023</span>
                            </p>
                            <p className='card-text'>
                                <span className='bold'>The Chinese University of Hong Kong, HK</span><tr />Bachelor of Art, Major in Anthropology (Upper Second-Class Honours)
                            </p>
                            <h5 className='card-title' style={{marginTop: "4rem"}}>Certification</h5>
                            <p className='card-text' style={{marginBottom: "0"}}><span className="bold">Meta Back-End Developer Professional Certificate (in-progress)</span></p>
                            <span>4 out of 9 courses completed:</span>
                            <ul style={{marginBottom: "1.5rem"}}>
                                <li>Introduction to Back-End Development</li>
                                <li>Introduction to Databases for Back-End Development</li>
                                <li>Programming in Python</li>
                                <li>Version Control</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
        </div>        
    </div>
);

export default Home;
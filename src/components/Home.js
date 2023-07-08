import React from 'react';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import express from '../assets/express.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import php from '../assets/php.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import sql from '../assets/sql.png';
import typescript from '../assets/typescript.png';
import csharp from '../assets/csharp.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import django from '../assets/django.png';
import linux from '../assets/linux.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import jira from '../assets/jira.png';
import trello from '../assets/trello.png';
import sass from '../assets/sass.png';
import vercel from '../assets/vercel.png';
import render from '../assets/render.png';
import docker from '../assets/docker.png';
import graphql from '../assets/graphql.png';
import lambda from '../assets/lambda.png';

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
                                Dedicated information and communication technology student with experience in web technologies and APIs. Skilled in using HTML, CSS, Bootstrap, React.js, Node.js, Express.js, SQL, and MongoDB. Passionate about emerging technologies including AI and Blockchain. A curious fast learner, a team player, and a tea lover &#x1F375;
                            </p>
                            <h5 className='card-title' style={{marginTop: "4rem"}}>Skills</h5>
                            <div className='d-flex flex-wrap flex-row justify-content-start mb-3'>
                                <div className='p-2'>
                                    <h6>Programming Languages</h6>
                                        <ul className="icons" style={{listStyleType: "none"}}>
                                            <div><img src={java} alt='java logo' /></div><li>Java</li>
                                            <div><img src={javascript} alt='javascript logo' /></div><li>JavaScript</li>
                                            <div><img src={typescript} alt='typescript logo' /></div><li>TypeScript</li>
                                            <div><img src={python} alt='python logo' /></div><li>Python</li>
                                            <div><img src={php} alt='php logo' /></div><li>PHP</li>
                                            <div><img src={csharp} alt='c# logo' /></div><li>C#</li>
                                            <div><img src={sql} alt='sql logo' /></div><li>SQL</li>
                                        </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Front-End Development</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src={html} alt='html logo' /></div><li>HTML5</li>
                                        <div><img src={css} alt='css logo' /></div><li>CSS3</li>
                                        <div><img src={sass} alt='sass logo' /></div><li>Sass</li>
                                        <div><img src={bootstrap} alt='bootstrap logo' /></div><li>Bootstrap</li>
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#efcca3" d="M25.514 12.846c-.052-.938.209-1.825-.209-2.554c-1.043-1.825-3.649-2.867-8.863-2.867v-.053v.052c-5.735 0-8.185 1.043-9.227 2.867a5.6 5.6 0 0 0-.469 2.554a9.546 9.546 0 0 0-.261 2.45c.156 1.147.261 2.294.417 3.336c.156.886 1.408 1.564 1.564 2.4c.313 2.242 2.294 3.284 8.028 3.284v.261h-.1v-.261c5.213 0 7.4-1.043 7.716-3.284c.1-.834 1.147-1.512 1.3-2.4c.156-1.043.209-2.19.365-3.336a11.774 11.774 0 0 0-.261-2.449Z"/><path fill="#ccac8d" d="M16.182 13.68a3.241 3.241 0 0 1 2.19 1.147c.73.626 1.929 1.043 2.45 1.616a4.715 4.715 0 0 1 1.408 1.981a8.9 8.9 0 0 1 .313 2.242c0 .261.156.209.573 0a9.02 9.02 0 0 0 2.19-1.877c-.156.886-1.251 1.668-1.355 2.5c-.313 2.242-2.5 3.336-7.872 3.336h.313"/><path fill="#ccac8d" d="M19.519 11.908c.209.678.886 3.024-.469 2.242a2.557 2.557 0 0 1 .938 1.564a1.831 1.831 0 0 0 1.3 1.408a3.479 3.479 0 0 0 2.554-.626a2.956 2.956 0 0 0 .678-3.284a2.43 2.43 0 0 0-2.137-1.616c-.983-.262-3.073-.47-2.864.312Z"/><circle cx="22.178" cy="14.41" r="1.929"/><circle cx="21.656" cy="13.524" r=".521" fill="#fff"/><path fill="#efcca3" d="M19.206 14.306a17.68 17.68 0 0 1 2.711 2.346c.938 1.2.938 1.408.938 1.408l-.678.313a7.1 7.1 0 0 0-2.137-2.5c-1.2-.678-1.355-1.251-1.355-1.251Z"/><path fill="#ccac8d" d="M16.235 13.68a3.605 3.605 0 0 0-2.346 1.147c-.73.626-2.033 1.043-2.5 1.616a4.806 4.806 0 0 0-1.46 1.981a8.9 8.9 0 0 0-.313 2.242c0 .261.052.313-.626 0a7.972 7.972 0 0 1-2.19-1.877c.156.886 1.251 1.668 1.355 2.5c.313 2.19 2.5 3.284 7.872 3.284h.365"/><path fill="#56332b" d="M21.239 17.277a6.552 6.552 0 0 0-5.109-2.607a6.638 6.638 0 0 0-5.109 2.607a3.861 3.861 0 0 0-1.043 3.18c0 4.64 1.616 3.232 2.711 3.806a7.466 7.466 0 0 0 3.389.313a7.4 7.4 0 0 0 3.389-.313c1.095-.573 2.711.834 2.711-3.806a3.386 3.386 0 0 0-.939-3.18Z"/><path fill="#442823" d="M16.026 15.974a9.549 9.549 0 0 1-.469 2.554l.573-.156Z"/><path fill="#442823" d="M16.182 15.974a9.549 9.549 0 0 0 .469 2.554l-.573-.156Z"/><path fill="#56332b" d="M14.358 15.453c-.209-.521.573-1.355 1.825-1.355s2.033.834 1.825 1.355s-1.043.678-1.825.678c-.835-.001-1.617-.157-1.825-.678Z"/><path d="M16.182 15.974c0-.1.73-.1 1.147-.365c0 0-.834.261-.991.156a.656.656 0 0 1-.209-.365a.656.656 0 0 1-.209.365c-.156.1-1.095-.156-1.095-.156a8.058 8.058 0 0 1 1.2.365v.417a10.492 10.492 0 0 0 .1 2.033c.156.209.1-1.46.1-2.033a1.3 1.3 0 0 1-.043-.417Z"/><path fill="#7f4a41" d="M16.182 18.945a3.35 3.35 0 0 1 1.616.678a3.121 3.121 0 0 0-1.616-1.095a3.036 3.036 0 0 0-1.825 1.2a3.312 3.312 0 0 1 1.825-.783Z"/><path fill="#442823" d="M16.078 22.8a8.9 8.9 0 0 1-2.4-.469c-.156-.052-.313.052-.469 0a6.172 6.172 0 0 1-3.18-2.137v.209c0 4.64 1.616 3.232 2.711 3.806a7.466 7.466 0 0 0 3.389.313a7.4 7.4 0 0 0 3.389-.313c1.095-.573 2.711.834 2.711-3.806v-.469A5.914 5.914 0 0 1 19 22.282c-.156.052-.417-.052-.573-.052a7.045 7.045 0 0 1-2.349.57Z"/><path fill="#442823" d="M13.941 20.3s-.573 1.668-.156 2.4l-.521-.209a15.433 15.433 0 0 1 .677-2.191Zm4.379 0s.573 1.668.156 2.4l.524-.209a10.629 10.629 0 0 0-.68-2.191Z"/><path fill="#ccac8d" d="M12.585 11.908c-.209.678-.886 3.024.469 2.242a2.557 2.557 0 0 0-.938 1.564a1.831 1.831 0 0 1-1.3 1.408a3.479 3.479 0 0 1-2.558-.622a2.956 2.956 0 0 1-.678-3.284A2.43 2.43 0 0 1 9.717 11.6c.992-.266 3.077-.474 2.868.308Z"/><path d="M16.13 18.528a3.393 3.393 0 0 1 2.45 2.867v-.1a3.051 3.051 0 0 0-2.45-2.919a3 3 0 0 0-2.45 2.919v.1a3.463 3.463 0 0 1 2.45-2.867Z"/><ellipse cx="16.546" cy="15.138" fill="#331712" rx=".156" ry=".313" transform="rotate(-14.46 16.545 15.138)"/><ellipse cx="15.609" cy="15.146" fill="#331712" rx=".313" ry=".156" transform="rotate(-72.765 15.61 15.146)"/><circle cx="10.031" cy="14.41" r="1.929"/><circle cx="10.552" cy="13.524" r=".521" fill="#fff"/><path fill="#7f4a41" d="M16.7 14.41s-.521.209-.626.261a2.492 2.492 0 0 1-.626-.261H16.7Z"/><path fill="#efcca3" d="M12.9 14.306a17.68 17.68 0 0 0-2.711 2.346c-.938 1.2-.938 1.408-.938 1.408l.678.313a7.1 7.1 0 0 1 2.137-2.5c1.2-.678 1.355-1.251 1.355-1.251Z"/><path fill="#ccac8d" d="M9.092 10.813a4.519 4.519 0 0 1-1.929 2.294a2.19 2.19 0 0 0 1.929-2.294Zm13.816 0a4.519 4.519 0 0 0 1.929 2.294a2.19 2.19 0 0 1-1.929-2.294Zm-3.598 3.023a5.16 5.16 0 0 0-3.076-1.408h.156a3.852 3.852 0 0 0-3.024 1.408a4.832 4.832 0 0 1 3.024-1.043a5.785 5.785 0 0 1 2.92 1.043Zm-1.564-2.867a2.455 2.455 0 0 0-1.564-.938h.156a1.786 1.786 0 0 0-1.512.938a2.187 2.187 0 0 1 1.512-.678a1.894 1.894 0 0 1 1.408.678Zm-7.715 6.777a2.545 2.545 0 0 1-1.773.209H8.05a3.68 3.68 0 0 1-.886-1.512a2.27 2.27 0 0 0 2.867 1.303Zm12.095 0a2.545 2.545 0 0 0 1.773.209h-.209a1.749 1.749 0 0 0 1.095-1.512a2.02 2.02 0 0 1-2.659 1.303Z"/><path fill="#ccac8d" d="M11.23 10.709a4.75 4.75 0 0 1 2.242.1c.938.313.209 1.564.365 1.616a2.865 2.865 0 0 1 2.242-.73c1.773.1 1.981.886 2.242.73c.261-.1-.261-2.19 2.45-1.72c0 0-2.763-.73-2.659 1.251a3.675 3.675 0 0 0-3.858-.1s.573-1.929-3.024-1.147ZM10.5 8s-2.4 2.972-2.711 4.118c-.365 1.147-.626 5.943-.938 6.621l-1.095-4.694l2.033-4.9Zm11.156 0s2.4 2.972 2.711 4.118c.365 1.147.626 5.943.938 6.621l1.095-4.694l-2.033-4.9Z"/><path fill="#56332b" d="M21.5 8a11.617 11.617 0 0 1 3.284 4.588c.73 2.45.417 5.474.991 5.839c.834.521 1.72-2.607 2.033-2.919c.469-.521 2.085-1.877 2.19-2.137s-3.232-3.91-4.744-4.64C23.585 7.893 21.4 7.789 21.5 8Z"/><path fill="#442823" d="M23.69 9.3a15.379 15.379 0 0 1 2.972 8.654l1.2-2.45A16.564 16.564 0 0 0 23.69 9.3Z"/><path fill="#56332b" d="M10.5 8a11.617 11.617 0 0 0-3.284 4.588c-.73 2.45-.417 5.474-.991 5.839c-.834.521-1.72-2.607-2.033-2.919c-.469-.521-2.085-1.877-2.19-2.137s3.232-3.91 4.744-4.64C8.415 7.893 10.6 7.789 10.5 8Z"/><path fill="#442823" d="M8.31 9.3a15.379 15.379 0 0 0-2.972 8.654L4.14 15.5a16.564 16.564 0 0 1 4.17-6.2Z"/><path fill="#ccac8d" d="M6.642 18.007a4.118 4.118 0 0 0 .573 1.564c.365.365.1-.313.1-.313s-.365-.209-.313-1.72s-.36.469-.36.469Zm18.768 0a4.118 4.118 0 0 1-.573 1.564c-.365.365-.1-.313-.1-.313s.365-.209.313-1.72c-.057-1.46.36.469.36.469Z"/><circle cx="13.889" cy="17.121" r=".156" fill="#442823"/><circle cx="12.846" cy="18.216" r=".156" fill="#442823"/><circle cx="12.533" cy="17.121" r=".156" fill="#442823"/><circle cx="18.164" cy="17.121" r=".156" fill="#442823"/><circle cx="19.154" cy="18.216" r=".156" fill="#442823"/><circle cx="19.467" cy="17.121" r=".156" fill="#442823"/></svg></div><li>Pug</li>
                                        <div><img src={react} alt='react logo' /></div><li>React.js</li>
                                        <div><img src={redux} alt='redux logo' /></div><li>Redux</li>
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 222"><path fill="#007FFF" d="M215.771 151.107a7.111 7.111 0 0 0 3.57-6.144l.128-41.153a7.111 7.111 0 0 1 3.57-6.145l22.308-12.814A7.111 7.111 0 0 1 256 91.016v74.818a7.11 7.11 0 0 1-3.57 6.166l-84.19 48.357a7.111 7.111 0 0 1-7.07.007l-66.07-37.79a7.111 7.111 0 0 1-3.585-6.172v-37.726c0-.042.05-.07.093-.05c.035.022.085 0 .085-.05v-.042c0-.028.014-.057.043-.071l54.416-31.261c.05-.029.028-.107-.029-.107a.057.057 0 0 1-.057-.057l.107-36.986a7.111 7.111 0 0 0-10.667-6.187L95.064 87.17a7.111 7.111 0 0 1-7.097 0l-40.57-23.36a7.111 7.111 0 0 0-10.66 6.158v66.846a7.111 7.111 0 0 1-10.638 6.18L3.584 130.12A7.111 7.111 0 0 1 0 123.935L.2 7.095A7.111 7.111 0 0 1 10.851.946L87.974 45.24a7.111 7.111 0 0 0 7.083 0l77.1-44.296a7.111 7.111 0 0 1 10.653 6.172v116.867a7.111 7.111 0 0 1-3.562 6.166l-40.378 23.254a7.111 7.111 0 0 0 .028 12.338l22.273 12.68a7.111 7.111 0 0 0 7.061-.015l47.54-27.3Zm4.672-104.835a7.111 7.111 0 0 0 10.767 6.094l21.334-12.8A7.111 7.111 0 0 0 256 33.472V7.387A7.111 7.111 0 0 0 245.233 1.3L223.9 14.1a7.111 7.111 0 0 0-3.457 6.095v26.084v-.007Z"/></svg></div><li>Material UI</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Back-End Development</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src={node} alt='nodejs logo' /></div><li>Node.js</li>
                                        <div><img src={express} alt='express logo' style={{height: '1rem'}}/></div><li>Express.js</li>
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 128 128"><path fill="currentColor" d="M56.813 127.586c-1.903-.227-3.899-.52-4.434-.652a48.078 48.078 0 0 0-2.375-.5a36.042 36.042 0 0 1-2.703-.633c-4.145-1.188-4.442-1.285-7.567-2.563c-2.875-1.172-8.172-3.91-9.984-5.156c-.496-.344-.96-.621-1.031-.621c-.07 0-1.23-.816-2.578-1.813c-8.57-6.343-15.004-14.043-19.653-23.527c-.8-1.629-1.453-3.074-1.453-3.21c0-.134-.144-.505-.32-.817c-.363-.649-.88-2.047-1.297-3.492a20.047 20.047 0 0 0-.625-1.813c-.195-.46-.352-1.02-.352-1.246c0-.227-.195-.965-.433-1.645c-.238-.675-.43-1.472-.43-1.77c0-.296-.187-1.32-.418-2.276C.598 73.492 0 67.379 0 63.953c0-3.422.598-9.535 1.16-11.894c.23-.957.418-2 .418-2.32c0-.321.145-.95.32-1.4c.18-.448.41-1.253.516-1.788c.11-.535.36-1.457.563-2.055l.59-1.726c.433-1.293.835-2.387 1.027-2.813c.11-.238.539-1.21.957-2.16c.676-1.535 2.125-4.43 2.972-5.945c.309-.555.426-.739 2.098-3.352c2.649-4.148 7.176-9.309 11.39-12.988c1.485-1.297 6.446-5.063 6.669-5.063c.062 0 .53-.281 1.043-.625c1.347-.902 2.668-1.668 4.39-2.531a53.06 53.06 0 0 0 1.836-.953c.285-.164.82-.41 3.567-1.64c.605-.27 1.257-.516 3.136-1.173c.414-.144 1.246-.449 1.84-.672c.598-.222 1.301-.406 1.563-.406c.258 0 .937-.18 1.508-.402c.57-.223 1.605-.477 2.304-.563c.696-.082 1.621-.277 2.055-.43c.43-.148 1.61-.34 2.621-.425a72.572 72.572 0 0 0 3.941-.465c2.688-.394 8.532-.394 11.192 0a75.02 75.02 0 0 0 3.781.445c.953.079 2.168.278 2.703.442c.535.16 1.461.36 2.055.433c.594.079 1.594.325 2.222.551c.63.23 1.344.414 1.59.414s.754.137 1.125.309c.375.168 1.168.449 1.766.625c.594.18 1.613.535 2.27.797c.652.261 1.527.605 1.945.761c.77.29 6.46 3.137 7.234 3.622c6.281 3.917 9.512 6.476 13.856 10.964c5.238 5.414 8.715 10.57 12.254 18.16c.25.536.632 1.329.851 1.758c.215.434.395.942.395 1.13c0 .19.18.76.402 1.269c.602 1.383 1.117 2.957 1.36 4.16c.12.59.343 1.32.495 1.621c.153.3.332 1.063.403 1.688c.07.624.277 1.648.453 2.269c1.02 3.531 1.527 13.934.91 18.535c-.183 1.367-.39 3.02-.46 3.672c-.118 1.117-.708 4.004-1.212 5.945l-.52 2.055c-.98 3.957-3.402 9.594-6.359 14.809c-1.172 2.07-5.101 7.668-5.843 8.324c-.067.058-.399.45-.735.863c-.336.418-1.414 1.586-2.39 2.594c-4.301 4.441-7.77 7.187-13.86 10.969c-.722.449-6.847 3.441-7.992 3.906c-.594.238-1.586.64-2.203.89c-.613.247-1.297.454-1.512.458c-.215.003-.781.195-1.258.425c-.476.23-1.082.422-1.351.426c-.266.004-1.043.192-1.727.418c-.683.23-1.633.477-2.11.55c-.476.075-1.495.278-2.269.45c-.773.172-3.11.508-5.187.746a59.06 59.06 0 0 1-13.945-.031zm4.703-12.5c.3-.234.609-.7.691-1.027c.18-.723 29.234-58.97 29.781-59.7c.461-.617.504-1.605.082-1.953c-.222-.187-3.004-.246-10.43-.234c-5.57.012-10.253.016-10.406.012c-.226-.008-.273-3.73-.25-19.672c.016-10.817-.035-19.766-.113-19.89c-.078-.126-.383-.227-.68-.227c-.418 0-.613.18-.87.808c-.485 1.168-1.825 3.82-8.348 16.485a3554.569 3554.569 0 0 0-4.055 7.89c-1.156 2.262-2.98 5.813-4.047 7.89a8751.248 8751.248 0 0 0-8.598 16.759c-4.933 9.636-5.53 10.785-5.742 11.039c-.41.496-.633 1.64-.402 2.07c.21.394.629.41 11.043.394c5.953-.007 10.863.024 10.914.07c.137.141.086 37.31-.055 38.196c-.093.582-.031.89.235 1.156c.46.461.586.457 1.25-.066zm0 0"/></svg></div><li>FastAPI</li>
                                        <div><img src={django} alt='django logo' /></div><li>Django</li>
                                        <div><img src={graphql} alt='graphql logo'/></div><li>GraphQL</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>DevOps</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src={vercel} alt='vercel logo' /></div><li>Vercel</li>
                                        <div><img src={render} alt='render.com logo' /></div><li>Render.com</li>
                                        <div><img src={docker} alt='docker logo' /></div><li>Docker</li>
                                        <div><img src={lambda} alt='aws lambda logo' /></div><li>AWS Lambda</li>
                                    </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Software Development</h6>
                                        <ul className="icons" style={{listStyleType: "none"}}>
                                            <div><img src={linux} alt='linux logo' /></div><li>Linux</li>
                                            <div><img src={git} alt='git logo' /></div><li>Git</li>
                                            <div><img src={github} alt='github logo' /></div><li>GitHub</li>
                                            <div><img src={jira} alt='jira logo' /></div><li>Jira</li>
                                            <div><img src={trello} alt='trello logo' /></div><li>Trello</li>
                                        </ul>
                                </div>
                                <div className='p-2'>
                                    <h6>Database</h6>
                                    <ul className="icons" style={{listStyleType: "none"}}>
                                        <div><img src={mongodb} alt='mongodb logo' /></div><li>MongoDB</li>
                                        <div><img src={mysql} alt='mysql logo' /></div><li>MySQL</li>
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
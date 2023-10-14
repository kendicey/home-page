import React from 'react';

const Contact = () => {

    const handleCopy = () => {
        navigator.clipboard.writeText("kendiceyeungnm@gmail.com");
        alert("Email copied to clipboard!");
    }
    
    return (
        <div className='container' style={{borderRadius: "25px"}}>
            <div className='title'>
                <h2>Contact</h2>
                <p>Contact me for collaborations, opportunities, or just to say hi <span style={{whiteSpace: "nowrap"}}>(* ' ˘ ' *)</span></p>
            </div>
            <div className='card' style={{textAlign: "center", border: "0"}}>
                <div className='card-body' style={{margin: "auto"}}>
                    <a href='https://www.linkedin.com/in/kendicenmyeung/' className='contact_links' target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-outline-secondary linkedinBtn">
                            <img src='https://s3.us-west-2.amazonaws.com/kendicey.io/contact_linkedin.png' alt='linkedin' className='contact_icons' />
                            LinkedIn
                        </button>
                    </a>
                    <br/>
                    <a href='https://github.com/kendicey' className='contact_links' target='_blank' rel="noreferrer">
                        <button type="button" class="btn btn-outline-secondary githubBtn">
                            <img src='https://s3.us-west-2.amazonaws.com/kendicey.io/contact_github.png' alt='github' className='contact_icons' />
                            GitHub
                        </button>
                    </a>
                    <br/>
                    <button onClick={handleCopy} type="button" class="btn btn-outline-secondary" id="emailBtn">
                        <img src='https://s3.us-west-2.amazonaws.com/kendicey.io/contact_email.png' alt='email' className='contact_icons' />
                        Email
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
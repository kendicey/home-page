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
                <div className='card-body'>
                    <a href='https://www.linkedin.com/in/kendicenmyeung/' className='contact_links' target='_blank'><button type="button" class="btn btn-outline-secondary linkedinBtn">LinkedIn</button></a><br/>
                    <a href='https://github.com/kendicey' className='contact_links' target='_blank'><button type="button" class="btn btn-outline-secondary githubBtn">GitHub</button></a><br/>
                    <button onClick={handleCopy} type="button" class="btn btn-outline-secondary" id="emailBtn">Email</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
import React from 'react';
import './Form.css';

function Form() {
    return (
        <div className="container">
            <div className="form-wrapper">
                <h2>Audition Form</h2>
                <form action="https://formsubmit.co/tonymone1234@gmail.com" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="height">Height (in cm)</label>
                        <input type="number" id="height" name="height" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="current-location">Current Location</label>
                        <input type="text" id="current-location" name="current-location" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hometown">Hometown</label>
                        <input type="text" id="hometown" name="hometown" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="audition-links">Audition Links (YouTube Unlisted)</label>
                        <textarea id="audition-links" name="audition-links" placeholder="Paste your unlisted YouTube links here" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="work-links">Work Links</label>
                        <textarea id="work-links" name="work-links" placeholder="Paste your work links here" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                    <input type="hidden" name="_subject" value="LeoCasting" />
                </form>
            </div>
        </div>
    );
}

export default Form;

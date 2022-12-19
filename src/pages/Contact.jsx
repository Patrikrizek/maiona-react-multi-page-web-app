import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <h1>Contact</h1>
            <h5>Leave as a message and we will get back to you shortly.</h5>

            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Subject</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Your Message</label>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

        </>
    );
}

export default Contact;

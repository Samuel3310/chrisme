import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSuccessMessage("Message sent. I will get back to you soon.");
      } else {
        setErrorMessage("Sending message failed, please try again later.");
      }
    } catch (error) {
      setErrorMessage("Sending message failed, please try again later.", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container">
      <ContactTop />
      <section className="contact-form">
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-6-6 col-md-12-12 col-smd-5-12 col-lg-4-12 aside animate--me animate--init">
              <div>
                <h5>Contact</h5>
                <h1>Get in touch — let’s work together.</h1>
                <h5>Address</h5>
                <h4 className="header-dark">
                  Damian Watracz
                  <br />
                  Os. Oświecenia 12
                  <br />
                  31-635 Kraków
                  <br />
                  Poland, EU
                </h4>
              </div>
            </div>
            <div className="col-sm-6-6 col-md-12-12 col-smd-6-12 col-smd-offset-1-12 col-lg-7-12 col-lg-offset-1-12 content animate--me animate--init">
              <h3 className="header-light">
                Got a project? Drop me a line if you want to work together on
                something exciting. Big or small. Mobile or web.
              </h3>

              <form id="form-contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6-6 col-md-6-12 col-smd-12-12 col-lg-6-12">
                    <div className="field">
                      <label>Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        id="form-contact_name"
                        name="name"
                        placeholder="What’s your name?"
                        required
                      />
                      <span className="input-bottom-line"></span>
                    </div>
                  </div>
                  <div className="col-sm-6-6 col-md-6-12 col-smd-12-12 col-lg-6-12">
                    <div className="field">
                      <label>Your Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="form-contact_email"
                        name="email"
                        placeholder="What’s your email address?"
                        required
                      />
                      <span className="input-bottom-line"></span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6-6 col-md-6-12 col-smd-12-12 col-lg-6-12">
                    <div className="field">
                      <label>Service</label>
                      <select
                        id="form-contact_service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          What are you interested in?
                        </option>
                        <option value="Need help with a one-off project">
                          Need help with a one-off project
                        </option>
                        <option value="Looking for a long term partnership">
                          Looking for a long term partnership
                        </option>
                        <option value="Want to hire a designer full-time">
                          Want to hire me full-time
                        </option>
                        <option value="Just wanted to say hi!">
                          Just wanted to say hi!
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6-6 col-md-6-12 col-smd-12-12 col-lg-6-12">
                    <div className="field">
                      <label>Budget</label>
                      <select
                        id="form-contact_budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          What’s your budget?
                        </option>
                        <option value="$1000 - $2500">$1000 - $2500</option>
                        <option value="$2500 - $5000">$2500 - $5000</option>
                        <option value="$5000 - $10000">$5000 - $10000</option>
                        <option value="$10000 or more">$10000 or more</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    id="form-contact_message"
                    placeholder="What’s your message?"
                    rows="1"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="autosize"
                    style={{ height: "44px" }}
                  ></textarea>
                  <span className="input-bottom-line"></span>
                </div>

                {/* ReCAPTCHA placeholder */}
                <div className="field">
                  <div id="contact-recaptcha">
                    {/* ReCAPTCHA code can be inserted here */}
                  </div>
                </div>

                <div className="button-notification-container">
                  <div className="field no-margin">
                    <button
                      type="submit"
                      className="regular"
                      disabled={isSending}
                    >
                      <span className="regular with-icon">
                        <span className="icon icon-button-mail icon--on-left">
                          {/* Insert SVG icon here */}
                        </span>
                        Send message
                      </span>
                      {isSending && (
                        <span className="sending">
                          <span className="icon icon-button-loading icon--on-left">
                            {/* Insert loading icon here */}
                          </span>
                          Sending...
                        </span>
                      )}
                    </button>
                    {successMessage && (
                      <span className="sent">{successMessage}</span>
                    )}
                  </div>
                  <div className="notifications clearfix">
                    {errorMessage && (
                      <>
                        <div className="error form-error">{errorMessage}</div>
                        <div className="error server-error">{errorMessage}</div>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

export const ContactTop = () => {
  return (
    <section className="contact-top">
      <div className="wrapper">
        <div className="letters clearfix">
          <i>L</i>
          <i>E</i>
          <i>T</i>
          <i>S</i>
          <i>W</i>
          <i>O</i>
          <i>R</i>
          <i>K</i>
          <i>T</i>
          <i>O</i>
          <i>G</i>
          <i>E</i>
          <i>T</i>
          <i>H</i>
          <i>E</i>
          <i>R</i>
        </div>
      </div>
    </section>
  );
};

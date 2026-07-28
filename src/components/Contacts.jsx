const contactDetails = [
  {
    title: "Phone",
    text: "+1 (555) 123-4567",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    text: "contact@airevolution.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Office",
    text: "123 AI Boulevard, Tech City, TC 10001",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <section className="app-container py-18">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* left */}
        <div>
          <span className="section-subheader">Get in Touch</span>
          <h2 className="section-header">
            Ready to <span className="gradient-text">Transform</span> Your
            Buisness with AI?
          </h2>
          <p className="section-description">
            Our team of AI experts is ready to help you implement cutting-edge
            solutions tailored to your specific needs. Contact us today to
            schedule a consultation.
          </p>
          <div className="mt-6 space-y-6">
            {contactDetails.map((detail) => {
              return (
                <div className="contact-info-group">
                  <span className="form-icon">{detail.icon}</span>
                  <div>
                    <h3 className="contact-title">{detail.title}</h3>
                    <p className="contact-text">{detail.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* right */}
        <div  className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
          <form>
            <div className="space-y-6">
              <div >
                <label className="form-input-label" for="name">
                  full name
                </label>
                <input className="form-input" type="text" id="name"></input>
              </div>
               <div >
                <label className="form-input-label" for="email">
                  email
                </label>
                <input className="form-input" type="email" id="email"></input>
              </div>
               <div >
                <label className="form-input-label" for="subject">
                  subject
                </label>
                <input className="form-input" type="subject" id="subject"></input>
              </div>
               <div >
                <label className="form-input-label" for="message">
                  message
                </label>
                <textarea className="form-input" type="message" id="message" rows={4}></textarea>
                <button type="submit" className="btn-primary w-full mt-4">send data</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

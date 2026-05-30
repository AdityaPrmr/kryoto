export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navContent">
          <div className="logo">KRYOTO</div>

          <div className="navLinks">
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">

          <span className="badge">
            AI Automation For Ecommerce Businesses
          </span>

          <h1>
            Automate Customer Support Across Every Channel
          </h1>

          <p>
            Kryoto helps ecommerce brands reduce support workload with AI
            automation across WhatsApp, Instagram, Email and Live Chat.
          </p>

          <div className="heroButtons">
            <a
              href="mailto:aditya@kryoto.in"
              className="btn"
            >
              Book Free Demo
            </a>

            <a
              href="#features"
              className="btn secondary"
            >
              Explore Features
            </a>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="container">
          <div className="stats">

            <div className="card">
              <h2>80%</h2>
              <p>Support Queries Automated</p>
            </div>

            <div className="card">
              <h2>24/7</h2>
              <p>Instant Customer Responses</p>
            </div>

            <div className="card">
              <h2>4+</h2>
              <p>Support Channels Connected</p>
            </div>

          </div>
        </div>
      </section>

      {/* Problem */}
      <section>
        <div className="container center">

          <h2>Support Is Broken</h2>

          <p className="sectionText">
            Ecommerce businesses spend hours answering the same questions
            about shipping, refunds, returns and order tracking.
          </p>

          <div className="featuresGrid">

            <div className="card">
              <h3>Repeated Questions</h3>
              <p>
                Customers ask the same support questions every day.
              </p>
            </div>

            <div className="card">
              <h3>Slow Responses</h3>
              <p>
                Manual replies delay customer experience.
              </p>
            </div>

            <div className="card">
              <h3>Multiple Platforms</h3>
              <p>
                Support is scattered across WhatsApp, Email and Instagram.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features">
        <div className="container">

          <div className="sectionHeader">
            <h2>Everything In One Workflow</h2>
            <p>
              Unified support automation built for modern ecommerce brands.
            </p>
          </div>

          <div className="featuresGrid">

            <div className="card">
              <h3>WhatsApp Automation</h3>
              <p>
                Automatically answer common support questions.
              </p>
            </div>

            <div className="card">
              <h3>Instagram DMs</h3>
              <p>
                Handle customer conversations instantly.
              </p>
            </div>

            <div className="card">
              <h3>Email Support</h3>
              <p>
                Reduce repetitive email responses.
              </p>
            </div>

            <div className="card">
              <h3>Order Tracking</h3>
              <p>
                Provide shipment updates automatically.
              </p>
            </div>

            <div className="card">
              <h3>Refund Assistance</h3>
              <p>
                Explain refund and return policies instantly.
              </p>
            </div>

            <div className="card">
              <h3>Human Escalation</h3>
              <p>
                Transfer complex cases to human agents.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Workflow */}
      <section id="workflow">
        <div className="container center">

          <h2>How It Works</h2>

          <div className="workflow">

            <div className="workflowCard">
              Customer Message
            </div>

            <div className="arrow">→</div>

            <div className="workflowCard">
              AI Processing
            </div>

            <div className="arrow">→</div>

            <div className="workflowCard">
              Instant Response
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="container">

          <div className="cta">

            <h2>
              Ready To Automate Customer Support?
            </h2>

            <p>
              Let's discuss your workflow and discover automation
              opportunities.
            </p>

            <a
              href="mailto:aditya@kryoto.in"
              className="btn"
            >
              Schedule Demo
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer">
          <div>
            <h3>KRYOTO</h3>
            <p>
              AI Automation For Ecommerce Businesses
            </p>
          </div>

          <div>
            <p>aditya@kryoto.in</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="container navContent">
          <div className="logo">KRYOTO</div>

          <div className="navLinks">
            <a href="#problem">Problem</a>
            <a href="#features">Solutions</a>
            <a href="#workflow">Workflow</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      {/*
        FIX: added className="hero" to the <section> so the CSS rule
        `section.hero` (which adds navbar-offset padding-top) actually fires.
        Previously the section had no className, so all hero content was
        hidden behind the fixed 80px navbar on page load.
      */}
      <section className="hero">
        <div className="container">

          <span className="badge">
            Omnichannel AI Support Workflows
          </span>

          <h1>
            Stop Answering The Same Customer Questions Every Day
          </h1>

          <p>
            Kryoto helps ecommerce brands automate shipping updates,
            refund requests, order tracking and support conversations
            across WhatsApp, Instagram and Email.
          </p>

          <div className="heroButtons">
            <a href="mailto:aditya@kryoto.in" className="btn">
              Book Free Workflow Review
            </a>

            <a href="#features" className="btn secondary">
              Explore Solutions
            </a>
          </div>

        </div>
      </section>

      {/* ── SUPPORT TYPES STRIP ── */}
      {/*
        FIX: was using <h2> tags for emoji + label inside stat cards.
        h2 is a heading element — wrong for decorative icons/labels.
        Replaced with <span className="statIcon"> (styled in CSS) and
        a proper <p> for the label.
        FIX: added id="support" so this section can be targeted if needed,
        and added explicit padding via `section` rule so it isn't cramped.
      */}
      <section id="support">
        <div className="container">
          <div className="stats">

            <div className="card">
              <span className="statIcon">📦</span>
              <p>Order Tracking</p>
            </div>

            <div className="card">
              <span className="statIcon">↩️</span>
              <p>Refund Requests</p>
            </div>

            <div className="card">
              <span className="statIcon">🚚</span>
              <p>Shipping Questions</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section id="problem">
        <div className="container center">

          <h2>Your Team Shouldn't Spend Hours Answering:</h2>

          <p className="sectionText">
            Most ecommerce support tickets are repetitive.
            Customers ask the same questions repeatedly while
            your team spends valuable time answering them.
          </p>

          <div className="featuresGrid">

            <div className="card">
              <h3>Where Is My Order?</h3>
              <p>
                The most common support request for growing brands.
              </p>
            </div>

            <div className="card">
              <h3>How Do I Get A Refund?</h3>
              <p>
                Refund and return questions consume support hours.
              </p>
            </div>

            <div className="card">
              <h3>What Is Your Shipping Policy?</h3>
              <p>
                Customers repeatedly ask questions already answered
                in your policies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features">
        <div className="container">

          <div className="sectionHeader">
            <h2>Automate Support Across Every Channel</h2>
            <p>
              Deliver fast and consistent customer support
              without growing your support team.
            </p>
          </div>

          <div className="featuresGrid">

            <div className="card">
              <h3>WhatsApp Support Automation</h3>
              <p>
                Respond instantly to customer questions on WhatsApp.
              </p>
            </div>

            <div className="card">
              <h3>Instagram DM Automation</h3>
              <p>
                Handle Instagram conversations without manual replies.
              </p>
            </div>

            <div className="card">
              <h3>Email Support Automation</h3>
              <p>
                Automatically answer repetitive customer emails.
              </p>
            </div>

            <div className="card">
              <h3>Real-Time Order Tracking</h3>
              <p>
                Provide customers with instant shipment updates.
              </p>
            </div>

            <div className="card">
              <h3>Refund &amp; Return Assistance</h3>
              <p>
                Automate common refund and return questions.
              </p>
            </div>

            <div className="card">
              <h3>Human Agent Escalation</h3>
              <p>
                Complex issues are transferred to your team when needed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section id="who-we-help">
        <div className="container center">

          <h2>Who We Help</h2>

          {/*
            FIX: added sectionText paragraph for spacing consistency —
            the heading was floating directly above the grid with no
            breathing room, which looked cramped.
          */}
          <p className="sectionText">
            Whether you run a Shopify store or a fast-growing DTC brand,
            Kryoto scales with your support volume.
          </p>

          <div className="featuresGrid">

            <div className="card">
              <h3>Shopify Stores</h3>
              <p>
                Reduce support workload while improving response speed.
              </p>
            </div>

            <div className="card">
              <h3>DTC Brands</h3>
              <p>
                Deliver better customer experiences at scale.
              </p>
            </div>

            <div className="card">
              <h3>Growing Ecommerce Teams</h3>
              <p>
                Support more customers without hiring more agents.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section id="workflow">
        <div className="container center">

          <h2>How It Works</h2>

          <div className="workflow">

            <div className="workflowCard">
              Customer asks:<br />
              &ldquo;Where is my order?&rdquo;
            </div>

            {/* FIX: aria-hidden on decorative arrows so screen readers skip them */}
            <div className="arrow" aria-hidden="true">→</div>

            <div className="workflowCard">
              AI checks<br />
              order information
            </div>

            <div className="arrow" aria-hidden="true">→</div>

            <div className="workflowCard">
              Instant response<br />
              delivered
            </div>

            <div className="arrow" aria-hidden="true">→</div>

            <div className="workflowCard">
              Human joins<br />
              only if needed
            </div>

          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section id="founder">
        <div className="container">
          <div className="founder">

            <h2>Built By Aditya Parmar</h2>

            <p>
              I&apos;m building Kryoto to help ecommerce businesses
              eliminate repetitive support work through practical
              AI automation and omnichannel workflows.
            </p>

            {/*
              FIX: placeholder LinkedIn URL replaced with a proper
              rel="noopener noreferrer" for security (target="_blank").
              Update the href to the real profile URL.
            */}
            <a
              href="https://www.linkedin.com/in/adityaparmar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Connect On LinkedIn
            </a>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact">
        <div className="container">
          <div className="cta">

            <h2>
              Let&apos;s Find What&apos;s Slowing Down Your Support Team
            </h2>

            <p>
              Book a free workflow review and discover
              which support tasks can be automated first.
            </p>

            <a href="mailto:aditya@kryoto.in" className="btn">
              Schedule Free Review
            </a>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container footer">

          <div>
            <h3>KRYOTO</h3>
            <p>AI-powered support workflows for modern ecommerce brands.</p>
          </div>

          <div>
            {/*
              FIX: wrap contact details in <address> for semantic correctness;
              also make the email a clickable mailto link.
            */}
            <address style={{ fontStyle: "normal" }}>
              <p>
                <a
                  href="mailto:aditya@kryoto.in"
                  style={{ color: "var(--muted)", textDecoration: "none" }}
                >
                  aditya@kryoto.in
                </a>
              </p>
              <p>
                <a
                  href="https://kryoto.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--muted)", textDecoration: "none" }}
                >
                  kryoto.in
                </a>
              </p>
            </address>
          </div>

        </div>
      </footer>
    </>
  );
}
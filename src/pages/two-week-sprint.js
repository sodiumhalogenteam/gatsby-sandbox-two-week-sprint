import React from 'react';
import '../components/layout.css';

const TwoWeekSprintSite = () => (
  <React.Fragment>
    {/* <title>Two Week Sprint Site</title> */}

    <div className="header-image">
      <img src="Images/sh-white-logo.png" className="company-logo" />
      <img src="Images/header-image.png" className="main-pic-top" />
      <h1 className="text-center main-pic-top-header">Launch a Site in 2-Weeks</h1>
      {/* <!-- Remember to make the date change according to the current date --> */}
      <p className="text-center main-pic-top-desc">Start today and launch on Nov. 11th</p>
    </div>
    <table className="company-description">
      <thead>
        <td className="text-center table-head">Save Money</td>
        <td className="text-center table-head">Save Time</td>
        <td className="text-center table-head">Save Your Sanity</td>
      </thead>
      <tr>
        <td className="text-center table-desc">
          If your site is out-dated, not working, and frustrating to use then it's costing you money. Let us help you
          save money!
        </td>
        <td className="text-center table-desc">
          The last time you tried having your site built, it took months. It took time away from building and growing
          your business.
        </td>
        <td className="text-center table-desc">
          We make this process easy and as stress-free as possible. You can be confident you're getting a site that
          works for you.
        </td>
      </tr>
    </table>

    <p className="text-center affirmation-1">
      We've taken our experience with creating massive, custom sites and narrowed down the most impactful elements of
      our Designtific Method. We packed these elements into a 2-week timeline that delivers amazing results.
    </p>
    <div className="work-images">
      <img src="Images/hex-1.png" />
      <img src="Images/hex-2.png" />
      <img src="Images/hex-3.png" />
      <img src="Images/hex-4.png" />
      <img src="Images/hex-5.png" />
    </div>
    <div className="side-hexes">
      <img className="hex-left" src="Images/left-hex.png" />
      <img className="hex-right" src="Images/right-hex.png" />
    </div>
    <div className="two-week-timeline">
      <p className="text-center two-wk-head">The 2-Week Timeline</p>
      <table className="days-of-process">
        <tbody>
          <tr>
            <td className="text-center process-day" className="day1">
              Day 1
            </td>
            <td className="text-center process-day" className="day2-7">
              Day 2-7
            </td>
            <td className="text-center process-day" className="day8">
              Day 8
            </td>
            <td className="text-center process-day" className="day9-13">
              Day 9-13
            </td>
            <td className="text-center process-day" className="day14">
              Day 14
            </td>
          </tr>
        </tbody>
      </table>

      <div className="two-wk-timeline-graphic">
        <img className="days-of-process-visual-rep" src="Images/days-of-process-visual-rep.png" />
      </div>
      <div className="process-step-card">
        <h3 className="process-step-day">Day 1</h3>
        <h3 className="process-step-title">Strategy Kickoff Day</h3>
        <p className="process-step-desc">
          This is a 3hr interactive workshop where we learn all about your customers, your company, and what your site
          should accomplish.
        </p>
      </div>
      <div className="process-step-card">
        <h3 className="process-step-day">Day 2-7</h3>
        <h3 className="process-step-title">Work Day Prep</h3>
        <h3 className="process-step-sub-title">Adopt a Proven Strategic Process</h3>
        <p className="process-step-desc">
          Through a series of emails and questionnaires, your team will be guided through the process of gathering
          materials and content for the new site. This leads up to our intensive work day.
        </p>
      </div>
      <div className="process-step-card">
        <h3 className="process-step-day">Day 8</h3>
        <h3 className="process-step-title">Work Day</h3>
        <h3 className="process-step-sub-title">Work side-by-side with experts</h3>
        <p className="process-step-desc">Your team plus the Sodium Halogen team will share an intense day.</p>
        <br />
        <ul className="process-step-desc">
          <li>You and an SH content coach will create the site's content.</li>
          <li>The SH designer will design the look and feel and layout of the site.</li>
          <li>The SH developer will build out each page with real content.</li>
        </ul>
      </div>
      <div className="process-step-card">
        <h3 className="process-step-day">Day 9-13</h3>
        <h3 className="process-step-title">Launch Day Prep</h3>
        <h3 className="process-step-sub-title">Get to Market Quicker</h3>
        <p className="process-step-desc">
          Over the days following the work day, the SH team will make any remaining changes to your new site. You'll be
          updated of progress, and we'll prepare for launch.
        </p>
      </div>
      <div className="process-step-card">
        <h3 className="process-step-day">Day 14</h3>
        <h3 className="process-step-title">Launch Day</h3>
        <h3 className="process-step-sub-title">See a Return on Your Investment in Days, Not Months</h3>
        <p className="process-step-desc">Get your party hats ready. We launch the site.</p>
      </div>
    </div>
    <div className="cost-estimate-and-survey">
      <h1>Let's Talk Money</h1>
      <h2>2-Week Sprint</h2>
      <h6>Strategy Workshop</h6>
      <h6>Intentional Work Day</h6>
      <h6>Working with the Experts</h6>
      <h6>One Great Website</h6>
      <h3 className="total-cost">$8,700</h3>
      <h6>Is this right for you? Find out.</h6>
      <button className="2-min-surv">2 MINUTE SURVEY</button>
    </div>
    <div className="satisfied-customers">
      <h1>Folks Who Love Us</h1>
      <div className="customer-group">
        <div className="satisfied-customer">
          <img src="placeholder-image.png" />
          <p className="customer-quote">
            "[Sodium Halogen] pulled all this information out of me I didn't know I had. I'm really excited about the
            results."
          </p>
          <br />
          <p className="customer-desc">- Donna Frankland - The Barrel Wine & Spirits</p>
        </div>
        <div className="satisfied-customer">
          <img src="placeholder-image.png" />
          <p className="customer-quote">
            "Having a live website within two weeks was invaluable to us...to start making money as quickly as
            possible."
          </p>
          <br />
          <p className="customer-desc">- Ben Ferguson - President of Allygn</p>
        </div>
        <div className="satisfied-customer">
          <img src="placeholder-image.png" />
          <p className="customer-quote">
            "This team knows their stuff. They guided us through the entire process and we've seen the impact the new
            site has had on our bottom line."
          </p>
          <br />
          <p className="customer-desc">- R.E. Butts - Founder of Butts Foods</p>
        </div>
      </div>
    </div>
    <div className="get-started">
      <h1>Strategy + Execution + Launch</h1>
      <h2>Get a brand new site in just 2 weeks!</h2>
      <button className="get-started-button">LET'S GET STARTED</button>
    </div>
    <div className="freq-asked-questions">
      <h2>Frequently Asked Questions</h2>
      <table>
        <tbody>
          <tr>
            <td>What if I'm not organized?</td>
            <td>What if I'm indecisive?</td>
            <td>What if I don't know what I love but I know what I hate?</td>
            <td>I'm not sure who to write content for my company</td>
          </tr>
          <tr>
            <td>
              Over the days following the work day, the SH team will make any remaining changes to your new site. You'll
              be updated of progress, and we'll prepare for launch.
            </td>
            <td>
              Over the days following the work day, the SH team will make any remaining changes to your new site. You'll
              be updated of progress, and we'll prepare for launch.
            </td>
            <td>
              Over the days following the work day, the SH team will make any remaining changes to your new site. You'll
              be updated of progress, and we'll prepare for launch.
            </td>
            <td>
              Over the days following the work day, the SH team will make any remaining changes to your new site. You'll
              be updated of progress, and we'll prepare for launch.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bottom-images">
      <img src="Images/LogDNA_SW_working.jpg" />
      <img src="Images/HotelZapr-SW_5185.JPG" />
      <img src="Images/2018-dev-catalyst-workshop-10-02%2011.26.48.jpg" />
    </div>
  </React.Fragment>
);

export default TwoWeekSprintSite;

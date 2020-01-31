import React from 'react';
import styled from 'styled-components';
import Header_Image from '../../content/assets/two-week-sprint/header-image.png';
import Logo from '../../content/assets/two-week-sprint/sh-white-logo.png';
import Hex1 from '../../content/assets/two-week-sprint/hex-1.png';
import Hex2 from '../../content/assets/two-week-sprint/hex-2.png';
import Hex3 from '../../content/assets/two-week-sprint/hex-3.png';
import Hex4 from '../../content/assets/two-week-sprint/hex-4.png';
import Hex5 from '../../content/assets/two-week-sprint/hex-5.png';
import RightHex from '../../content/assets/two-week-sprint/right-hex.png';
import LeftHex from '../../content/assets/two-week-sprint/left-hex.png';
import DaysOfProcess from '../../content/assets/two-week-sprint/days-of-process-visual-rep.png';
import PlaceHolder from '../../content/assets/two-week-sprint/placeholder-image.png';
import LogDNA from '../../content/assets/two-week-sprint/LogDNA_SW_working.jpg';
import HotelZapr from '../../content/assets/two-week-sprint/HotelZapr-SW_5185.jpg';
import DevCatalyst from '../../content/assets/two-week-sprint/dev-catalyst.jpg';

const TwoWeekStyles = styled.div`
  .main-pic-top {
    width: 100%;
    height: 25rem;
    display: block;
    margin: auto;
    object-fit: cover;
  }
  .header-section {
    position: relative;
    bottom: 106px;
  }
  .company-logo {
    position: relative;
    top: 100px;
    height: 70px;
    left: 35px;
  }
  body {
    margin: 0;
  }
  .main-pic-top-header {
    font-family: jubilat, sans-serif;
    font-weight: 500;
    color: white;
    font-size: 3rem;
  }
  .main-pic-top-desc {
    font-family: freight-sans-pro, sans-serif;
    color: white;
    font-size: 20px;
  }
  .main-pic-top-header,
  .main-pic-top-desc {
    position: relative;
    bottom: 13rem;
  }
  .text-center {
    text-align: center;
    position: relative;
  }

  .company-description {
    position: relative;
    bottom: 80px;
    display: block;
    margin: auto;
    width: 40rem;
  }

  .table-desc {
    font-family: freight-sans-pro, sans-serif;
    color: grey;
  }
  .affirmation-1 {
    position: relative;
    top: 4rem;
    width: 32.5rem;
    margin: auto;
    font-family: jubilat, sans-serif;
    color: #323e48;
    font-weight: 500;
    letter-spacing: 0.03em;
    margin-bottom: -100px;
  }
  .work-images {
    position: relative;
    top: 13em;
    right: 2.75em;
    display: flex;
    justify-content: center;
  }
  .work-images img {
    margin-right: -70px;
    height: 12rem;
    width: auto; 
    padding: 1rem;
  }
  .work-images img:nth-of-type(odd) {
    position: relative;
    top: 6rem;
  }
  .hex-right {
    float: right;
    width: 14.5rem;
  }
  .hex-left {
    float: left;
    width: 11.1rem;
  }
  .side-hexes {
    position: relative;
    top: 70rem;
  }
  .two-week-timeline {
    position: relative;
    top: 25rem;
  }
  .two-wk-head {
    font-size: 4rem;
    font-family: jubilat, sans-serif;
    font-weight: 500;
    font-size: 3rem;
    color: #323e48;
  }

  .days-of-process {
    position: relative; 
    bottom: 73rem; 
    color: #323e48;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }

  .day8 {
    left: 25px;
  }

  .day14 {
    left: 20px;
  }
  .day9-13 {
    left: 20px;
  }
  .day2-7 {
    left: 10px;
  }
  .days-of-process-visual-rep {
    position: relative; 
    width: 750px;
    bottom: 72rem; 
    display: block;
    margin: 0 auto; 
    }
  .days-of-process td {
    padding-left: 50px;
    padding-right: 50px;
  }
  .process-step-day {
    position: relative;
    bottom: 40px;
    font-family: jubilat, sans-serif;
    font-weight: 400;
    color: #979696;
  }
  .process-step-title {
    font-family: jubilat, sans-serif;
    font-weight: 500;
    margin-top: -30px;
    color: #323e48;
  }
  .process-step-sub-title {
    position: relative;
    top: -75px;
    font-family: freight-sans-pro, sans-serif;
    font-weight: 500;
    color: #979696;
    margin-bottom: 25px;
  }
  .process-step-desc {
    font-family: freight-sans-pro, sans-serif;
    color: #575756;
    font-weight: 500;
    margin-bottom: -20px;
  }
  .process-day {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    font-family: jubilat;
    font-weight: 500;
  }
  .process-step-card {
    position: relative;
    bottom: 65rem;
    width: 40rem;
    margin: auto;
    margin-bottom: 5rem;
    border: none;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.56);
  }
  .process-step-card ul {
    position: relative;
    left: 9rem;
  }
  .process-step-card:nth-last-child(6) {
    margin-bottom: 10rem;
  }

  .process-step-title,
  .process-step-sub-title,
  .process-step-desc {
    position: relative;
    left: 10.5rem;
    padding-right: 10rem;
    bottom: 3.4rem;
  }

  .cost-estimate-and-survey {
    position: relative;
    bottom: 25rem;
    text-align: center;
  }

  .cost-estimate-and-survey h1 {
    font-family: jubilat, sans-serif;
    font-weight: 600;
    color: #323e48;
    font-size: 3rem;
  }
  .cost-estimate-and-survey h2 {
    font-family: freight-sans-pro, sans-serif;
    font-weight: 500;
    color: grey;
  }
  .cost-estimate-and-survey h6 {
    font-family: freight-sans-pro, sans-serif;
    font-weight: 500;
    font-size: 17px;
    margin-bottom: -25px;
  }
  .cost-estimate-and-survey button {
    position: relative;
    top: 4rem;
    transform: scale(1.4);
  }
  .total-cost {
    margin-top: 50px;
    font-weight: 500;
    color: #323e48;
    font-family: jubilat;
  }

  .satisfied-customers {
    position: relative;
    bottom: 2em;
  }
  .satisfied-customers h1 {
    position: relative;
    bottom: 3em;
    text-align: center;
    font-family: jubilat;
    font-weight: 600;
    font-size: 3rem;
    color: #323e48;
  }
  .satisfied-customer {
    margin-bottom: -100px;
    position: relative;
    bottom: 5rem;
    width: 45%;
    display: block;
    margin: 0 auto;
  }

  .satisfied-customer img {
    margin-bottom: 15px;
  }

  .customer-quote,
  .customer-desc {
    position: relative;
    bottom: 200px;
  }
  .customer-quote {
    position: relative;
    text-align: left;
    width: 250px;
    bottom: 10rem;
    left: 21rem;
    font-family: jubilat, sans-serif;
    font-weight: 450;
  }
  .customer-desc {
    position: absolute;
    font-family: freight-sans-pro, sans-serif;
    color: grey;
    font-size: 12px;
    bottom: 9rem;
    text-align: center; 
    left: 19rem;
    width: 20rem; 
    text-align: center;
  }

  .get-started {
    position: relative;
    text-align: center;
  }

  .get-started h1 {
    font-family: jubilat, sans-serif;
    font-weight: 600;
    font-size: 3rem;
    color: #323e48;
  }

  .get-started h2 {
    font-family: freight-sans-pro, sans-serif;
    font-weight: 400;
    color: grey;
  }

  .get-started button {
    position: relative;
    top: 1rem;
    transform: scale(1.4);
  }

  .freq-asked-questions {
    position: relative;
    top: 15rem;
  }
  .freq-asked-questions h2 {
    text-align: center;
    font-family: jubilat, sans-serif;
    font-weight: 500;
  }

  /* #freq-asked-questions-table h3: nth-of-type(even), 
  #freq-asked-questions-table p: nth-of-type(even) {
    position: relative; 
    bottom: 8.5rem; 
    left: 10rem; 
  }

  #freq-asked-questions-table h3: nth-of-type(odd), 
  #freq-asked-questions-table p: nth-of-type(odd) {
    position: relative; 
    right: 10rem; 
  } */

  #freq-asked-questions-table h3{
    text-align: center; 
  }

  #freq-asked-questions-table p {
    position: relative; 
    vertical-align: middle; 
    text-align: center; 
    width: 50%; 
    left: 24%; 
  }
  .bottom-images {
    position: relative;
    bottom: 25rem;
  }
  .bottom-images img {
    width: 33.33%;
    margin: 0 auto;
    padding: 0;
    float: left;
    position: relative;
    top: 50rem;
  }

  .satisfied-customer img {
    padding-right: 10px;
    border-right: 3px solid #d3d655;
  }
  .satisfied-customer p {
    margin-top: -20px;
  }
  button {
    padding: 10px;
    border: 2px solid rgb(204, 210, 85);
    color: grey;
    font-family: freight-sans-pro, sans-serif;
    font-weight: 500;
    font-size: 15px;
  }
  @media screen and (max-width: 960px) {
    .work-images img{
      height: auto; 
      width: 13rem; 
      left: 10px; 
    }
  }

`;

const TwoWeekSprintSite = () => (
  <TwoWeekStyles>
    {/* <title>Two Week Sprint Site</title> */}

    <div className="header-section">
      <img src={Logo} alt="logo" className="company-logo" />
      <img src={Header_Image} alt="header_image" className="main-pic-top" />
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
      <img src={Hex1} alt="Images/hex-1.png" />
      <img src={Hex2} alt="Images/hex-2.png" />
      <img src={Hex3} alt="Images/hex-3.png" />
      <img src={Hex4} alt="Images/hex-4.png" />
      <img src={Hex5} alt="Images/hex-5.png" />
    </div>
    <div className="side-hexes">
      <img className="hex-left" src={LeftHex} alt="Images/left-hex.png" />
      <img className="hex-right" src={RightHex} alt="Images/right-hex.png" />
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
        <img className="days-of-process-visual-rep" src={DaysOfProcess} alt="Images/days-of-process-visual-rep.png" />
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
          <img src={PlaceHolder} alt="placeholder-image.png" />
          <p className="customer-quote">
            "[Sodium Halogen] pulled all this information out of me I didn't know I had. I'm really excited about the
            results."
          </p>
          <br />
          <p className="customer-desc">- Donna Frankland - The Barrel Wine & Spirits</p>
        </div>
        <div className="satisfied-customer">
          <img src={PlaceHolder} alt="placeholder-image.png" />
          <p className="customer-quote">
            "Having a live website within two weeks was invaluable to us...to start making money as quickly as
            possible."
          </p>
          <br />
          <p className="customer-desc">- Ben Ferguson - President of Allygn</p>
        </div>
        <div className="satisfied-customer">
          <img src={PlaceHolder} alt="placeholder-image.png" />
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
      <div id="freq-asked-questions-table"> 
      <h3>What if I'm not organized?</h3>
      <p>Over the days following the work day, the SH team will make any remaining changes to your new site. You'll be updated of progress, and we'll prepare for launch.</p>
      <h3>What if I'm indecisive?</h3>
      <p>Over the days following the work day, the SH team will make any remaining changes to your new site. You'll be updated of progress, and we'll prepare for launch.</p>
      <h3>What if I don't know what I love but I know what I hate?</h3>
      <p>Over the days following the work day, the SH team will make any remaining changes to your new site. You'll be updated of progress, and we'll prepare for launch.</p>
      <h3>I'm not sure who to write content for my company.</h3>
      <p>Over the days following the work day, the SH team will make any remaining changes to your new site. You'll be updated of progress, and we'll prepare for launch.</p>
      </div>
    </div>
    <div className="bottom-images">
      <img src={LogDNA} alt="Images/LogDNA_SW_working.jpg" />
      <img src={HotelZapr} alt="Images/HotelZapr-SW_5185.JPG" />
      <img src={DevCatalyst} alt="Images/2018-dev-catalyst-workshop-10-02%2011.26.48.jpg" />
    </div>
  </TwoWeekStyles>
);

export default TwoWeekSprintSite;

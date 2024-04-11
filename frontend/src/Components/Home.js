import React from "react";
import "../Styles/Home.css";
import service from "../images/Customer-Acquisition-Graph-v3.png";
import Simplified from "../images/NBMG-iphone-1 (1) (1).png";
import social from "../images/Social-Media-Marketing-Icon.jpg";
import search from "../images/Search-Engine-Optimization-Icon.jpg";
import website from "../images/Website-Development-Icon.jpg";
import ppc from "../images/Pay-Per-Click-Advertising-Icon.jpg";
import Strategic from "../images/Strategic-Marketing-Plan-Icon.jpg";
import Public from "../images/Public-Relations-Icon.jpg";
import Appear from "../images/63908140.png";
import google from "../images/Google-My-Business-Image.png";
import { Link } from "react-router-dom";
import Product from './Product.js';

const product={
  name:"PPC",
  image:[{url:"https://www.seocompany1.in/wp-content/uploads/2023/08/PPC-company-in-Delhi.jpg"}],
  price:"$300",
  _id:"mandan",
};

const Home = () => {
  return (
    <>
      <div className="banner hero-image">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h1>
                YOUR BUSINESS.<br></br>
                <span>OUR FORTE</span>
              </h1>
              <p>
                No Boundaries Marketing Group is a team of passionate, creative
                marketers and results-driven problem solvers, who will partner
                with businesses to identify their unique strengths and build a
                strategic, customized marketing plan that sets you up for
                success. We work with businesses of all sizes, including small
                business owners and startups, to help them achieve their goals
                and reach their ideal target audience. With an extensive
                background in digital marketing, we can provide the right
                solution for you. From website design and development to search
                engine optimization (SEO), social media management to conversion
                rate optimization (CRO) and public relations, we have the
                expertise and experience to get results.
              </p>
              <br></br>
              <button type="button" class="btn btn1">
                Free Website Audit
              </button>
              <button type="button" class="btn btn2">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Small Business */}

      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                We Get Small Business <br></br>
                <span>
                  Marketing & Advertising Solutions for Small Business
                </span>
              </h2>
            </div>
          </div>
          <div className="row service_row2">
            <div className="col-md-6">
              <img src={service} alt="ser" width="100%" />
            </div>
            <div className="col-md-6">
              <p>
                With decades of experience in the marketing and advertising
                game, we’ve learned that not every customer can fit into the
                same box. A one-size-fits all option just doesn’t work for
                everyone! We work closely with our customers to make sure each
                one receives the best possible experience through communication
                and results. Our mission is to help our clients achieve success
                by providing them with expert guidance, best in-class service,
                industry leading tools, and up-to-date resources. Where large
                corporate agencies excel at scalability, they tend to fall short
                when it comes to creating an actual marketing strategy,
                generating meaningful results, and customer service. At the end
                of the day, we have a vested interest in your success. When you
                succeed and grow, so do we! That is why 90% of our business
                comes from referrals!
              </p>
              <button type="button" class="btn btn1">
                Free Website Audit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Let’s Work Together */}

      <div className="Together">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>
                Let’s Work Together <br></br>
              </h3>
              <h2>
                Marketing. <span> Simplified.</span>
              </h2>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-4 marketing">
              <img src={search} alt="social media" />
              <h3>Search Engine Optimization</h3>
              <p>
                We know all about search engine optimization (SEO) and can help
                you boost your presence on Google. Our platform uses complex
                algorithms and AI technology to determine what content (website)
                is worthy of being presented in response to a search.
              </p>
              <Link to="">Learn More</Link>
              <div className="col-md-12 my-5">
                <img src={website} alt="social media" />
                <h3>Website Development</h3>
                <p>
                  Your website is the foundation of your online presence. A
                  great company website should be visually engaging and easy to
                  use. A well designed website will help create a great first
                  impression that will lead to higher conversions and a better
                  consumer experience.
                </p>
                <Link to="">Learn More</Link>
              </div>
              <div className="col-md-12 my-5">
                <img src={ppc} alt="social media" />
                <h3>Pay Per Click (PPC) Advertising</h3>
                <p>
                  Choosing the right PPC company can make all the difference in
                  your success. We offer clients all the benefits of getting
                  found online with a highly-targeted pay-per-click (PPC),
                  display, video, retargeting, and social media ad campaign.
                </p>
                <Link to="">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4">
              <img src={Simplified} alt="Simplified" />
            </div>
            <div className="col-md-4 marketing">
              <img src={social} alt="social media" />
              <h3>Social Media Marketing</h3>
              <p>
                Social media is an integral part of any successful marketing
                strategy. It is a phenomenal way for businesses to connect with
                new and existing clients. Social media helps you build a
                positive brand personality, drive traffic to your site, and
                motivate consumers to purchase your products or services.
              </p>
              <Link to="">Learn More</Link>
              <div className="col-md-12 my-5">
                <img src={Strategic} alt="social media" />
                <h3>Strategic Marketing Plan</h3>
                <p>
                  Email Marketing is one of the most effective methods to
                  connect with customers. It is cost effective, allows for
                  immediate response and connection, allows for tracking,
                  reporting and analysis, and can be tailored to meet specific
                  needs.
                </p>
                <Link to="">Learn More</Link>
              </div>
              <div className="col-md-12 my-5">
                <img src={Public} alt="social media" />
                <h3>Public Relations</h3>
                <p>
                  Public relations (PR) is an excellent way for businesses of
                  any size to gain positive publicity to help attract new
                  clients. PR is not just about media mentions or news
                  interviews. In fact, it can be much more effective than a
                  traditional advertising campaign in many cases. PR is actually
                  the art of being persuasive through communication rather than
                  using direct methods.
                </p>
                <Link to="">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let’s Work Together */}
      <div className="Appear_Online">
        <div className="container">
          <div className="row">
            <div className="col-md-6 apper">
              <img src={Appear} alt="ser" />
            </div>
            <div className="col-md-6 apper_divtwo">
              <h2>
                How Does Your Business<br></br>
                <span> Appear Online?</span>
              </h2>
              <p>
                With decades of experience in the marketing and advertising
                game, we’ve learned that not every customer can fit into the
                same box. A one-size-fits all option just doesn’t work for
                everyone! We work closely with our customers to make sure each
                one receives the best possible experience through communication
                and results. Our mission is to help our clients achieve success
                by providing them with expert guidance, best in-class service,
                industry leading tools, and up-to-date resources. Where large
                corporate agencies excel at scalability, they tend to fall short
                when it comes to creating an actual marketing strategy,
                generating meaningful results, and customer service. At the end
                of the day, we have a vested interest in your success. When you
                succeed and grow, so do we! That is why 90% of our business
                comes from referrals!
              </p>
              <br></br>
              <h4>Rest assure, ours is free to use.</h4>
              <br></br>
              <button type="button" class="btn btn1">
                Free Website Audit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Let’s Work Together */}

      <div className="Appear_Online">
        <div className="container">
          <div className="row">
            <div className="col-md-6 apper_divtwo">
              <h2>
                Is your Google Business<br></br>
                <span> Profile optimized?</span>
              </h2>
              <p>
                Verifying your business with Google Business Profile helps
                establish you as a reputable, active business. Verified
                businesses are twice as likely to be considered reputable by
                consumers, so the time spent verifying and updating your
                information will pay off with increased customer confidence and
                an increase in business leads.
              </p>
              <br></br>
              <h4>Take the free quiz and find out.</h4>
              <br></br>
              <button type="button" class="btn btn1">
                Free Website Audit
              </button>
            </div>
            <div className="col-md-6 apper">
              <img src={google} alt="ser" />
            </div>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-12 product_head">
            <h2>Services <span> Plans</span></h2>
              <div className="container" id="container">
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

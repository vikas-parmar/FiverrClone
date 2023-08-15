import { Slider } from "infinite-react-carousel/lib";
import "./Gig.scss";
import { Link } from "react-router-dom";

const profile =
  "https://raw.githubusercontent.com/vikas-parmar/vikas-parmar.github.io/main/assets/portrait-1.png";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Fiverr / Programming & Tech / Website Development / Custom Websites
          </span>
          <h1>I will craft stunning reactjs web applications for you</h1>
          <div className="user">
            <img className="pp" src={profile} alt="" />
            <span>Vikas Parmar</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Slider>
          <div className="gig-description">
            <h2>About This Gig</h2>
            <p>
              Welcome to my Gig! <br />
              {"I'm"} an energetic ReactJS frontend developer, adept at crafting
              stunning, functional websites from design concepts. My expertise
              includes:
            </p>
            <ul>
              <li>
                Front-end Web Dev: Specializing in ReactJS, I excel in HTML5,
                CSS3, and JavaScript. Crafting responsive web and mobile
                templates for seamless cross-device experiences.
              </li>
              <li>
                Design Conversion: Skilled in PSD, XD, Sketch, or Figma
                design-to-code conversion. Meticulously ensuring pixel-perfect
                results.
              </li>
            </ul>
            <p>Why Me?</p>
            <p>
              Dedicated and hardworking, {"I'm"} driven by a passion for
              frontend development. Your project is my focus, aiming for your
              satisfaction. High-quality work, tailored to your needs. {"Let's"}
              chat about your project and pricing before starting our web
              journey! 🚀
            </p>
          </div>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src={profile} alt="" />
              <div className="info">
                <span>Vikas Parmar</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <Link to="https://vikas-parmar.github.io/" target="_blank">
                  <button>Contact Me</button>
                </Link>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">May 2023</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Hindi, English</span>
                </div>
              </div>
              <hr />
              <p>
                Hi there! I am a frontend developer with expertise in HTML, CSS,
                and JavaScript, and I am looking for exciting projects to work
                on. I specialize in creating stunning and user-friendly
                interfaces that enhance the user experience and help businesses
                achieve their goals. <br />
                <br />I take pride in my attention to detail and commitment to
                excellence, ensuring that I deliver high-quality work on time
                and within budget. Whether you need a simple landing page or a
                complex web application, I have the skills and experience to
                bring your digital vision to life.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Absolutely blown away by the expertise and dedication shown by
                this developer! They transformed my vague ideas into a
                cutting-edge website that surpassed my expectations. The
                attention to detail and seamless communication throughout the
                project made the entire process smooth. I highly recommend their
                services to anyone seeking a top-notch web developer.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Incredible experience working with this frontend developer.
                Their proficiency in ReactJS and design skills truly shine. They
                converted my complex design mockups into a responsive
                masterpiece that works flawlessly across devices. The final
                product is a testament to their commitment to quality and
                innovation. {"I'm"} thrilled with the results!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I {"can't"} thank this developer enough for their exceptional
                work! They flawlessly translated my intricate Figma design into
                clean HTML, CSS, and JavaScript code. The attention they paid to
                each pixel and animation detail is outstanding. The end result
                is a website that captures the essence of my vision. A truly
                talented professional!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>💎 Premium Package ✨</h3>
            <h2>₹8,993</h2>
          </div>
          <p>
            Bring your design in Fully responsive Web App with advance React
            Functionality with API integration.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>10 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>8 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Functional website</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>7 page</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>8 plugins/extensions</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Social media icons</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;

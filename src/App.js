import './index.css';
import FirstSlide from './FirstSlide.jpg';
import SecondSlide from './SecondSlide.jpg';
import ThirdSlide from './ThirdSlide.jpg';
import Logo from './Logo.jpeg';
import AboutChildren from './AboutChildren.jpg';
import Founder from './Founder.jpg';
import Manager from './Manager.jpg';
import Designer from './Designer.jpg';
import SrDesigner from './SrDesigner.jpg';


function App() {
  const handleClick = () => {
    var Bar = document.querySelector('.Kartiknavbar');
    Bar.classList.toggle("chalu");
  }
  return (
    <div className="App">
      {/* Ye NavBar rahega */}
      <header className='KartikHeader'>
        <div className="KartikLogo">
          <img src={Logo} alt="" />
          Interior
        </div>
        <div className="KartikNavToggler" onClick={handleClick}>
          <div className="Hidden"></div>
          <div className="Hidden"></div>
          <div className="Hidden"></div>
        </div>

        <nav className="Kartiknavbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Out Team</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Calculator</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>


      {/* Ye Home Content rahega */}
      <div className="KartikHomeCarousal">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={FirstSlide} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={SecondSlide} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={ThirdSlide} alt="" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>

      {/* Ye Our Services wala rahega */}
      <div className="KartikServicesSection">
        <div className="ServicesHeading">
          <h1 className='KartikServiceHeading'>Our Services</h1>
        </div>
        <div className="ServicesLoremContent">
          <p className='LoremContent'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deserunt molestias voluptas cum maiores eos quidem doloremque iusto ad aliquid numquam odit qui rem neque laborum dicta iure error totam, incidunt quibusdam Illo?</p>
        </div>

        <div className="ServicesItems">
          <div className="ServicesFirstRow">
            <div className="firstFirst">
              <div className="ServicesLogo">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>

              <div className="ServicesItemsContent">
                <h3 className="Heads">Concept Design</h3>
                <p className="LoremItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
              </div>
            </div>

            <div className="firstSecond">
              <div className="ServicesLogo">
                <i class="fa fa-flag" aria-hidden="true"></i>
              </div>

              <div className="ServicesItemsContent">
                <h3 className="Heads">Luxuriour Interior</h3>
                <p className="LoremItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
              </div>
            </div>


            <div className="firstThird">
              <div className="ServicesLogo">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>

              <div className="ServicesItemsContent">
                <h3 className="Heads">Wow Living Room</h3>
                <p className="LoremItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
              </div>
            </div>

          </div>

          <div className="ServicesSecondRow">
            <div className="secondFirst">
              <div className="ServicesLogo">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </div>
              <div className="ServicesItemsContent">
                <h3 className="Heads">Amaze Kichen</h3>
                <p className="LoremItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
              </div>
            </div>

            <div className="secondSecond">
              <div className="ServicesLogo">
                <i class="fa fa-cloud" aria-hidden="true"></i>
              </div>
              <div className="ServicesItemsContent">
                <h3 className="Heads">Beauty colors</h3>
                <p className="LoremItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
              </div>
            </div>

            <div className="secondThird">
              <div className="ServicesLogo">
                <i class="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="ServicesItemsContent">
                <h3 className="Heads">Cool Bedroom</h3>
                <p className="LoremItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, corporis?</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Ye About Us Wala rahega */}
      <div className="KartikAboutUs">
        <div className="AboutHeading">
          <h1 className="KartikAboutHeading">About us</h1>
        </div>

        <div className="AboutLoremContent">
          <p className="AboutLorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam ut labore, voluptatem magni soluta dolore ea aperiam rem asperiores.</p>
        </div>

        <div className="AboutBelowContent">
          <div className="AboutChildren">
            <img src={AboutChildren} alt="" className="ChildrenPlaying" />
          </div>

          <div className="AboutContent">
            <h1 className="LittleCompany">Our Little Company</h1>
            <p className="Nature">Nature, in the brodest sense, is the natural, physical or material world or universe. "Nature can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science."</p>
          </div>
        </div>

      </div>


      {/* Ye Design wala rahega */}
      <div className="KartikDesign">
        <p className="DesignLoremSmall">We Design your Awesome dreams</p>
        <p className="DesignLoremMedium">Plasellus ut euismod massa, eu eleifend</p>
        <p className="DesignLoremBig">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi pariatur placeat quisquam quas eos porro perspiciatis quaerat voluptatem natus?</p>
        <button className="btn btn-outline-primary">Get it now!!!</button>
      </div>

      <div className="KartikOutTeam">
        <div className="TeamHeading">
          <h1 className="KartikTeamHeading">Our Team</h1>
        </div>

        <div className="TeamLorem">
          <p className="KartikTeamLorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nisi quisquam nulla aspernatur voluptatum doloribus quidem, perspiciatis veniam sunt! Unde.</p>
        </div>

        <div className="KartikAllCards">
          <div className="Card1">
            <img src={Founder} alt="" className="KartikCard1img" />
            <h3 className="FounderName">Micky Deo</h3>
            <p className="Position">Founder</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-primary"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="Card2">
            <img src={Manager} alt="" className="KartikCard2img" />
            <h3 className="ManagerName">Mike Timobbs</h3>
            <p className="Position">Manager</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-primary"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="Card3">
            <img src={SrDesigner} alt="" className="KartikCard3img" />
            <h3 className="SrDesignerName">Remo Silvaus</h3>
            <p className="Position">Sr Designer</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-primary"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="Card4">
            <img src={Designer} alt="" className="KartikCard4img" />
            <h3 className="DesignerName">Niscal Deon</h3>
            <p className="Position">Designer</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-primary"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-primary"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

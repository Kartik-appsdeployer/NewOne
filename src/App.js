import './index.css';
import FirstSlide from './Images/FirstSlide.jpg';
import SecondSlide from './Images/SecondSlide.jpg';
import ThirdSlide from './Images/ThirdSlide.jpg';
import Logo from './Images/Logo.jpeg';
import AboutChildren from './Images/AboutChildren.jpg';
import Founder from './Images/Founder.jpg';
import Manager from './Images/Manager.jpg';
import Designer from './Images/Designer.jpg';
import SrDesigner from './Images/SrDesigner.jpg';
import Gallery1 from './Images/Gallery1.jpg';
import Gallery2 from './Images/Gallery2.jpg';
import Gallery3 from './Images/Gallery3.webp';
import Gallery4 from './Images/Gallery4.jpg';
import Gallery5 from './Images/Gallery5.jpg';
import Gallery6 from './Images/Gallery6.jpg';
import Gallery7 from './Images/Gallery7.jpg';
import Gallery8 from './Images/Gallery8.webp';
import Contact from './Images/Contact.jpg';


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
            <li><a href="#kartikhome">Home</a></li>
            <li><a href="#kartikourservices">Services</a></li>
            <li><a href="#kartikabout">About</a></li>
            <li><a href="#kartikourteam">Our Team</a></li>
            <li><a href="#kartikgallery">Portfolio</a></li>
            <li><a href="#kartikhome">Calculator</a></li>
            <li><a href="#kartikcontact">Contact</a></li>
          </ul>
        </nav>
      </header>


      {/* Ye Home Content rahega */}
      <div id='kartikhome' className="KartikHomeCarousal">
        <div id="carouselExample" className="carousel slide" data-ride="carousel">
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
      <div id='kartikourservices' className="KartikServicesSection">
        <div className="ServicesHeading">
          <h1 className='KartikServiceHeading'>Our Services <i class="fa fa-cogs" aria-hidden="true"></i></h1>
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
      <div id='kartikabout' className="KartikAboutUs">
        <div className="AboutHeading">
          <h1 className="KartikAboutHeading">About us <i class="fa fa-question-circle" aria-hidden="true"></i></h1>
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

      <div id='kartikourteam' className="KartikOutTeam">
        <div className="TeamHeading">
          <h1 className="KartikTeamHeading">Our Team <i class="fa fa-users" aria-hidden="true"></i></h1>
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
              <button className="btn btn-outline-dark"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="Card2">
            <img src={Manager} alt="" className="KartikCard2img" />
            <h3 className="ManagerName">Mike Timobbs</h3>
            <p className="Position">Manager</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-dark"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="Card3">
            <img src={SrDesigner} alt="" className="KartikCard3img" />
            <h3 className="SrDesignerName">Remo Silvaus</h3>
            <p className="Position">Sr Designer</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-dark"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="Card4">
            <img src={Designer} alt="" className="KartikCard4img" />
            <h3 className="DesignerName">Niscal Deon</h3>
            <p className="Position">Designer</p>
            <div className="SocialButtons">
              <button className="btn btn-outline-dark"><i class="fa fa-facebook" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-twitter" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-google" aria-hidden="true"></i></button>
              <button className="btn btn-outline-dark"><i class="fa fa-linkedin" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* Ye Clients Wala section rahega */}
      <div className="KartikClients">
        <div className="ClientsHeading">
          <h1 className="KartikClientHeading">What our clients says <i class="fa fa-handshake-o" aria-hidden="true"></i></h1>
        </div>

        <div className="ClientsLorem">
          <p className="KartikClientsLorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae suscipit perspiciatis enim facere iste ipsam reprehenderit nisi minima dolorum vitae reiciendis rerum, corporis temporibus quisquam, accusantium aut. Similique, ad magnam!</p>
        </div>

        <div className="ContentAllCards">
          <div className="ContentLoremCards">
            <p className="ContentCard">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, iure! Libero quam animi ipsam sapiente doloribus ab quas, fugit eveniet.</p>
            <div className="KartikClientsDetails">
              <img src={Manager} alt="" className="ClientFirstImage" />
              <div className="ClientDetails">
                <p className="ClientName">John Bond</p>
                <p className="ClientContent">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="ContentLoremCards">
            <p className="ContentCard">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, iure! Libero quam animi ipsam sapiente doloribus ab quas, fugit eveniet.</p>
            <div className="KartikClientsDetails">
              <img src={SrDesigner} alt="" className="ClientSecondImage" />
              <div className="ClientDetails">
                <p className="ClientName">Soeien Sons</p>
                <p className="ClientContent">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="ContentLoremCards">
            <p className="ContentCard">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, iure! Libero quam animi ipsam sapiente doloribus ab quas, fugit eveniet.</p>
            <div className="KartikClientsDetails">
              <img src={Designer} alt="" className="ClientThirdImage" />
              <div className="ClientDetails">
                <p className="ClientName">Hosen Bone</p>
                <p className="ClientContent">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ye Gallery wala Section rahega */}
      <div id='kartikgallery' className="KartikGallery">
        <div className="GalleryHeading">
          <h1 className="KartikGalleryHeading">Gallery <i class="fa fa-picture-o" aria-hidden="true"></i></h1>
        </div>

        <div className="GalleryLorem">
          <p className="KartikGalleryLorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, porro.</p>
        </div>

        <div className="GalleryAllImages">
          <div className="FirstGallery">
            <img src={Gallery1} alt="" className="Image" />
            <img src={Gallery2} alt="" className="Image" />
            <img src={Gallery3} alt="" className="Image" />
            <img src={Gallery4} alt="" className="Image" />
          </div>

          <div className="SecondGallery">
            <img src={Gallery5} alt="" className="Image" />
            <img src={Gallery6} alt="" className="Image" />
            <img src={Gallery7} alt="" className="Image" />
            <img src={Gallery8} alt="" className="Image" />
          </div>
        </div>
      </div>

      {/* .Ye Contact Form rahega */}
      <div className="KartikContact" id="kartikcontact">
        <div className="ContactForm">
          <div className="ContactDiv">
            <div className="KartikContactHeading">
              <h1 className="ContactHeading">Contact <i class="fa fa-envelope" aria-hidden="true"></i></h1>

            </div>

            <div className="ContactContent">
              <input type="text" className="KartikName" placeholder='Name...' /><br />
              <input type="text" className="KartikEmail" placeholder='Email...' /><br />
              <input type="text" className="KartikSubject" placeholder='Subject...' /><br />
              <input type="text" className="KartikMessage" placeholder='Message...' /><br />
              <button className='ContactBtn'>Send Message</button>
            </div>
          </div>
        </div>

        <div className="ContactImage">
          <img src={Contact} alt="" className="MyContactImage" />
        </div>
      </div>

      <div className="KartikFooter">
        <p>@2023 Powered by Edunomics</p>
      </div>

    </div>
  );
}

export default App;

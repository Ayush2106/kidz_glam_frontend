import React, { useRef, useState, useEffect } from 'react'
import './Homepage.css';
import girlimage from '../../images/girl.png'
import flowerimage from "../../images/image 43.png"
import rightArrow from '../../images/Arrow3.png'
import leftArrow from '../../images/Arrow4.png'

import leftdesignforourbestbrush from '../../images/8829755left1.png'
import rightdeisgnfourbrush from '../../images/88297555right1.png'
import brushsetfordesktop from '../../images/bruhsetimagedesktop(1).png';
import Slider from './Slider';
// import aboutgirlimage from '../../images/image 41.png'
import flowerimageebrush from '../../images/flowersmobileview.png'
import videohomepage from '../../images/videohomepage.mp4'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BasicModal from './BasicModal/BasicModal';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../context/auth';

function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  // eslint-disable-next-line
  const [auth] = useAuth();

  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    }, options);
    if (videoRef.current) {
      // eslint-disable-next-line
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current && observer) {
        // eslint-disable-next-line
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <>
      <Layout title={'KidzGlam Corner-HomePage'}>

        {/*<pre>{JSON.stringify(auth,null,4)}</pre> */}

        {/* BannerSection ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
        <div id="banner" className='bannersectioncontainer'>
          <div className='bannermain'>
            <div className='bannerleft'>
            <div className='bannerLeftHeading'>Unleashing Creativity with Every Stroke</div>
             <p className='bannerleftsubheading'>Discover the joy of play and self-expression with KidsGlam Corner. Our collection of safe, fun, and colorful makeup and toys inspires creativity and imagination, making every moment magical for kids and parents alike.</p>



              <div className='btntrynow'>
                  <button type='button'>TRY NOW</button>
              </div>

            </div>

            <div className='bannerright'>
              <div className='girlwithbg'>
                <div className='pink-semicircle'></div>
                <img src={girlimage} alt="Girl" />
              </div>
              <img className="flowerimage" src={flowerimage} alt="/FlowerImage" />
            </div>
          </div>
        </div>
        {/* ViewANdCustomize Brush Section ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
        <div className='viewcustomisebrushsection'>
          <div className='emptyspacefornav'></div>
          <div className='viewcustom'>
            <div className='viewbrush'>
              {/* <div id="gistesyfont" className='bannerLeftHeading'>View Brushes</div> */}
              <div className='bannerLeftHeading'>View Items</div>

              <p className='bannerleftsubheading'>Explore our KidzGlam Corner range, featuring brushes crafted for precision and versatility, perfect for both <span style={{ fontWeight: 'bold' }}>professionals and enthusiasts</span> seeking exceptional makeup excellence.</p>
            </div>
            <div className='custombrush'>
              {/* <div id="gistesyfont" className='bannerLeftHeading'>Customize Brushes</div> */}
              <div className='bannerLeftHeading'>Customize Items</div>

              <p className='bannerleftsubheading'> Add a personal touch by <span style={{ fontWeight: 'bold' }}>engraving your name</span>  on our premium brushes, creating a bespoke tool that's uniquely yours.</p>
            </div>
          </div>
          <div className='sliderviewcustom'>
            <Link className="slideviewarrowww" to="/brushpage">  <img style={{ width: '90%' }} src={leftArrow} alt="LeftArrow" /></Link>
            <img className='brushsliderimage' src={brushsetfordesktop} alt='BrushSlider' />
            <img className="slideviewarrowww" src={rightArrow} alt="RightArrow" onClick={handleModalOpen} />
          </div>
          <BasicModal open={modalOpen} onClose={handleModalClose} onOpen={handleModalOpen} />

        </div>
        {/* viewandCusstome_for_responsive........................................ */}
        <div className='viewcustomMobile'>
          <div className='viewBrushh'>
            {/* <div id="gistesyfont" className='bannerLeftHeading'>View Brushes</div> */}
            <div className='bannerLeftHeading'>View Items</div>

            <p className='bannerleftsubheading'>Explore our KidzGlam Corner range, featuring Items crafted for precision and versatility, perfect for both <span style={{ fontWeight: 'bold' }}>professionals and enthusiasts</span> seeking exceptional makeup excellence. <span className='arrowviewcustomrespformobile'> <img className="slideviewarrow" src={rightArrow} alt="RightArrow" />
            </span></p>
          </div>
          <div className='brushsetImage'>
            <img src={flowerimageebrush} alt="BrushImage" />
          </div>
          <div className='CustomizeBrushh'>
            {/* <div id="gistesyfont" className='bannerLeftHeading'>Customize Brushes</div> */}
            <div className='bannerLeftHeading'>Customize Items</div>

            <p className='bannerleftsubheading'> Add a personal touch by <span style={{ fontWeight: 'bold' }}>engraving your name</span>  on our premium brushes, creating a bespoke tool that's uniquely yours. <span className='arrowviewcustomrespformobile'>    <img className="slideviewarrow" src={leftArrow} alt="LeftArrow" onClick={handleModalOpen} /></span>
            </p>
          </div>
        </div>


        {/* our Best Brushes section ..................................................... */}
        <div className='ourbestbrushessecton'>
          <div className='emptyspacefornav'></div>

          <div className='ourbestmain'>
            <div  className='bannerLeftHeading'>Best Sellers</div>
            {/* <div id="gistesyfont" className='bannerLeftHeading'>Best Sellers</div> */}

            <div className='sliderourbestbrush'>
              <Slider />
            </div>
            <Link to="/brushpage"> <p>Shop All Products &rarr;</p>  </Link>
          </div>
        </div>

        {/* videoSection................................................... */}
        <div className='videosectioncontainer'>
          <div className='videosectionmaincontainer'>
            <video ref={videoRef} controls loop volume={0.8}>
              <source src={videohomepage} type='video/mp4' alt="Video" />
            </video>
          </div>
        </div>

        {/* aboutUsSection.................................................. */}
        <div id="about" className='aboutussection'>
          <div className='emptyspacefornav'></div>
          {/* <div id="gistesyfont" className='bannerLeftHeading'>About Us</div> */}
          <div className='bannerLeftHeading'>About Us</div>

          <div className='aboutusmaincontainer'>
            <div class="aboutleft">
              <div className='bannerSubHeading'>Items with a Story: The Science of Artistry at
              KidzGlam Corner</div>
              <p className='bannerleftsubheading'>"Founded by Ayush, KidzGlam Corner merges art with science in creating luxurious, handcrafted toys and makeup items. His journey from academia to beauty emphasizes our commitment to sustainable, vegan practices. Under Ayush's vision, each itme embodies a fusion of creativity and precision."</p>
            </div>
            <div class="aboutright">

              <img src="./founder.jpg" alt="girlImage" />
            </div>
          </div>
          <img className="aboutmotifleft" src={leftdesignforourbestbrush} alt="leftdesign" style={{ width: '20%' }} />
          <img className="aboutmotifright" src={rightdeisgnfourbrush} alt="rightdeign" style={{ width: '20%' }} />
        </div>

        {/* footerSection.................................................................. */}
        <div id="contact" className='footerSection'>
          {/* <div className='emptyspacefornav'></div> */}
          <div className='footersectionmain'>
            <img id="contacthidea" src="./logofly.png" alt='Logo' />
            <div id="contacthidea" className='underline'></div>
            
            <div className='bannerLeftHeading' style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</div>
{/* <div id="gistesyfont" className='bannerLeftHeading' style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</div> */}
            <div className='mainmainfooteritemdiv'>
              <div className='mainfooteritemdiv'>
                <div className='firstmainfooterdiv'>
                  <div className='bannerSubHeading'>Menu</div>
                  <Link to="/privacypolicy"><p className='bannerleftsubheading'>Privacy</p></Link>
                  <Link to="/termsandcondition"><p className='bannerleftsubheading'>Terms and Conditions</p></Link>
                  <p className='bannerleftsubheading'>Contact Us</p>
                  <p className='bannerleftsubheading'>About Us</p>
                  <p className='bannerleftsubheading'>FAQs</p>
                </div>
                <div className='secondmainfooterdiv'>
                  <div className='bannerSubHeading'>Account</div>
                  <Link to="/returnrefundpolicy"><p className='bannerleftsubheading'>Return & Refund</p> </Link>
                  <p className='bannerleftsubheading'>Track Order</p>
                  <p className='bannerleftsubheading'>Shipping & Delivery</p>
                </div>
                <div className='thirdmainfooterdiv'>
                  <div className='bannerSubHeading'>Company</div>
                  <p className='bannerleftsubheading'>Db-549 palwal, Haryana 121102</p>
                  <p className='bannerleftsubheading'>9817674090</p>
                  <p className='bannerleftsubheading'>ayush21singla@gmail.com</p>
                </div>
              </div>
              <div className='mainfooterlogos'>
                <div className='logosfootermaindiv'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"   style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FacebookIcon className='footerLOGO' />
                  </a>
                  <XIcon className='footerLOGO' />
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"   style={{ textDecoration: 'none', color: 'inherit' }}>
                  <InstagramIcon className='footerLOGO' />
                   </a>                
                     <LinkedInIcon className='footerLOGO' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Homepage

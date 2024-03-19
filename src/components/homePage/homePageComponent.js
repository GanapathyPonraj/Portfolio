import React, { useState } from 'react'
import { BackTop, Button, Col, PageHeader, Row, Space, Card, message, Divider, Modal, Image } from 'antd'
import "./homePage.scss"
import { LinkedinFilled, GithubOutlined, FilePdfOutlined, MessageOutlined, DesktopOutlined, MobileOutlined, TabletOutlined, LaptopOutlined } from '@ant-design/icons';
import contactImage from '../../asets/ContactMe.png';
import Particle from '../particle';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import * as AllLogoImages from '../../asets/index';
import TruncatedText from '../TruncatedText';

const { useEffect, useRef } = React;

function HomePageComponent() {

  // const [disabled, setDisabled] = useState(false);
  //For Text-Loop
  const [count, setCount] = useState(1);
  const [modalContent, setModalContent] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setCount(1);
  }, [count]);

  //For Smooth Scroll
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  }
  // const onChange = (checked) => {
  //   setDisabled(checked);
  // };
  const onResumeButtonClick = () => {
    const pdfUrl = "/resume/GanapathyPonraj-Resume-FrontEnd.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "GanapathyPonraj-Resume-FrontEnd.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  var projectDetails = [
    {
      img: 'name', projectTitle: 'Dream Wheel Exotics', projectShortDescription: 'Unleash your Ultimate Drive With Us',
      projectDescription: 'Dream Wheel Exotics is a sophisticated Full Stack application that demonstrates my proficiency in both Frontend and Full Stack development. Developed using the MERN stack, the app incorporates advanced features such as JWT authentication for secure user access and WebSocket connections for real-time updates on user favorites. The application is designed to be fully responsive, ensuring optimal user experiences on various devices, including phones, tablets, laptops, and desktops. One of the key highlights of this project is the implementation of RESTful APIs, which enable users to seamlessly create bookings, add and manage their favorite cars, and allow owners to dynamically update car details. This project not only showcases my technical skills but also my ability to create user-centric applications that are both functional and visually appealing.',
      projectSkill: ['HTML', 'SCSS', 'REACT', 'MongDb', 'REST Api', 'JWT', 'EXPRESS', 'NODE', 'REDUX', 'Antd', 'Render', 'Vercel'], buttonRedirection: 'name', images: [AllLogoImages.home, AllLogoImages.fleet, AllLogoImages.location, AllLogoImages.dates, AllLogoImages.booking, AllLogoImages.account, AllLogoImages.accountFav],
      imagesPhone: [AllLogoImages.mobileHome, AllLogoImages.mobileAccount], logo: 'DWELogo.png',
      projectLink: 'https://dream-wheel-exotics-frontend.vercel.app/',
      mockupImage: AllLogoImages.mockupDesktopCarRental
    },
    {
      img: 'name', projectTitle: 'Forecastify', projectShortDescription: 'Where Every Weather Detail Finds Its Place on One Screen.',
      projectDescription: 'Forecastify is a weather forecast application that I developed to showcase my front-end web development skills. The app allows users to view all essential weather information on a single screen, including current conditions, three-day forecasts, humidity, and wind speed. Designed to be cross-platform compatible, Forecastify delivers a seamless user experience on all devices. Additionally, the app is integrated with external APIs to provide accurate weather data. Through Forecastify, I demonstrate my expertise in creating user-friendly and responsive web applications that offer valuable functionality.',
      projectSkill: ['HTML', 'SCSS', 'REACT', 'REST Api', 'REDUX', 'Antd', 'Render', 'Vercel'], buttonRedirection: 'name', images: [AllLogoImages.forecastifyDesktop],
      imagesPhone: [AllLogoImages.forecastifyMobile], logo: AllLogoImages.forecastLogo,
      projectLink: 'https://forecastify-six.vercel.app/',
      mockupImage: AllLogoImages.mockupDesktopWeather
    },
    {
      img: 'name', projectTitle: 'Real Time Monitoring Dashboard', projectShortDescription: 'Unleash your Ultimate Drive With Us',
      projectDescription: 'Dream Wheel Exotics is a sophisticated Full Stack application that demonstrates my proficiency in both Frontend and Full Stack development. Developed using the MERN stack, the app incorporates advanced features such as JWT authentication for secure user access and WebSocket connections for real-time updates on user favorites. The application is designed to be fully responsive, ensuring optimal user experiences on various devices, including phones, tablets, laptops, and desktops. One of the key highlights of this project is the implementation of RESTful APIs, which enable users to seamlessly create bookings, add and manage their favorite cars, and allow owners to dynamically update car details. This project not only showcases my technical skills but also my ability to create user-centric applications that are both functional and visually appealing.',
      projectSkill: ['HTML', 'SCSS', 'REACT', 'MongDb', 'REST Api', 'JWT', 'EXPRESS', 'NODE', 'REDUX', 'Antd', 'Render', 'Vercel'], buttonRedirection: 'name', images: [AllLogoImages.home, AllLogoImages.fleet, AllLogoImages.location, AllLogoImages.dates, AllLogoImages.booking, AllLogoImages.account, AllLogoImages.accountFav],
      imagesPhone: [AllLogoImages.mobileHome, AllLogoImages.mobileAccount], logo: 'DWELogo.png',
      projectLink: 'https://dream-wheel-exotics-frontend.vercel.app/',
      mockupImage: AllLogoImages.mockupDesktopCarRental
    }
  ]

  var Techname = [
    { name: 'ReactJs', percentage: 85, src: AllLogoImages.react },
    { name: 'Redux', percentage: 85, src: AllLogoImages.redux },
    { name: 'Javascript', percentage: 65, src: AllLogoImages.javascript },
    { name: 'HTML', percentage: 80, src: AllLogoImages.html5 },
    { name: 'SCSS', percentage: 80, src: AllLogoImages.CSS },
    { name: 'NodeJS', percentage: 60, src: AllLogoImages.nodejs },
    { name: 'Invision Studio', percentage: 80, src: AllLogoImages.invision },
    { name: 'Python', percentage: 55, src: AllLogoImages.python },
    { name: 'MongoDb', percentage: 60, src: AllLogoImages.aws },
    { name: 'Node.JS', percentage: 60, src: AllLogoImages.aws },
    { name: 'Express.Js', percentage: 60, src: AllLogoImages.aws },
    { name: 'Figma', percentage: 85, src: AllLogoImages.figma },
    { name: 'Adobe Photoshop', percentage: 60, src: AllLogoImages.aws },
    { name: 'Adobe Premier Pro', percentage: 60, src: AllLogoImages.aws },
    { name: 'Final Cut Pro', percentage: 60, src: AllLogoImages.aws },
    { name: 'Jest', percentage: 75, src: AllLogoImages.jest },
    { name: 'AWS', percentage: 60, src: AllLogoImages.aws }

  ]

  var About = {
    about: <p>Versatile Software Engineer with 5+ years of experience in designing, developing, and managing complex web & mobile apps and a Master's degree in Engineering Management.
      A self-driven and highly motivated Frontend Engineer passionate about solving complex problems and being creative,
      who loves to obtain a position as a Front-End Software Developer in a fast-paced environment where learning is nonstop,
      and the tasks are as complex as the previous day of work.</p>,
    Education: ' Masters in Engineering Management,University of Ottawa,2022 ',
    Hobbies: 'Filmaking,Photography,Hiking,Motorsports,Biking',
    Location: 'Ottawa,Canada'
  }
  //navigateToURL
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const form = useRef();
  useEffect(() => {
    ModalOpen()
  }, [modalContent])

  const openProject = (data) => {
    data.openModal = true
    setModalContent(data)
    setIsModalOpen(true)
  }

  const contactsendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xmwpkp1', 'template_zaebwra', form.current, 'Yn5nefaFfPObl1gYG')
      .then((result) => {
        message.success({
          content: 'Your message has been successfully sent',
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
        e.target.reset()
      }, (error) => {
        message.error('This is an error message');
      });
  };

  const ModalOpen = () => {
    return (
      <Modal centered width={'60vw'} footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        key={modalContent ? modalContent.projectTitle : ''}
        visible={isModalOpen}
        className='projectModal'
      >
        {modalContent ?
          <div>
            <Row id='headerRow'>
              <Col span={5} offset={1} id='logoImage'>
                <img src={modalContent.logo} alt={modalContent.logo} id='logoImage' />
              </Col>
              <Col span={14} offset={2}>
                <h1 id='header'>{modalContent.projectTitle}</h1>
                <h2 id='shortDescription'>{modalContent.projectShortDescription}</h2>
                <Button id='viewProjectButton' onClick={() => {
                  window.open(modalContent.projectLink, '_blank');
                }}>View Live Project</Button>
              </Col>
            </Row>
            {/* <Row> */}
            <Row id='description'>
              <div><h1 id='innerHeader'>Description</h1></div>
              <div>
                <TruncatedText text={modalContent.projectDescription} maxHeight={200} />
              </div>
              {/* <h2>{modalContent.projectDescription}</h2> */}
            </Row>
            <h1 id='innerHeader'>Preview</h1>
            <h1 id='innerHeader1'><DesktopOutlined /> Desktop | <LaptopOutlined /> Laptop | <TabletOutlined /> Tablet</h1>
            <Row id='deviceRow'>
              {modalContent.images.map((data) => {
                return <Image src={data} alt={data} id='deviceImages' />
              })
              }
            </Row>
            <h1 id='innerHeader1'><MobileOutlined /> Phone</h1>
            <Row id='deviceRow'>
              {modalContent.imagesPhone.map((data) => {
                return <Image src={data} alt={data} id='deviceImages' />
              })
              }
            </Row>
            {/* </Row> */}

            <Row>
              <Col span={24}>
                <h1 id='innerHeader' className='techStackHeader'>Tech Stack Used</h1>
                <Row className='skillIcons2'>
                  {modalContent.projectSkill.map((data) => {
                    return <span>{data}</span>
                  })
                  }</Row>
              </Col>
            </Row>
            {/* <h1 id='innerHeader' className='viewProjectsHeader'>View Other Projects</h1>
            <Row id='deviceRow'>
              {modalContent.images.map((data) => {
                return <Image src={data} alt={data} id='deviceImages' />
              })
              }
            </Row> */}
          </div>
          : ''
        }
      </Modal>
    )
  }

  return (
    <div>
      {ModalOpen()}
          <PageHeader ghost={true} className='pageHeader' title="Ganapathy P."
            extra={[
              <Button key='Home' className='pageHeader' onClick={() => scrollToSection(homeRef)} >Home</Button>,
              <Button key='About' onClick={() => scrollToSection(aboutRef)} className='pageHeader'>About</Button>,
              <Button key='Projects' className='pageHeader' onClick={() => scrollToSection(projectRef)}>Projects</Button>,
              <Button key='Contact' className='pageHeader' onClick={() => scrollToSection(contactRef)}>Contact</Button>,
            ]} />
      {/* Header */}
      <Row className='homePageBody'>
        <Particle />
        <Col span={18} offset={3} ref={homeRef}>
          <Row id='homePageContent' className=''>
            <h2 className="Name" > Hello,I'm Ganapathy Ponraj </h2>
            <TypeAnimation
              className='type'
              sequence={['Frontend Developer', 4000, 'Upcoming Full Stack Developer', 4000, 'Engineering Management Graduate', 4000, 'Technology Consultant', 4000]}
              speed={40}
              repeat={Infinity}
            />
            <Button key="ViewButton" className='viewButton' onClick={() => scrollToSection(projectRef)}>View My Work</Button>
            {/* <Button key="ViewButton" className='viewButton' onClick={() => scrollToSection(projectRef)}>View My Work</Button> */}
          </Row>
          <Row id='homePageFooter'>

            <Card>
              <Space split={<Divider type="vertical" />} size={15} className='Icons' ><GithubOutlined onClick={() => openInNewTab("https://github.com/GanapathyPonraj")} /><LinkedinFilled onClick={() => openInNewTab("https://www.linkedin.com/in/ganapathy-ponraj-b58b041a9/")} />
                <FilePdfOutlined onClick={() => onResumeButtonClick()} /><MessageOutlined onClick={() => scrollToSection(contactRef)} />
              </Space>
            </Card>
            {/* <div class="scroll-downFooter">hi</div> */}
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
      {/* About */}
      <Row className='aboutPageRow' ref={aboutRef}>
        <Col span={18} offset={3} xl={{span:18,offset:3}} lg={{span:18,offset:3}} xs={{span:22,offset:2}} md={{span:22,offset:2}} className='aboutPageColumn'>
          <h2>ABOUT ME</h2>
          <p> Here you can find more information about me,what I do,<br /> and my current skills and education. </p>
          <Row className='aboutDetails'>
            <Col span={11} xl={11} lg={11} md={12} sm={12} xs={24}>
              <h2>Get to know me!</h2>
              <p>{About.about}</p>
              {/* <p>{About.about}</p> */}
              <p>{<b>Hobbies : </b>}{About.Hobbies}</p>
              <p>{<b>Location : </b>}{About.Location} </p>
              <Button onClick={() => scrollToSection(contactRef)}>Contact</Button>
            </Col>
            <Col span={10} offset={1} xl={{ span: 10, offset: 1 }} lg={{span:10,offset:1}} md={{span:11,offset:1}} sm={{span:11,offset:1}} xs={{ span: 24, offset: 0 }}>
              <h2>My skills</h2>
              <div className='skillIcons'>
                {Techname.map((data) =>
                  <span>{data.name}</span>
                )}
              </div>
              <h2>Education</h2>
              <Row id='education'>
                <Col span={12} xl={12} lg={12} xs={24} md={12} id='educationCol'>
                  <p><b>Master's in Engineering Management</b></p>
                  <p>University of Ottawa, Ontario</p>
                  <p>September 2020 - June 2022</p>
                </Col>
                <Col span={12} xl={12} lg={12} xs={24} md={12} id='educationCol'>
                  <p className='bachelorsColumn'><b>Bachelors's in Mechanical Engineering</b></p>
                  <p>Mepco Schlenk Engineering college</p>
                  <p>September 2014 - June 2018</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3} />
      </Row>


      {/* Projects */}
      <Row ref={projectRef}>
        <Col span={18} offset={3}  xl={{span:18,offset:3}} lg={{span:18,offset:3}} xs={{span:24,offset:0}} className='projectImage'>
          <div className='projectHeading'>
            <h2>PROJECTS</h2>
            <p> Here you can find more information about me,what I do,<br /> and my current skills and education. </p>
          </div>
          <Card >
            {projectDetails.map((data) =>
              <Row className='projectRowInner'>
                <Col span={12} xl={12} xs={24} id='projectCol1'>
                  <img src={data.mockupImage} alt={data.mockupImage} />
                </Col>
                <Col span={10} offset={1} xl={{ span: 10, offset: 1 }} xs={{ span: 24, offset: 0 }} id='textCol'>
                  <h2>{data.projectTitle}</h2>
                  <p>{data.projectDescription}</p>
                  <div className='skillIcons1'>
                    {data.projectSkill.map((data) => <span>{data}</span>)}
                  </div>
                  <div id='viewProjectButton'><Button onClick={() => { openProject(data) }}>View Project</Button></div>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
        <Col span={3}></Col>
      </Row>

      {/* Contact */}

      <Row className='contactCard' ref={contactRef}>
        <Col span={18} offset={3}>
          <div className='projectHeading'>
            <h2>CONTACT</h2>
            <p> Here you can find more information about me,what I do,<br /> and my current skills and education. </p>
          </div>
          <div id='contact' ref={contactRef} className="ContactHeight">
            <Card className='ProjectCardOuter'>
              <Row>
                <Col span={12} xl={12} xs={0} className="ContactImageColumn"><img src={contactImage} alt='contact' /></Col>
                <Col span={12} xl={12} xs={24}>
                  {/* <h1 className='CentreDivTech aboutHeader projectHeader'>CONTACT</h1> */}
                  <form ref={form} onSubmit={contactsendEmail}>
                    <div className='contactInputDiv'><input type="text" name="user_name" placeholder='Name' className='contactInput ' required /></div>
                    <div className='contactInputDiv'><input type="email" name="user_email" placeholder='Email' className='contactInput' required /></div>
                    <div className='contactInputDiv'><input type="text" name="user_subject" placeholder='Subject' className='contactInput' /></div>
                    <div className='contactInputDiv'><textarea name="user_message" placeholder='Message' className='contactInput' required /></div>
                    <div className='contactButtonDiv'><input type="submit" value="Submit" className='contactButton contactInputDiv' /></div>
                  </form>
                </Col>
              </Row>
            </Card>
          </div>
          <BackTop></BackTop>
        </Col>
        <Col span={3} />
      </Row>
      {/* Footer */}
      <Row className='Footer'>
        <Col span={18} offset={3}>
          <Row>
            <Col span={11} xl={11} xs={24}>
              <h2>GANAPATHY PONRAJ</h2>
              <p>A Frontend focused Web Developer building the Frontend of Website and Web Applications that leads to the<br /> success of the overall product</p>
            </Col>
            <Col span={5} offset={8} xl={{ span: 5, offset: 8 }} xs={{ span: 24, offset: 0 }} id='footerLeft'>
              <h2>SOCIAL</h2>
              <Space split={<Divider type="vertical" />} size={15} className='Icons' ><GithubOutlined onClick={() => openInNewTab("https://github.com/ganapathy46/")} /><LinkedinFilled onClick={() => openInNewTab("https://www.linkedin.com/in/ganapathy-ponraj-b58b041a9/")} />
                <FilePdfOutlined onClick={() => onResumeButtonClick()} /><MessageOutlined onClick={() => scrollToSection(contactRef)} />
              </Space>
            </Col>
          </Row>
          <div id='end'>
            <div>© Copyright 2024. Made by Ganapathy P. </div>
          </div>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div >

  )
}
export default HomePageComponent
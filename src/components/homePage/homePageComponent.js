import React from 'react'
import { BackTop, Button, Col, PageHeader, Row, Space, Card, message, Divider } from 'antd'
import "./homePage.scss"
import { LinkedinFilled, GithubOutlined, FilePdfOutlined, MessageOutlined } from '@ant-design/icons';
import contactImage from '../../asets/ContactMe.png';
import Particle from '../particle';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import * as AllLogoImages from '../../asets/index';


const { useState, useEffect, useRef } = React;

export default function HomePageComponent() {

  // const [disabled, setDisabled] = useState(false);
  //For Text-Loop
  const [count, setCount] = useState(1);

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
    const pdfUrl = "Ganapathy.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ganapathy_Ponraj-FrontendDeveloper.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  var projectDetails = [
    {
      img: 'name', projectTitle: 'Forecastify', projectDescription: 'Take the guesswork out of your day with Forecastify! Our weather app offers detailed forecasts for the next 72 hours, giving you peace of mind no matter where you are.',
      projectSkill: ['HTML', 'CSS', 'REACT'], buttonRedirection: 'name'
    },
    {
      img: 'name', projectTitle: 'Portfolio', projectDescription: 'details',
      projectSkill: ['HTML', 'CSS'], buttonRedirection: 'name'
    },
    {
      img: 'name', projectTitle: 'Car Rental', projectDescription: 'details',
      projectSkill: ['HTML', 'CSS'], buttonRedirection: 'name'
    },
    {
      img: 'name', projectTitle: 'Social Media', projectDescription: 'details',
      projectSkill: ['HTML', 'CSS'], buttonRedirection: 'name'
    },
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
    { name: 'Figma', percentage: 85, src: AllLogoImages.figma },
    { name: 'Jest', percentage: 75, src: AllLogoImages.jest },
    { name: 'AWS', percentage: 60, src: AllLogoImages.aws }

  ]

  var About = {
    about: <p>Versatile UI Engineer with 3+ years of experience in designing, developing, and managing complex web & mobile apps.
      A self-driven and highly motivated Frontend Engineer passionate about solving complex problems and being creative,
      who loves to obtain a position as a Front-End Software Developer in a fast-paced environment where learning is nonstop,
      and the tasks are as complex as the previous day of work.</p>,
    Education: ' Masters in Engineering Management,University of Ottawa,2022 ',
    Hobbies: 'Filmaking,Photography,Hiking,Motorsports',
    Location: 'Ottawa,Canada'
  }
  //navigateToURL
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const form = useRef();
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

  return (
    <div>
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
              sequence={['Data Analyst', 4000, 'Sales Analyst', 4000, 'Engineering Management Graduate', 4000]}
              speed={40}
              repeat={Infinity}
            />
            <Button key="ViewButton" className='viewButton' onClick={() => scrollToSection(projectRef)}>View My Work</Button>
          </Row>
          <Row id='homePageFooter'>

            <Card>
              <Space split={<Divider type="vertical" />} size={15} className='Icons' ><GithubOutlined onClick={() => openInNewTab("https://github.com/ganapathy46/")} /><LinkedinFilled onClick={() => openInNewTab("https://www.linkedin.com/in/ganapathy-ponraj-b58b041a9/")} />
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
        <Col span={18} offset={3} className='aboutPageColumn'>
          <h2>ABOUT ME</h2>
          <p> Here you can find more information about me,what I do,<br /> and my current skills and education. </p>
          <Row className='aboutDetails'>
            <Col span={11} xl={11} xs={24}>
              <h2>Get to know me!</h2>
              <p>{About.about}</p>
              <p>{About.about}</p>
              <p>{<b>Hobbies : </b>}{About.Hobbies}</p>
              <p>{<b>Location : </b>}{About.Location} </p>
              <Button onClick={() => scrollToSection(contactRef)}>Contact</Button>
            </Col>
            <Col span={10} offset={1} xl={{span:10,offset:1}} xs={{span:24,offset:0}}>
              <h2>My skills</h2>
              <div className='skillIcons'>
                {Techname.map((data) =>
                  <span>{data.name}</span>
                )}
              </div>
              <h2>Education</h2>
              <p><b>Master's in Engineering Management</b></p>
              <p>University of Ottawa , ON</p>
              <p>September 2020 - June 2022</p>
            </Col>
          </Row>
        </Col>
        <Col span={3} />
      </Row>

      {/* Projects */}
      <Row ref={projectRef}>
        <Col span={18} offset={3} className='projectImage'>
          <div className='projectHeading'>
            <h2>PROJECTS</h2>
            <p> Here you can find more information about me,what I do,<br /> and my current skills and education. </p>
          </div>
          <Card >
            {projectDetails.map((data) =>
              <Row>
                <Col span={12} xl={12} xs={24} id='projectCol1'>
                  <img src='laptopMockup.png' alt='laptopScreen' />
                </Col>
                <Col span={10} offset={1} xl={{span:10,offset:1}} xs={{span:24,offset:0}} id='textCol'>
                  <h2>{data.projectTitle}</h2>
                  <p>{data.projectDescription}</p>
                  <div className='skillIcons1'>
                    {data.projectSkill.map((data) => <span>{data}</span>)}
                  </div>
                  <Button>View Project</Button>
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
              <p>A Frontend focused Web Developer building the Frontend of Website and Web Applications that leads to the<br/> success of the overall product</p>
            </Col>
            <Col span={5} offset={8} xl={{span:5,offset:8}} xs={{span:24,offset:0}} id='footerLeft'>
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

import React from "react";
import './About.scss';
import mainPhoto from './images/about-photo.png';
import diploma from './images/diploma.png';
import ContactMeBtn from "./components/ContactMeBtn/ContactMeBtn";
import SkillsRunningLine from "./components/SkillsRunningLine/SkillsRunningLine";
export default function About() {
    return (
      <div className='page' id='About'>
          <div className='main'>
              <section className={'About-section About-section__general-info'}>
                  <div className={'About-section-wrapper'}>
                      <div className={'About-section-wrapper About-section-wrapper__column'}>
                          <h2 className={'About-section-title'}>I am Nikolay Ivanov</h2>
                          <p className={'About-section-description'}>I am a Front-end Developer located in Russia, Kaluga.
                              I currently work as a Junior React Developer for SENLA.
                              I am looking to take on more work and
                              to increase my skills as a Front-end Developer.</p>
                          <span className={'About-section-email'}>email: mr.coul@inbox.ru</span>
                      </div>
                      <img className={'About-section-photo'} src={mainPhoto} alt="main photo"/>
                  </div>
                  <ContactMeBtn />
              </section>

              <section className={'About-section About-section__skills'}>
                  <h2 className={'About-section-title'}>Skills</h2>

              </section>
              <SkillsRunningLine />

              <section className={'About-section About-section__education'}>
                  <div className={'About-section-wrapper'}>
                      <div className={'About-section-wrapper About-section-wrapper__column'}>
                          <h2 className={'About-section-title'}>Education</h2>
                          <p className={'About-section-description'}>I graduated from the STEP
                              Computer Academy, Tula - «Development and promotion of web project»
                              and I develop independently every day</p>
                      </div>

                      <img src={diploma} alt="diploma"/>
                  </div>

              </section>
          </div>
      </div>
    );
}
import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Up Start Finance</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <div className={projectStyles['navbar-container']}>
        <div className={projectStyles['max-width']}>
          <div className={styles['logo']}>
            <span className={projectStyles['brand-name']}>FLASHLY</span>
          </div>
          <div className={styles['links']}>
            <span
              className={` ${styles['text01']} ${projectStyles['navbar-link']} `}
            >
              How it works
            </span>
            <span
              className={` ${styles['text02']} ${projectStyles['navbar-link']} `}
            >
              Features
            </span>
            <span
              className={` ${styles['text03']} ${projectStyles['navbar-link']} `}
            >
              Blog
            </span>
            <span
              className={` ${styles['text04']} ${projectStyles['navbar-link']} `}
            >
              Pricing
            </span>
            <button
              className={` ${projectStyles['button-secondary']} ${projectStyles['button']} `}
            >
              Log in
            </button>
            <button
              className={` ${projectStyles['button']} ${projectStyles['button-primary']} `}
            >
              Get started
            </button>
          </div>
          <div
            className={` ${styles['burger-menu']} ${projectStyles['navbar-burger-menu']} `}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={` ${projectStyles['hero-container']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width1']} ${projectStyles['max-width']} `}
        >
          <div className={styles['content']}>
            <span
              className={` ${styles['subtitle']} ${projectStyles['before-heading']} `}
            >
              START LEARNING WITH FLASHY
            </span>
            <h1 className={styles['title']}>
              <span>Unlock the next generation flashcard </span>
              <br className={styles['text06']}></br>
              <span className={styles['text07']}>experience</span>
            </h1>
            <span className={styles['description']}>
              Learn anything you need to know in a flash! Our intuitive
              interface makes it easy to get started and stay on track.
            </span>
            <div className={styles['container01']}>
              <button
                className={` ${styles['button2']} ${projectStyles['button']} ${projectStyles['button-gradient']} `}
              >
                Get started
              </button>
              <button
                className={` ${projectStyles['button']} ${projectStyles['button-transparent']} `}
              >
                Log in
              </button>
            </div>
          </div>
          <div className={styles['image']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1573496129661-bd7fcc7e532b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxzdHVkZW50JTIwb24lMjBjb21wdXRlcnxlbnwwfHx8fDE2NjA1MTk3MDI&amp;ixlib=rb-1.2.1&amp;h=600"
              className={styles['hero-image']}
            />
            <img
              alt="image"
              src="/playground_assets/union-400w.png"
              className={styles['graphic-top']}
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className={styles['image1']}
            />
          </div>
        </div>
      </div>
      <div className={projectStyles['section-container']}>
        <div
          className={` ${styles['max-width2']} ${projectStyles['max-width']} `}
        >
          <div className={styles['image2']}>
            <img
              alt="image"
              src="/playground_assets/good-faces-mzn7emmv9im-unsplash-1200w.jpg"
              className={styles['hero-image1']}
            />
          </div>
          <div className={styles['content1']}>
            <h1 className={styles['text08']}>
              <span>
                The best way to learn.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text10']}>Period.</span>
            </h1>
            <span className={styles['text11']}>
              Flashcards are a great way to learn new information and improve
              your memory. With Flashly, you can create your own flashcards and
              learn at your own pace.
            </span>
            <div className={styles['container02']}>
              <button
                className={` ${styles['button4']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['bg-transparent']} `}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles['section1']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width3']} ${projectStyles['max-width']} `}
        >
          <div className={styles['content2']}>
            <h1 className={styles['text12']}>The best part?</h1>
            <h1 className={styles['text13']}>
              <span>
                It&apos;s completely
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text15']}>free.</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                Learn anything,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                anywhere,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>anytime.</span>
            </h1>
            <div className={styles['container03']}>
              <button
                className={` ${styles['button5']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['bg-transparent']} `}
              >
                Start now
              </button>
            </div>
          </div>
          <div className={styles['image3']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxzdHVkZW50JTIwb24lMjBjb21wdXRlcnxlbnwwfHx8fDE2NjA1MTk3MDI&amp;ixlib=rb-1.2.1&amp;w=1200"
              className={styles['hero-image2']}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles['section2']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width4']} ${projectStyles['max-width']} `}
        >
          <div className={styles['image4']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxzdHVkZW50JTIwb24lMjBsYXB0b3B8ZW58MHx8fHwxNjYwNTIwMDU0&amp;ixlib=rb-1.2.1&amp;w=1200"
              className={styles['hero-image3']}
            />
          </div>
          <div className={styles['content3']}>
            <span
              className={` ${styles['text23']} ${projectStyles['before-heading']} `}
            >
              get started
            </span>
            <h1 className={styles['text24']}>
              <span>It&apos;s a </span>
              <span className={styles['text26']}>flash</span>
              <span> away</span>
            </h1>
            <div className={styles['step']}>
              <div className={styles['number']}>
                <span className={styles['text28']}>1</span>
              </div>
              <div className={styles['container04']}>
                <span className={styles['title1']}>Click Get Started</span>
                <span className={styles['text29']}>
                  Flashly is completely free to get started. It&apos;s a great
                  way to study for exams, quizzes, and more!
                </span>
              </div>
            </div>
            <div className={styles['step1']}>
              <div className={styles['number1']}>
                <span className={styles['text30']}>2</span>
              </div>
              <div className={styles['container05']}>
                <span className={styles['title2']}>Create your first set</span>
                <span className={styles['text31']}>
                  Creating sets in Flashly is super easy. Name your set, and
                  then add terms and definitions.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <div className={styles['number2']}>
                <span className={styles['text32']}>3</span>
              </div>
              <div className={styles['container06']}>
                <span className={styles['title3']}>Start studying</span>
                <span className={styles['text33']}>
                  We&apos;ll show you the questions, and you give us the
                  answers. That simple!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles['section3']} ${projectStyles['section-container']} `}
      >
        <div
          className={` ${styles['max-width5']} ${projectStyles['max-width']} `}
        >
          <div className={styles['f-a-q']}>
            <div className={styles['questions']}>
              <span
                className={` ${styles['text34']} ${projectStyles['before-heading']} `}
              >
                faq
              </span>
              <h1 className={styles['text35']}>
                <span className={styles['text36']}>
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className={styles['text38']}>Questions</span>
              </h1>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div data-type="accordion-header" className={styles['trigger']}>
                  <span className={styles['text39']}>Is this really free?</span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text40']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div
                  data-type="accordion-header"
                  className={styles['trigger1']}
                >
                  <span className={styles['text41']}>
                    Is this available to everyone?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text42']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div
                  data-type="accordion-header"
                  className={styles['trigger2']}
                >
                  <span className={styles['text43']}>
                    What features do you plan on adding?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text44']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles['question']}>
                <div
                  data-type="accordion-header"
                  className={styles['trigger3']}
                >
                  <span className={styles['text45']}>
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles['question-content']}
                >
                  <span className={styles['text46']}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className={styles['image5']}
            />
          </div>
          <div className={styles['banner']}>
            <span
              className={` ${styles['text47']} ${projectStyles['before-heading']} `}
            >
              get started
            </span>
            <h1 className={styles['text48']}>
              <span>Push your studying to</span>
              <span> the next level.</span>
            </h1>
            <span className={styles['text51']}>It&apos;s free!</span>
            <div className={styles['btns']}>
              <button
                className={` ${styles['button6']} ${projectStyles['button']} ${projectStyles['button-gradient']} `}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles['footer']}>
        <div className={styles['links-container']}>
          <div className={styles['container07']}>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text52']}>Flashly</span>
              <span className={styles['text53']}>How it works</span>
              <span className={styles['text54']}>Features</span>
              <span className={styles['text55']}>Pricing</span>
              <span>FAQ</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text57']}>App</span>
              <span className={styles['text58']}>Log in</span>
              <span className={styles['text59']}>Sign up</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text60']}>Alpenglow Studio</span>
              <span className={styles['text61']}>About us</span>
              <span className={styles['text62']}>Terms of Condition</span>
              <span className={styles['text63']}>Privacy</span>
              <span>Contact</span>
            </div>
            <div className={projectStyles['footer-column']}>
              <span className={styles['text65']}>Follow</span>
              <span className={styles['text66']}>Instagram</span>
              <span className={styles['text67']}>Twitter</span>
              <span className={styles['text68']}>Facebook</span>
              <span className={styles['text69']}>Tik Tok</span>
              <span className={styles['text70']}>Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

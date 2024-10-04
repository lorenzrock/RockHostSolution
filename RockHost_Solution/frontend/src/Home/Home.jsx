import App from "../App";
import React from "react";
import {useEffect, useState, useRef} from "react";
import styles from "./Home.module.css"
import Cloudspeed from '../assets/icons/cloudspeed.svg';

function Home() {


    return (
        <>
        <section id="Home">            
                <img className={styles.img0} src="src\assets\imges\Server_Stack_00.png" />
            <header className={styles.header}>
                <img src="\src\assets\imges\Serverstack_background.webp" alt="background_img" />
                <div>
                    <h1>Welcome to RockHost Solution</h1>
                    <h3>Powering Your Gaming and Root Servers!</h3>
                </div>
            </header>
            <div className={styles.homeContentContainer}>
                <div className={styles.h2HeadingDiv}>
                    <h2>Why Choose RockHost?</h2>
                </div>
                <div className={styles.homeInfobox}>
                    <div className={styles.infodiv}>
                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/></svg>
                        <h4>DDoS Protection</h4>
                        <ul>
                            <li>We provide enterprise-grade security, <strong>protecting your servers</strong> from threats.</li>
                        </ul>                                            
                    </div>
                    <div className={styles.infodivl2}>
                        <div className={styles.infodiv2}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                            <h4>Full Customization</h4>
                            <ul>
                                <li>Tailor your server configuration to suit your <strong>unique needs</strong>.</li>
                            </ul>
                        </div>
                        <div className={styles.infodiv2}>
                            <svg className={styles.icon} viewBox="0 0 94 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_20_4)">
                                <path d="M18 41.8929C18 50.2333 24.7561 57 33.0833 57H71.6295C79.035 57 85.0368 50.9886 85.0368 43.5714C85.0368 37.0775 80.4281 31.6536 74.3109 30.4156C74.7404 29.2931 74.9813 28.0656 74.9813 26.7857C74.9813 21.2254 70.4773 16.7143 64.9258 16.7143C62.8623 16.7143 60.935 17.3437 59.3429 18.4138C56.4414 13.3781 51.0261 10 44.8147 10C35.5553 10 28.0555 17.5116 28.0555 26.7857C28.0555 27.069 28.066 27.3522 28.0765 27.6355C22.2108 29.7022 18 35.3045 18 41.8929Z" fill="#DBD3D8"/>
                                </g>
                                <g filter="url(#filter1_dd_20_4)">
                                <path d="M40.0158 37.2079L41.5213 25.3134C41.6269 24.4787 42.3453 23.8527 43.2011 23.8527H52.1071C52.8995 23.8527 53.5386 24.4839 53.5386 25.2664C53.5386 25.4334 53.5069 25.6055 53.4488 25.762L51.0031 32.1997H58.3614C59.4284 32.1997 60.3 33.0553 60.3 34.1143C60.3 34.5004 60.1838 34.876 59.9619 35.1942L49.8093 49.8537C49.4976 50.3024 48.9852 50.5685 48.4412 50.5685H48.288C47.4586 50.5685 46.7825 49.9007 46.7825 49.0816C46.7825 48.9616 46.7983 48.8417 46.83 48.7217L49.3127 38.8774H41.7062C40.7712 38.8774 40.0158 38.1313 40.0158 37.2079Z" fill="#0A090C"/>
                                </g>
                                <defs>
                                <filter id="filter0_dd_20_4" x="0" y="0" width="103.037" height="83" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_4"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_20_4"/>
                                <feOffset dy="8"/>
                                <feGaussianBlur stdDeviation="6"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_20_4" result="effect2_dropShadow_20_4"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_4" result="shape"/>
                                </filter>
                                <filter id="filter1_dd_20_4" x="22.0158" y="13.8527" width="56.2842" height="62.7158" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_4"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_20_4"/>
                                <feOffset dy="8"/>
                                <feGaussianBlur stdDeviation="6"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_20_4" result="effect2_dropShadow_20_4"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_4" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            <h4>Blazing Fast Speed</h4>
                            <ul>
                                <li>
                                Our servers ensure ultra-low latency and <strong>high speed</strong> for seamless performance.
                                </li>
                            </ul>
                        </div>
                    </div>                    
                    <div className={styles.cta}>
                        <button className={styles.ctaID1}>Explore Our Services</button>
                        <h4 className={styles.ctaID2}>or</h4>
                        <button className={styles.ctaID3}>Get Started Now</button>
                        <button className={styles.ctaID4}>Return to Your Hub</button>
                    </div>
                
                
                </div>

            </div>
        </section>
        </>
    )
}

export default Home
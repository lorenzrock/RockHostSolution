import App from "../App";
import {useEffect, useState, useRef} from "react";
import styles from "./Home.module.css"
function Home() {


    return (
        <>
        <section id="Home">
            <header className={styles.header}>
                <img src="\src\assets\imges\Serverstack_background.webp" alt="background_img" />
                <div>
                    <h1>Welcome to RockHost Solution</h1>
                    <p>Powering Your Gaming and Root Servers!</p>
                </div>
            </header>
            <div className={styles.homeContentContainer}>

            </div>
        </section>
        </>
    )
}

export default Home
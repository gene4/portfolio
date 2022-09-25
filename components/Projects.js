import React from "react";
import covid19 from "../public/covid19.png";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

import styles from "../styles/Projects.module.scss";

function Projects() {
    return (
        <Carousel
            useKeyboardArrows={true}
            showStatus={false}
            showThumbs={false}
            swipeable={false}
        >
            <section className={styles.project} id="projects">
                <span className={styles.text}>
                    <h2 className="my-5">Lou&You</h2>
                    <p>
                        A web app for the Society for Innovation in Gender
                        Equality, that aims to help those who are affected by
                        sexual or domestic violence. <br />
                        The app is centralizing and personalizing helpful
                        information.
                        <br />
                        Built with{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://nextjs.org/"
                        >
                            Next.js
                        </a>{" "}
                        with typescript,{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://www.storyblok.com/"
                        >
                            Storyblok
                        </a>{" "}
                        cms and{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://bulma.io/"
                        >
                            {" "}
                            Bulma{" "}
                        </a>
                        for css.
                    </p>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded is-hidden-mobile"
                        href="https://louandyou.org/en"
                    >
                        louandyou.org
                    </a>
                </span>
                <a
                    rel="noreferrer"
                    target={"_blank"}
                    href="https://louandyou.org/en"
                >
                    <motion.img
                        className={styles.lou_img}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            type: "spring",
                            stiffness: 15,
                            duration: 2,
                            repeat: Infinity,
                        }}
                        alt="Lou&You"
                        src={"/louandyou.png"}
                    />
                </a>
            </section>
            <section className={styles.project}>
                <span className={styles.text}>
                    <h2 className="my-5">Nami</h2>
                    <p>
                        A portfolio page for tattoo artist Nami.
                        <br />
                        Built with Next.js, containing a booking form with email
                        notification using{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://sendgrid.com/"
                        >
                            Sendgrid
                        </a>
                        , and an image gallery with{" "}
                        <a
                            className="has-text-weight-normal"
                            href="https://firebase.google.com/"
                        >
                            Firebase
                        </a>{" "}
                        as the backend.
                    </p>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded is-hidden-mobile"
                        href="https://nami-xi.vercel.app/"
                    >
                        nami-xi
                    </a>
                </span>
                <a
                    rel="noreferrer"
                    target={"_blank"}
                    href="https://nami-xi.vercel.app/"
                >
                    <motion.img
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            type: "spring",
                            stiffness: 15,
                            duration: 2,
                            repeat: Infinity,
                        }}
                        alt="Nami"
                        className={styles.lou_img}
                        src={"/nami.png"}
                    />
                </a>
            </section>

            <section className={styles.project}>
                <span style={{ flex: 0.9, marginLeft: "3rem" }}>
                    <h2 className="my-5">Covid-19 Tracker</h2>
                    <p>
                        A web app that tracks covid-19 cases worldwide, using
                        data from disease.sh API. the user can view overall
                        cases, recoveries and deaths, sorted by country.
                        <br /> Built with{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://nextjs.org/"
                        >
                            Next.js
                        </a>
                        ,{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://mui.com/"
                        >
                            Material UI
                        </a>{" "}
                        ,{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://www.chartjs.org/"
                        >
                            Chart.js
                        </a>{" "}
                        for graphs and{" "}
                        <a
                            rel="noreferrer"
                            target={"_blank"}
                            className="has-text-weight-normal"
                            href="https://leafletjs.com/"
                        >
                            Leaflet
                        </a>{" "}
                        for the map.
                    </p>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded is-hidden-mobile"
                        href="https://covid19-tracker-gene4.vercel.app/"
                    >
                        Demo
                    </a>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded mx-5 is-hidden-mobile"
                        href="https://github.com/gene4/covid19-tracker"
                    >
                        Code
                    </a>
                </span>
                <motion.div
                    className="is-relative"
                    style={{ width: "100%", height: "100%", flex: 1 }}
                    animate={{ y: [0, 3, 0] }}
                    transition={{
                        type: "spring",
                        stiffness: 15,
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Image
                        priority
                        alt="covid19"
                        src={covid19}
                        layout="fill"
                        objectFit="contain"
                    />
                </motion.div>
                <div className="is-flex is-hidden-tablet">
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded"
                        href="https://covid19-tracker-gene4.vercel.app/"
                    >
                        Demo
                    </a>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded mx-5"
                        href="https://github.com/gene4/covid19-tracker"
                    >
                        Code
                    </a>
                </div>
            </section>
            <section className={styles.project}>
                <span className={styles.text}>
                    <h2 className="my-5">Navot Miller</h2>
                    <p>
                        A react-based simple portfolio for artist and bestie
                        Navot Miller, with an image carousele using{" "}
                        <a
                            className="has-text-weight-normal"
                            href="https://firebase.google.com/"
                        >
                            Firebase
                        </a>{" "}
                        as the backend, and a responsive navigation.
                    </p>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded is-hidden-mobile"
                        href="https://www.navotmiller.com/"
                    >
                        navotmiller.com
                    </a>
                </span>
                <a
                    rel="noreferrer"
                    target={"_blank"}
                    href="https://www.navotmiller.com/"
                >
                    <motion.img
                        className={styles.lou_img}
                        alt="Navot Miller"
                        src={"/navot.png"}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            type: "spring",
                            stiffness: 15,
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </a>
            </section>

            <section className={styles.project}>
                <span style={{ flex: 0.9, marginLeft: "3rem" }}>
                    <h2 className="my-5">
                        SoundCloud Winamp Player
                        <br /> *API key expired*
                    </h2>
                    <p>
                        Reconstruction of the iconic Winamp audio player.
                        <br /> This audio player connects to the Soundcloud API
                        and uses it to stream audio. view track details, create
                        a custom playlist, and share what they are listening to
                        on social media. This full-stack app has a
                        registration/login feature with password encryption, and
                        uses React with Redux, Node.js/Express and Postgres SQL
                        for handling the database. This project was selected by
                        the Spiced Academy staff to be showcased on their
                        website and social media.
                    </p>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button my-5 is-dark is-rounded"
                        href="http://sc-winamp.herokuapp.com/"
                    >
                        Demo
                    </a>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button m-5 is-dark is-rounded"
                        href="https://github.com/gene4/winamp"
                    >
                        Code
                    </a>
                </span>
                <span className="is-hidden-mobile" style={{ flex: 0.7 }}>
                    <video
                        autoPlay
                        muted
                        loop
                        style={{
                            objectFit: "contain",
                            borderRadius: "15px",
                        }}
                    >
                        <source src="/winamp.mp4" type="video/mp4" />
                    </video>
                </span>
            </section>
        </Carousel>
    );
}

export default Projects;

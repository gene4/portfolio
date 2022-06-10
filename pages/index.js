/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Projects from "../components/Projects";

export default function Home() {
    const [scrollY, setScrollY] = useState();
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Nadav Kirsh - Protfolio</title>
                <meta name="description" content="Nadav Kirsh - Protfolio" />
                <link
                    rel="icon"
                    href="https://icon-library.com/images/n-icon/n-icon-25.jpg"
                />
            </Head>
            <nav>
                <Link href={"/"}>home</Link>
                <Link href={"#about"}>about</Link>
                <Link href={"#projects"}>projects</Link>
            </nav>
            <section className={styles.landing_page}>
                <motion.div
                    animate={{ y: 100 }}
                    transition={{ type: "spring", stiffness: 15 }}
                    style={{
                        zIndex: 1,
                        textAlign: "center",
                        translateY: -100,
                    }}
                >
                    <div
                        style={{
                            transform: `translateY(${scrollY * 0.025}vh)`,
                        }}
                    >
                        <h1>Nadav Kirsh</h1>
                        <p>Frontend Developer</p>
                    </div>
                </motion.div>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "absolute",
                        objectFit: "cover",
                    }}
                >
                    <source
                        src="/landing-bg.m4v"
                        type="video/mp4; codecs=hvc1"
                    />
                    <source
                        src="/landing-bg.webm"
                        type="video/webm; codecs=vp9"
                    />
                </video>
                <div
                    style={{
                        zIndex: 1,
                        position: "absolute",
                        bottom: "4rem",
                        width: "50px",
                        height: "50px",
                        transform: `translateY(${scrollY * 0.05}vh)`,
                        translateY: -50,
                    }}
                >
                    <motion.img
                        animate={{ y: 50 }}
                        transition={{ type: "spring", stiffness: 15 }}
                        src={"./172458_down_arrow_icon.svg"}
                    />
                </div>
            </section>
            <section className={styles.section_2} id="about">
                <motion.p
                    initial={{ opacity: 0, color: "#eaeaea" }}
                    whileInView={{ opacity: 1, color: "white" }}
                    transition={{
                        type: "spring",
                        stiffness: 15,
                    }}
                >
                    Hey there! i'm Nadav {"  "} ٩(◕‿◕｡)۶ <br />
                    I'm a Berlin-based Frontend developer for Lou&You, intrested
                    in projects that could help people through code. <br />
                    Curious where my coding journy will take me next!
                </motion.p>
                <div>
                    <a
                        target="_blank"
                        download
                        className="button is-medium my-5 is-dark is-rounded"
                        href="/Nadav_Kirsh_CV.pdf"
                    >
                        Download CV
                    </a>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button m-5 is-medium is-dark is-rounded"
                        href="https://github.com/gene4"
                    >
                        Github
                    </a>
                    <a
                        rel="noreferrer"
                        target={"_blank"}
                        className="button is-medium my-5 is-dark is-rounded"
                        href="https://www.linkedin.com/in/nadavkirsh/"
                    >
                        Linkedin
                    </a>
                </div>
            </section>
            <Projects />
        </div>
    );
}

"use client"

import React, { useEffect, useState } from "react";
// import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {

    const feedingOptions = [
        { value: "Floor Feed", label: "Floor Feed", description: "Roll the ball along the ground." },
        { value: "NDH Feed", label: "NDH Feed", description: "Loft the ball up with your non-dominant hand." },
        { value: "NDH Wall Feed", label: "NDH Wall Feed", description: "Loft the ball up and at the wall with your non-dominant hand." },
    ]

    const [selectedFeed, setSelectedFeed] = useState(feedingOptions[0].value);

    const handleChange = (event) => {
        setSelectedFeed(event.target.value);
    }

    useEffect(() => {
        console.log('selected', selectedFeed)
    }, [selectedFeed]);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className="">
                    <h1>
                        Feed At Target
                    </h1>

                    <h3>
                        What is Feeding?
                    </h3>

                    {/* accordion */}

                </header>

                <section className="activity-section">
                    <h2>
                        Tweak the Feed
                    </h2>
                    <form>
                        <label htmlFor="feed-select"></label>
                        <select id="feed-select" value={selectedFeed} onChange={handleChange}>
                            {feedingOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                </section>

                <section className="activity-section">
                    <h2>
                        Tweak the Technique
                    </h2>
                </section>

                <section className="activity-section">
                    <h2>
                        Tweak the Target
                    </h2>
                </section>

                <section className="activity-section">
                    <h2>
                        Tweak the Game
                    </h2>
                </section>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}

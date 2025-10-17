"use client"

import React, { useEffect, useState } from "react";
// import Image from "next/image";
import type { DropdownOption } from "../_types/types.ts";
import styles from "../page.module.css";

export default function FeedAtTarget() {

    // Info dropdown
    const [isOpen, setIsOpen] = useState(true);

    // const toggleInfoDropdown = () => {
    //     setIsOpen(!isOpen);
    // }

    // Selection dropdown
    const feedingOptions: DropdownOption[] = [
        { value: "Floor Feed", label: "Floor Feed", description: "Roll the ball along the ground." },
        { value: "NDH Feed", label: "NDH Feed", description: "Loft the ball up with your non-dominant hand." },
        { value: "NDH Wall Feed", label: "NDH Wall Feed", description: "Loft the ball up and at the wall with your non-dominant hand." },
    ]

    const [selectedFeed, setSelectedFeed] = useState<DropdownOption>(feedingOptions[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = feedingOptions.find(option => option.value === event.target.value);
        if (selected) setSelectedFeed(selected);
        console.log("value and description: ", selected?.value, "-", selected?.description)
    }

    // Test state
    // useEffect(() => {
    //     console.log('selected', selectedFeed)
    // }, [selectedFeed]);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className="header">
                    <h1 className="activity-title">
                        Feed At Target
                    </h1>

                    {/* accordion */}

                    <div className={`info-dropdown ${isOpen ? "active" : ""}`}>
                        <button
                            onClick={() => setIsOpen(!isOpen)} className="info-dropdown-button"
                            aria-expanded={isOpen}>
                            {<h3>What is Feeding?</h3> }
                        </button>

                        <div className="info-dropdown-content">
                            <p>The idea of tennis feeding ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>

                    </div>
                </header>

                <div className="sections-container">
                    <section className="activity-section">
                        <h2>
                            Tweak the Feed
                        </h2>
                        <div className="dropdown">
                            <label htmlFor="feed-select">Select Feed</label>
                            <select id="feed-select" value={selectedFeed.value} onChange={handleChange}>
                                {feedingOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="activity-description">
                            <p>{selectedFeed.description}</p>
                        </div>
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
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}

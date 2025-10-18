"use client"

import React, { useEffect, useState, useRef } from "react";
import type { ActivityElement } from "../_types/types.ts";
import { activityElements } from "../_data/activity-elements-data";
import { activityPatterns } from "../_data/activity-patterns-data";
import styles from "../page.module.css";

import Section from "../_components/section";

export default function FeedAtTarget() {

    // Set the Title and ID number for each activity pattern page
    const pageTitle = activityPatterns[0].title;
    const pageId = activityPatterns[0].id;

    // Pulls in all data that can be associated with the page
    const findActivityElements = (associatedId: number): ActivityElement[] => {
        return activityElements.filter(element =>
            element.pages?.some(page => page.associated_id === associatedId)
        );
    };

    const pageElements: ActivityElement[] = findActivityElements(pageId);
    console.log(pageElements);

    ///////////////////////////////////

    // Info dropdown
    const [isOpen, setIsOpen] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                const scrollHeight = contentRef.current.scrollHeight;
                contentRef.current.style.maxHeight = scrollHeight + "px";
            } else {
                contentRef.current.style.maxHeight = "0px";
            }
        }
    }, [isOpen]);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className="header">
                    <h1 className="activity-title">
                        {pageTitle}
                    </h1>

                    {/* accordion */}

                    <div className={"info-dropdown"}>
                        <button
                            onClick={() => setIsOpen(!isOpen)} className="info-dropdown-button"
                            aria-expanded={isOpen}>
                            {<h3>What is Feeding?</h3>}
                            {<p className={`dropdown-symbol ${isOpen ? "open" : ""}`}>^</p>}
                        </button>

                        <div className="info-dropdown-content" ref={contentRef} style={{ transition: "max-height 0.4s ease", overflow: "hidden" }}>
                            <p>The idea of tennis feeding ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>

                    </div>
                </header>

                <div className="sections-container">
                    {activityElements.map((element) => (
                        <Section
                            key={element.id}
                            title={element.title}
                            options={element.options}
                        />
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}

"use client"

import React from "react";
import type { ActivityElement } from "../_types/types.ts";
import { activityPatterns } from "../_data/activity-patterns-data";
import styles from "../page.module.css";

import { findActivityElements } from "../_utils/findActivityElements";
import ElementSection from "../_components/element_section";
import InfoSection from "../_components/info_section";

export default function FeedAtTarget() {

    // Set the Title and ID number for each activity pattern page
    const pageTitle = activityPatterns[0].title;
    const pageId = activityPatterns[0].id;

    // Pulls in all data that can be associated with the page
    const pageElements: ActivityElement[] = findActivityElements(pageId);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <header className="header">
                    <h1 className="activity-title">
                        {pageTitle}
                    </h1>
                </header>

                <div className="sections-container">
                    {/* Displays every potential element section on the page */}
                    {pageElements.map((element) => (
                        <React.Fragment key={element.id}>
                            <ElementSection
                                title={element.title}
                                options={element.options}
                            />
                            <InfoSection
                                info={element.info}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}

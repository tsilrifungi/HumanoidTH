"use client";

import { useState } from "react";
import styles from "./track-tabs.module.css";

const tabs = ["Analysis", "Development", "Summary"] as const;

export default function TrackTabs() {
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Analysis");

    return (
        <div className={styles.tabs} aria-label="Synergy Track sections">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    aria-pressed={activeTab === tab}
                    className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

import React, { useState, useEffect, useRef } from "react";
import { InfoSectionProps } from "../_types/types";

export default function InfoSection({ info }: InfoSectionProps) {

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
        <div className={"info-dropdown"}>
            {info?.map((infoDetail) => (
                <div key={infoDetail.id}>
                    <button
                        onClick={() => setIsOpen(!isOpen)} className="info-dropdown-button"
                        aria-expanded={isOpen}>
                        {<h3> {infoDetail.title}</h3>}
                        {<p className={`dropdown-symbol ${isOpen ? "open" : ""}`}>^</p>}
                    </button>

                    <div className="info-dropdown-content" ref={contentRef} style={{ transition: "max-height 0.4s ease", overflow: "hidden" }}>
                        <p>{infoDetail.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
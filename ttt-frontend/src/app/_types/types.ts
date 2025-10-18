export interface ActivityPattern {
    id: number;
    title: string;
};

export interface ActivityOption {
    id: number;
    value: string;
    title: string;
    description: string;
};

export interface ElementInfo {
    id: number;
    title: string;
    description: string;
};

export interface InfoSectionProps {
    info?: ElementInfo[];
};

export interface ActivityPatternList {
    associated_id: number;
};

export interface ActivityElement {
    id: number;
    label: string;
    title: string;
    options: ActivityOption[];
    info?: ElementInfo[];
    pages?: ActivityPatternList[];
};

export interface ElementSectionProps {
    title: string;
    options: ActivityOption[];
};
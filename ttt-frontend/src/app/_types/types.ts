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

export interface ActivityInfo {
    id: number;
    title: string;
    description: string;
}

export interface ActivityPatternList {
    associated_id: number;
}

export interface ActivityElement {
    id: number;
    label: string;
    title: string;
    options: ActivityOption[];
    info?: ActivityInfo[];
    pages?: ActivityPatternList[];
};

export interface SectionProps {
    title: string;
    options: ActivityOption[];
}
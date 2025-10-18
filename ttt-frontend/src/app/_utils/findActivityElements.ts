import { activityElements } from "../_data/activity-elements-data";
import { ActivityElement } from "../_types/types";

export const findActivityElements = (associatedId: number): ActivityElement[] => {
    return activityElements.filter(element =>
        element.pages?.some(page => page.associated_id === associatedId)
    );
};
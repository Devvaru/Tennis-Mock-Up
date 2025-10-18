import type { ActivityElement } from "../_types/types.js";

export const activityElements: ActivityElement[] = [
    {
        id: 0,
        title: "Feeding Options",
        options: [
            { id: 0, value: "Floor Feed", title: "Floor Feed", description: "Roll the ball along the ground." },
            { id: 1, value: "NDH Feed", title: "NDH Feed", description: "Loft the ball up with your non-dominant hand." },
            { id: 2, value: "NDH Wall Feed", title: "NDH Wall Feed", description: "Loft the ball up and at the wall with your non-dominant hand." }
        ],
        info: [
            { id: 0, title: "What is Feeding?", description: "The idea of tennis feeding ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " }
        ],
        activity_patterns: [
            { associated_id: 0 }
        ]
    },
    {
        id: 1,
        title: "Technique Options",
        options: [
            { id: 0, value: "Body", title: "Body", description: "Body is balanced and still." },
            { id: 1, value: "Tossing Path", title: "Tossing Path", description: "Toss the ball upward." },
            { id: 2, value: "Tossing Quality", title: "Tossing Quality", description: "Smooth." }
        ],
        activity_patterns: [
            { associated_id: 0 }
        ]
    },
    {
        id: 2,
        title: "Target Options",
        options: [
            { id: 0, value: "Cone Goal", title: "Cone Goal", description: "Toss the ball between 2 objects. 2 Cones work nicely. A hockey net works even better." },
            { id: 1, value: "Container", title: "Container", description: "Toss the ball into a Container. A basket is wondefull. Put something in the container to prevent the ball from bouncing out, like a towel, for example." },
            { id: 2, value: "Ball On Cone", title: "Ball On Cone", description: "Balance a ball on a cone. Very difficult target." }
        ],
        activity_patterns: [
            { associated_id: 0 }
        ]
    },
    {
        id: 3,
        title: "Game Options",
        options: [
            { id: 0, value: "k-In-A-Row", title: "k-In-A-Row", description: "Pick a value for k and try to get k in a row catches. k=3 is often a good 1st choice." },
            { id: 1, value: "k-Times", title: "k-Times", description: "Pick a value for k and try to catch the ball k times. k=5 is often a good 1st choice." },
            { id: 2, value: "k-Out-Of-n", title: "k-Out-Of-n", description: "Pick a value k and a bigger value n, and of n attempts, make k catches. k=3 and n=5 can be a nice place to start." }
        ],
        activity_patterns: [
            { associated_id: 0 }
        ]
    }
];

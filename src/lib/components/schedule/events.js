export const getEvents = () => {
    return [
        {
            title: "event one",
            hours: "12pm to 3pm",
            time: new Date("January 16, 2022 22:40 UTC-08").getTime(),
            desc: "this is the first event of QWERHACKS",
            fill: "#9FF4CB"
        },
        {
            title: "event two",
            hours: "2pm to 4pm",
            time: new Date("January 16, 2022 23:10 UTC-08").getTime(),
            desc: "this is the second event of QWERHACKS",
            fill: "#FFE9B1"
        },
        {
            title: "event three",
            hours: "4pm to 5pm",
            time: new Date("January 17, 2022 00:30 UTC-08").getTime(),
            desc: "this is the third event of QWERHACKS",
            fill: "#FF83A1"
        },
        {
            title: "event four",
            hours: "6pm to 8pm",
            desc: "this is the fourth event of QWERHACKS"
        },
    ]
}
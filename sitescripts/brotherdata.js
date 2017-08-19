// This file is responsible for storing all of the data about brothers
// Created by: Kirk Morgan | Time: August 18, 2017 3:47 P.M.

const Major = {
    ACCOUNTING: "Accounting",
    ENTREPRENEURSHIP: "Entrepreneurship",
    ADMINISTRATION: "Business Administration",
    ECONOMICS: "Economics",
    MARKETING: "Marketing",
    SUPPLY: "Supply Chain Management",
    INFORMATION: "Management Information Systems",
    FINANCE: "Finance",
    COMPUTER: "Computer Science"
};

const Minor = {
    PSYCHOLOGY: "Psychology",
    MEDIA: "Interactive Media",
    HISTORY: "History",
    CHEMISTRY: "Chemistry",
    SPANISH: "Spanish"
};

const Class = {
    CHARTER: "Charter",
    ALPHA: "Alpha",
    BETA: "Beta",
    GAMMA: "Gamma",
    DELTA: "Delta",
    EPSILON: "Epsilon"
};

const Status = {
    ACTIVE: "Active",
    ALUMNI: "Alumni",
    INACTIVE: "Inactive",
    COOP: "Co-op Status"
};

const ChapterPositions = {
    PRESIDENT: "President",
    SVP: "Senior Vice President",
    PLEDGE: "Vice President Of Pledge Education",
    FINANCE: "Vice President Of Finance",
    OPS: "Vice President Of Chapter Operations",
    CHANCELLOR: "Chancellor",
    PROFESSIONAL: "Vice President Of Professional Events",
    COMMUNITY: "Vice President Of Community Service",
    AWARDS: "Vice President Of Scholarships & Awards",
    ALUMNI: "Vice President Of Alumni Relations",
    SOCIAL: "Director Of Social Activities",
    FUNDRAISING: "Director Of Fundraising",
    MARKETING: "Director Of Marketing",
    WEBMASTER: "Webmaster"
};

// Chapter Class Members

const jonathanDumont = {
    ecPosition: ChapterPositions.AWARDS,
    chapterClass: Class.CHARTER,
    status: Status.ACTIVE,
    firstName: "Jonathan",
    lastName: "Dumont",
    major1: Major.ACCOUNTING,
    major2: Major.FINANCE,
    minor: undefined,
    gradYear: "2018",
    hometown: "Manchester, NH",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const trooneMarchak = {
    ecPosition: ChapterPositions.PRESIDENT,
    chapterClass: Class.CHARTER,
    status: Status.ACTIVE,
    firstName: "Troone",
    lastName: "Marchak",
    major1: Major.MARKETING,
    major2: undefined,
    minor: Minor.PSYCHOLOGY,
    gradYear: "2018",
    hometown: "Greenwich, CT",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};

// Alpha Class Members

const derekChen = {
    ecPosition: ChapterPositions.SVP,
    chapterClass: Class.ALPHA,
    status: Status.ACTIVE,
    firstName: "Derek",
    lastName: "Chen",
    major1: Major.SUPPLY,
    major2: Major.INFORMATION,
    minor: undefined,
    gradYear: "2018",
    hometown: "San Jose, CA",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const meredithJenusaitis = {
    ecPosition: ChapterPositions.PLEDGE,
    chapterClass: Class.ALPHA,
    status: Status.ACTIVE,
    firstName: "Meredith",
    lastName: "Jenusaitis",
    major1: Major.MARKETING,
    major2: undefined,
    minor: Minor.MEDIA,
    gradYear: "2019",
    hometown: "Chatham, NJ",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};

// Beta Class Members

const aarambhPradhan = {
    ecPosition: ChapterPositions.CHANCELLOR,
    chapterClass: Class.BETA,
    status: Status.ACTIVE,
    firstName: "Aarambh",
    lastName: "Pradhan",
    major1: Major.INFORMATION,
    major2: Major.ECONOMICS,
    minor: undefined,
    gradYear: "2019",
    hometown: "Kathmandu, Nepal",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};

// Gamma Class Members

const coleHarper = {
    ecPosition: ChapterPositions.FINANCE,
    chapterClass: Class.GAMMA,
    status: Status.ACTIVE,
    firstName: "Cole",
    lastName: "Harper",
    major1: Major.FINANCE,
    major2: Major.ACCOUNTING,
    minor: undefined,
    gradYear: "2019",
    hometown: "Sonoma, CA",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const kirkMorgan = {
    ecPosition: ChapterPositions.WEBMASTER,
    chapterClass: Class.GAMMA,
    status: Status.ACTIVE,
    firstName: "Kirk",
    lastName: "Morgan",
    major1: Major.FINANCE,
    major2: Major.COMPUTER,
    minor: undefined,
    gradYear: "2019",
    hometown: "Florida, NY",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const robeyNeJame = {
    ecPosition: ChapterPositions.SOCIAL,
    chapterClass: Class.GAMMA,
    status: Status.ACTIVE,
    firstName: "Robey",
    lastName: "NeJame",
    major1: Major.ADMINISTRATION,
    major2: Major.ENTREPRENEURSHIP,
    minor: Minor.HISTORY,
    gradYear: "2019",
    hometown: "Florence, MA",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const sureenaSachdev = {
    ecPosition: ChapterPositions.ALUMNI,
    chapterClass: Class.GAMMA,
    status: Status.ACTIVE,
    firstName: "Sureena",
    lastName: "Sachdev",
    major1: Major.FINANCE,
    major2: undefined,
    minor: undefined,
    gradYear: "2020",
    hometown: "Bangkok, Thailand",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};

// Delta Class Members

const adrienneCarr = {
    ecPosition: ChapterPositions.MARKETING,
    chapterClass: Class.DELTA,
    status: Status.ACTIVE,
    firstName: "Adrienne",
    lastName: "Carr",
    major1: Major.MARKETING,
    major2: Major.ADMINISTRATION,
    minor: Minor.SPANISH,
    gradYear: "2020",
    hometown: "Minnetonka, MN",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const benSimon = {
    ecPosition: ChapterPositions.PROFESSIONAL,
    chapterClass: Class.DELTA,
    status: Status.ACTIVE,
    firstName: "Ben",
    lastName: "Simon",
    major1: Major.MARKETING,
    major2: Major.ENTREPRENEURSHIP,
    minor: undefined,
    gradYear: "2020",
    hometown: "Bethesda, MD",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const jamesHe = {
    ecPosition: ChapterPositions.OPS,
    chapterClass: Class.DELTA,
    status: Status.ACTIVE,
    firstName: "James",
    lastName: "He",
    major1: Major.FINANCE,
    major2: undefined,
    minor: undefined,
    gradYear: "2020",
    hometown: "San Antonio, TX",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const jessicaSekler = {
    ecPosition: ChapterPositions.COMMUNITY,
    chapterClass: Class.DELTA,
    status: Status.ACTIVE,
    firstName: "Jessica",
    lastName: "Sekler",
    major1: Major.FINANCE,
    major2: Major.INFORMATION,
    minor: undefined,
    gradYear: "2019",
    hometown: "Plainview, NY",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};

// Epsilon Class Members

const elizabethFlavin = {
    ecPosition: ChapterPositions.FUNDRAISING,
    chapterClass: Class.EPSILON,
    status: Status.ACTIVE,
    firstName: "Elizabeth",
    lastName: "Flavin",
    major1: Major.FINANCE,
    major2: undefined,
    minor: Minor.CHEMISTRY,
    gradYear: "2019",
    hometown: "Chicago, IL",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};

// An array of all of the fraternity's members
const allBrothers = [
    aarambhPradhan,
    adrienneCarr,
    benSimon,
    coleHarper,
    derekChen,
    elizabethFlavin,
    jamesHe,
    jessicaSekler,
    jonathanDumont,
    kirkMorgan,
    meredithJenusaitis,
    robeyNeJame,
    sureenaSachdev,
    trooneMarchak
];

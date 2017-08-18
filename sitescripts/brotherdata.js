// This file is responsible for storing all of the data about brothers
// Created by: Kirk Morgan | Time: August 18, 2017 3:47 P.M.

const Major = {
    ACCOUNTING: "Accounting",
    ENTREPRENEURSHIP: "Entrepreneurship",
    ADMINISTRATION: "Business Administration",
    ECONOMICS: "Economics",
    BUSECON: "Business Administration & Economics"
};

const Class = {
    CHAPTER: "Chapter",
    ALPHA: "Alpha",
    BETA: "Beta",
    GAMMA: "Gamma"
};

const Status = {
    ACTIVE: "Active",
    ALUMNI: "Alumni",
    INACTIVE: "Inactive",
    COOP: "Co-op Status"
};

const ChapterPositions = {
    PRESIDENT: "President",
    SOCIAL: "Social Chair",
    WEBMASTER: "Web Master",
    FUNDRAISING: "Fundraising Chair"
};

// Chapter Class Brothers

const testBro1 = {
    ecPosition: "none",
    class: Class.CHAPTER,
    status: Status.ACTIVE,
    firstName: "Danielle",
    lastName: "Smith",
    major: Major.ACCOUNTING,
    gradYear: "2020",
    hometown: "Boston, MA",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const testBro2 = {
    ecPosition: ChapterPositions.PRESIDENT,
    class: Class.BETA,
    status: Status.ACTIVE,
    firstName: "Jazminn",
    lastName: "Li",
    major: Major.ENTREPRENEURSHIP,
    gradYear: "2018",
    hometown: "New York, NY",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const testBro3 = {
    ecPosition: "none",
    class: Class.ALPHA,
    status: Status.INACTIVE,
    firstName: "Jack",
    lastName: "McElroy",
    major: Major.ADMINISTRATION,
    gradYear: "2020",
    hometown: "San Francisco, CA",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const testBro4 = {
    ecPosition: "none",
    class: Class.CHAPTER,
    status: Status.ALUMNI,
    firstName: "Jenna",
    lastName: "Thorton",
    major: Major.BUSECON,
    gradYear: "2007",
    hometown: "Los Angeles, CA",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};
const testBro5 = {
    ecPosition: ChapterPositions.WEBMASTER,
    class: Class.GAMMA,
    status: Status.COOP,
    firstName: "Ryan",
    lastName: "Codi",
    major: Major.ACCOUNTING,
    gradYear: "2019",
    hometown: "Providence, RI",
    funFact: "",
    interests: new Array([]),
    coops: new Array([]),
    statement: ""
};


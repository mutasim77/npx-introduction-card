import boxen from "boxen";
import data from "./data.js";

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        ``,
        `    Hi again! I'm Mutasim, your friendly web wizard!`,
        `I code, I solve problems and I make websites look snazzy`,
        `If my code could talk, it would probably tell you a joke`,
        `         Let's build cool stuff together!💚`
    ].join("\n"),
    {
        margin: 1,
        title: `Welcome`,
        titleAlignment: 'center',
        float: 'center',
        padding: 1,
        borderStyle: "round",
        borderColor: "red"
    }
);

console.log(me);


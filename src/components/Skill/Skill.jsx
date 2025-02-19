import { ContIconsSkill, ContSkill, IconsCcont, SkillIcons, TitleStyled } from "./SklillStyled";
import html5 from "./img/html5.png";
import css from "./img/css.png";
import javas from "./img/javas.png";
import react from "./img/react.png";
import ts from "./img/ts.png";
import sql from "./img/sqldb.png";
import vs from "./img/vscode.png";
import py from "./img/python.png";
import mongo from "./img/mongo.png";

import { H3TitleStyled, PStyled } from "../UI/Txtformat/TxtStyled";



const Skill = () => {
    return (
    <ContSkill>
        <TitleStyled><H3TitleStyled>Mis Habildiades</H3TitleStyled></TitleStyled>
        <ContIconsSkill>
        <IconsCcont> <SkillIcons src={html5} />
            <PStyled>HTML 5</PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={css} />
            <PStyled>CSS</PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={javas} />
        <PStyled>Java </PStyled>
        <PStyled>Scrip</PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={react} />
            <PStyled>React </PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={py} />
            <PStyled>Python </PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={ts} />
            <PStyled>Typescript </PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={sql} />
            <PStyled>SQL </PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={vs} />
            <PStyled>VS</PStyled>
            <PStyled> Code</PStyled>
        </IconsCcont>
        <IconsCcont> <SkillIcons src={mongo} />
            <PStyled>Mongo DB </PStyled>
        </IconsCcont>
        </ContIconsSkill>
    </ContSkill>
    )
}

export default Skill
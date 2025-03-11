import React from "react";
import { SkillIcon } from "./SkillIcon";
import {
  DiCss3,
  DiDocker,
  DiGit,
  DiHtml5,
  DiJava,
  DiJsBadge,
  DiLaravel,
  DiNodejs,
  DiPhp,
  DiReact,
} from "react-icons/di";
import {
  SiBootstrap,
  SiExpress,
  SiFlutter,
  SiKotlin,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

export const Skills = () => {
  const size = 64;
  const sizeSi = size - 11;
  return (
    <div className="flex flex-row gap-8 justify-center items-center flex-wrap">
      <SkillIcon icon={<DiHtml5 size={size} />} title="HTML" />
      <SkillIcon icon={<DiCss3 size={size} />} title="CSS" />
      <SkillIcon icon={<DiJsBadge size={sizeSi} />} title="Javascript" />
      <SkillIcon icon={<SiTypescript size={sizeSi} />} title="Typescript" />
      <SkillIcon icon={<DiPhp size={size} />} title="PHP" />
      <SkillIcon icon={<DiLaravel size={size} />} title="Laravel" />
      <SkillIcon icon={<DiReact size={size} />} title="React" />
      <SkillIcon icon={<RiNextjsLine size={size} />} title="NextJs" />
      <SkillIcon icon={<SiNestjs size={sizeSi} />} title="NestJS" />
      <SkillIcon icon={<DiNodejs size={size} />} title="NodeJs" />
      <SkillIcon icon={<SiExpress size={sizeSi} />} title="Express" />
      <SkillIcon icon={<SiBootstrap size={sizeSi} />} title="Bootstrap" />
      <SkillIcon icon={<SiTailwindcss size={sizeSi} />} title="Tailwind Css" />
      <SkillIcon icon={<SiFlutter size={sizeSi} />} title="Flutter" />
      <SkillIcon icon={<DiGit size={size} />} title="Git" />
      <SkillIcon icon={<DiJava size={size} />} title="Java" />
      <SkillIcon icon={<SiKotlin size={sizeSi} />} title="Kotlin" />
      <SkillIcon icon={<SiSpringboot size={sizeSi} />} title="Spring Boot" />
      <SkillIcon icon={<DiDocker size={sizeSi} />} title="Docker" />
      <SkillIcon icon={<SiMysql size={sizeSi} />} title="MySQL" />
      <SkillIcon icon={<SiPostgresql size={sizeSi} />} title="PostgreSQL" />
      <SkillIcon icon={<SiLinux size={sizeSi} />} title="Linux" />
    </div>
  );
};

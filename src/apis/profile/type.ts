export interface ProfileType {
  basic: BasicType;
  intro: IntroType;
  project: ProjectType[];
  experience: ExpType[];
  skill: SkillType;
  active: ActiveType[];
  educate: EducateType[];
}

export type BasicType = { role: string };

export type IntroType = {
  aboutMe: string;
  oneLineIntroduction: string;
};

export type ProjectType = {
  name: string;
  intro: string;
  time: TimeType;
  url: string;
  works: string[];
  skill: string[];
  img: string[];
};

export type ExpType = {
  name: string;
  time: TimeType;
  role: string;
  works: string[];
};

export type SkillType = {
  mainSkill: string[];
  subSkill: string[];
};

export type ActiveType = {
  name: string;
  content: string;
  time: TimeType;
};

export interface EducateType {
  name: string;
  time: TimeType;
}

export type TimeType = {
  start: string;
  end: string;
};

export type EditType = keyof ProfileType;
export type EachItemType =
  | BasicType
  | IntroType
  | ProjectType
  | ExpType
  | SkillType
  | ActiveType
  | EducateType;

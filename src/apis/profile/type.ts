export interface ProfileType {
  basic: BasicType;
  introduce: IntroType;
  project: ProjectType[];
  experience: ExpType[];
  technology: SkillType;
  activity: ActiveType[];
  education: EducateType[];
}

export type BasicType = { role: string };

export type IntroType = {
  complex: string;
  simple: string;
};

export type ProjectType = {
  name: string;
  introduce: string;
  period: string;
  url: string;
  works: string[];
  skills: string[];
  img: string[];
};

export type ExpType = {
  name: string;
  period: string;
  role: string;
  works: string[];
};

export type SkillType = {
  main: string[];
  sub: string[];
};

export type ActiveType = {
  name: string;
  content: string;
  period: string;
};

export interface EducateType {
  name: string;
  period: string;
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

import {
  ActivityType,
  BasicType,
  EducationType,
  ProjectType,
  TechnologyType,
  WorkExperienceType,
} from '@scouit/api-types';

export interface ProfileType {
  basic: BasicType;
  project: ProjectType[];
  experience: WorkExperienceType[];
  technology: TechnologyType;
  activity: ActivityType[];
  education: EducationType[];
}

export type EditType = keyof ProfileType;
export type EachItemType =
  | BasicType
  | ProjectType
  | WorkExperienceType
  | TechnologyType
  | ActivityType
  | EducationType;

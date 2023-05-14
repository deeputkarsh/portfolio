export type CmsStringList = {
	id: number;
	value: string;
};
export type ListItem = {
	title: string;
	items: CmsStringList[];
};
export type CoverLetterData = {
	HiringManName: string;
	jobListingName: string;
};
export type SectionData = {
	title: string;
	list: any[];
};
type TechStackData = {
	list: ListItem[];
} & SectionData;
type AchievementsData = {
	list: Array<{title: string; details: CmsStringList[]}>;
} & SectionData;
export type PersonalDetails = {
	name: string; title: string;
	phone: string; email: string;
	website: string; location: string;
	summary: string; otherLinks: CmsStringList[];
};
export type UserData = {
	personalDetails: PersonalDetails;
	achievementsData: AchievementsData;
	projectsData: SectionData;
	corporateExpData: SectionData;
	corporateExpDataDev: SectionData;
	corporateExpWtProjectData: SectionData;
	educationData: SectionData;
	techStackData: TechStackData;
	coverLetterData: CoverLetterData;
};

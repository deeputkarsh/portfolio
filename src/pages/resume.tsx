import styles from '@self/styles/resume.module.scss';
import Achievements from '@self/resume-components/Achievements';
import CorporateExp from '@self/resume-components/CorporateExp';
import Head from '@self/resume-components/Head';
import TechStack from '@self/resume-components/TechStack';
import Projects from '@self/resume-components/Projects';
import Education from '@self/resume-components/Education';
import Sections from '@self/resume-components/Sections';
import Summary from '@self/resume-components/Summary';
import {type UserData} from '@self/types';
import cmsClient from '@self/utils/cms-client';

function Resume(props: {userData: UserData}) {
	const {
		personalDetails,
		achievementsData,
		projectsData,
		corporateExpData,
		educationData,
		techStackData,
	} = props.userData;
	const leftSection = [{
		key: 'Summary',
		Component: Summary,
		data: {
			title: 'SUMMARY',
			list: [personalDetails.summary],
		},
	}, {
		key: 'CorporateExp',
		Component: CorporateExp,
		data: corporateExpData,
	}, {
		key: 'Projects',
		Component: Projects,
		data: projectsData,
	}];
	const rightSection = [{
		key: 'Achievements',
		Component: Achievements,
		data: achievementsData,
	}, {
		key: 'TechStack',
		Component: TechStack,
		data: techStackData,
	}, {
		key: 'Education',
		Component: Education,
		data: educationData,
	}];
	return (
		<div className={styles.App}>
			<Head data={personalDetails} />
			<div className={styles['resume-body']}>
				<div className={styles.row}>
					<div className={styles['left-sections']}>
						{
							leftSection.map(({key, Component, data}) => <Sections
								key={key}
								Component={Component}
								data={data}
							/>,
							)
						}
					</div>
					<div className={styles['right-sections']}>
						{
							rightSection.map(({key, Component, data}) => key === 'Education' ? <>
								<br/>
								<br/>
								<Sections
									key={key}
									Component={Component}
									data={data}
								/>
							</> : <Sections
								key={key}
								Component={Component}
								data={data}
							/>,
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;

export const getStaticProps = async ({preview}: {preview: boolean}) => {
	const userData = (await cmsClient.get(`${cmsClient.apiList.resumeUsers}/1`, preview)) as UserData;
	return {
		props: {userData},
	};
};

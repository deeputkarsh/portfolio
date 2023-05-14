import styles from './education.module.scss';

type ListItem = {
	courseName: string;
	institute: string;
	duration: string;
};

type PropType = {
	list: ListItem[];
};

function Education({list}: PropType) {
	return <>{list.map(({courseName, institute, duration}: ListItem, index: number) => (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['edu-item']}`} key={courseName}>
			<div className={styles['course-name']}>{courseName}</div>
			<div className={styles.institute}>{institute}</div>
			<div className={styles.duration}>{duration}</div>
		</div>
	))}</>;
}

export default Education;

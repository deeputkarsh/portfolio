import styles from './projects.module.scss';
import DuraLoc from './DuraLoc';
import linkImg from '@self/images/link.png';
import Icon from './Icon';
import {type CmsStringList} from '@self/types';

type ListItem = {
	key: string;
	details: {
		title: string;
		duration: string;
		location: string;
		link: string;
	};
	role: string;
	technologies: string;
	descriptions: CmsStringList[];
};
type PropType = {
	list: ListItem[];
};

function Projects({list}: PropType) {
	return <>{list.map(({
		key, details, role, technologies, descriptions,
	}: ListItem, index: number) => (
		<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles.projects}`} key={key}>
			<div className={styles.details}>
				<div className={styles.title}>{details.title}</div>
				<DuraLoc duration={details.duration} location={details.location} />
				<div className={styles['app-link']}>
					<Icon className={styles.icon} src={linkImg} alt='link' />
					{' '}
					<a href={details.link}>{details.link}</a>
				</div>
			</div>
			<div className={styles.role}>{role}</div>
			<ul>
				<li>
					<strong>Technologies: </strong>
					{technologies}
				</li>
				{descriptions.map(({id, value}) => <li key={id}>{value}</li>)}
			</ul>
		</div>
	))}</>;
}

export default Projects;

import styles from './achievements.module.scss';
import Icon from './Icon';
import star from '@self/images/star.png';
import {type CmsStringList} from '@self/types';

type ListItem = {
	title: string;
	details: CmsStringList[];
};
type PropType = {
	list: ListItem[];
};

function Achievements({list}: PropType) {
	return <>
		{list.map(({title, details}: ListItem, index: number) => (
			<div className={`${styles['list-items']} ${index === 0 ? styles.first : ''} ${styles['achivement-row']}`} key={title}>
				<div className={styles['star-container']}>
					<Icon className={styles.icon} src={star} alt='Achievement' />
				</div>
				<div>
					<div className={styles.title}>{title}</div>
					{details.map(({id, value}) => <div className={styles.details} key={id}>{value}</div>)}
				</div>
			</div>
		))}
	</>;
}

export default Achievements;

import calendar from '@self/images/calendar.png';
import locationImg from '@self/images/location.png';
import Image from 'next/image';
import Icon from './Icon';

import styles from './dura-loc.module.scss';

type PropType = {
	duration: string;
	location: string;
};
export default function DuraLoc({duration, location}: PropType) {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Icon className={styles.icon} src={calendar} alt='Duration' />
				{duration}
			</div>
			<div className={styles.item}>
				<Icon className={styles.icon} src={locationImg} alt='Location' />
				{location}
			</div>
		</div>
	);
}

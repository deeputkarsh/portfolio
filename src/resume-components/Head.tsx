import styles from './head.module.scss';
import Icon from './Icon';

import call from '@self/images/call.png';
import mail from '@self/images/mail.png';
import linkBlue from '@self/images/link-blue.png';
import locationBlue from '@self/images/location-blue.png';
import {type PersonalDetails} from '@self/types';

type PropType = {
	data: PersonalDetails;
	options?: {
		containerClass: string;
	};
};

function Head({data, options}: PropType) {
	const {
		name, title,
		phone, email,
		website, location: place, otherLinks = [],
	} = data;

	const {
		containerClass = '',
	} = options ?? {};

	return (
		<header className={`${styles.header} ${containerClass}`}>
			<div className={styles.name}>{name}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles['contact-section']}>
				<div className={styles.phone}>
					<Icon className={styles.icon} src={call} alt='Call' />
					{' '}
					<a href={`tel:${phone}`}>{phone}</a>

				</div>
				<div className={styles.email}>
					<Icon className={styles.icon} src={mail} alt='E-mail' />
					{' '}
					<a href={`mailto:${email}`}>{email}</a>
				</div>
				<div className={styles.website}>
					<Icon className={styles.icon} src={linkBlue} alt='Link' />
					{' '}
					<a href={website}>{website}</a>
				</div>
				<div className={styles.location}>
					<Icon className={styles.icon} src={locationBlue} alt='Location' />
					{' ' + place}
				</div>
				{otherLinks.length ? otherLinks.map(({id, value}) => <div key={id} className={styles.website}>
					<Icon className={styles.icon} src={linkBlue} alt='Link' />
					{' '}
					<a href={value}>{value}</a>
				</div>) : ''}
			</div>
		</header>
	);
}

export default Head;

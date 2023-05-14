import styles from './section.module.scss';
import {type SectionData} from '@self/types';
import {type FunctionComponent} from 'react';

type PropType = {
	Component: FunctionComponent<{list: any[]}>;
	data: SectionData;
};
function Sections({Component, data}: PropType) {
	const {title, list} = data;
	return (
		<div>
			<div className={styles.header}>{title}</div>
			<Component list={list} />
		</div>
	);
}

export default Sections;

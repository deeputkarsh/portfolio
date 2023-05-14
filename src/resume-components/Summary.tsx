import style from './summary.module.scss';
type PropType = {
	list: string[];
};

function Summary({list}: PropType) {
	return <div className={style['summary-container']}>{list.join(' ')}</div>;
}

export default Summary;

import Image, {type StaticImageData} from 'next/image';

type PropType = {
	className: string;
	src: StaticImageData;
	alt: string;
};

function Icon({className, src, alt}: PropType) {
	return (
		<div className={className}>
			<Image fill src={src} alt={alt} />
		</div>
	);
}

export default Icon;

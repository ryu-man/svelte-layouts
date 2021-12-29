import { Properties } from 'csstype';

export type Action<T = any> = (
	node: HTMLElement,
	options?: T
) => { update: (options: T) => void; destroy: () => void } | void;

export type LayoutStyle = Properties & {
	wrap?: Properties['flexWrap'];
	grow?: Properties['flexGrow'];
	shrink?: Properties['flexShrink'];
	basis?: Properties['flexBasis'];
	colStart?: Properties['gridColumnStart'];
	colEnd?: Properties['gridColumnEnd'];
	rowStart?: Properties['gridRowStart'];
	rowEnd?: Properties['gridRowEnd'];
	col?: Properties['gridColumn'];
	autoCols?: Properties['gridAutoColumns'];
	autoRows?: Properties['gridAutoRows'];
	autoFlow?: Properties['gridAutoFlow'];
	colGap?: Properties['columnGap'];
	templateAreas?: Properties['gridTemplateAreas'];
	templateCols?: Properties['gridTemplateColumns'];
	templateRows?: Properties['gridTemplateRows'];
	row?: Properties['gridRow'];
	area?: Properties['gridArea'];
};

export type ClassName = string | Record<string, string | boolean | undefined>;

export type Fluid = 'width' | 'height' | 'both' | undefined;

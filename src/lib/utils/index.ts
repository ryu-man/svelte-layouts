import type { Properties } from 'csstype';
import type { ClassName, LayoutStyle } from '$lib/types';

export function css(node: HTMLElement, style: Properties = {}) {
	const stylesheet = node.style;
	Object.entries(style)
		.filter(Boolean)
		.filter((entry) => entry.every(Boolean))
		.forEach((elem) => {
			stylesheet[elem[0]] = elem[1];
		});
}

export function classNames(...args: ClassName[]) {
	return args
		.filter((o) => o)
		.map((o) => {
			if (typeof o === 'string') {
				return o.trim();
			}
			return Array.from(Object.entries(o))
				.map(([e1, e2]) => {
					if (e2) {
						if (typeof e2 === 'boolean') {
							return e1;
						}
						return `${e2?.trim()} ${e1}`;
					}
					return '';
				})
				.filter((o) => o)
				.join(' ')
				.trim();
		})
		.filter((o) => o)
		.join(' ')
		.trim();
}

export function renameProps({
	wrap: flexWrap,
	basis: flexBasis,
	grow: flexGrow,
	shrink: flexShrink,
	colStart: gridColumnStart,
	colEnd: gridColumnEnd,
	rowStart: gridRowStart,
	rowEnd: gridRowEnd,
	col: gridColumn,
	row: gridRow,
	area: gridArea,
	autoCols: gridAutoColumns,
	autoRows: gridAutoRows,
	autoFlow: gridAutoFlow,
	colGap: gridColumnGap,
	rowGap: gridRowGap,
	templateAreas: gridTemplateAreas,
	templateCols: gridTemplateColumns,
	templateRows: gridTemplateRows,
	...rest
}: LayoutStyle): Properties {
	return {
		...rest,
		flexWrap,
		flexBasis,
		flexGrow,
		flexShrink,
		gridColumnStart,
		gridColumnEnd,
		gridRowStart,
		gridRowEnd,
		gridColumn,
		gridRow,
		gridArea,
		gridAutoColumns,
		gridAutoRows,
		gridAutoFlow,
		gridColumnGap,
		gridRowGap,
		gridTemplateAreas,
		gridTemplateColumns,
		gridTemplateRows
	};
}

<script lang="ts">
	import { classNames } from './utils';
	import Layout from './Layout.svelte';
	import type { Action } from './types';
	import type { Properties } from 'csstype';

	let _class: string = '';
	export { _class as class };
	export let style: Properties = {};

	export let alignContent: Properties['alignContent'] = undefined;
	export let alignItems: Properties['alignItems'] = undefined;
	export let justifySelf: Properties['justifySelf'] = undefined;
	export let alignSelf: Properties['alignSelf'] = undefined;
	export let autoCols: Properties['gridAutoColumns'] = undefined;
	export let autoRows: Properties['gridAutoRows'] = undefined;
	export let autoFlow: Properties['gridAutoFlow'] = undefined;
	export let justifyContent: Properties['justifyContent'] = undefined;
	export let gap: Properties['gap'] = undefined;
	export let colGap: Properties['columnGap'] = gap;
	export let rowGap: Properties['rowGap'] = gap;
	export let templateAreas: Properties['gridTemplateAreas'] = undefined;
	export let templateCols: Properties['gridTemplateColumns'] = undefined;
	export let templateRows: Properties['gridTemplateRows'] = undefined;

	export let area: Properties['gridArea'] = undefined;
	export let col: Properties['gridColumn'] = undefined;
	export let colEnd: Properties['gridColumnEnd'] = undefined;
	export let colStart: Properties['gridColumnStart'] = undefined;
	export let row: Properties['gridRow'] = undefined;
	export let rowEnd: Properties['gridRowEnd'] = undefined;
	export let rowStart: Properties['gridRowStart'] = undefined;

	export let basis: Properties['flexBasis'] = undefined;
	export let grow: Properties['flexGrow'] = undefined;
	export let order: Properties['order'] = undefined;
	export let shrink: Properties['flexShrink'] = undefined;
	export let flex: Properties['flex'] = undefined;

	export let padding: Properties['padding'] = style['padding'];
	export let margin: Properties['margin'] = style['margin'];
	export let width: Properties['width'] | boolean = style['width'];
	export let height: Properties['height'] | boolean = style['height'];
	export let boxSizing: Properties['boxSizing'] = style['boxSizing'] ?? 'border-box';

	export let inline: boolean = false;
	export let reverse: boolean = false;

	export let use: Action = () => {};
</script>

<Layout
	class={classNames(_class, 'grid')}
	{inline}
	{reverse}
	width={width === true}
	height={height === true}
	{use}
	style={{
		...style,
		alignContent,
		alignItems,
		autoCols,
		autoRows,
		autoFlow,
		justifyContent,
		colGap: colGap || gap,
		rowGap: rowGap || gap,
		templateAreas,
		templateCols,
		templateRows,
		colStart,
		colEnd,
		rowStart,
		rowEnd,
		col,
		row,
		area,
		justifySelf,
		alignSelf,
		basis,
		grow,
		shrink,
		flex,
		order,
		padding,
		margin,
		width,
		height,
		boxSizing
	}}
>
	<slot />
</Layout>

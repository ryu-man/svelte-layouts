<script lang="ts">
	import { classNames } from './utils';
	import Layout from './Layout.svelte';
	import type { Action } from './types';
	import type { Properties } from 'csstype';

	let _class: string = '';
	export { _class as class };
	export let style: Properties = {};

	export let alignSelf: Properties['alignSelf'] = undefined;
	export let justifySelf: Properties['justifySelf'] = undefined;
	export let basis: Properties['flexBasis'] = undefined;
	export let grow: Properties['flexGrow'] = undefined;
	export let shrink: Properties['flexShrink'] = undefined;
	export let order: Properties['order'] = undefined;
	export let flex: Properties['flex'] = undefined;

	export let area: Properties['gridArea'] = undefined;
	export let col: Properties['gridColumn'] = undefined;
	export let colEnd: Properties['gridColumnEnd'] = undefined;
	export let colStart: Properties['gridColumnStart'] = undefined;
	export let row: Properties['gridRow'] = undefined;
	export let rowEnd: Properties['gridRowEnd'] = undefined;
	export let rowStart: Properties['gridRowStart'] = undefined;

	export let padding: Properties['padding'] = style['padding'];
	export let margin: Properties['margin'] = style['margin'];
	export let width: Properties['width'] | boolean = style['width'];
	export let height: Properties['height'] | boolean = style['height'];
	export let boxSizing: Properties['boxSizing'] = style['boxSizing'] ?? 'border-box';

	export let inline: boolean = false;

	export let use: Action = () => {};
</script>

<Layout
	class={classNames(_class, 'item')}
	{inline}
	width={width === true}
	height={height === true}
	{use}
	style={{
		...style,
		justifySelf,
		alignSelf,
		basis,
		grow,
		shrink,
		flex,
		order,
		colStart,
		colEnd,
		rowStart,
		rowEnd,
		col,
		row,
		area,
		padding,
		margin,
		width,
		height,
		boxSizing
	}}
>
	<slot />
</Layout>

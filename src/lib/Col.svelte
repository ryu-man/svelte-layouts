<script lang="ts">
	import type { Properties } from 'csstype';
	import Layout from './Layout.svelte';
	import { classNames } from './utils';
	import type { Action, Fluid } from './types';

	let _class: string = '';
	export { _class as class };
	export let style: Properties = {};

	export let justifyContent: Properties['justifyContent'] = undefined;
	export let alignContent: Properties['alignContent'] = undefined;
	export let alignItems: Properties['alignItems'] = undefined;
	export let justifySelf: Properties['justifySelf'] = undefined;
	export let alignSelf: Properties['alignSelf'] = undefined;
	export let gap: Properties['gap'] = undefined;
	export let wrap: Properties['flexWrap'] = undefined;

	export let basis: Properties['flexBasis'] = undefined;
	export let grow: Properties['flexGrow'] = undefined;
	export let order: Properties['order'] = undefined;
	export let shrink: Properties['flexShrink'] = undefined;
	export let flex: Properties['flex'] = undefined;

	export let area: Properties['gridArea'] = undefined;
	export let col: Properties['gridColumn'] = undefined;
	export let colEnd: Properties['gridColumnEnd'] = undefined;
	export let colStart: Properties['gridColumnEnd'] = undefined;
	export let row: Properties['gridRow'] = undefined;
	export let rowEnd: Properties['gridRowEnd'] = undefined;
	export let rowStart: Properties['gridRowStart'] = undefined;

	export let padding: Properties['padding'] = style['padding'];
	export let margin: Properties['margin'] = style['margin'];
	export let width: Properties['width'] = style['width'];
	export let height: Properties['height'] = style['height'];
	export let boxSizing: Properties['boxSizing'] = style['boxSizing'] ?? "border-box"

	export let fluid: Fluid = undefined;
	export let inline: boolean = false;
	export let reverse: boolean = false;

	export let use: Action = () => {};
</script>

<Layout
	class={classNames(_class, 'col')}
	{inline}
	{reverse}
	{fluid}
	{use}
	style={{
		...style,
		alignContent,
		alignItems,
		justifyContent,
		justifySelf,
		alignSelf,
		gap,
		wrap,
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

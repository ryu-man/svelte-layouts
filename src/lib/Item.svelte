<script lang="ts">
	import { classNames } from './utils';
	import Layout from './Layout.svelte';
	import type { Action, Fluid } from './types';
	import type { Properties } from 'csstype';

	let _class: string;
	export { _class as class };
	export let alignSelf: Properties['alignSelf'] = undefined;
	export let justifySelf: Properties['justifySelf'] = undefined;
	export let basis: Properties['flexBasis'] = undefined;
	export let grow: Properties['flexGrow'] = undefined;
	export let shrink: Properties['flexShrink'] = undefined;
	export let order: Properties['order'] = undefined;

	export let area: Properties['gridArea'] = undefined;
	export let col: Properties['gridColumn'] = undefined;
	export let colEnd: Properties['gridColumnEnd'] = undefined;
	export let colStart: Properties['gridColumnStart'] = undefined;
	export let row: Properties['gridRow'] = undefined;
	export let rowEnd: Properties['gridRowEnd'] = undefined;
	export let rowStart: Properties['gridRowStart'] = undefined;

	export let inline: boolean = false;
	export let fluid: Fluid = undefined;
	export let style: Properties = {};

	export let use: Action = ()=>{};
</script>

<Layout
	class={classNames(_class, 'item')}
	{inline}
	{fluid}
	{use}
	style={{
		...style,
		justifySelf,
		alignSelf,
		basis,
		grow,
		shrink,
		order,
		colStart,
		colEnd,
		rowStart,
		rowEnd,
		col,
		row,
		area
	}}
>
	<slot />
</Layout>

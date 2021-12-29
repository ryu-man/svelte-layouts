<script lang="ts">
	import type { Action, LayoutStyle } from './types';
	import { classNames, css, renameProps } from './utils';

	let _class:string = '';
	export { _class as class };
	export let inline: boolean = false;
	export let reverse: boolean = false;
	export let fluid: 'width' | 'height' | 'both' | undefined = undefined;
	export let style: LayoutStyle = {};

	export let use: Action = (node: HTMLElement) => {};
</script>

<div
	use:css={renameProps(style)}
	class={classNames(_class, { inline, reverse, fluid }, 'layout')}
	use:use
>
	<slot />
</div>

<style>
	.layout.row,
	.layout.col {
		display: flex;
	}
	.layout.row.inline {
		display: inline-flex;
	}
	.layout.col.inline {
		display: inline-flex;
	}
	.layout.row {
		flex-direction: row;
	}
	.layout.row.reverse {
		flex-direction: row-reverse !important;
	}
	.layout.col {
		flex-direction: column;
	}
	.layout.col.reverse {
		flex-direction: column-reverse !important;
	}

	.layout.grid {
		display: grid;
	}
	.layout.grid.inline {
		display: inline-grid;
	}

	.layout.fluid.width {
		width: 100%;
	}
	.layout.fluid.height {
		height: 100%;
	}
	.layout.fluid.both {
		width: 100%;
		height: 100%;
	}

	.layout.item {
		display: block;
	}
	.layout.items.inline {
		display: inline-block;
	}
</style>

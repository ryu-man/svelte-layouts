<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Row, Item } from '../lib';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Layouts/Item"
	component={Item}
	argTypes={{
		justifySelf: {
			options: [
				'-moz-initial',
				'inherit',
				'initial',
				'revert',
				'unset',
				'center',
				'end',
				'flex-end',
				'flex-start',
				'start',
				'auto',
				'baseline',
				'left',
				'normal',
				'right',
				'stretch'
			],
			defaultValue: 'initial',
			control: {
				type: 'select'
			}
		},
		alignSelf: {
			options: [
				'-moz-initial',
				'inherit',
				'initial',
				'revert',
				'unset',
				'center',
				'end',
				'flex-end',
				'flex-start',
				'start',
				'self-end',
				'self-start',
				'auto',
				'baseline',
				'normal',
				'stretch'
			],
			defaultValue: 'initial',
			control: {
				type: 'select'
			}
		},
		flex: {
			type: 'string',
			defaultValue: 'auto'
		},
		basis: {
			type: 'string',
			defaultValue: 'auto'
		},
		grow: {
			type: 'string',
			defaultValue: 'auto'
		},
		shrink: {
			type: 'string',
			defaultValue: 'auto'
		},
		order: {
			type: 'number',
			defaultValue: ''
		},

		padding: {
			type: 'string',
			defaultValue: '0px'
		},
		margin: {
			type: 'string',
			defaultValue: '0px'
		},
		width: {
			type: 'string',
			defaultValue: '100%'
		},
		height: {
			type: 'string',
			defaultValue: '96px'
		},
		boxSizing: {
			options: [
				'-moz-initial',
				'inherit',
				'initial',
				'revert',
				'unset',
				'border-box',
				'content-box'
			],
			defaultValue: 'border-box',
			control: {
				type: 'select'
			}
		},
		inline: {
			type: 'boolean',
			defaultValue: false
		}
	}}
/>

<Story id="row" name="Row" let:args>
	<Row style={{ backgroundColor: 'black' }} width height="128px" gap="4px" padding="4px">
		<div style="background-color: whitesmoke;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;flex-basis:32px;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;min-width:32px; min-height: 32px;" />
		<Item
			{...args}
			style={{backgroundColor: 'whitesmoke', minWidth: "32px", minHeight: "32px"}}
		/>
	</Row>
</Story>

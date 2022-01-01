<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Col } from '../lib';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Layouts/Col"
	component={Col}
	argTypes={{
		justifyContent: {
			options: [
				'-moz-initial',
				'inherit',
				'initial',
				'revert',
				'unset',
				'space-around',
				'space-between',
				'space-evenly',
				'stretch',
				'center',
				'end',
				'flex-end',
				'flex-start',
				'start',
				'left',
				'normal',
				'right'
			],
			defaultValue: 'initial',
			control: {
				type: 'select'
			}
		},
		alignContent: {
			options: [
				'-moz-initial',
				'inherit',
				'initial',
				'revert',
				'unset',
				'space-around',
				'space-between',
				'space-evenly',
				'stretch',
				'center',
				'end',
				'flex-end',
				'flex-start',
				'start',
				'baseline',
				'normal'
			],
			defaultValue: 'initial',
			control: {
				type: 'select'
			}
		},
		alignItems: {
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
				'baseline',
				'normal',
				'stretch'
			],
			defaultValue: 'initial',
			control: {
				type: 'select'
			}
		},
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
		wrap: {
			options: ['nowrap', 'wrap', 'wrap-reverse'],
			control: {
				type: 'select'
			}
		},
		gap: {
			type: 'string',
			defaultValue: '0px'
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
			defaultValue: '100vh'
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
		},
		reverse: {
			type: 'boolean',
			defaultValue: false
		}
	}}
/>

<Story id="col" name="Col" let:args>
	<Col {...args} style={{ backgroundColor: 'black' }}>
		<div style="background-color: whitesmoke;flex-basis:32px;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;flex-basis:32px;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;flex-basis:32px;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;flex-basis:32px;min-width:32px; min-height: 32px;" />
		<div style="background-color: whitesmoke;flex-basis:32px;min-width:32px; min-height: 32px;" />
	</Col>
</Story>


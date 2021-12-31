<script>
	import { Row, Col, Grid, Item } from 'svelte-layouts';
</script>

<Col width="100%" height="100%" gap="1em" justifyContent="center" alignItems="center">
	<h1>svelet-layouts</h1>
	<br>
	<Grid
		templateRows="auto"
		templateCols="1fr 1fr 1fr"
		colGap="4px"
		style={{ width: '256px', height: '256px', backgroundColor: '#000', padding: '8px' }}
	>
		<Col gap="4px">
			<div class="item" style="flex:1;" />
			<div class="item" style="flex:1;" />
			<div class="item" style="flex:1;" />
			<div class="item" style="flex:1;" />
			<div class="item" style="flex:1;" />
			<Item class="item" grow="1" style={{ backgroundColor: '#bbbbbb' }} />
		</Col>
		<Grid
			colStart="2"
			colEnd="4"
			templateCols="1fr 1fr"
			templateRows="1fr 1fr 1fr"
			colGap="4px"
			rowGap="4px"
		>
			<div class="item" />
			<div class="item" />
			<div class="item" />
			<div class="item" />

			<Row colStart="1" colEnd="3" gap="4px">
				<Item grow="1" style={{ backgroundColor: '#dddddd' }} />
				<Item flex="1" style={{ backgroundColor: '#dddddd' }} />
				<Item flex="1" style={{ backgroundColor: '#dddddd' }} />
				<Item flex="1" style={{ backgroundColor: '#dddddd' }} />
			</Row>
		</Grid>
	</Grid>
</Col>

<style global>
	html, body,
	#svelte {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	.flex {
		flex: 1;
	}
	.item {
		background-color: #bbbbbb;
	}
</style>

<script>
	import { Row, Col, Grid, Item } from 'svelte-layouts';
</script>

<h1>svelet-layouts</h1>

<Grid
	templateRows="auto"
	templateCols="1fr 1fr 1fr"
	style={{ width: '256px', height: '256px', backgroundColor: '#000' }}
>
	<Col style={{ backgroundColor: '#adb5bd' }}>
		<div class="item" style="flex:1;" />
		<div class="item" style="flex:1;" />
		<div class="item" style="flex:1;" />
		<div class="item" style="flex:1;" />
		<div class="item" style="flex:1;" />
		<Item class="item" grow="1" />
	</Col>
	<Grid colStart="2" colEnd="4" templateCols="1fr 1fr" templateRows="1fr 1fr 1fr">
		<div class="item" />
		<div class="item" />
		<div class="item" />
		<div class="item" />

		<Row colStart="1" colEnd="3" style={{ backgroundColor: '#adb5bd' }}>
			<Grid class="flex row-item" templateCols="1fr 1fr 1fr 1fr">
				<div class="item" style="flex:1;" />
				<div class="item" style="flex:1;" />
				<div class="item" style="flex:1;" />
				<div class="item" style="flex:1;" />
			</Grid>
		</Row>
	</Grid>
</Grid>

<style>
	:global(.item) {
		background-color: #adb5bd;
		border: 2px solid #dee2e6;
	}
	:global(.flex) {
		flex: 1;
	}
	:global(.col-item) {
		background-color: #ced4da;
	}
	:global(.row-item) {
		background-color: #ced4da;
	}
</style>

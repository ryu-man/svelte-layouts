const preprocess = require('svelte-preprocess');
const path = require('path')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		package: {
			emitTypes: true,
			exports: (filePath) => filePath === 'index.ts'
		},
		vite: {
			resolve: {
				alias: {
					"svelte-layouts": path.resolve('./src/lib')
				}
			}
		}
	},

};

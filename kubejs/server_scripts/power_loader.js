// todo: renable once cpl fabric is updated
/*
ServerEvents.recipes((event) => {
	event.remove({ output: 'create_power_loader:empty_brass_chunk_loader' });

	event.shapeless('create_power_loader:empty_andesite_chunk_loader', [
		'create_power_loader:empty_brass_chunk_loader',
	]);

	event.custom({
		type: 'create:mechanical_crafting',

		pattern: [
			'GGGGG',
			'G   G',
			'G R G',
			'CPPPC',
			'CCSCC',
		],

		key: {
			G: {
				tag: 'c:glass_blocks',
			},
			R: {
				item: 'create_power_loader:empty_andesite_chunk_loader',
			},
			S: {
				item: 'create:shaft',
			},
			C: {
				item: 'create:brass_casing',
			},
			P: {
				item: 'create:precision_mechanism',
			},
		},

		result: { item: 'create_power_loader:empty_brass_chunk_loader', count: 1 },
	});
});

 */

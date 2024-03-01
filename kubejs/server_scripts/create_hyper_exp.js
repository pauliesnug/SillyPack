ServerEvents.recipes((event) => {
	event.remove({ output: 'create_enchantment_industry:hyper_experience' });

	event.custom({
		type: 'create:mixing',

		ingredients: [
			{
				item: 'minecraft:glow_ink_sac',
			},
			{
				item: 'minecraft:lapis_lazuli',
			},
			{
				fluid: 'create_enchantment_industry:experience',
				amount: 8100,
			},
		],

		results: [
			{
				fluid: 'create_enchantment_industry:hyper_experience',
				amount: 4050,
			},
		],

		heatRequirement: 'superheated',
	});

	event.custom({
		type: 'create:haunting',

		ingredients: [
			{
				item: 'minecraft:wither_rose',
			},
		],

		results: [
			{
				item: 'minecraft:glow_ink_sac',
			},
		],
	});
});

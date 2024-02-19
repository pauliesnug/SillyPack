ServerEvents.recipes((event) => {
	event.shaped('kubejs:treecapitator', [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: '#minecraft:axes',
		B: 'minecraft:obsidian',
	}).modifyResult((inventory, itemstack) => {
		const item = inventory.find(Item.of('#minecraft:axes'));
		return itemstack.withNBT(item.nbt);
	});
});

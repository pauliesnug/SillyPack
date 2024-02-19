ServerEvents.recipes((event) => {
	event.shaped('kubejs:treecapitator', [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: 'minecraft:diamond_axe',
		B: 'minecraft:obsidian',
	}).modifyResult((inventory, itemstack) => {
		const item = inventory.find(Item.of('minecraft:diamond_axe'));
		return itemstack.withNBT(item.nbt);
	});
});

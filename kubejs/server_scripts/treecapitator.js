ServerEvents.recipes((event) => {
	event.shaped('kubejs:treecapitator', [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: Item.of('minecraft:netherite_axe'),
		B: 'minecraft:obsidian',
	}).modifyResult((inventory, itemstack) => {
		const item = inventory.find(Item.of('minecraft:netherite_axe'));
		return itemstack.withNBT(item.nbt);
	});
});

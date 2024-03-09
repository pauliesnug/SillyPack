ServerEvents.recipes((event) => {
	event.remove({ mod: 'grapplemod', not: [{ id: 'grapplemod:grapplebow' }] });
	event.shapeless(
		'grapplemod:longfallboots',
		Item.of('minecraft:chainmail_boots').enchant('minecraft:feather_falling', 5).weakNBT(),
	).modifyResult((inventory, itemstack) => {
		const nbt = inventory.find(Item.of('minecraft:chainmail_boots')).copy().nbt;
		const newEnchantments = nbt.Enchantments.filter(enchant => enchant.id !== 'minecraft:feather_falling');
		if (newEnchantments.length === 0)
			delete nbt.Enchantments;
		else
			nbt.Enchantments = newEnchantments;
		return itemstack.withNBT(nbt);
	});
});

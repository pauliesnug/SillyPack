StartupEvents.registry('block', event => {
	event.create("unstable_element").soundType("froglight").hardness(0).noCollision().defaultTranslucent().tag("minecraft:minable/hoe") // todo: .randomTick(ctx => {})
	event.create("toxic").soundType("ancient_debris").unbreakable().model("kubejs:block/toxic")
	event.create("pure_math").lightLevel(1).soundType("mud").hardness(0).tag("minecraft:minable/hoe")
})

StartupEvents.registry('mob_effect', event => {
	event.create("silly").beneficial().color(0xdb481c).effectTick((entity, lvl) => global.sillyEffect(entity, lvl))
})

global.sillyEffect = (entity, lvl) => {
	if (Math.random() < (lvl+1)/128)
		entity.playSound("entity.cat.ambient",1,1)
  }

StartupEvents.registry('item', event => {
	const addRune = (id,name) =>event.create(`${id}_rune`).texture(`kubejs:item/runes/${id}_rune`).displayName(`Rune o' ${name}`).maxStackSize(8).fireResistant().food(food=>food.alwaysEdible().hunger(2).saturation(1).eaten(ctx => {//there is a better way but kubejs registers items before foods so the better way does not work :/
		Utils.server.runCommandSilent(`effect give ${ctx.player.uuid} kubejs:silly 30 3`)
	}))

	addRune("3",":3")
	addRune("aaa","§kBoTtOmSpEaK")
	addRune("crime","Crime")
	addRune("cute","Cuteness")
	addRune("hug","Hugs")
	addRune("love","Love")
	addRune("lust","Lust")
	addRune("magic","Magic")
	addRune("math","Mathematics")
	addRune("meow","MEOW")
	addRune("power","INFINITE POWER")
	addRune("pretty","Prettiness")
	addRune("gay","Gay")
	addRune("silly","Sillies")
	addRune("smart","Smartness")
	addRune("sleepy","Sleepy")
})
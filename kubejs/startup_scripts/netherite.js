StartupEvents.registry('block', event => {
	event.create("unstable_element").noCollision().defaultTranslucent() // todo: .randomTick(ctx => {})
	event.create("toxic").unbreakable()
})
StartupEvents.registry('item', event => {
	event.create("incomplete_unstable_element")
})
ServerEvents.recipes((event) => {
	event.remove({ output: 'create:cart_assembler' });
	event.remove({ input: 'create:cart_assembler' });
});

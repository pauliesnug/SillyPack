PlayerEvents.chat((event) => {
	const words = event.message.toLowerCase().split(' ');
	let index = 0;
	let speed = 0.5;
	loopOverTime(() => {
		if (index === words.length)
			return -1;

		const current = words[index];
		const sound = getSoundIdFromKey(current);

		index++;
		if (sound === '') {
			speed = Math.min(0.5, speed * 1.13);
			return speed * 0.6 * SECOND;
		}

		Utils.server.runCommandSilent(`execute at @a run playsound ${sound} voice @a ~ ~ ~ 1 ${Math.random() / 2 + 0.75}`);
		speed *= 0.96;
		return (speed) * SECOND;
	});
});

// ctx is a function that returns a number
// after that number of ms, the ctx will be called again
// this will repeat until -1 is returned
function loopOverTime(ctx) {
	const time = ctx();
	if (time < 0)
		return;
	Utils.server.schedule(time, () => {
		loopOverTime(ctx);
	});
}

function getSoundIdFromKey(key) {
	switch (key) {
		case 'meow': return 'entity.cat.ambient';
		case 'mnyaa': return 'entity.cat.ambient';
		case 'nyaa': return 'entity.cat.ambient';
		case 'mrow': return 'entity.cat.purreow';
		default : return '';
	}
}

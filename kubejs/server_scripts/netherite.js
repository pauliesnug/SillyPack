ServerEvents.recipes(event => {
	createPress(event, "kubejs:love_rune", "kubejs:hug_rune")
	event.campfireCooking("kubejs:cute_rune", "kubejs:meow_rune")
	farmersCutting(event, "2x kubejs:gay_rune", "kubejs:lust_rune")
	event.custom({
		"type": "lychee:item_exploding",
		"post": [
			{
				"type": "drop_item",
				"item": "kubejs:crime_rune"
			},
			{
				"type": "drop_item",
				"contextual": [
					{
						"type": "chance",
						"chance": 0.333333
					}
				],
				"item": "kubejs:lust_rune"
			}
		],
		"item_in": [
			{
				"item": "kubejs:gay_rune"
			}
		]
	})
	newAgeCharging(event, "kubejs:math_rune", "kubejs:smart_rune", 5000)
	event.custom({
		"type": "create:splashing",
		"ingredients": [
			Ingredient.of("kubejs:cute_rune").toJson()
		],
		"results": [
			Item.of("4x kubejs:power_rune").toJson(),
			Item.of("4x kubejs:pretty_rune").toJson(),
			Item.of("2x kubejs:love_rune").toJson(),
			Item.of("kubejs:aaa_rune").toJson()
		]
	})
	event.custom({
		"type": "lychee:item_inside",
		"post": [
			{
				"type": "drop_item",
				"item": "kubejs:cute_rune"
			},
			{
				"type": "drop_item",
				"item": "kubejs:sleepy_rune",
				"count": 2
			},
			{
				"type": "drop_item",
				"contextual": [
					{
						"type": "chance",
						"chance": 0.5
					}
				],
				"item": "kubejs:cute_rune"
			}
		],
		"item_in": [
			{
				"item": "kubejs:silly_rune"
			}
		],
		"block_in": {
			"tag": "minecraft:beds"
		},
		"time": 15
	}
	)
	event.custom(
		{
			"type": "lychee:item_inside",
			"comment": "Cat can only handle one item at a time :3",
			"contextual": [
				{
					"type": "execute",
					"description": "There must be a Cat in the Seat",
					"command": "execute if entity @e[type=minecraft:cat,distance=..1] run return 1",
					"value": 1
				}
			],
			"post": [
				{
					"type": "drop_item",
					"item": "kubejs:silly_rune",
					"count": 3
				},
				{
					"type": "drop_item",
					"item": "kubejs:meow_rune",
					"count": 2
				},
				{
					"type": "execute",
					"command": "playsound minecraft:entity.cat.ambient block @a ~ ~ ~",
					"hide": true
				}
			],
			"max_repeats": 1,
			"item_in": [
				{
					"item": "kubejs:crime_rune"
				}
			],
			"block_in": {
				"tag": "create:seats"
			},
			"time": 3
		}
	)
	event.shaped("kubejs:gay_rune", [
		" m ",
		"msm",
		" m "
	], {
		m: "kubejs:magic_rune",
		s: "kubejs:silly_rune"
	})
	event.custom({
		"type": "farmersdelight:cooking",
		"cookingtime": 200,
		"ingredients": [
			Item.of("kubejs:cute_rune").toJson(),
			Item.of("kubejs:magic_rune").toJson(),
			Item.of("kubejs:cute_rune").toJson(),
			Item.of("kubejs:magic_rune").toJson(),
			Item.of("kubejs:cute_rune").toJson()
		],
		"recipe_book_tab": "misc",
		"result": Item.of("2x kubejs:hug_rune").toJson()
	}).id("kubejs:hug_rune_manual_only")
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Item.of("kubejs:sleepy_rune").toJson(),
			Item.of("kubejs:sleepy_rune").toJson(),
			Item.of("kubejs:sleepy_rune").toJson(),
			Item.of("kubejs:meow_rune").toJson(),
			Item.of("kubejs:pretty_rune").toJson(),
			Item.of("kubejs:meow_rune").toJson()
		],
		"recipe_book_tab": "misc",
		"results": [
			Item.of("kubejs:math_rune").toJson()
		]
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			Ingredient.of("kubejs:math_rune").toJson(),
			Ingredient.of("kubejs:math_rune").toJson(),
			Ingredient.of("kubejs:math_rune").toJson(),
			Ingredient.of("kubejs:math_rune").toJson(),
		],
		"results": [
			Item.of("kubejs:pure_math").toJson()
		]
	})
	event.custom({
		"type": "lychee:block_interacting",
		"ghost": true,
		"contextual": [
			{
				"type": "chance",
				"chance": 0.5
			}
		],
		"post": [
			{
				"type": "drop_item",
				"item": "kubejs:magic_rune",
				"count": 4
			},
			{
				"type": "drop_item",
				"item": "kubejs:pretty_rune",
				"count": 3
			},
			{
				"type": "drop_item",
				"item": "kubejs:smart_rune"
			},
			{
				"type": "place",
				"block": "minecraft:air"
			}
		],
		"item_in": {
			"item": "kubejs:3_rune"
		},
		"block_in": "kubejs:pure_math"
	}
	)//note: this ^^ is a ghost b/c u cant put contextuals on block_interacting so i implemented it with code lower down
	event.custom({
		"type": "lychee:block_interacting",
		"post": [
			{
				"type": "drop_item",
				"item": "kubejs:pure_math"
			},
			{
				"type": "place",
				"block": "kubejs:unstable_element"
			}
		],
		"item_in": {
			"item": "kubejs:crime_rune"
		},
		"block_in": "kubejs:pure_math"
	})
	event.custom({
		"type": "create:compacting",
		"ingredients": [
			Ingredient.of("kubejs:hug_rune").toJson(),
			Ingredient.of("kubejs:hug_rune").toJson(),
			Ingredient.of("kubejs:hug_rune").toJson(),
			Ingredient.of("kubejs:hug_rune").toJson(),
			Ingredient.of("kubejs:power_rune").toJson(),
		],
		"results": [
			Item.of("3x kubejs:cute_rune").toJson(),
			Item.of("4x kubejs:smart_rune").toJson(),
			Item.of("kubejs:lust_rune").toJson(),
			Item.of("kubejs:meow_rune").toJson()
		]
	})
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Ingredient.of("kubejs:cute_rune").toJson(),
			Ingredient.of("kubejs:pretty_rune").toJson(),
			Ingredient.of("kubejs:pretty_rune").toJson(),
			Ingredient.of("kubejs:pretty_rune").toJson(),
			Ingredient.of("kubejs:pretty_rune").toJson(),
			{
				"fluid": "minecraft:water",
				"nbt": {},
				"amount": 20250
			}
		],
		"results": [
			Item.of("2x kubejs:sleepy_rune").toJson(),
			Item.of("kubejs:aaa_rune").toJson(),
		]
	})
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Ingredient.of("kubejs:crime_rune").toJson(),
			Ingredient.of("kubejs:aaa_rune").toJson(),
			Ingredient.of("kubejs:aaa_rune").toJson(),
			Ingredient.of("kubejs:aaa_rune").toJson(),
		],
		"results": [
			Item.of("4x kubejs:silly_rune").toJson(),
			Item.of("kubejs:gay_rune").toJson(),
			Item.of("2x kubejs:lust_rune").toJson(),
			Item.of("kubejs:love_rune").toJson(),
			{
				"fluid": "minecraft:water",
				"nbt": {},
				"amount": 20250
			}
		]
	})
	event.custom({
		"type": "create:mixing",
		"ingredients": [
			Ingredient.of("kubejs:smart_rune").toJson(),
			Ingredient.of("kubejs:love_rune").toJson(),
			Ingredient.of("kubejs:smart_rune").toJson(),
		],
		"results": [
			Item.of("4x kubejs:magic_rune").toJson(),
			Item.of("kubejs:3_rune").toJson(),
			Item.of("kubejs:meow_rune").toJson(),
		]
	})
})

BlockEvents.rightClicked("kubejs:pure_math", event => {
	if (event.item.id != "kubejs:3_rune") return
	event.item.count--
	if (Math.random() < 0.5) {
		event.block.popItem(Item.of("4x kubejs:magic_rune"))
		event.block.popItem(Item.of("3x kubejs:pretty_rune"))
		event.block.popItem(Item.of("kubejs:smart_rune"))
		event.block.set("air")
	}
})

/**
	MIX			2smart+love=>4magic+uwu+meow
	MIX (ow) 		crime+3aaa=>4silly+gay+2lust+love
	MIX (iw)		cute+4pretty=>2sleepy+aaa
	COMPACT		4hug+power=>3cute+4smart+lust+meow
	COMPACTINTERACT	4math+2uwu=>4magic+3pretty+smart
	MIX			3sleepy+pretty+2meow=>math
	CRAFT			4magic+silly=>gay
	COOK			2magic+3cute=>2hug
	ITEMINSIDE		2silly=>3cute+4sleepy
	SLICE			lust=>2gay
	PRESS			3hug=>3love
	ITEMINSIDE		crime=>3silly+2meow
	ENERGIZE		smart=>math
	EXPLODE		3gay=>3crime+lust
	SMOKE			meow=>cute
WASHING		cute=>4power+4pretty+aaa+2love
 */
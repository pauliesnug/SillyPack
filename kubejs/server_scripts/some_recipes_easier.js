// priority: 10000
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
const createPress = (event, output, input) => event.custom({ type: 'create:pressing', ingredients: [Ingredient.of(input).toJson()], results: [Item.of(output).toJson()] });
const farmersCutting = (event, output, input) => event.custom({ type: 'farmersdelight:cutting', ingredients: [Ingredient.of(input).toJson()], result: [Item.of(output).toJson()], tool: { tag: 'c:tools/knives' } });
const newAgeCharging = (event, output, input, energy) => event.custom({ type: 'create_new_age:energising', energy_needed: energy, ingredients: [Ingredient.of(input).toJson()], results: [Item.of(output).toJson()] });
const createDeploy = (event, output, input, tool) => event.custom({ type: 'create:deploying', ingredients: [Ingredient.of(input).toJson(), Ingredient.of(tool).toJson()], results: [Item.of(output).toJson()] });

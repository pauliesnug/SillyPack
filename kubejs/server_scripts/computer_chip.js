ServerEvents.recipes(event => {
  event.shaped('kubejs:computer_chip', [
    'CCC', 
    'BAE',
    'DDD'  
  ], {
    A: 'create:precision_mechanism',
    B: 'minecraft:echo_shard',
    C: 'create:iron_sheet',
    D: 'create:golden_sheet',
    E: 'minecraft:quartz'
  }
)


event.remove({ id: 'computercraft:computer_command' })

event.remove({ id: 'computercraft:computer_normal' })
event.shaped('computercraft:computer_normal', [
  'ABA', 
  'ACA',
  'ADA'  
], {
  A: 'minecraft:stone',
  B: 'kubejs:computer_chip',
  C: 'create:electron_tube',
  D: 'minecraft:glass_pane'
}
)

event.remove({ id: 'computercraft:computer_advanced' })
event.shaped('computercraft:computer_advanced', [
  'ABA', 
  'ACA',
  'ADA'  
], {
  A: 'minecraft:gold_ingot',
  B: 'kubejs:computer_chip',
  C: 'create:electron_tube',
  D: 'minecraft:glass_pane'
}
)

event.remove({ id: 'computercraft:pocket_computer_normal' })
event.shapeless('computercraft:pocket_computer_normal', [
  'minecraft:writable_book',
  'computercraft:computer_normal'
])

event.remove({ id: 'computercraft:pocket_computer_advanced' })
event.shapeless('computercraft:pocket_computer_advanced', [
  'minecraft:writable_book',
  'computercraft:computer_advanced'
])

event.remove({ id: 'computercraft:disk_drive' })
event.shaped(
  Item.of('computercraft:disk_drive', 1),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:stone',
    B: 'minecraft:jukebox',
    C: 'minecraft:redstone'
  }
)

event.remove({ id: 'computercraft:printer' })
event.shaped(
  Item.of('computercraft:printer', 1),
  [
    'ACA',
    'ABA',
    'ADA'
  ],
  {
    A: 'minecraft:stone',
    B: 'create:mechanical_press',
    C: 'kubejs:computer_chip',
    D: 'minecraft:ink_sac'
  }
)

event.remove({ id: 'computercraft:wired_modem' })
event.shaped(
  Item.of('computercraft:wired_modem', 1),
  [
    'AAA',
    'ABA',
    'ACA'
  ],
  {
    A: 'minecraft:stone',
    B: 'minecraft:redstone',
    C: 'minecraft:comparator'
  }
)

event.remove({ id: 'computercraft:monitor_normal' })
event.shaped(
  Item.of('computercraft:monitor_normal', 1),
  [
    'AAA',
    'ACA',
    'ABA'
  ],
  {
    A: 'minecraft:stone',
    B: 'minecraft:glass_pane',
    C: 'create:electron_tube'
  }
)

event.remove({ id: 'computercraft:monitor_advanced' })
event.shaped(
  Item.of('computercraft:monitor_advanced', 1),
  [
    'AAA',
    'ACA',
    'ABA'
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'minecraft:glass_pane',
    C: 'create:electron_tube'
  }
)

event.remove({ id: 'computercraft:wireless_modem_normal' })
event.shaped(
  Item.of('computercraft:wireless_modem_normal', 1),
  [
    'ACA',
    'ABA',
    'ADA'
  ],
  {
    A: 'minecraft:stone',
    B: 'minecraft:ender_pearl',
    C: 'minecraft:sculk_sensor',
    D: 'kubejs:computer_chip'
  }
)

event.remove({ id: 'computercraft:wireless_modem_advanced' })
event.shaped(
  Item.of('computercraft:wireless_modem_advanced', 1),
  [
    'ACA',
    'ABA',
    'ADA'
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'minecraft:ender_eye',
    C: 'minecraft:calibrated_sculk_sensor',
    D: 'kubejs:computer_chip'
  }
)

})
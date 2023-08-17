const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    name: 'Goolar the Unruly',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss() {
    heroes.forEach(hero => {
        boss.health -= hero.damage
        if (boss.health <= 0) {
            boss.health = 0
            boss.damage = 0
            bossLevelUp()
        }
    })
    console.log(boss.health, "boss health")
    attackHeroes()
}


function attackHeroes() {
    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health <= 0)
            hero.health = 0

        console.log(hero.health)
    })
}

function bossLevelUp() {
    boss.level++
    boss.maxHealth += 10
    boss.health += boss.maxHealth
    boss.damage = 5
    let bossElem = document.getElementById('boss')
    bossElem.innerText = `${boss.name}  |  ${boss.health}  |  ${boss.damage}  |  ${boss.level}`
}

setInterval(attackBoss, 1500)
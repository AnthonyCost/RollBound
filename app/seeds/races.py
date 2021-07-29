from app.models import db, Race


def seed_races():
    dragonborn = Race(
        raceName="Dragonborn", raceDescription="Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail")
    dwarf = Race(
        raceName="Dwarf", raceDescription="Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal")
    elf = Race(
        raceName="Elf", raceDescription="Elves are a magical people of otherworldly grace, living in the world but not entirely part of it")
    gnome = Race(
        raceName="Gnome", raceDescription="A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body")
    halfElf = Race(
        raceName="Half-Elf", raceDescription="Half-elves combine what some say are the best qualities of their elf and human parents")
    halfling = Race(
        raceName="Halfing", raceDescription="The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense")
    halfOrc = Race(
        raceName="Half-Orc", raceDescription="Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see")
    human = Race(
        raceName="Human", raceDescription="Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds")
    tiefling = Race(
        raceName="Tiefling", raceDescription="To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling")
    aasimar = Race(
        raceName="Aasimar", raceDescription="Aasimar are placed in the world to serve as guardians of law and good. Their patrons expect them to strike at evil, lead by example, and further the cause of justice")
    bugbear = Race(
        raceName="Bugbear", raceDescription="Bugbears feature in the nightmare tales of many races — great, hairy beasts that creep through the shadows as quiet as cats")
    firbolg = Race(
        raceName="Firbolg", raceDescription="Firbolg tribes cloister in remote forest strongholds, preferring to spend their days in quiet harmony with the woods")
    goblin = Race(
        raceName="Goblin", raceDescription="Goblins occupy an uneasy place in a dangerous world, and they react by lashing out at any creatures they believe they can bully")
    hobgoblin = Race(
        raceName="Hobgoblin", raceDescription="War is the lifeblood of hobgoblins. Its glories are the dreams that inspire them. Its horrors don’t feature in their nightmares")
    kenku = Race(
        raceName="Kenku", raceDescription="Haunted by an ancient crime that robbed them of their wings, the kenku wander the world as vagabonds and burglars who live at the edge of human society")
    kobold = Race(
        raceName="Kobold", raceDescription="Kobolds are typically timid and shy away from conflict, but they are dangerous and vicious if cornered")
    lizardfolk = Race(
        raceName="Lizardfolk", raceDescription="Lizardfolk possess an alien and inscrutable mindset, their desires and thoughts driven by a different set of basic principles than those of warm-blooded creatures")
    orc = Race(
        raceName="Orc", raceDescription="Orcs live a life that has no place for weakness, and every warrior must be strong enough to take what is needed by force")
    tabaxi = Race(
        raceName="Tabaxi", raceDescription="Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world’s wonders")
    triton = Race(
        raceName="Triton", raceDescription="Long-established guardians of the deep ocean floor, in recent years the noble tritons have become increasingly active in the world above")
    yuanTiPureblood = Race(
        raceName="Yuan-ti Pureblood", raceDescription="The serpent creatures known as yuan-ti are all that remains of an ancient, decadent human empire")
    dhampir = Race(
        raceName="Dhampir", raceDescription="Poised between the worlds of the living and the dead, dhampirs retain their grip on life yet are endlessly tested by vicious hungers. Their ties to the undead grant dhampirs a taste of a vampire’s deathless prowess in the form of increased speed, darkvision, and a life-draining bite")
    hexblood = Race(
        raceName="Hexblood", raceDescription="Hexbloods are individuals infused with eldritch magic, fey energy, or mysterious witchcraft. Some who enter into bargains with hags gain their deepest wishes but eventually find themselves transformed")
    reborn = Race(
        raceName="Reborn", raceDescription="Death isn’t always the end. The reborn exemplify this, being individuals who have died yet, somehow, still live")

    db.session.add_all([
        dragonborn,
        dwarf,
        elf,
        gnome,
        halfElf,
        halfling,
        halfOrc,
        human,
        tiefling,
        aasimar,
        bugbear,
        firbolg,
        goblin,
        hobgoblin,
        kenku,
        kobold,
        lizardfolk,
        orc,
        tabaxi,
        triton,
        yuanTiPureblood,
        dhampir,
        hexblood,
        reborn
        ])

    db.session.commit()

def undo_races():
    db.session.execute('TRUNCATE races RESTART IDENTITY CASCADE;')
    db.session.commit()
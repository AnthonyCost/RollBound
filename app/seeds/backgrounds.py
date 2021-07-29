from app.models import db, Background


def seed_backgrounds():
    acolyte = Background(
        backgroundName="Acolyte", backgroundDescription="You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their  sacredworks will you you to Greatness")
    charlatan = Background(
        backgroundName="Charlatan", backgroundDescription="You're an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will bring you success down the road")
    criminal = Background(
        backgroundName="Criminal", backgroundDescription="You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future")
    entertainer = Background(
        backgroundName="Entertainer", backgroundDescription="You live to sway and subvert your audience, engaging common crowds and high society alike")
    folkHero = Background(
        backgroundName="Folk Hero", backgroundDescription="You're a champion of the common people, challenging tyrants and monsters to protect the helpless. Saving innocents in imminent danger will make your legend grow")
    guildArtisan = Background(
        backgroundName="Guild Artisan", backgroundDescription="Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration")
    noble = Background(
        backgroundName="Noble", backgroundDescription="You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status")
    hermit = Background(
        backgroundName="Hermit", backgroundDescription="You were once sworn to seclusion and continue to prefer solitude over the chaos of society")
    outlander = Background(
        backgroundName="Outlander", backgroundDescription="You grew up in the wilds, learning to survive far from the comforts of civilization. Surviving unusual hazards of the wild will enhance your prowess and understanding")
    sage = Background(
        backgroundName="Sage", backgroundDescription="You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose")
    sailor = Background(
        backgroundName="Sailor", backgroundDescription="You are familiar with the workings of ships and life at sea, having spent years weathering storms and battling creatures of the deep")
    soldier = Background(
        backgroundName="Soldier", backgroundDescription="You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess")
    urchin = Background(
        backgroundName="Urchin", backgroundDescription="After surviving a childhood on the streets, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead")

        

    db.session.add_all([
        acolyte,
        charlatan,
        criminal,
        entertainer,
        folkHero,
        guildArtisan,
        noble,
        hermit,
        outlander,
        sage,
        sailor,
        soldier,
        urchin
        ])

    db.session.commit()

def undo_backgrounds():
    db.session.execute('TRUNCATE backgrounds RESTART IDENTITY CASCADE;')
    db.session.commit()
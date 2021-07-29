from app.models import db, Campaign


def seed_campaigns():
    camp1 = Campaign(
        hostId=2, title="Rime of the Frostmaiden", coverImage="https://sm.ign.com/ign_za/gallery/d/dd-rime-of/dd-rime-of-the-frostmaiden-art-accessories_tznt.jpg", story="Beneath the unyielding night sky, you stand before a towering glacier and recite an ancient rhyme, causing a crack to form in the great wall of ice. Beyond this yawning fissure, the Caves of Hunger await. What fantastic secrets and treasures are entombed in the sunless heart of the glacier, and what will their discovery mean for the denizens of Icewind Dale?")
    camp2 = Campaign(
        hostId=2, title="Echoes of Malice", coverImage="https://cdna.artstation.com/p/assets/images/images/029/703/122/4k/artem-demura-iron-moon1.jpg?1598382461", story="Norterra, once a land plentiful of culture and grandeur, has decayed into a carcass of what it once was, thanks to a pestilence known as the Sade Scourge, an affliction infecting and killing thousands.  Though the spread initially gave the impression that could be overlooked, the nations underplayed the severity of this plague that ultimately came to some of the nations’ demise.   Within the chaos,  an attempted journey to find a cure for the Sade Scourge, it was known as The Raven’s Remedy. It is unknown what happened to the poor souls who ventured into the Mines of Hemwick. To this day, no cure or spell has been conjured to fight back the scourge. Three years have transpired since the failed attempt to find the Raven’s Remedy. During the span of those three years, the brisk nation of Osken, a heart of warmth in the cold plains of the north, has now become a barren icy wasteland. The sprawling swamps of the kind nation of  Ludrey now grow eerily quiet as the marshes become desolate. And now the nation of Asheau is on the brink of collapse, once considered paradise among many, the land now deserted due to the everlasting presence of hysteria has driven out those who were more aware. Though the general population has continuously dwindled, word still has it to this day that The Alchemist, creator of the Sade Scourge, appears seldomly over his soon to be victims. There have even been alleged sightings of him watching the carnage from a distance. Even within the endless pit of darkness that has enveloped Norterra, a dull but everlasting flame of hope burns. The ever fleeting dream to rid the horrors of the past is within your grasp. The echoes of lost aspirations and vengeance beckon you.")
    camp3 = Campaign(
        hostId=3, title="Descent into Avernus", coverImage="https://media.dnd.wizards.com/styles/story_banner/public/images/head-banner/518DX_Articles_Header-Image_DIA.jpg", story="Welcome to Baldur’s Gate, a city of ambition and corruption situated at the crossroads of the Sword Coast. You’ve just started your adventuring career, but already find yourself embroiled in a plot that sprawls from the shadows of Baldur’s Gate to the front lines of the planes-spanning Blood War! Do you have what it takes to turn infernal war machines and nefarious contracts against the archdevil Zariel and her diabolical hordes? And can you ever hope to find your way home safely when pitted against the infinite evils of the Nine Hells?")
    camp4 = Campaign(
        hostId=2, title="Grimoire", coverImage="https://cdnb.artstation.com/p/assets/images/images/028/212/863/large/anato-finnstark-anato-finnstark-web-petit-6.jpg?1593791834", story="Awakening above a freshly buried grave, you notice it has no headstone looming above it.The night sky is cloudy and the wind is somewhat strong as you begin to shiver. You are wearing your usual clothes, however they are dampened with mud.  As you look around, you see ravens on the brick walls of this cemetery all cawing and staring at you closely. Beyond in the distance you see the shabby town of Grimoire lit up by the moon. This comes as a shock to you, as you are aware that Grimoire is in the middle of nowhere. You really have to go out of your way to end up here. At some point you may have traveled through here, but you never ever stopped here to rest for the night due to the poor reputation of the shabby town. The mystery of Grimoire thickens ...")
    camp5 = Campaign(
        hostId=4, title="Curse of Strahd", coverImage="https://dnd.dragonmag.com/wp-content/uploads/sites/587/2020/08/311978_CN-BenOliver.jpg", story="Under raging storm clouds, the vampire Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft. Rumbling thunder pounds the castle spires. The wind’s howling increases as he turns his gaze down toward the village of Barovia. Far below, yet not beyond his keen eyesight, a party of adventurers has just entered his domain. Strahd’s face forms the barest hint of a smile as his dark plan unfolds. The master of Castle Ravenloft is having guests for dinner. And you are invited.")

    db.session.add_all([
        camp1,
        camp2,
        camp3,
        camp4,
        camp5,
        ])

    db.session.commit()

def undo_campaigns():
    db.session.execute('TRUNCATE campaigns RESTART IDENTITY CASCADE;')
    db.session.commit()
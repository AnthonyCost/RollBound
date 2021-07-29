from app.models import db, Character


def seed_characters():
    c1 = Character(
        name="Gandalf the Grey", userId=2, level=12, classId=12, raceId=14, alignmentId=4, backgroundId=5, portraitImage="https://cdn.costumewall.com/wp-content/uploads/2017/01/gandalf-the-grey.jpg", backstory="As a wizard and the bearer of a Ring of Power, Gandalf has great power, but works mostly by encouraging and persuading. He sets out as Gandalf the Grey, possessing great knowledge, and travelling continually, always focused on the mission to counter the Dark Lord Sauron. He is associated with fire, his ring being Narya, the Ring of Fire, and he both delights in fireworks to entertain the hobbits of the Shire, and in great need uses fire as a weapon.")
    c2 = Character(
        name="Frodo Baggins", userId=2, level=4, classId=3, raceId=6, alignmentId=2, backgroundId=8, portraitImage="https://static.wikia.nocookie.net/pjmidearthfilms/images/3/34/Frodo.jpg/revision/latest/top-crop/width/360/height/450?cb=20200725035857", backstory="Frodo comes of age as Bilbo leaves the Shire for good on his one hundred and eleventh birthday. Frodo inherits Bag End and Bilbo's ring. Gandalf, at this time, is not certain about the origin of the ring, so he warns Frodo to avoid using it and to keep it secret.[T 1] Frodo keeps the Ring hidden for the next 17 years, and the Ring gives him the same longevity it gave Bilbo. Gandalf returns to prove to him that it is the One Ring of the Dark Lord Sauron, who seeks to recover and use it to conquer Middle-earth.")
    c3 = Character(
        name="Pyke", userId=3, level=18, classId=9, raceId=24, alignmentId=7, backgroundId=11, portraitImage="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg", backstory="A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural gifts to bring a swift and gruesome end to those who make their fortune by exploiting others—and a city that prides itself on hunting monsters now finds a monster hunting them.")
    c4 = Character(
        name="Ornn", userId=4, level=13, classId=3, raceId=12, alignmentId=5, backgroundId=8, portraitImage="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg", backstory="Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion items of unsurpassed quality. When other deities—especially Volibear—walk the earth and meddle in mortal affairs, Ornn arises to put these impetuous beings back in their place, either with his trusty hammer or the fiery power of the mountains themselves.")
    c5 = Character(
        name="Renekton", userId=5, level=5, classId=1, raceId=17, alignmentId=9, backgroundId=7, portraitImage="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/shurima-2016/en_PL/c9086fcc7c767c891424c11682e31d1a7635f569/assets/img/champions/renekton/renekton-hero-mobile.jpg", backstory="Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.")
    c6 = Character(
        name="Swain", userId=6, level=18, classId=11, raceId=14, alignmentId=7, backgroundId=12, portraitImage="https://static.wikia.nocookie.net/leagueoflegends/images/f/f6/Swain_OriginalCentered.jpg/revision/latest/scale-to-width-down/1280?cb=20180414203619", backstory="Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new, demonic hand. Now, Swain commands from the front lines, marching against a coming darkness that only he can see—in glimpses gathered by shadowy ravens from the corpses all around him. In a swirl of sacrifice and secrets, the greatest secret of all is that the true enemy lies within.")
    c7 = Character(
        name="Taliyah", userId=7, level=8, classId=10, raceId=14, alignmentId=2, backgroundId=9, portraitImage="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg", backstory="Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe. Some have mistaken her compassion for weakness and paid the ultimate price—for beneath Taliyah's youthful demeanor is a will strong enough to move mountains, and a spirit fierce enough to make the earth itself tremble.")
    c8 = Character(
        name="Yone", userId=8, level=10, classId=5, raceId=14, alignmentId=4, backgroundId=10, portraitImage="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg", backstory="In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own sword. Now, cursed to wear its demonic mask upon his face, Yone tirelessly hunts all such creatures in order to understand what he has become.")
    c9 = Character(
        name="Astarion", userId=9, level=2, classId=9, raceId=22, alignmentId=6, backgroundId=2, portraitImage="https://i.redd.it/pikbafnr5ox51.jpg", backstory="Astarion prowled the night as a vampire spawn for centuries, serving a sadistic master until a mind flayer parasite freed him from his bonds. Now that he can walk in daylight the game is on, for only his old master stands in the way of him becoming the greatest vampire the world has ever known.")
    c10 = Character(
        name="Shadowheart", userId=10, level=2, classId=3, raceId=5, alignmentId=4, backgroundId=1, portraitImage="https://www.pcgamesn.com/wp-content/uploads/2020/10/baldurs-gate-3-companion-guide-shadowheart.jpg", backstory="A loyal cleric of Shar, Shadowheart is the sole survivor of a holy mission undertaken on the Mistress of the Night’s behest. She alone must deliver a relic of immense power to her coven in Baldur’s Gate, while threatened by a strange new magic that is burgeoning from within.")
    c11 = Character(
        name="Gale", userId=11, level=2, classId=12, raceId=14, alignmentId=2, backgroundId=10, portraitImage="https://static.wikia.nocookie.net/forgottenrealms/images/7/77/GaleEA.png/revision/latest/scale-to-width-down/250?cb=20201007001840", backstory="Gale is a wizard prodigy whose love for a goddess made him attempt a dread feat no mortal should. Blighted by the forbidden magic of ancient Netheril, Gale strives to undo the corruption that is overtaking him and win back his goddess’ favour before he becomes a destroyer of worlds.")
    c12 = Character(
        name="Wyll", userId=12, level=2, classId=11, raceId=14, alignmentId=1, backgroundId=7, portraitImage="https://static.wikia.nocookie.net/forgottenrealms/images/6/69/WyllEA.png/revision/latest/scale-to-width-down/250?cb=20201007201646", backstory="Noble by birth, Wyll made his name as the heroic 'Blade of Frontiers'. But to become a living legend, he struck a bargain with a devil, a bargain from which he longs to break free before it consumes his soul for good.")
    c13 = Character(
        name="Lae'zel", userId=13, level=2, classId=5, raceId=21, alignmentId=4, backgroundId=12, portraitImage="https://user-images.githubusercontent.com/35717793/127246709-79002b40-cb9e-4ddb-9ffa-fb90f9c25584.jpg", backstory="Lae’zel is a ferocious Githyanki warrior, mighty even by the standards of her mind flayer-hunting kind. Faced with transforming into the very monster she’s sworn to destroy, Lae’zel must prove herself worthy of rejoining her people – if they don’t execute her first.’")

    db.session.add_all([
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c8,
        c9,
        c10,
        c11,
        c12,
        c13
        ])

    db.session.commit()

def undo_characters():
    db.session.execute('TRUNCATE characters RESTART IDENTITY CASCADE;')
    db.session.commit()
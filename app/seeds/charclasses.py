from app.models import db, CharClass


def seed_charclasses():
    barbarian = CharClass(
        className='Barbarian', classDescription='A fierce warrior of primitive background who can enter a battle rage')
    bard = CharClass(
        className='Bard', classDescription='An inspiring magician whose power echoes the music of creation')
    cleric = CharClass(
        className='Cleric', classDescription='A priestly champion who wields divine magic in service of a higher power')
    druid = CharClass(
        className='Druid', classDescription='A priest of the Old Faith, wielding the powers of nature and adopting animal forms')
    fighter = CharClass(
        className='Fighter', classDescription='A master of martial combat, skilled with a variety of weapons and armor')
    monk = CharClass(
        className='Monk', classDescription='A master of the martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection')
    paladin = CharClass(
        className='Paladin', classDescription='A holy warrior bound to a sacred oath')
    ranger = CharClass(
        className='Ranger', classDescription='A warrior who combats threats on the edges of civilization')
    rogue = CharClass(
        className='Rogue', classDescription='A scoundrel who uses stealth and trickery to overcome obstacles and enemies')
    sorcerer = CharClass(
        className='Sorcerer', classDescription='A spellcaster who draws on inherent magic from a gift or bloodline')
    warlock = CharClass(
        className='Warlock', classDescription='A wielder of magic that is derived from a bargain with an extraplanar entity')
    wizard = CharClass(
        className='Wizard', classDescription='A scholarly magic-user capable of manipulating the structures of reality')

    db.session.add_all([
        barbarian,
        bard,
        cleric,
        druid,
        fighter,
        monk,
        paladin,
        ranger,
        rogue,
        sorcerer,
        warlock,
        wizard
        ])

    db.session.commit()

def undo_charclasses():
    db.session.execute('TRUNCATE classes RESTART IDENTITY CASCADE;')
    db.session.commit()
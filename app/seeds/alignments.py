from app.models import db, Alignment


def seed_alignments():
    lg = Alignment(
        alignmentName="Lawful good", alignmentDescription="Creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good")
    ng = Alignment(
        alignmentName="Neutral good", alignmentDescription="Folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good")
    cg = Alignment(
        alignmentName="Chaotic good", alignmentDescription="Creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good")
    ln = Alignment(
        alignmentName="Lawful neutral", alignmentDescription="Individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral")
    n = Alignment(
        alignmentName="Neutral", alignmentDescription="Is the alignment of those who prefer to steer clear of moral questions and don’t take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral")
    cn = Alignment(
        alignmentName="Chaotic neutral", alignmentDescription="Creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral")
    le = Alignment(
        alignmentName="Lawful evil", alignmentDescription="Creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil")
    ne = Alignment(
        alignmentName="Neutral evil", alignmentDescription="Is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil")
    ce = Alignment(
        alignmentName="Chaotic evil", alignmentDescription="Creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil")

        

    db.session.add_all([lg, ng, cg, ln, n, cn, le, ne, ce])

    db.session.commit()

def undo_alignments():
    db.session.execute('TRUNCATE alignments RESTART IDENTITY CASCADE;')
    db.session.commit()
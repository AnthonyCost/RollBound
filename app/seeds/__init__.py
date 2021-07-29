from flask.cli import AppGroup
from .users import seed_users, undo_users
from .charclasses import seed_charclasses, undo_charclasses
from .races import seed_races, undo_races
from .alignments import seed_alignments, undo_alignments
from .backgrounds import seed_backgrounds, undo_backgrounds
# from .characters import seed_characters, undo_characters
# from .campaigns import seed_campaigns, undo_campaigns

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_charclasses()
    seed_races()
    seed_alignments()
    seed_backgrounds()
    # seed_characters()
    # seed_campaigns()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_charclasses()
    undo_races()
    undo_alignments()
    undo_backgrounds()
    # undo_characters()
    # undo_campaigns()

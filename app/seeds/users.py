from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    user1 = User(
        username='Demo', email='demo@aa.io', password='password', img_url='https://img.icons8.com/color/452/dungeons-and-dragons.png')
    user2 = User(
        username='AnthonyCost', email="anthonycost99@gmail.com", password="OGpassword", img_url="https://user-images.githubusercontent.com/35717793/127236513-33020f40-6c71-479d-b96e-dd6bb46e97ee.jpg")
    user3 = User(
        username="GaryGygax", email="user1@mail.com", password="password1!", img_url="https://media.wired.com/photos/593381db58b0d64bb35d5c71/master/pass/ff_gygax_f.jpg")
    user4 = User(
        username="Bernard", email="user2@mail.com", password="password1!", img_url="https://i.insider.com/582b2cd6341d7ae3018b4931?width=1061&format=jpeg")
    user5 = User(
        username="Eileen", email="user3@mail.com", password="password1!", img_url="http://pm1.narvii.com/6399/8f4a7f43166ca7c38167138969574e27605089d7_00.jpg")
    user6 = User(
        username="MattMercer", email="user4@mail.com", password="password1!", img_url="https://cdnb.artstation.com/p/assets/images/images/035/891/485/large/daria-kalashnikova-daily-mercer4.jpg?1616168616")
    user7 = User(
        username="PeterParker", email="user5@mail.com", password="password1!", img_url="https://image.guardian.co.uk/sys-images/Film/Pix/gallery/2004/07/13/pparker3.jpg")
    user8 = User(
        username="MarishaRay", email="user6@mail.com", password="password1!", img_url="https://i.redd.it/qbq7tb92dae01.png")
    user9 = User(
        username="AshleyJohnson", email="user7@mail.com", password="password1!", img_url="https://static.wikia.nocookie.net/recess/images/b/b7/Ashley_Johnson_Pic.jpg/revision/latest?cb=20200315011443")
    user10 = User(
        username="MattColville", email="user8@mail.com", password="password1!", img_url="https://static.wikia.nocookie.net/mdcm/images/c/cc/Matthew_Colville.jpg/revision/latest?cb=20190416023549")
    user11 = User(
        username="GeraltOfRivia", email="user9@mail.com", password="password1!", img_url="https://cdn.mos.cms.futurecdn.net/Tar22uRMrAyqDTqhBxQJYS-1200-80.jpg")
    user12 = User(
        username="Solaire", email="user10@mail.com", password="password1!", img_url="https://i.etsystatic.com/15342928/r/il/85022f/2381702381/il_fullxfull.2381702381_g2u1.jpg")
    user13 = User(
        username="LauraBailey", email="user11@mail.com", password="password1!", img_url="https://metro.co.uk/wp-content/uploads/2020/08/104339574_287270942469562_4916372350143491838_n-f973.jpg?quality=90&strip=all&zoom=1&resize=480%2C391")
    user14 = User(
        username="TravisWillingham", email="user12@mail.com", password="password1!", img_url="https://resizing.flixster.com/qjjIjLBonqf8DO5-XO9LdYQyffM=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/490770/490770_v9_bb.jpg")
    user15 = User(
        username='SamRiegel', email='user13@mail.com', password='password1!', img_url='https://static.wikia.nocookie.net/disney/images/9/9c/Sam_Riegel.jpg/revision/latest?cb=20180831203535')
    user16 = User(
        username='LiamOBrien', email='user14@mail.com', password='password1!', img_url='https://static.wikia.nocookie.net/disney/images/9/95/Liam_O%27Brien.jpg/revision/latest?cb=20180812015101')

    db.session.add_all([
        user1,
        user2,
        user3,
        user4,
        user5,
        user6,
        user7,
        user8,
        user9,
        user10,
        user11,
        user12,
        user13,
        user14,
        user15,
        user16
        ])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

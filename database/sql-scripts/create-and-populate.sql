CREATE DATABASE IF NOT EXISTS mtp;

USE mtp;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS entries;             
DROP TABLE IF EXISTS users;                 

CREATE TABLE entries (
    entryID INTEGER NOT NULL AUTO_INCREMENT, 
    entryDate DATE NOT NULL, 
    descriptionShort VARCHAR(500), 
    descriptionLong VARCHAR(50000)
    PRIMARY KEY (entryID)
)   CHARSET=utf8;

CREATE TABLE users (
    userID INTEGER NOT NULL AUTO_INCREMENT, 
    login VARCHAR(50), 
    password VARCHAR(200), 
    email VARCHAR(50)
)   CHARSET=utf8;

INSERT INTO entries (entryDate, descriptionShort, descriptionLong)
VALUES  ('2021-06-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed vel eros tempus, rhoncus lacus sit amet, lobortis augue. Donec varius sapien rutrum vestibulum porttitor. Pellentesque interdum ligula nec metus dapibus, vulputate convallis sapien commodo. Donec luctus eros non iaculis pulvinar. Maecenas tortor dolor, luctus eget ipsum a, consectetur tincidunt orci. Sed velit est, efficitur in ex maximus, volutpat convallis diam. Duis ante ligula, feugiat sit amet ipsum in, interdum porttitor sem. Duis sed diam ex.'),
        ('2021-06-05', 'Donec iaculis metus vel cursus elementum.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed quis enim at augue aliquet venenatis id eget nulla. Nulla ligula erat, egestas et posuere nec, vulputate vel odio. Integer ac ex pretium, pharetra leo ut, volutpat ex. Duis eget enim commodo, laoreet mauris in, ultricies mi. Maecenas a malesuada enim. Aliquam accumsan commodo velit, vel vehicula purus viverra luctus. Fusce sed leo bibendum, tristique est a, volutpat nunc. Vestibulum id libero nisl.'),
        ('2021-05-20', 'Cras interdum diam dolor, at posuere lacus malesuada eget.', 'Quisque blandit risus nec orci varius feugiat. In scelerisque facilisis venenatis. Nam malesuada nulla at sem maximus, at posuere eros posuere. Phasellus at dolor in mi congue tristique. Donec pretium molestie nibh, id dapibus lorem interdum a. Sed molestie aliquam massa, vitae ullamcorper metus. Nam id lectus bibendum, interdum magna fermentum, condimentum nunc. Sed at lorem feugiat, laoreet enim porttitor, porttitor dolor. Pellentesque et commodo elit. Vivamus egestas lectus non sollicitudin viverra. Duis commodo velit ipsum, nec pretium lorem bibendum id. Morbi maximus gravida purus. Aliquam porttitor ac mauris eget efficitur.'),
        ('2021-05-11', 'Maecenas nec urna ipsum.', 'In hac habitasse platea dictumst. Nam ac libero eget mauris posuere finibus. Duis ante ligula, interdum eget posuere vitae, tincidunt ut erat. Maecenas at est sit amet purus sollicitudin molestie. In hac habitasse platea dictumst. Integer sagittis rutrum est id tempus.'),
        ('2021-05-10', 'In lectus justo, maximus nec lorem non, dictum porttitor quam.', 'AAAAAAAAAA'),
        ('2021-03-22', 'Sed placerat faucibus neque.', 'Pellentesque commodo posuere nisl sit amet volutpat. Ut luctus sit amet augue vitae convallis. In interdum diam in metus convallis tincidunt. Mauris enim eros, blandit in ex nec, venenatis auctor ipsum. Vestibulum dictum nisi sit amet sem euismod, consectetur lobortis mi auctor. Vestibulum sit amet maximus nisi. Donec varius nulla odio, mattis mollis lacus facilisis aliquam. Duis non pretium leo. Aliquam egestas dui at leo aliquam, in ultrices ipsum fermentum. Maecenas sollicitudin eu nunc nec tristique. In consequat lobortis lorem ut aliquam. Sed finibus ligula vitae lectus molestie, at interdum enim molestie.'),
        ('2021-02-28', 'Aliquam vulputate ornare sem vitae dignissim.', 'Nunc lobortis odio at erat pellentesque finibus. Proin feugiat egestas laoreet. Mauris porta, dui nec lobortis vehicula, justo risus rhoncus nulla, sed maximus mi nisl ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut euismod arcu, at porttitor nisi. Donec vestibulum, lectus at aliquet tempus, eros odio pretium libero, sed mollis sapien nibh non mi. Aliquam suscipit urna et justo euismod sollicitudin. Phasellus a placerat massa.'),
        ('2020-12-03', 'Aliquam a imperdiet justo, efficitur mollis libero.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt tellus id ex rhoncus fermentum. Sed porttitor mi a gravida maximus. Vestibulum pulvinar, purus eget ultrices dictum, orci turpis tempus erat, et condimentum sapien nisi nec diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae urna faucibus, tempor odio vel, tempor massa.'),
        ('2020-12-15', 'Nulla sit amet nisl tellus.', 'Phasellus est nisi, malesuada id quam et, facilisis tempor felis. Donec eu dictum mauris. Nulla vel nisl mattis, laoreet nisl ut, porta diam. Sed posuere elit sapien, ac luctus magna ultricies sit amet. Pellentesque semper, nibh sit amet cursus rhoncus, lacus mi feugiat metus, consequat auctor massa elit varius risus. Vivamus nisi nisi, consequat eget ultricies tristique, eleifend et arcu.'),
        ('2020-11-23', 'Duis quis turpis sit amet lorem pulvinar fermentum in id massa.', 'Morbi finibus lacinia diam nec feugiat. Sed sodales justo eu odio porttitor, nec placerat justo tincidunt. Sed et enim nisi. In dictum fringilla tellus, vel mattis odio auctor et. Sed pretium tellus sed risus facilisis hendrerit. Donec faucibus lorem massa, vel interdum velit faucibus ac. In id dictum enim. Sed vitae turpis ac urna accumsan lacinia. Aenean sit amet finibus odio. Etiam fermentum porta vehicula.');

INSERT INTO users (login, password, email)
VALUES  ('aa', 'aa', 'aa@mtp.com'),
        ('js', 'js', 'js@mtp.com'),
        ('ms', 'ms', 'ms@mtp.com'),
        ('km', 'km', 'km@mtp.com'),
        ('ls', 'ls', 'ls@mtp.com'),
        ('sr', 'sr', 'sr@mtp.com');

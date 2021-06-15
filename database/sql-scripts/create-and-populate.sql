CREATE DATABASE IF NOT EXISTS mtp;

USE mtp;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS entries;             
DROP TABLE IF EXISTS users;                 

CREATE TABLE entries (
    entryID INTEGER NOT NULL AUTO_INCREMENT, 
    entryDate DATE NOT NULL, 
    descriptionShort VARCHAR(500), 
    descriptionLong VARCHAR(10000),
    PRIMARY KEY (entryID)
)   CHARSET=utf8;

CREATE TABLE users (
    userID INTEGER NOT NULL AUTO_INCREMENT, 
    login VARCHAR(50), 
    password VARCHAR(200), 
    email VARCHAR(50),
    PRIMARY KEY (userID)
)   CHARSET=utf8;

INSERT INTO entries (entryDate, descriptionShort, descriptionLong)
VALUES  ('2021-06-10', 'Ból w okolicach lewej piersi', 'Pacjentka odczuwa ból w okolicach lewej piersi. Ma również wadę postawy. Te objawy mogą sugerować nerwoból - wtedy ból może być związany z głębokim wdechem, kaszlem, kichaniem. Charakterystyczna jest wówczas bolesność podczas uciskania, a także promieniowanie do barku, szyi. Wyżej występujące dolegliwości leczy się lekami przeciwzapalnymi, przeciwbólowymi (np. Ibuprofen 2x200mg, żel przeciwbólowy miejscowo np. Naproxen żel). Opisywane bóle mogą mieć również podłoże nerwowe (związane ze stresem, emocjami). Mogą również wynikać z dolegliwości bólowych kręgosłupa w odcinku piersiowym, wady postawy czy objawów refluksu żołądkowo-przełykowego (szczególnie, że skarży się Pani na refluks). Pacjentka nie ma wywiadu chorób układu sercowo-naczyniowego wśród członków rodziny, dodatkowo jest młodą osobą i w takim wieku choroba niedokrwienna serca jest rzadką chorobą. Przepisałam konsultację z kardiologiem w celu wykonania badań dodatkowych (echo serca, próba wysiłkowa, RTG klatki piersiowej, EKG i/lub Holter EKG, itp), które pozwolą na jednoznaczne wykluczenie kardiologicznych przyczyn dolegliwości oraz wykonanie usg piersi.'),
        ('2021-06-05', 'Nieustający suchy kaszel', 'Pacjent od ponad 6 miesięcy, ma problem z nieustającym suchym kaszlem. Próbował już różnych syropów i tabletek i żadne mu nie pomagały. Nie ma bólu płuc, nie towarzyszą mu przy tym żadne inne objawy. Ciągle pokasłuje. Kaszel nasila się przed snem i rano, po południu już nie, aż tak mocno. Nie posiada żadnych chorób. Jedynie niestwierdzoną alergią. Diagnoza: Jeśli kaszel trwa już tak długo, to pacjent wymaga diagnostyki. Według mnie w pierwszej kolejności należy wykonać rtg płuc oraz badania laboratoryjne: morfologię krwi, pozom OB oraz CRP. Poza tym, warto rozważyć wykonanie przeciwciał w kierunku zakażenia bakteriami atypowymi, czyli mykoplazmą, krztuścem i chlamydią . Jeśli te wyniki nie dałyby odpowiedzi na pytanie skąd u pacjenta przewlekający się kaszel, wtedy należy odbyć konsultację laryngologiczną (takie objawy może dawać między innymi stan zapalny zatok) oraz alergologiczną celem wykonania testów, aby stwierdzić, na co pacjent jest uczulony. Być może warto byłoby też odbyć konsultację gastrologiczną, bowiem przewlekły kaszel może też być objawem refluksu.'),
        ('2021-05-20', 'Cras interdum diam dolor, at posuere lacus malesuada eget.', 'Quisque blandit risus nec orci varius feugiat. In scelerisque facilisis venenatis. Nam malesuada nulla at sem maximus, at posuere eros posuere. Phasellus at dolor in mi congue tristique. Donec pretium molestie nibh, id dapibus lorem interdum a. Sed molestie aliquam massa, vitae ullamcorper metus. Nam id lectus bibendum, interdum magna fermentum, condimentum nunc. Sed at lorem feugiat, laoreet enim porttitor, porttitor dolor. Pellentesque et commodo elit. Vivamus egestas lectus non sollicitudin viverra. Duis commodo velit ipsum, nec pretium lorem bibendum id. Morbi maximus gravida purus. Aliquam porttitor ac mauris eget efficitur.'),
        ('2021-05-11', 'Maecenas nec urna ipsum.', 'In hac habitasse platea dictumst. Nam ac libero eget mauris posuere finibus. Duis ante ligula, interdum eget posuere vitae, tincidunt ut erat. Maecenas at est sit amet purus sollicitudin molestie. In hac habitasse platea dictumst. Integer sagittis rutrum est id tempus.'),
        ('2021-05-10', 'Suspendisse vestibulum eros vel tristique ullamcorper.', 'Sed porttitor leo quis scelerisque fermentum. Cras porta massa in ex tincidunt, eget convallis elit iaculis. Curabitur augue purus, consequat vitae magna eget, interdum semper metus. Maecenas ac purus at velit lobortis accumsan vel nec orci. Duis dapibus neque eu pharetra condimentum. Vestibulum id tortor vitae nunc rhoncus rutrum eleifend ac erat. Cras sit amet lacinia dolor. Nulla gravida est ut laoreet ullamcorper. Nulla quis interdum metus. Nam odio purus, fringilla in sem sed, auctor tristique ipsum. Cras sodales vitae ante vel mollis. Proin sollicitudin, lorem nec vulputate porttitor, augue ex accumsan mauris, vel ultricies ante est sed velit. Suspendisse ullamcorper feugiat tortor, sit amet tempor leo molestie eu. Vivamus quis elit gravida, rutrum ante sed, vestibulum nunc.'),
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

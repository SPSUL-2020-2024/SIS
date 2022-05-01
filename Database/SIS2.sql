-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Počítač: db2:3306
-- Vytvořeno: Pon 04. dub 2022, 12:39
-- Verze serveru: 8.0.28
-- Verze PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `SIS2`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `center`
--

CREATE TABLE `center` (
  `centerID` int NOT NULL,
  `name` varchar(45) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `center`
--

INSERT INTO `center` (`centerID`, `name`) VALUES
(1, 'Stříbrníky'),
(2, 'Resslova'),
(3, 'Resslova + Stříbrníky ');

-- --------------------------------------------------------

--
-- Struktura tabulky `issues`
--

CREATE TABLE `issues` (
  `issuesID` int NOT NULL,
  `description` longtext COLLATE utf8_czech_ci,
  `roomID` int DEFAULT NULL,
  `userID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `posts`
--

CREATE TABLE `posts` (
  `postID` int NOT NULL,
  `title` varchar(45) COLLATE utf8_czech_ci DEFAULT NULL,
  `text` longtext COLLATE utf8_czech_ci,
  `date` datetime DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `Priority` int DEFAULT NULL,
  `centerID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `posts`
--

INSERT INTO `posts` (`postID`, `title`, `text`, CreateDate, `userID`, `Priority`, `centerID`) VALUES
(1, 'Přehled', 'Jako přispěvatelé k obsahu na webu Docs budete používat více nástrojů a procesů. Budete pracovat souběžně s ostatními přispěvateli na stejném projektu, možná na úplně stejném obsahu, dokonce i ve stejnou dobu. To vše umožňuje software Gitu a GitHubu.\r\n\r\nGit je open-sourcový systém správy verzí. Usnadňuje tento typ spolupráce na projektech prostřednictvím distribuovaného systému správy verzí souborů umístěných v úložištích. Git v podstatě umožňuje u daného úložiště integrovat proudy práce provedené několika přispěvateli v průběhu času.\r\n\r\nGitHub je webová hostující služba pro úložiště Git, jako jsou například ty, které se používají k ukládání obsahu docs.Microsoft.com . U každého projektu GitHub hostuje hlavní úložiště, ze kterého můžou přispěvatelé vytvářet kopie pro vlastní potřebu.', '2022-03-01 12:30:29', 1, 1, 3);

-- --------------------------------------------------------

--
-- Struktura tabulky `priority`
--

CREATE TABLE `priority` (
  `id` int NOT NULL,
  `priority` varchar(63) COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `priority`
--

INSERT INTO `priority` (`id`, `priority`) VALUES
(1, 'low'),
(2, 'medium'),
(3, 'high');

-- --------------------------------------------------------

--
-- Struktura tabulky `role`
--

CREATE TABLE `role` (
  `roleID` int NOT NULL,
  `role` varchar(45) COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `role`
--

INSERT INTO `role` (`roleID`, `role`) VALUES
(1, 'Učitel'),
(2, 'Vedení'),
(3, 'Admin');

-- --------------------------------------------------------

--
-- Struktura tabulky `room`
--

CREATE TABLE `room` (
  `roomID` int NOT NULL,
  `issuesID` int DEFAULT NULL,
  `number` int DEFAULT NULL,
  `centerID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `title`
--

CREATE TABLE `title` (
  `titleID` int NOT NULL,
  `name` varchar(45) COLLATE utf8_czech_ci DEFAULT NULL,
  `position` varchar(63) COLLATE utf8_czech_ci NOT NULL,
  `priority` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `title`
--

INSERT INTO `title` (`titleID`, `name`, `position`, `priority`) VALUES
(1, 'Bc.', 'before', 1),
(2, 'Mgr.', 'before', 2),
(3, 'Ing.', 'before', 2),
(4, 'PaedDr.', 'before', 3),
(5, 'Ph.D.', 'before', 4),
(6, 'MBA', 'after', 1);

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `userID` int NOT NULL,
  `name` varchar(45) COLLATE utf8_czech_ci DEFAULT NULL,
  `lname` varchar(45) COLLATE utf8_czech_ci DEFAULT NULL,
  `phone` varchar(63) COLLATE utf8_czech_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8_czech_ci DEFAULT NULL,
  `roleID` int DEFAULT NULL,
  `centerID` int DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
  `salt` varchar(255) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`userID`, `name`, `lname`, `phone`, `email`, `roleID`, `centerID`, `password`, `salt`) VALUES
(1, 'Admin', 'Admin', '111 111 111', 'admin@admin.admin', 3, 3, 'Admin', ''),
(2, 'Jaroslav', 'Mareš', '475 240 051', 'jaroslavmares@spsul.cz', 2, 3, 'JaroslavMares475', ''),
(3, 'Pavel', 'Novák', '475 240 052', 'pavelnovak@spsul.cz', 2, 3, 'PavelNovak475', ''),
(4, 'Hana', 'Hejduková', '475 240 070, 478 572 271', 'hanahejdukova@spsul.cz', 2, 3, 'HanaHejdukova475', ''),
(5, 'Martina', 'Havlová', '475 240 053', 'martinahavlova2@spsul.cz', 2, 3, 'MartinaHavlova475', ''),
(6, 'Martin', 'Tůma', '478 572 255', 'martintuma@spsul.cz', 2, 3, 'MartinTuma478', ''),
(7, 'Martina', 'Šidlíková', '478 572 256', 'martinasidlikova@spsul.cz', 2, 3, 'MartinaSidlikova478', ''),
(8, 'Jaroslav', 'Masopust', '478 572 219', 'jaroslavmasopust@spsul.cz', 2, 3, 'JaroslavMasopust478', ''),
(9, 'Miroslav', 'Baran', ' 475 240 078', 'miroslavbaran@spsul.cz', 1, 2, 'MiroslavBaran475', ''),
(10, 'Kateřina', 'Beňová', '475 240 059', 'katerinabenova@spsul.cz', 1, 2, 'KaterinaBenova475', ''),
(11, 'Jana', 'Beránková', ' 475 240 068', 'janaberankova@spsul.cz', 1, 2, 'JanaBerankova475', ''),
(12, 'Hana', 'Čmugrová', '475 240 059', 'hanacmugrova@spsul.cz', 1, 2, 'HanaCmugrova475', ''),
(13, 'Michaela', 'Ďurčová', '475 240 077', 'michaeladurcova@spsul.cz', 1, 2, 'MichaelaDurcova475', ''),
(14, 'Jiří', 'Hladík', '475 240 070', 'jirihladik@spsul.cz', 1, 2, 'JiriHladik475', ''),
(15, 'Norbert', 'Hnátek', '475 240 076', 'norberthnatek@spsul.cz', 1, 2, 'NorbertHnatek475', ''),
(16, 'Zuzana', 'Holinková', '-', 'zuzanaholinkova@spsul.cz', 1, 2, 'ZuzanaHolinkova475', ''),
(17, 'Věra', 'Horáková', ' 475 240 067', 'verahorakova@spsul.cz', 1, 2, 'VeraHorakova475', ''),
(18, 'Josef', 'Hutar', '475 240 079', 'josefhutar@spsul.cz', 1, 2, 'JosefHutar475', ''),
(19, 'Petr', 'Janovský', '-', '-', 1, 2, 'PetrJanovsky', ''),
(20, 'Petra', 'Jelínková', '475 240 067', 'petrajelinkova@spsul.cz', 1, 2, ' PetraJelinkova475', ''),
(21, 'Eva', 'Kavinová', '475 240 064', 'evakavinova@spsul.cz', 1, 2, 'EvaKavinova475', ''),
(22, 'Pavel', 'Kňaze', '475 240 066', 'pavelknaze@spsul.cz', 1, 2, 'PavelKnaze475', ''),
(23, 'Pavel', 'Kobrle', '475 240 063', 'pavelkobrle@spsul.cz', 1, 2, 'PavelKobrle475', ''),
(24, 'Josef', 'Kormaník', ' 475 240 066', 'josefkormanik@spsul.cz', 1, 2, 'JosefKormanik475', ''),
(25, 'Olga', 'Koubová', ' 475 240 067', 'olgakoubova@spsul.cz', 1, 2, 'OlgaKoubova475', ''),
(26, 'Pavel', 'Kuba', '-', 'pavelkuba@spsul.cz', 1, 2, 'PavelKuba', ''),
(27, 'Tomáš', 'Kupec', '-', 'tomaskupec@spsul.cz', 1, 2, ' TomasKupec', ''),
(28, 'Martin', 'Kyncl', '-', 'martinkyncl@spsul.cz', 1, 2, 'MartinKyncl', ''),
(29, 'Martin', 'Lev', '475 240 062', 'martinlev@spsul.cz', 1, 2, 'MartinLev475', ''),
(30, 'Milan', 'Schreyer', '475 240 068', 'milanschreyer@spsul.cz', 1, 2, ' MilanSchreyer475', ''),
(31, 'Miroslav', 'Sláma', '-', 'Miroslav Sláma', 1, 2, 'MiroslavSlama', ''),
(32, 'Petr', 'Suchánek', '-', 'petrsuchanek@spsul.cz', 1, 2, 'PetrSuchanek', ''),
(33, 'František', 'Svoboda', '475 240 068', 'frantiseksvoboda@spsul.cz', 1, 2, 'FrantisekSvoboda475', ''),
(34, 'Eva', 'Svobodová', '475 240 063', 'evasvobodova@spsul.cz', 1, 2, 'EvaSvobodova475', ''),
(35, 'Pavel', 'Šíma', ' 478 572 274', 'pavelsima@spsul.cz', 1, 2, 'PavelSima478', ''),
(36, 'Václav', 'Šonka', '475 240 062', 'vaclavsonka@spsul.cz', 1, 2, 'VaclavSonka475', ''),
(37, 'Jana', 'Tauchmanová', '475 240 059', 'janatauchmanova@spsul.cz', 1, 2, 'JanaTauchmanova475', ''),
(38, 'Vlastislav', 'Tauterman', '475 240 079', 'vlastislavtauterman@spsul.cz', 1, 2, 'VlastislavTauterman475', ''),
(39, 'Jan', 'Toman', '478 572 207', 'jantoman@spsul.cz', 1, 2, 'JanToman478', ''),
(40, 'Václava', 'Toropovová', '475 240 059', 'vaclavatoropovova@spsul.cz', 1, 2, 'Václava Toropovová', ''),
(41, 'Eva', 'Tošovská', '475 240 060', 'evatosovska@spsul.cz', 1, 2, 'EvaTosovska475', ''),
(42, 'Blanka', 'Urbánková', '475 240 069', 'blankaurbankova@spsul.cz', 1, 2, 'BlankaUrbankova475', ''),
(43, 'Jan', 'Vácha', '475 240 062', 'janvacha@spsul.cz', 1, 2, 'JanVacha475', ''),
(44, 'Martin', 'Veselý', '475 240 071', 'martinvesely@spsul.cz', 1, 2, 'MartinVesely475', ''),
(45, 'Pavel', 'Votrubec', '475 240 061', 'pavelvotrubec@spsul.cz', 1, 2, 'PavelVotrubec475', ''),
(46, 'Václav', 'Votrubec', '475 240 063', 'vaclavvotrubec@spsul.cz', 1, 2, ' VaclavVotrubec475', ''),
(47, 'Aleš', 'Zíka', '475 240 075', 'aleszika@spsul.cz', 1, 2, 'AlesZika475', ''),
(48, 'Michal', 'Zöld', '475 240 068', 'michalzold@spsul.cz', 1, 2, 'michalzold475', ''),
(49, 'Kamil', 'Balín', '478 572 269', 'kamilbalin@spsul.cz', 1, 1, ' KamilBalin478', ''),
(50, 'Michal', 'Beneš', '478 572 209', 'michalbenes@spsul.cz', 1, 1, ' MichalBenes478', ''),
(51, 'Kateřina', 'Benešová', '478 572 229', 'katerinabenesova@spsul.cz', 1, 1, 'KaterinaBenesova478', ''),
(52, 'Monika', 'Brychtová', '478 572 206', 'monikabrychtova@spsul.cz', 1, 1, 'MonikaBrychtova478', ''),
(53, 'Vojtěch', 'Cigánek', '478 572 267', 'vojtechciganek@spsul.cz', 1, 1, ' VojtechCiganek478', ''),
(54, 'Vojtěch', 'Dostál', '478 572 208', 'vojtechdostal@spsul.cz', 1, 1, ' VojtechDostal478', ''),
(55, 'Miroslav', 'Douda', '478 572 202', 'miroslavdouda@spsul.cz', 1, 1, 'MiroslavDouda478', ''),
(56, 'Karolína', 'Doudová', '-', 'karolinadoudova@spsul.cz', 1, 1, 'KarolinaDoudova478', ''),
(57, 'Miroslav', 'Černý', '478 572 221', 'miroslavcerny@spsul.cz', 1, 1, 'MiroslavCerny478', ''),
(58, 'Marek', 'Dovhun', '478 572 273', 'marekdovhun@spsul.cz', 1, 1, ' MarekDovhun478', ''),
(59, 'Petr', 'Haberzettl', '478 572 228', 'petrhaberzettl@spsul.cz', 1, 1, ' PetrHaberzettl478', ''),
(60, 'Václav', 'Havel', '478 572 218', 'vaclavhavel@spsul.cz', 1, 1, 'VaclavHavel478', ''),
(61, 'Eva', 'Helešicová', '478 572 261', 'evahelesicova@spsul.cz', 1, 1, ' EvaHelesicova478', ''),
(62, 'Michal', 'Hoffmann', '-', 'michalhoffmann@spsul.cz', 1, 1, ' MichalHoffmann478', ''),
(63, 'Jan', 'Horáček', '478 572 230', 'janhoracek@spsul.cz', 1, 1, ' JanHoracek478', ''),
(64, 'Martina', 'Kopecká', '478 572 261', 'martinakopecka@spsul.cz', 1, 1, 'MartinaKopecka478', ''),
(65, 'Veronika', 'Krause', '-', 'veronikakrause@spsul.cz', 1, 1, ' VeronikaKrause478', ''),
(66, 'Ivana', 'Kršňáková', '478 572 258', 'ivanakrsnakova@spsul.cz', 1, 1, 'IvanaKrsnakova478', ''),
(67, 'Tomáš', 'Kubín', '-', 'tomaskubin@spsul.cz', 1, 1, ' TomasKubin478', ''),
(68, 'Aleš', 'Kučera', '478 572 202 ', 'aleskucera@spsul.cz', 1, 1, 'AlesKucera478', ''),
(69, 'Miroslav', 'Leubner', '478 572 265', 'miroslavleubner@spsul.cz', 1, 1, 'MiroslavLeubner478', ''),
(70, 'Veronika', 'Lojková', '478 572 258', 'veronikalojkova@spsul.cz', 1, 1, 'VeronikaLojkova478', ''),
(71, 'Josef', 'Mádle', '478 572 230', 'josefmadle@spsul.cz', 1, 1, ' JosefMadle478', ''),
(72, 'Petr', 'Machyl', '478 572 273', 'petrmachyl@spsul.cz', 1, 1, 'PetrMachyl478', ''),
(73, 'Vratislav', 'Medřický', '478 572 267', 'vratislavmedricky@spsul.cz', 1, 1, ' VratislavMedricky478', ''),
(74, 'Rostislav', 'Mihalčík', '478 572 267', 'rostislavmihalcik@spsul.cz', 1, 1, 'RostislavMihalcik478', ''),
(75, 'Jiří', 'Mít', '478 572 267', 'jirimit@spsul.cz', 1, 1, 'JiriMit478', ''),
(76, 'Michal', 'Neustupa', '478 572 208', 'michalneustupa@spsul.cz', 1, 1, ' MichalNeustupa478', ''),
(77, 'Vladimír', 'Peřina', '478 572 266', 'vladimirperina@spsul.cz', 1, 1, 'VladimirPerina478', ''),
(78, 'Romana', 'Petrnoušková', '478 572 257', 'romanapetrnouskova@spsul.cz', 1, 1, 'RomanaPetrnouskova478', ''),
(79, 'Jakub', 'Pokorný', '478 572 267  ', 'jakubpokorny@spsul.cz', 1, 1, 'JakubPokorny478', ''),
(80, 'Iveta', 'Rácová', '478 572 203', 'ivetaracova@spsul.cz', 1, 1, 'IvetaRacova478', ''),
(81, 'Eva', 'Rambová', '478 572 261', 'evarambova@spsul.cz', 1, 1, ' EvaRambova478', ''),
(82, 'Petr', 'Rys', '478 572 266', 'petrrys@spsul.cz', 1, 1, 'PetrRys478', ''),
(83, 'Renata', 'Smetanová', '478 572 203', 'renatasmetanova@spsul.cz', 1, 1, 'RenataSmetanova478', ''),
(84, 'Jiří', 'Soukup', '478 572 268', 'jirisoukup@spsul.cz', 1, 1, ' JiriSoukup478', ''),
(85, 'Blanka', 'Studihradová', '478 572 231', 'blankastudihradova@spsul.cz', 1, 1, 'BlankaStudihradova478', ''),
(86, 'Květuše', 'Sýkorová', '478 572 229', 'kvetusesykorova@spsul.cz', 1, 1, 'KvetuseSykorova478', ''),
(87, 'Drahomíra', 'Vondřičková', '478 572 261', 'drahomiravondrickova@spsul.cz', 1, 1, 'DrahomiraVondrickova478', ''),
(91, 'Pavel', 'Durlin', '478 572 233', 'paveldurlin@spsul.cz', 1, 1, ' PavelDurlin478', ''),
(92, 'Dominik', 'Gerzanič', '478 572 216', 'dominikgerzanic@spsul.cz', 1, 1, 'DominikGerzanic478', ''),
(93, 'Petr', 'Hetzendorf', '478 572 217', 'petrhetzendorf@spsul.cz', 1, 1, ' PetrHetzendorf478', ''),
(94, 'Jana', 'Houfková', '478 572 214', 'janahoufkova@spsul.cz', 1, 1, 'JanaHoufkova478', ''),
(95, 'Josef', 'Jackel', '478 572 215', 'josefjackel@spsul.cz', 1, 1, 'JosefJackel478', ''),
(96, 'Petr', 'Knedlík', '478 572 211', 'petrknedlik@spsul.cz', 1, 1, 'PetrKnedlik478', ''),
(97, 'Milan', 'Kříž', '478 572 210', 'milankriz@spsul.cz', 1, 1, 'MilanKriz478', ''),
(98, 'František', 'Neužil', '478 572 220', 'frantisekneuzil@spsul.cz', 1, 1, 'FrantisekNeuzil478', ''),
(99, 'Miloslav', 'Novák', '478 572 236', 'miloslavnovak@spsul.cz', 1, 1, 'MiloslavNovak478', ''),
(100, 'Miloš', 'Novák', '478 572 211', 'milosnovak@spsul.cz', 1, 1, 'MilosNovak478', ''),
(101, 'Dana', 'Pokorníková', '478 572 214', 'danapokornikova@spsul.cz', 1, 1, 'DanaPokornikova478', ''),
(102, 'Petr', 'Soukal', '478 572 216', 'petrsoukal@spsul.cz', 1, 1, 'PetrSoukal478', ''),
(103, 'Radek', 'Šanda', '478 572 210', 'radeksanda@spsul.cz', 1, 1, 'RadekSanda', ''),
(104, 'Žaneta', 'Šauerová', '478 572 214', 'zanetasauerova@spsul.cz', 1, 1, 'ZanetaSauerova478', ''),
(105, 'Josef', 'Šimpach', '478 572 223', 'josefsimpach@spsul.cz', 1, 1, 'JosefSimpach478', ''),
(106, 'Zdeněk', 'Unčovský', '478 572 210', 'zdenekuncovsky@spsul.cz', 1, 1, 'ZdenekUncovsky478', ''),
(107, 'Petr', 'Volek', '478 572 211', 'petrvolek@spsul.cz', 1, 1, ' PetrVolek478', ''),
(108, 'Jiří', 'Mládek', '-', 'jirimladek@spsul.cz', 1, 2, 'JiriMladek', ''),
(109, 'Michaela', 'Petrovajová', '475 240 075', 'michaelapetrovajova@spsul.cz', 1, 2, 'MichaelaPetrovajova475', ''),
(110, 'Lenka', 'Richtrová', '475 240 059', 'lenkarichtrova@spsul.cz', 1, 2, 'LenkaRichtrova475', ''),
(111, 'Vlastimil', 'Sekal', '475 240 074', 'vlastimilsekal@spsul.cz', 1, 2, 'VlastimilSekal475', ''),
(112, 'Petr', 'Svoboda', '475 240 071', 'petrsvoboda@spsul.cz', 1, 2, 'PetrSvoboda475', '');

-- --------------------------------------------------------

--
-- Struktura tabulky `users_title`
--

CREATE TABLE `users_title` (
  `userID` int NOT NULL,
  `titleID` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `users_title`
--

INSERT INTO `users_title` (`userID`, `titleID`) VALUES
(2, 2),
(2, 1),
(3, 2),
(3, 1),
(4, 6),
(4, 3),
(5, 3),
(5, 1),
(6, 3),
(6, 1),
(7, 3),
(10, 2),
(11, 3),
(12, 2),
(13, 2),
(14, 3),
(15, 3),
(16, 2),
(17, 2),
(18, 3),
(19, 3),
(20, 2),
(21, 4),
(22, 2),
(23, 3),
(24, 2),
(25, 3),
(26, 5),
(26, 3),
(28, 3),
(29, 2),
(30, 3),
(31, 3),
(32, 1),
(33, 3),
(34, 3),
(35, 2),
(36, 2),
(37, 2),
(38, 3),
(39, 3),
(40, 2),
(41, 2),
(42, 3),
(43, 2),
(45, 3),
(46, 3),
(48, 3),
(108, 3),
(110, 2),
(111, 3),
(49, 2),
(50, 2),
(51, 2),
(52, 2),
(53, 2),
(55, 1),
(56, 1),
(58, 1),
(59, 3),
(60, 3),
(61, 2),
(62, 3),
(63, 2),
(64, 2),
(65, 3),
(66, 2),
(67, 1),
(68, 2),
(70, 2),
(71, 2),
(72, 3),
(73, 1),
(74, 3),
(76, 2),
(77, 2),
(77, 1),
(78, 2),
(79, 1),
(80, 3),
(81, 3),
(82, 2),
(83, 3),
(84, 3),
(85, 2),
(86, 2),
(87, 2),
(107, 1),
(100, 1);

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `center`
--
ALTER TABLE `center`
  ADD PRIMARY KEY (`centerID`);

--
-- Indexy pro tabulku `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`issuesID`),
  ADD KEY `roomID` (`roomID`),
  ADD KEY `userID` (`userID`);

--
-- Indexy pro tabulku `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `centerID` (`centerID`),
  ADD KEY `Priority` (`Priority`);

--
-- Indexy pro tabulku `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleID`);

--
-- Indexy pro tabulku `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`roomID`),
  ADD KEY `issuesID` (`issuesID`),
  ADD KEY `centerID` (`centerID`);

--
-- Indexy pro tabulku `title`
--
ALTER TABLE `title`
  ADD PRIMARY KEY (`titleID`);

--
-- Indexy pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `roleID` (`roleID`),
  ADD KEY `centerID` (`centerID`);

--
-- Indexy pro tabulku `users_title`
--
ALTER TABLE `users_title`
  ADD KEY `userID` (`userID`),
  ADD KEY `titleID` (`titleID`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `center`
--
ALTER TABLE `center`
  MODIFY `centerID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `issues`
--
ALTER TABLE `issues`
  MODIFY `issuesID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `posts`
--
ALTER TABLE `posts`
  MODIFY `postID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pro tabulku `priority`
--
ALTER TABLE `priority`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `role`
--
ALTER TABLE `role`
  MODIFY `roleID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `room`
--
ALTER TABLE `room`
  MODIFY `roomID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `title`
--
ALTER TABLE `title`
  MODIFY `titleID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pro tabulku `users`
--
ALTER TABLE `users`
  MODIFY `userID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_ibfk_1` FOREIGN KEY (`roomID`) REFERENCES `room` (`roomID`),
  ADD CONSTRAINT `issues_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`);

--
-- Omezení pro tabulku `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`centerID`) REFERENCES `center` (`centerID`),
  ADD CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`Priority`) REFERENCES `priority` (`id`);

--
-- Omezení pro tabulku `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`issuesID`) REFERENCES `issues` (`issuesID`),
  ADD CONSTRAINT `room_ibfk_2` FOREIGN KEY (`centerID`) REFERENCES `center` (`centerID`);

--
-- Omezení pro tabulku `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleID`) REFERENCES `role` (`roleID`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`centerID`) REFERENCES `center` (`centerID`);

--
-- Omezení pro tabulku `users_title`
--
ALTER TABLE `users_title`
  ADD CONSTRAINT `users_title_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  ADD CONSTRAINT `users_title_ibfk_2` FOREIGN KEY (`titleID`) REFERENCES `title` (`titleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

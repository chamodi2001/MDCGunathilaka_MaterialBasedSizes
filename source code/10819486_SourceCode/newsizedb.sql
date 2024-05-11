-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: newsizedb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fb_cotton`
--

DROP TABLE IF EXISTS `fb_cotton`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fb_cotton` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uksize` int(11) NOT NULL,
  `usercw` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fb_cotton`
--

LOCK TABLES `fb_cotton` WRITE;
/*!40000 ALTER TABLE `fb_cotton` DISABLE KEYS */;
INSERT INTO `fb_cotton` VALUES (1,14,37),(2,14,37.5);
/*!40000 ALTER TABLE `fb_cotton` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fb_polyester`
--

DROP TABLE IF EXISTS `fb_polyester`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fb_polyester` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `usercw` double NOT NULL,
  `uksize` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fb_polyester`
--

LOCK TABLES `fb_polyester` WRITE;
/*!40000 ALTER TABLE `fb_polyester` DISABLE KEYS */;
INSERT INTO `fb_polyester` VALUES (1,30,6),(2,31,6),(3,31.5,6),(4,33,8),(5,35.5,10),(6,34,10),(7,37,12),(8,37.5,12),(9,36,12),(10,38,14),(11,39.5,14),(12,41,16);
/*!40000 ALTER TABLE `fb_polyester` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fb_spandex`
--

DROP TABLE IF EXISTS `fb_spandex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fb_spandex` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `uksize` int(11) NOT NULL,
  `usercw` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fb_spandex`
--

LOCK TABLES `fb_spandex` WRITE;
/*!40000 ALTER TABLE `fb_spandex` DISABLE KEYS */;
INSERT INTO `fb_spandex` VALUES (1,6,30),(2,6,31),(3,6,32),(4,6,32.5),(5,8,34),(6,8,35.5),(7,8,35),(8,10,36),(9,10,36.5),(10,10,37),(11,12,38),(12,14,39),(13,14,40),(14,16,40.5);
/*!40000 ALTER TABLE `fb_spandex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` bigint(20) NOT NULL,
  `chest_widthfb` double NOT NULL,
  `material` varchar(255) DEFAULT NULL,
  `uk_sizefb` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,31,'cotton',6),(2,31.25,'cotton',8),(3,31.5,'cotton',8),(4,32,'cotton',10),(5,33,'cotton',10),(6,30,'cotton',6),(7,34.5,'cotton',10),(8,34,'cotton',10),(9,35.5,'cotton',12),(10,36,'cotton',14),(11,37.5,'cotton',14),(12,37,'cotton',12),(13,38,'cotton',16),(14,39,'cotton',16),(15,40,'cotton',18),(16,42.5,'cotton',18),(17,30,'spandexblend',6),(18,31,'spandexblend',6),(19,32,'spandexblend',6),(20,33.5,'spandexblend',8),(21,33,'spandexblend',8),(22,34,'spandexblend',8),(23,34,'spandexblend',10),(24,35.5,'spandexblend',10),(25,34,'spandexblend',10),(26,37,'spandexblend',12),(27,36,'spandexblend',10),(28,36.25,'spandexblend',12),(29,36.5,'spandexblend',12),(30,38,'spandexblend',14),(31,39,'spandexblend',14),(32,38.5,'spandexblend',14),(33,39,'spandexblend',14),(34,40,'spandexblend',16),(35,42,'spandexblend',16),(36,41,'spandexblend',16),(52,30,'spandexblend',6),(53,31,'spandexblend',6),(54,32,'spandexblend',6),(55,32.5,'spandexblend',6),(56,34,'spandexblend',8),(57,35.5,'spandexblend',8),(58,35,'spandexblend',8),(59,36,'spandexblend',10),(60,36.5,'spandexblend',10),(61,37,'spandexblend',10),(62,38,'spandexblend',12),(63,39,'spandexblend',14),(64,40,'spandexblend',14),(65,40.5,'spandexblend',16),(102,37,'cotton',14),(103,37.5,'cotton',14);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback_seq`
--

DROP TABLE IF EXISTS `feedback_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_seq`
--

LOCK TABLES `feedback_seq` WRITE;
/*!40000 ALTER TABLE `feedback_seq` DISABLE KEYS */;
INSERT INTO `feedback_seq` VALUES (201);
/*!40000 ALTER TABLE `feedback_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `itemid` int(11) NOT NULL,
  `name_ofproduct` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,1,'black long Sleeve polyester',15,1),(2,2,'pink long Sleeve polyester',20,500),(3,3,'Gray long sleeve poly',25,200);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_cotton`
--

DROP TABLE IF EXISTS `image_cotton`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_cotton` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `itemid` int(11) NOT NULL,
  `name_ofproduct` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_cotton`
--

LOCK TABLES `image_cotton` WRITE;
/*!40000 ALTER TABLE `image_cotton` DISABLE KEYS */;
INSERT INTO `image_cotton` VALUES (1,1,'Plain white cotton',40,2000),(2,2,'Cut Sleeve white cotton',35,1400);
/*!40000 ALTER TABLE `image_cotton` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_spandex`
--

DROP TABLE IF EXISTS `image_spandex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_spandex` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `itemid` int(11) NOT NULL,
  `name_ofproduct` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_spandex`
--

LOCK TABLES `image_spandex` WRITE;
/*!40000 ALTER TABLE `image_spandex` DISABLE KEYS */;
INSERT INTO `image_spandex` VALUES (1,1,'Red Sleeveless poly-spandex',35,500),(2,2,'Pink Long Sleeve poly-spandex',18,1500);
/*!40000 ALTER TABLE `image_spandex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` bigint(20) NOT NULL,
  `loginpassword` varchar(255) DEFAULT NULL,
  `loginusername` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_seq`
--

DROP TABLE IF EXISTS `login_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_seq`
--

LOCK TABLES `login_seq` WRITE;
/*!40000 ALTER TABLE `login_seq` DISABLE KEYS */;
INSERT INTO `login_seq` VALUES (1);
/*!40000 ALTER TABLE `login_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL,
  `chestwidth` double NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (1,23,37,'Qwer','Chamo'),(2,22,30,'1234','Imashi'),(52,25,34,'Asdd','Min'),(152,30,38,'Zxcv','Gune');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register_seq`
--

DROP TABLE IF EXISTS `register_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register_seq`
--

LOCK TABLES `register_seq` WRITE;
/*!40000 ALTER TABLE `register_seq` DISABLE KEYS */;
INSERT INTO `register_seq` VALUES (301);
/*!40000 ALTER TABLE `register_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-10 15:16:54

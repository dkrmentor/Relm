-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: relmdb
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `current_city` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `interest` json DEFAULT NULL,
  `known_languages` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `images` json DEFAULT NULL,
  `cities` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'fahad','1234','male','dyhddhj','saad@gmail.com','39483','saadHh','{\"health&fitness\": \"Graduate\", \"sportsAndCreation\": \"Graduate\", \"creative&Performance\": \"Doctorate\", \"specialInterestHousing\": \"Greek Associations\", \"educationAndStudentLife\": \"Undergraduate\", \"lifestyle&entertainment\": \"Masters\", \"businessAndEntrepreneurship\": \"Masters\"}','jdhsisbs','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOiIxMjM0IiwiaWF0IjoxNjg2NzQxNTk1LCJleHAiOjE2ODY5MTQzOTV9.twQNIVVl_6DJ-s0amylFn0l7pLwRK8y3GTMmtrYMetQ','{\"images\": [\"http://192.168.0.146:3001/uploads/1686741643095-408454053.jpg\"]}',NULL),(2,'test','12345678','male','karachi','saad@gmail.com','3-11-2001','saad ali','{\"health&fitness\": \"Graduate\", \"sportsAndCreation\": \"Graduate\", \"creative&Performance\": \"Graduate\", \"specialInterestHousing\": \"Graduate\", \"educationAndStudentLife\": \"Undergraduate\", \"lifestyle&entertainment\": \"Greek Associations\", \"businessAndEntrepreneurship\": \"Greek Associations\"}','Urdu','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImlhdCI6MTY4Njc0MTM4MiwiZXhwIjoxNjg2OTE0MTgyfQ.htFrvfN8b_gmPSn-SszoM2qOuD5SGWXcwqIV6-2-0KM','{\"images\": []}','[\"karachi\", \"islamabad\"]');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14  7:55:47

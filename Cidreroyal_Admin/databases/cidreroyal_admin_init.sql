-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 127.0.0.1    Database: cidreroyal_admin
-- ------------------------------------------------------
-- Server version	5.6.25-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gm_menu`
--

DROP TABLE IF EXISTS `gm_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gm_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `key` varchar(20) NOT NULL DEFAULT '',
  `menu` int(5) NOT NULL DEFAULT '1',
  `parent` int(5) NOT NULL DEFAULT '0',
  `isEntity` int(5) NOT NULL DEFAULT '0',
  `link` varchar(255) NOT NULL DEFAULT '',
  `active` varchar(255) NOT NULL DEFAULT '',
  `icon` varchar(255) NOT NULL DEFAULT '',
  `indexNo` int(5) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `gm_menu_id_unique` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gm_menu`
--

LOCK TABLES `gm_menu` WRITE;
/*!40000 ALTER TABLE `gm_menu` DISABLE KEYS */;
INSERT INTO `gm_menu` VALUES (1,'gm用户管理','',1,0,0,'','','glyphicon glyphicon-list-alt',99,'0000-00-00 00:00:00','2015-12-17 02:16:04'),(2,'菜单','GM_Menu',2,1,1,'','','',0,'2015-12-14 09:22:48','2015-12-14 09:22:48'),(3,'角色','GM_Role',2,1,1,'','','',0,'2015-12-14 09:23:23','2015-12-14 09:23:23'),(4,'gm用户','GM_User',2,1,1,'','','',0,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'西打酒管理','',1,0,0,'','','glyphicon glyphicon-list-alt',1,'2016-07-12 08:45:32','2016-07-12 08:45:32'),(6,'酒类信息','Wine',1,5,1,'','','',0,'2016-07-12 08:46:42','2016-07-12 08:46:57'),(7,'博客信息','Blog',1,5,1,'','','',0,'2016-07-13 11:14:27','2016-07-13 11:14:27');
/*!40000 ALTER TABLE `gm_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gm_olog`
--

DROP TABLE IF EXISTS `gm_olog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gm_olog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `opertype` int(5) NOT NULL DEFAULT '0',
  `channelid` bigint(20) NOT NULL DEFAULT '0',
  `pubcode` varchar(30) NOT NULL DEFAULT '',
  `logfile` varchar(100) NOT NULL DEFAULT '',
  `flag` int(5) NOT NULL DEFAULT '0',
  `otime` bigint(13) DEFAULT '0',
  `remark` varchar(255) DEFAULT '{}',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `gm_olog_id_unique` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gm_olog`
--

LOCK TABLES `gm_olog` WRITE;
/*!40000 ALTER TABLE `gm_olog` DISABLE KEYS */;
/*!40000 ALTER TABLE `gm_olog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gm_role`
--

DROP TABLE IF EXISTS `gm_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gm_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `menu` varchar(100) NOT NULL DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `gm_role_id_unique` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gm_role`
--

LOCK TABLES `gm_role` WRITE;
/*!40000 ALTER TABLE `gm_role` DISABLE KEYS */;
INSERT INTO `gm_role` VALUES (1,'超级管理员','*','2012-12-01 00:00:00','2012-12-01 00:00:00');
/*!40000 ALTER TABLE `gm_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gm_user`
--

DROP TABLE IF EXISTS `gm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gm_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `nickname` varchar(20) DEFAULT '',
  `role` int(5) DEFAULT '0',
  `state` int(30) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `gm_user_id_unique` (`id`),
  UNIQUE KEY `gm_user_username_unique` (`username`),
  UNIQUE KEY `gm_user_username_password` (`username`,`password`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gm_user`
--

LOCK TABLES `gm_user` WRITE;
/*!40000 ALTER TABLE `gm_user` DISABLE KEYS */;
INSERT INTO `gm_user` VALUES (1,'admin','62f5f3f2414c8a7256f686aaa85a392740bbb43b','admin',1,1,'2012-12-01 00:00:00','2012-12-01 00:00:00');
/*!40000 ALTER TABLE `gm_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-15 15:44:09

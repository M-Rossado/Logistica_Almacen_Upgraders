-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: logistica_almacen
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `item_type` varchar(250) NOT NULL,
  `status` varchar(15) NOT NULL,
  `date_of_entry` date NOT NULL,
  `date_of_departure` date NOT NULL,
  `origin` varchar(100) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `warehouse_location` varchar(250) NOT NULL,
  `truck_plate` varchar(10) NOT NULL,
  `worker_email` varchar(255) NOT NULL,
  `email_manager` varchar(45) NOT NULL,
  PRIMARY KEY (`id_order`),
  KEY `fk_order_warehouse1_idx` (`warehouse_location`),
  KEY `fk_order_truck1_idx` (`truck_plate`),
  KEY `fk_order_worker1_idx` (`worker_email`),
  CONSTRAINT `fk_order_truck1` FOREIGN KEY (`truck_plate`) REFERENCES `truck` (`plate`),
  CONSTRAINT `fk_order_warehouse1` FOREIGN KEY (`warehouse_location`) REFERENCES `warehouse` (`location`),
  CONSTRAINT `fk_order_worker1` FOREIGN KEY (`worker_email`) REFERENCES `worker` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (6,'Television','Revision','2025-01-24','2025-01-30','Sevilla','Madrid','Madrid','7890 MND','paulamartinez@gmail.com','maria.perez@gmail.com');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `truck`
--

DROP TABLE IF EXISTS `truck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `truck` (
  `plate` varchar(10) NOT NULL,
  PRIMARY KEY (`plate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `truck`
--

LOCK TABLES `truck` WRITE;
/*!40000 ALTER TABLE `truck` DISABLE KEYS */;
INSERT INTO `truck` VALUES ('1234 BCF'),('1239 VYX'),('2310 ZRW'),('2345 PRS'),('2347 JTK'),('3456 XBR'),('4321 ZLP'),('4561 QLF'),('5670 KFR'),('5678 HJK'),('6789 WNR'),('7890 MND'),('8765 GTH'),('8790 DWB');
/*!40000 ALTER TABLE `truck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse`
--

DROP TABLE IF EXISTS `warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse` (
  `location` varchar(250) NOT NULL,
  PRIMARY KEY (`location`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse`
--

LOCK TABLES `warehouse` WRITE;
/*!40000 ALTER TABLE `warehouse` DISABLE KEYS */;
INSERT INTO `warehouse` VALUES ('Barcelona'),('Madrid');
/*!40000 ALTER TABLE `warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worker`
--

DROP TABLE IF EXISTS `worker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `worker` (
  `id_worker` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `surname` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'operario',
  `warehouse_location` varchar(250) NOT NULL,
  `truck_plate` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `id_worker` (`id_worker`),
  KEY `fk_Trabajadores_almacenes1_idx` (`warehouse_location`),
  KEY `fk_Trabajadores_camiones1_idx` (`truck_plate`),
  CONSTRAINT `fk_Trabajadores_almacenes1` FOREIGN KEY (`warehouse_location`) REFERENCES `warehouse` (`location`),
  CONSTRAINT `fk_Trabajadores_camiones1` FOREIGN KEY (`truck_plate`) REFERENCES `truck` (`plate`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT INTO `worker` VALUES (21,'Maria','Perez Lopez','Madrid','12456789P','mariaperez@gmail.com','$2b$10$WjDyWp4Y2ZHZRrp1n5OHbuLTLuMMUO3vO/7ockdvvijAfpUxsJJna','operario','Madrid',NULL),(23,'Milagros','Sanz Oramas','Madrid','12345678J','milagrossanz@gmail.com','$2b$10$g7RhT1Yd0XJPfZyaqgBH4uph/2pgGbv49OkU/Gef1pB1i/8AdciuS','encargada','Madrid',NULL),(19,'Pablo','Fernandez Gutierrez','Madrid','45678963J','pablofernandez@gmail.com','$2b$10$Fm9QiAOBje5fNrLQ7GrwcuLz06yVwWqOK7LyLg.nbOnEuIKr9sCXC','jefe','Madrid',NULL),(22,'Paula','Martinez Gomez','Madrid','98456321H','paulamartinez@gmail.com','$2b$10$e06XTYDb4ZIXaYlnNHq.FudlSPgSP5PEvAMMEfKnMnbz25DUtft3.','camionero','Madrid','7890 MND'),(20,'Rodrigo','Gonzalez Alvarez','Madrid','45789123L','rodrigogonzalez@gmail.com','$2b$10$4KhkdvIfMrF.iBGSdaFboOUlFQsIShwaz6MGzCAlDvW2U7WchcaK.','encargado','Madrid',NULL);
/*!40000 ALTER TABLE `worker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-24 17:17:36

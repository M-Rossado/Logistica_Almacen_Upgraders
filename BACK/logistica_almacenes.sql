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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `item_type` varchar(250) NOT NULL,
  `status` varchar(15) NOT NULL DEFAULT '"Revision"',
  `date_of_entry` date NOT NULL,
  `date_of_departure` date NOT NULL,
  `destination` varchar(100) NOT NULL,
  `warehouse_location` varchar(250) NOT NULL,
  `worker_email` varchar(255) NOT NULL,
  `email_operator` varchar(45) NOT NULL,
  `comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  KEY `fk_order_warehouse1_idx` (`warehouse_location`),
  KEY `fk_order_worker1_idx` (`worker_email`),
  CONSTRAINT `fk_order_warehouse1` FOREIGN KEY (`warehouse_location`) REFERENCES `warehouse` (`location`),
  CONSTRAINT `fk_order_worker1` FOREIGN KEY (`worker_email`) REFERENCES `worker` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (7,'Sarten','Revision','2025-01-24','2025-01-28','Barcelona','Barcelona','paulamartinez@gmail.com','mariaperez@gmail.com',NULL),(8,'Auriculares','Revision','2025-01-24','2025-01-31','Madrid','Madrid','paulamartinez@gmail.com','mariaperez@gmail.com',NULL),(9,'Ordenador','Revision','2025-01-23','2025-02-04','Madrid','Madrid','paulamartinez@gmail.com','mariaperez@gmail.com',NULL),(11,'Gafas de sol','Revision','2025-01-20','2025-02-17','Barcelona','Barcelona','paulamartinez@gmail.com','mariomartin@gmail.com',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
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
INSERT INTO `warehouse` VALUES ('Albacete'),('Almeria'),('Badajoz'),('Barcelona'),('Caceres'),('Cordoba'),('Girona'),('Jaen'),('Madrid'),('Mallorca'),('Oviedo'),('Pontevedra'),('Sevilla'),('Zaragoza');
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT INTO `worker` VALUES (21,'Maria','Perez Lopez','Madrid','12456789P','mariaperez@gmail.com','$2b$10$WjDyWp4Y2ZHZRrp1n5OHbuLTLuMMUO3vO/7ockdvvijAfpUxsJJna','operario','Madrid',NULL),(25,'Mario','Martin Baeza','Barcelona','78945612F','mariomartin@gmail.com','$2b$10$YTQjYdIwSZQRGgOepoNyB.0vLQug/zqPx/fxl7KZbI8ZDGSGhz75G','operario','Barcelona',NULL),(19,'Pablo','Fernandez Gutierrez','Madrid','45678963J','pablofernandez@gmail.com','$2b$10$Fm9QiAOBje5fNrLQ7GrwcuLz06yVwWqOK7LyLg.nbOnEuIKr9sCXC','jefe','Madrid',NULL),(22,'Paula','Martinez Gomez','Madrid','98456321H','paulamartinez@gmail.com','$2b$10$e06XTYDb4ZIXaYlnNHq.FudlSPgSP5PEvAMMEfKnMnbz25DUtft3.','camionero','Madrid','7890 MND'),(20,'Rodrigo','Gonzalez Alvarez','Madrid','45789123L','rodrigogonzalez@gmail.com','$2b$10$4KhkdvIfMrF.iBGSdaFboOUlFQsIShwaz6MGzCAlDvW2U7WchcaK.','encargado','Madrid',NULL);
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

-- Dump completed on 2025-01-28 18:52:55

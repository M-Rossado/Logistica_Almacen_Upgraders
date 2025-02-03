-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (arm64)
--
-- Host: localhost    Database: logistica_almacen
-- ------------------------------------------------------
-- Server version	8.4.4

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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (22,'-Reloj','Pendiente','2025-01-18','2025-02-11','Calle Gran Vía, 12, Madrid, Madrid','Barcelona','sandra.conductor@etruck.es','mariomartin@etruck.es',''),(25,'-Vasos','En transito','2025-01-22','2025-01-23','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Barcelona','sandra.conductor@etruck.es','mariomartin@etruck.es',NULL),(26,'-Tazas','Pendiente','2025-01-22','2025-01-23','Calle del Toboso 45, 4A. Madrid, Madrid','Barcelona','sandra.conductor@etruck.es','mariomartin@etruck.es',NULL),(28,'-Cargador de movil','Anulado','2025-02-01','2025-02-04','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Madrid','sandra.conductor@etruck.es','mariomartin@etruck.es',''),(33,'-Pizzas congeladas','Revisión','2025-01-18','2025-01-21','Calle del Toboso 45, 4A. Madrid, Madrid','Barcelona','sandra.conductor@etruck.es','mariomartin@etruck.es',NULL),(34,'-Vaper','Aceptado','2025-02-02','2025-02-12','Calle del Trabajo 58, Murcia','Barcelona','paulamartinez@gmail.com','mariomartin@etruck.es',NULL),(36,'Zapatillas de deporte','Revisión','2025-02-02','2025-02-04','Calle Trabajo, 49. Jumilla, Murcia','Albacete','patricia.conductor@etruck.es','juan.operario@etruck.es',NULL),(37,'Vasos de ceramica','Revisión','2025-02-01','2025-02-04','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Albacete','patricia.conductor@etruck.es','juan.operario@etruck.es',NULL),(38,'Mesita de noche','Revisión','2025-01-30','2025-02-03','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Albacete','patricia.conductor@etruck.es','juan.operario@etruck.es',NULL),(39,'Televisión 60\'','Revisión','2025-02-03','2025-02-05','Calle del Toboso 45, 4A. Madrid, Madrid','Albacete','ana.conductor@etruck.es','juan.operario@etruck.es',NULL),(40,'Nintendo Switch','Revisión','2025-02-03','2025-02-05','Calle de la libertad, 45, Jumilla, Murcia','Albacete','ana.conductor@etruck.es','juan.operario@etruck.es',NULL),(41,'Estantería grande','Revisión','2025-02-03','2025-02-05','Calle de la libertad, 45, Jumilla, Murcia','Albacete','ana.conductor@etruck.es','juan.operario@etruck.es',NULL),(43,'Zapatilla de casa','Revisión','2025-02-03','2025-02-04','Calle de Pedro Martinez, 7. 28019, Ibiza','Mallorca','carlos.conductor@etruck.es','anjara.operario@etruck.es',NULL),(44,'Televisión 55\'','Revisión','2025-02-03','2025-02-07','Calle del Toboso 45, 4A. Madrid, Menorca','Mallorca','carlos.conductor@etruck.es','anjara.operario@etruck.es',NULL),(45,'Cajas de cartón','Revisión','2025-02-03','2025-02-10','Calle de Pedro Martinez, 7. 28019, Mallorca','Mallorca','carlos.conductor@etruck.es','anjara.operario@etruck.es',NULL),(46,'Consola','Revisión','2025-02-03','2025-02-04','Calle de la Esperanza, 33, Ibiza','Mallorca','antonio.conductor@etruck.es','anjara.operario@etruck.es',NULL),(47,'Mando Play Station','Revisión','2025-02-03','2025-02-04','Calle de Pedro Martinez, 7. 28019, Mallorca','Mallorca','antonio.conductor@etruck.es','anjara.operario@etruck.es',NULL),(48,'Samsung Galaxy','Revisión','2025-02-03','2025-02-05','Calle de la piruleta, 54, Mallorca','Mallorca','antonio.conductor@etruck.es','anjara.operario@etruck.es',NULL),(49,'Iphone','Revisión','2025-02-04','2025-02-06','Calle del Toboso 45, 4A. Madrid, Madrid','Madrid','carlota.conductor@etruck.es','daniel.operario@etruck.es',NULL),(50,'Cereales','Revisión','2025-02-04','2025-02-10','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Madrid','carlota.conductor@etruck.es','daniel.operario@etruck.es',NULL),(51,'Cargador de ordenador','Revisión','2025-02-03','2025-02-10','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Barcelona','marta.conductor@etruck.es','mariomartin@etruck.es',NULL),(52,'Disco duro','Revisión','2025-02-03','2025-02-10','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Barcelona','marta.conductor@etruck.es','mariomartin@etruck.es',NULL),(53,'Conjunto de ropa deportiva','Revisión','2025-02-01','2025-02-04','Calle de Pedro Martinez, 7. 28019, Madrid, Madrid','Barcelona','javier.conductor@etruck.es','mariomartin@etruck.es',NULL),(54,'Plantas de interior','Revisión','2025-02-01','2025-02-03','Calle del Toboso 45, 4A. Madrid, Madrid','Barcelona','javier.conductor@etruck.es','mariomartin@etruck.es',NULL);
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
INSERT INTO `truck` VALUES ('1234 BCF'),('1239 VYX'),('2310 ZRW'),('2345 PRS'),('2347 JTK'),('3456 XBR'),('4321 ZLP'),('4561 QLF'),('5670 KFR'),('5678 HJK'),('6789 WNR'),('7890 MND'),('8765 GTH'),('8790 DWB'),('Null');
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
INSERT INTO `warehouse` VALUES ('Albacete'),('Barcelona'),('Madrid'),('Mallorca');
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT INTO `worker` VALUES (42,'Ana','Carcelen Diaz','Calle Santa Ana, 23, Albacete','88848888Q','ana.conductor@etruck.es','$2b$10$oyO9zfmMYtNCkCxupDADkOfkRKUELjtnizhjYULReDkdAlYnJaItS','camionero','Albacete','2347 JTK'),(31,'Anjara','Oramas Carrillo','Calle de la bombilla, 45, Mallorca','88848888V','anjara.operario@etruck.es','$2b$10$/gyiaIIwFt6fT4EN4D9tbe54n5qi5hdMKQX3q6v5cJ.2JtTSUnrXa','operario','Mallorca','Null'),(41,'Antonio','Perez Pinto','Calle sorpresa, 33, Mallorca','12345678B','antonio.conductor@etruck.es','$2b$10$XiZ.cni3LVq6x4Cfh/x5Qui2B3n5UDk0TOmFQ0u3YXyYfHOXHj5ZK','camionero','Mallorca','1239 VYX'),(45,'Antonio','Gómez Rodríguez','Calle de Pedo Martínez, 7, Madrid','77881922P','antonio.operario@etruck.es','$2b$10$kopq47Zhxg21i5YDsSDCduCbabKis.PSQ1iKZ6cqH4CCIjXlJVq9W','operario','Madrid','Null'),(39,'Carlos','Pinto Martinez','Calle de la bombilla, 45, Mallorca','88848845V','carlos.conductor@etruck.es','$2b$10$Jr/eDRo6Yx9k4M9eE32q0.H8z0t9prh69gRTpJUVvTK85ETb5VOkm','camionero','Mallorca','2345 PRS'),(44,'Carlota','Perez Gimenez','Calle Avería, 23, Madrid','88848885K','carlota.conductor@etruck.es','$2b$10$Te3/U4PCpX.3TBBuMbwM2eago9hbaAjK3gKgeTdQ6yG215HF9ooZi','camionero','Madrid','8765 GTH'),(47,'Daniel','Valladares Sánchez','Calle de Pedro Martínez, 7, Madrid','88848813V','daniel.operario@etruck.es','$2b$10$ZH.FJNxNS7aBpQz5fX9I5O/X.erxCTptpae.zRqUE49tVeXPeeEJi','operario','Madrid','Null'),(32,'Diego','Arévalo Trujillo ','Calle de la bombilla, 45, Barcelona','88848888V','diego.encargado@etruck.es','$2b$10$zDyMMETQg3G8EoDOf3KHzu0uWs1//3/JqDiK.fYLTuFAsZ5efo9Ve','encargado','Barcelona','Null'),(34,'Felipe','Hermoso Gimenez','Calle del toboso, 45, Mallorca','88848888Z','felipe.encargado@etruck.es','$2b$10$noDlRelz2HCMUuSLuaRbt.N2hbshcNyQE/Hm.Rghg2EXqgLQ1x.F6','encargado','Mallorca','Null'),(38,'Javier','Perez Martinez','Calle San Blas, 34, Barcelona','68848888V','javier.conductor@etruck.es','$2b$10$RjwRKqDPGew3JMMbVa.PgOy5znLKBAEHTCC/ZtEMqptQ4hqUzvegu','camionero','Barcelona','2310 ZRW'),(30,'Juan Antonio','Gómez Rodríguez','Calle Madrid 10','88888888V','juan.operario@etruck.es','$2b$10$YebPjHLhJ3SJ8G0myNUQJeTpPMJlqrfcZFeyQcbBkAyE3/bMka1Ym','operario','Albacete','Null'),(25,'Mario','Martin Baeza','Barcelona','78945612F','mariomartin@etruck.es','$2b$10$YTQjYdIwSZQRGgOepoNyB.0vLQug/zqPx/fxl7KZbI8ZDGSGhz75G','operario','Barcelona',NULL),(33,'Marta','Gimenez Diaz','Calle Madrid, 10, Barcelona','78848888V','marta.conductor@etruck.es','$2b$10$5RvPbzEOZg04u0y5MqIFZOj6EdIJnjUZN47PLvCa20Ofxcry9hOXi','camionero','Barcelona','Null'),(19,'Pablo','Fernandez Gutierrez','Madrid','45678963J','pablofernandez@etruck.es','$2b$10$Fm9QiAOBje5fNrLQ7GrwcuLz06yVwWqOK7LyLg.nbOnEuIKr9sCXC','jefe','Madrid',NULL),(43,'Patricia','Menendez Alba','Avenida de la Constitución, 23, Albacete','88848888C','patricia.conductor@etruck.es','$2b$10$dN9fxCiuuUOF4cdzFnQbUONSnqW/zu3q9EvvEBehrkuD6kvwh1cpi','camionero','Albacete','3456 XBR'),(22,'Paula','Martinez Gomez','Madrid','98456321H','paulamartinez@gmail.com','$2b$10$e06XTYDb4ZIXaYlnNHq.FudlSPgSP5PEvAMMEfKnMnbz25DUtft3.','camionero','Madrid','7890 MND'),(20,'Rodrigo','Gonzalez Alvarez','Madrid','45789123L','rodrigogonzalez@gmail.com','$2b$10$4KhkdvIfMrF.iBGSdaFboOUlFQsIShwaz6MGzCAlDvW2U7WchcaK.','encargado','Madrid',NULL),(36,'Sandra','Vazquez Hermoso','Calle de la bombilla, 45, Madrid','88848588V','sandra.conductor@etruck.es','$2b$10$6eetouWGFpWeacLqf4wZQ.J2qVRvhFMaFCvYvWDUAVHdyLT8on1nG','camionero','Madrid','1234 BCF'),(35,'Sandra','Rodríguez Campos','Calle Jardín, 23, Albacete','12345678A','sandra.encargado@etruck.es','$2b$10$vNWdZMddtr232bYxg9/tR.tMcqfmRPsjdeVU96VAkbxP2bE5Erynq','encargado','Albacete','Null'),(37,'Victoria','Carcelen Diaz','Calle de la piruleta, 22, Barcelona','88848889V','victoria.conductor@etruck.es','$2b$10$5Ze0CV2hQeTNkcNRP7xCv.tWQXOsO7o4zdeXGEagALTR/D1e8i8Ny','camionero','Barcelona','1239 VYX');
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

-- Dump completed on 2025-02-03 15:36:50

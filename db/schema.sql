DROP DATABASE IF EXISTS Amenities; 

CREATE DATABASE Amenities;

USE Amenities;

CREATE TABLE Amenities (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  amenity VARCHAR(4000) NOT NULL,
  amenity_type VARCHAR(255),
  listing INT,
  amenity_url VARCHAR(500)
);
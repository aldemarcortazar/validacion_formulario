-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-10-2020 a las 03:41:47
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formulario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(16) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `password` varchar(12) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario`, `nombre`, `password`, `correo`, `telefono`) VALUES
('', '', '', '', 0),
('1213', 'aldema', 'aaaa', 'correo@correo.com', 22222222222),
('1231', 'alala', '1231', 'correo@correo.com', 3211234321),
('1234', 'alde', '1111', 'correo@correo.com', 3222897654),
('12341', '1234', '1122', 'correo@correo.com', 3222708870),
('222222222222', 'alddd', '4444', 'j@gmail.com', 4323112),
('aaaaaaaajuan', 'juan', '1111', 'corrreo@correo.com', 3452134213),
('aakkka', 'aalla', '1234', 'correo@smail.com', 3333333),
('alalalala', 'aldd', '1234', 'correo@correo.com', 3452134213),
('alalallaa', 'aldem', '5555', 'anino79@misena.edu.co', 3452134213),
('alberto', 'aaaaaa', '1234', 'correo@correo.com', 3222897654),
('alda', 'alalala', '1234', 'anino79@misena.edu.co', 22222222222),
('alddlld', 'lLLl', '2222', 'correo@gmail.com', 3211234321),
('aldema', 'aldemar n', '1111', 'correo@correo.com', 3222708870),
('aldemar', 'aldemarn', '12345', 'correo@correo.com', 3452134213),
('aldemarrrr', 'allll', '5555', 'n@gmail.co', 433333333),
('bbbb', 'aldemar', 'aaaa', 'correo@correo.com', 3222897654),
('cocococo', 'alalala', '1111', 'correo@correo.com', 3211234321),
('jjjj', 'ananana', 'akakaka', 'correo@correo.com', 4321233),
('juanandres', 'aldem', '44444', 'correo@correo.com', 3222897654),
('juuuu', 'alalalala', '1111', 'correo@correo.com', 3222897654),
('kkkk', 'alalaa', 'aaaa', '7777@gmail.com', 44556777),
('kkkm', 'aaaa', 'aaaaa', 'correo@correo.com', 3452134213),
('lalala', 'alaalala', '3333', 'alala@gmail.com', 3222708870),
('lelellele', 'kwkkwkw', '1111', 'corre@correo.com', 3211234321),
('oila', 'aldemar', '44444', 'correo@correo.com', 44556777),
('sandra', 'aaaa', 'aaaa', 'aaaa@gmail.com', 3222897654),
('ssss', 'aaaa', '4444', 'correo@correo.com', 3222897654);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2021 at 09:39 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `xsportsz`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_details`
--

CREATE TABLE IF NOT EXISTS `contact_details` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` text NOT NULL,
  `message` text NOT NULL,
  `added_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `country_master`
--

CREATE TABLE IF NOT EXISTS `country_master` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country_master`
--

INSERT INTO `country_master` (`id`, `name`, `is_active`) VALUES
(1, 'India', 1),
(2, 'United States', 1),
(3, 'China', 1),
(4, 'Japan', 1),
(5, 'Germany', 1),
(6, ' United Kingdom', 1),
(7, 'France', 1),
(8, 'Italy', 1),
(9, 'Brazil', 1),
(10, 'Canada', 1),
(11, 'Russia', 1),
(12, ' South Korea', 1),
(13, 'Spain', 1),
(14, 'Australia', 1),
(15, 'Mexico', 1),
(16, 'Indonesia', 1),
(17, 'Netherlands', 1),
(18, 'Saudi Arabia', 1),
(19, 'Turkey', 1),
(20, 'Switzerland', 1);

-- --------------------------------------------------------

--
-- Table structure for table `role_master`
--

CREATE TABLE IF NOT EXISTS `role_master` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `role` varchar(150) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `role_master`
--

INSERT INTO `role_master` (`id`, `role`, `is_active`) VALUES
(1, 'Player', 1),
(2, 'Coach', 1);

-- --------------------------------------------------------

--
-- Table structure for table `specialization_master`
--

CREATE TABLE IF NOT EXISTS `specialization_master` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sport_id` int(10) NOT NULL,
  `name` varchar(500) NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `specialization_master`
--

INSERT INTO `specialization_master` (`id`, `sport_id`, `name`, `is_active`) VALUES
(1, 1, 'Batsman', 1),
(2, 1, 'Bowler', 1),
(3, 1, 'Wicket Keeper', 1),
(4, 2, 'Goal Keeper - Football', 1),
(5, 2, 'Defender - Football', 1),
(6, 2, 'Striker - Football', 1),
(7, 2, 'Mid Fielder - Football', 1),
(8, 4, 'Goal Keeper - Hockey', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sports_master`
--

CREATE TABLE IF NOT EXISTS `sports_master` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `sports_master`
--

INSERT INTO `sports_master` (`id`, `name`, `is_active`) VALUES
(1, 'Cricket', 1),
(2, 'Football', 1),
(3, 'Tennis', 1),
(4, 'Hockey', 1);

-- --------------------------------------------------------

--
-- Table structure for table `state_master`
--

CREATE TABLE IF NOT EXISTS `state_master` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=38 ;

--
-- Dumping data for table `state_master`
--

INSERT INTO `state_master` (`id`, `name`, `is_active`) VALUES
(1, 'Maharashtr', 1),
(2, 'karnataka', 1),
(3, 'Uttar Prad', 1),
(4, 'Bihar', 1),
(5, 'West Benga', 1),
(6, 'Madhya Pra', 1),
(7, 'Tamil Nadu', 1),
(8, 'Rajasthan', 1),
(9, 'Gujarat', 1),
(11, 'Andhra Pra', 1),
(12, 'Odisha', 1),
(13, 'Telangana', 1),
(14, 'Kerala', 1),
(15, 'Jharkhand', 1),
(16, 'Assam', 1),
(17, 'Punjab', 1),
(18, 'Chhattisga', 1),
(19, 'Haryana', 1),
(20, 'Delhi', 1),
(21, 'Jammu and ', 1),
(22, 'Uttarakhan', 1),
(23, 'Himachal P', 1),
(24, 'Tripura', 1),
(25, 'Meghalaya', 1),
(26, 'Manipur', 1),
(27, 'Nagaland', 1),
(28, 'Goa', 1),
(29, 'Arunachal ', 1),
(30, 'Puducherry', 1),
(31, 'Mizoram', 1),
(32, 'Chandigarh', 1),
(33, 'Sikkim', 1),
(34, 'Dadra and ', 1),
(35, 'Andaman an', 1),
(36, 'Ladakh', 1),
(37, 'Lakshadwee', 1);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_details`
--

CREATE TABLE IF NOT EXISTS `transaction_details` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `transaction_id` varchar(500) NOT NULL,
  `bank_txn_id` varchar(500) NOT NULL,
  `order_id` varchar(500) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `txn_type` varchar(100) DEFAULT NULL,
  `gateway_name` varchar(100) NOT NULL,
  `response_code` varchar(100) NOT NULL,
  `response_msg` text NOT NULL,
  `bank_name` varchar(500) NOT NULL,
  `mid` text NOT NULL,
  `payment_mode` varchar(500) NOT NULL,
  `refund_amount` varchar(500) DEFAULT NULL,
  `transaction_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=57 ;

--
-- Dumping data for table `transaction_details`
--

INSERT INTO `transaction_details` (`id`, `user_id`, `transaction_id`, `bank_txn_id`, `order_id`, `amount`, `status`, `txn_type`, `gateway_name`, `response_code`, `response_msg`, `bank_name`, `mid`, `payment_mode`, `refund_amount`, `transaction_date`) VALUES
(7, 0, '20201222111212800110168253402191210', '20201222111212800110168253402191210', '14222218116', 'TEST_1608619174292', '', NULL, '', '', '', '', '', '', NULL, '0000-00-00 00:00:00'),
(8, 0, '20201222111212800110168581002165589', '20201222111212800110168581002165589', '14548615869', 'TEST_1608619532035', '', NULL, '', '', '', '', '', '', NULL, '0000-00-00 00:00:00'),
(9, 0, '20201222111212800110168490002195414', '20201222111212800110168490002195414', '15960605453', 'TEST_1608619768332', '', NULL, '', '', '', '', '', '', NULL, '0000-00-00 00:00:00'),
(10, 0, '20201222111212800110168653602199630', '20201222111212800110168653602199630', '13882320758', 'TEST_1608621672917', '', NULL, '', '', '', '', '', '', NULL, '0000-00-00 00:00:00'),
(19, 0, '20201222111212800110168656702201039', '18069702036', 'TEST_1608635936308', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-22 16:48:59'),
(20, 0, '20201222111212800110168079402200301', '16669512676', 'TEST_1608636278654', '250.00', 'TXN_SUCCESS', NULL, 'SBI', '01', 'Txn Success', 'SBI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-22 16:54:41'),
(21, 0, '20201222111212800110168855702175884', '14070539880', 'TEST_1608636397933', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-22 16:56:40'),
(23, 0, '20201222111212800110168658902201041', '12293746757', 'TEST_1608637419072', '250.00', 'TXN_FAILURE', NULL, 'AXIS', '227', 'Your payment has been declined by your bank. Please try again or use a different method to complete the payment.', 'AXIS', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-22 17:13:42'),
(32, 0, '20201223111212800110168924402189098', '15866243134', 'TEST_1608702737404', '250.00', 'TXN_SUCCESS', NULL, 'PNB', '01', 'Txn Success', 'PNB', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 11:22:20'),
(33, 0, '20201223111212800110168894502218709', '18978357649', 'TEST_1608703900633', '250.00', 'TXN_SUCCESS', NULL, 'HDFC', '01', 'Txn Success', 'HDFC', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 11:41:40'),
(34, 0, '20201223111212800110168023103620293', '17820838198', 'TEST_1608704002362', '250.00', 'TXN_SUCCESS', NULL, 'SBI', '01', 'Txn Success', 'SBI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 11:43:23'),
(35, 0, '20201223111212800110168023103620293', '17820838198', 'TEST_1608704002362', '250.00', 'TXN_SUCCESS', NULL, 'SBI', '01', 'Txn Success', 'SBI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 11:43:23'),
(36, 0, '20201223111212800110168945302189302', '10950135679', 'TEST_1608704852215', '250.00', 'TXN_SUCCESS', NULL, 'HDFC', '01', 'Txn Success', 'HDFC', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 11:57:32'),
(37, 0, '20201223111212800110168241102192810', '16931995818', 'TEST_1608705684455', '250.00', 'TXN_SUCCESS', NULL, 'PNB', '01', 'Txn Success', 'PNB', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 12:11:24'),
(38, 0, '20201223111212800110168241102192810', '16931995818', 'TEST_1608705684455', '250.00', 'TXN_SUCCESS', NULL, 'PNB', '01', 'Txn Success', 'PNB', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 12:11:24'),
(39, 0, '20201223111212800110168358302205400', '14727865458', 'TEST_1608709252266', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 13:10:53'),
(40, 0, '20201223111212800110168097302188201', '10795175225', 'TEST_1608709667217', '250.00', 'TXN_SUCCESS', NULL, 'AXIS', '01', 'Txn Success', 'AXIS', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 13:17:48'),
(41, 0, '20201223111212800110168735402207426', '13308038957', 'TEST_1608709940156', '250.00', 'TXN_SUCCESS', NULL, 'HDFC', '01', 'Txn Success', 'HDFC', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 13:22:21'),
(42, 0, '20201223111212800110168935802190796', '11078779590', 'TEST_1608710294783', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 13:28:15'),
(43, 0, '20201223111212800110168544402191017', '16933823648', 'TEST_1608710382308', '250.00', 'TXN_SUCCESS', NULL, 'HDFC', '01', 'Txn Success', 'HDFC', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 13:29:43'),
(44, 0, '20201223111212800110168169602204826', '18390742046', 'TEST_1608710940760', '250.00', 'TXN_SUCCESS', NULL, 'AXIS', '01', 'Txn Success', 'AXIS', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 13:39:01'),
(45, 0, '20201223111212800110168894802220398', '15266090140', 'TEST_1608723065556', '250.00', 'TXN_SUCCESS', NULL, 'SBI', '01', 'Txn Success', 'SBI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 17:01:06'),
(46, 0, '20201223111212800110168297202222184', '18607841900', 'TEST_1608723542718', '250.00', 'TXN_SUCCESS', NULL, 'PNB', '01', 'Txn Success', 'PNB', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 17:09:03'),
(47, 0, '20201223111212800110168990802202415', '15820036703', 'TEST_1608723964260', '250.00', 'TXN_SUCCESS', NULL, 'HDFC', '01', 'Txn Success', 'HDFC', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 17:16:04'),
(48, 0, '20201223111212800110168555902199986', '14284822092', 'TEST_1608724066631', '250.00', 'TXN_SUCCESS', NULL, 'AXIS', '01', 'Txn Success', 'AXIS', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 17:17:47'),
(49, 0, '20201223111212800110168802202200015', '11125116623', 'TEST_1608724404838', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 17:23:25'),
(50, 1, '20201223111212800110168538402199484', '14195809177', 'TEST_1608724619833', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-23 17:27:00'),
(51, 1, '20201224111212800110168628303599995', '14033125303', 'TEST_1608786243727', '250.00', 'TXN_SUCCESS', NULL, 'ICICI', '01', 'Txn Success', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-24 10:34:04'),
(52, 1, '20201224111212800110168877502196439', '10546449841', 'TEST_1608786505974', '250.00', 'TXN_SUCCESS', NULL, 'SBI', '01', 'Txn Success', 'SBI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-24 10:38:26'),
(53, 1, '20201224111212800110168274102190135', '10631990529', 'TEST_1608788213004', '250.00', 'TXN_FAILURE', NULL, 'ICICI', '227', 'Your payment has been declined by your bank. Please try again or use a different method to complete the payment.', 'ICICI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-24 11:06:53'),
(54, 1, '20201228111212800110168107602196945', '18629334981', 'TEST_1609155502861', '250.00', 'TXN_SUCCESS', NULL, 'PNB', '01', 'Txn Success', 'PNB', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-28 17:08:24'),
(55, 1, '20201228111212800110168136802218178', '12787223743', 'TEST_1609155792593', '250.00', 'TXN_SUCCESS', NULL, 'SBI', '01', 'Txn Success', 'SBI', 'dYCLtv04241463291282', 'NB', NULL, '2020-12-28 17:13:13'),
(56, 8, '20210306111212800110168609487387187', '70622239635', 'TEST_1615018019005', '1.00', 'TXN_SUCCESS', NULL, 'ICICIPAY', '01', 'Txn Success', 'ICICI Bank', 'VcIqMo00127550993107', 'DC', NULL, '2021-03-06 13:37:02');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE IF NOT EXISTS `user_details` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `profile` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `alternate_mobile` varchar(20) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` int(11) NOT NULL,
  `zip_code` varchar(100) NOT NULL,
  `date_of_birth` int(10) NOT NULL,
  `month_of_birth` int(10) NOT NULL,
  `year_of_birth` int(10) NOT NULL,
  `role` varchar(10) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_blocked` tinyint(1) NOT NULL DEFAULT '0',
  `last_login` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime NOT NULL,
  `country` varchar(20) NOT NULL,
  `pcdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pudate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`id`, `profile`, `email`, `password`, `mobile`, `alternate_mobile`, `first_name`, `middle_name`, `last_name`, `address`, `city`, `state`, `zip_code`, `date_of_birth`, `month_of_birth`, `year_of_birth`, `role`, `is_active`, `is_blocked`, `last_login`, `created_at`, `modified_at`, `country`, `pcdate`, `pudate`) VALUES
(2, 'c6ed106b-e39a-4597-b37b-73aa5b24b8f6', 'a@gmail.com', 'a', '8', '8', '8', '8', '8', '8', '8', 1, '8', 2, 9, 2020, 'super_user', 1, 0, '2020-10-15 14:15:36', '2020-08-15 14:15:36', '2020-11-17 12:24:14', '', '2020-12-30 16:59:54', '2020-12-30 17:06:21'),
(3, '8b53e37d-9b34-4242-900d-52c8a19ac13f', 'ashukatkar24@gmail.com', 'XhAR08ru', '9765602975', '123456789', 'ashutosh', 'arun', 'katkar', 'hadapsar', 'pune', 20, '411028', 24, 5, 2000, 'user', 1, 0, '2020-11-10 19:11:53', '2020-11-10 19:11:53', '2020-11-27 11:46:32', '9', '2020-12-30 16:59:54', '2021-01-04 19:33:08'),
(4, 'a6553989-c5d9-469c-a73e-a9b388aaadcd', 'b@gmail.com', 'sYQfhhbC', '9765602985', '54545445545', 'ba', 'c', 'd', 'e', 'f', 18, '54664', 10, 11, 2020, 'user', 1, 0, '2020-11-20 19:07:13', '2020-11-20 19:07:13', '2020-12-03 10:57:22', '2', '2020-12-30 16:59:54', '2021-01-04 19:22:58'),
(6, '0f9562a0-3f5f-46fb-9cd9-db59fa52a8ab', 'sample@gmail.com', '1', '111', '111', 'sa', 's', 's', 's', 's', 14, 'sss', 29, 10, 2020, 'user', 1, 0, '2020-11-30 18:26:21', '2020-11-30 18:26:21', '2020-11-30 18:26:21', '12', '2020-12-30 16:59:54', '2020-12-30 17:06:21'),
(7, '175798f4-5bad-4fa2-9adf-c0e45efa6756', 'sample1@gmail.com', 'oA0SESLq', '7894561233', '123654987', 'sample', 'sample', 'sample', 'sample', 'sample', 22, '122', 28, 10, 2020, 'user', 1, 0, '2020-11-30 22:15:15', '2020-11-30 22:15:15', '2020-11-30 22:15:15', '14', '2020-12-30 16:59:54', '2021-01-04 19:14:45'),
(8, 'a0024e5a-26da-4f58-995f-4d6b6043d1a0', 'aniketbansode15@gmail.com', '12345', '8237440506', '9922341815', 'Aniket', 'M', 'Bansode', 'Ravi Darshan, B-501', 'Pune', 1, '411028', 2, 3, 2021, 'user', 1, 0, '2021-03-06 13:25:32', '2021-03-06 13:25:32', '2021-03-06 13:25:32', '1', '2021-03-06 13:25:32', '2021-03-06 13:25:32');

-- --------------------------------------------------------

--
-- Table structure for table `user_sport_mapping`
--

CREATE TABLE IF NOT EXISTS `user_sport_mapping` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `sport_id` int(10) NOT NULL,
  `years_age` int(10) NOT NULL,
  `months_age` int(10) NOT NULL,
  `specialization_id` int(10) DEFAULT NULL,
  `gender` varchar(20) NOT NULL,
  `weight` varchar(30) NOT NULL,
  `height` varchar(30) NOT NULL,
  `blood_group` varchar(30) NOT NULL,
  `education` varchar(500) DEFAULT NULL,
  `experience` varchar(500) DEFAULT NULL,
  `disability` varchar(20) NOT NULL,
  `disability_details` varchar(1000) DEFAULT NULL,
  `achievement` varchar(1000) DEFAULT NULL,
  `level_palyed_on` varchar(500) DEFAULT NULL,
  `account_no` varchar(1000) DEFAULT NULL,
  `ifsc` varchar(500) DEFAULT NULL,
  `future_plan` varchar(1000) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=107 ;

--
-- Dumping data for table `user_sport_mapping`
--

INSERT INTO `user_sport_mapping` (`id`, `user_id`, `sport_id`, `years_age`, `months_age`, `specialization_id`, `gender`, `weight`, `height`, `blood_group`, `education`, `experience`, `disability`, `disability_details`, `achievement`, `level_palyed_on`, `account_no`, `ifsc`, `future_plan`, `category`, `is_active`, `created_date`, `updated_date`, `role_id`) VALUES
(12, 3, 1, 21, 8, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-11-10 19:13:16', '2020-11-10 19:13:16', 0),
(13, 3, 1, 22, 3, 2, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-11-19 10:06:57', '2020-11-19 10:06:57', 0),
(14, 3, 2, 1, 1, 5, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-11-21 19:46:42', '2020-11-21 19:46:42', 0),
(15, 3, 1, 1, 1, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-11-21 19:47:10', '2020-11-21 19:47:10', 0),
(16, 4, 1, 22, 2, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-09-01 00:00:00', '2020-11-26 11:15:02', 0),
(17, 4, 1, 22, 2, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-09-01 00:00:00', '2020-12-01 11:04:53', 0),
(19, 4, 1, 1, 1, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-09-01 00:00:00', '2020-12-01 19:17:50', 1),
(55, 4, 2, 18, 2, 5, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-22 13:50:28', '2020-12-22 13:50:28', 1),
(56, 4, 1, 111, 1, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-22 13:54:54', '2020-12-22 13:54:54', 1),
(57, 4, 4, 19, 2, 8, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-22 13:55:57', '2020-12-22 13:55:57', 1),
(58, 4, 1, 44, 4, 2, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-22 14:01:39', '2020-12-22 14:01:39', 1),
(69, 4, 2, 22, 2, 5, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-23 11:22:16', '2020-12-23 11:22:16', 1),
(95, 4, 1, 33, 3, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-24 16:59:47', '2020-12-24 16:59:47', 1),
(96, 7, 1, 20, 0, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-28 09:39:54', '2020-12-28 09:39:54', 1),
(97, 7, 4, 33, 3, 8, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-28 09:40:10', '2020-12-28 09:40:10', 1),
(98, 7, 2, 50, 0, 4, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-28 09:41:22', '2020-12-28 09:41:22', 2),
(99, 7, 2, 55, 5, 4, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-28 17:08:14', '2020-12-28 17:08:14', 1),
(100, 7, 4, 25, 5, 8, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2020-12-28 17:13:10', '2020-12-28 17:13:10', 1),
(101, 8, 1, 27, 12, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2021-03-06 13:26:22', '2021-03-06 13:26:22', 1),
(102, 8, 1, 12, 1, 1, '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 1, '2021-03-06 13:36:57', '2021-03-06 13:36:57', 1),
(103, 8, 1, 27, 1, 1, 'BE', '4 years', 'Yes', 'No Disability', 'Not Yet', '0', '123456789', 'ICICI001', 'NA', '1', '1', '2021-03-07 12:15:40', '2021-03-07 12:15:40', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0),
(104, 8, 2, 21, 11, 5, 'female', '12', '5 Inch', 'A+', 'BE', '4 Years', 'Yes', 'Nio', 'NA', 'NA', '123467890', 'ICICI001', 'NA', 1, 1, '2021-03-07 12:18:33', '2021-03-07 12:18:33', 0),
(105, 8, 2, 34, 1, 5, 'male', '50', '5 inch 4', 'A-', 'BE', '4', 'Yes', NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2021-03-07 14:11:22', '2021-03-07 14:11:22', 0),
(106, 8, 2, 23, 6, 5, 'male', '45', '5''6', 'A-', 'BE', '4 Years', 'No', NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2021-03-07 14:19:24', '2021-03-07 14:19:24', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

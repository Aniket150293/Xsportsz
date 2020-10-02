--
-- Database: `xsportsz`
--

-- --------------------------------------------------------

--
-- Table structure for table `state_master`
--

CREATE TABLE `state_master` (
  `id` int(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `state` varchar(150) NOT NULL,
  `is_active` tinyint(1) NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `transaction_details`
--

CREATE TABLE `transaction_details` (
  `id` int(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `mode_of_transfer` tinyint(1) DEFAULT NULL,
  `type_of_transfer` tinyint(1) DEFAULT NULL,
  `from_account` int(11) NOT NULL,
  `to_account` int(11) NOT NULL,
  `amount` bigint(20) NOT NULL,
  `from_bank_id` int(10) DEFAULT NULL,
  `to_bank_id` int(10) DEFAULT NULL,
  `from_user_id` int(10) DEFAULT NULL,
  `to_user_id` int(10) DEFAULT NULL,
  `performed_date` datetime DEFAULT NULL,
  `is_pending` tinyint(1) DEFAULT NULL,
  `is_cancelled` tinyint(1) DEFAULT NULL,
  `is_approved` tinyint(1) DEFAULT NULL,
  `performed_by` int(11) DEFAULT NULL
);

-- ---------------------------------------------------------- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `profile_created_by` varchar(15) NOT NULL,
  `profile` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `alternate_mobile` varchar(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` int(11) NOT NULL,
  `zip_code` varchar(100) NOT NULL,
  `date_of_birth` int(10) NOT NULL,
  `month_of_birth` int(10) NOT NULL,
  `year_of_birth` int(10) NOT NULL,
  `pan_number` varchar(100) NOT NULL,
  `adhar_number` varchar(1000) NOT NULL,
  `role` varchar(10) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_blocked` tinyint(1) NOT NULL DEFAULT 0,
  `last_login` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE `user_profiles` (
  `id` varchar(100) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `size` varchar(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(500) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
);

-- --------------------------------------------------------
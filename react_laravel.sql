-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2018 at 04:25 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_migrations`
--

CREATE TABLE `app_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `app_migrations`
--

INSERT INTO `app_migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2018_01_06_031731_create_products_table', 1),
(4, '2018_01_27_021442_create_user_verifications_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `app_password_resets`
--

CREATE TABLE `app_password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `app_products`
--

CREATE TABLE `app_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `availability` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `app_products`
--

INSERT INTO `app_products` (`id`, `created_at`, `updated_at`, `title`, `description`, `price`, `availability`) VALUES
(1, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Dr.', 'Dolores voluptatibus est ut saepe possimus. Qui ut non sed sed aut est. Nulla quasi et eaque molestiae eaque ut. Corporis aut ea consequatur nostrum sequi ea.', 34, 1),
(2, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Mr.', 'Similique explicabo cum similique qui ullam. Nobis hic est aspernatur sed quos deleniti dolorem nihil.', 66, 1),
(3, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Prof.', 'Reprehenderit quis itaque mollitia odio expedita nulla delectus. Saepe fugit sed repudiandae blanditiis et aut. Harum qui fugit ipsum atque error quibusdam deleniti ut.', 85, 1),
(4, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Mrs.', 'Omnis architecto praesentium libero voluptates ratione deserunt et nostrum. Et odio nam aut. Dolores id earum est quas ut sint omnis.', 26, 1),
(5, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Mrs.', 'Quibusdam quia culpa autem fuga est hic. Officia sint assumenda facere esse. Aliquid est fugit est animi.', 94, 1),
(6, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Dr.', 'Molestiae expedita et itaque voluptate. Consequatur quasi et commodi eos. Non et sit molestiae eveniet ut dignissimos. Non non culpa dolores.', 75, 1),
(7, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Miss', 'Explicabo autem magnam harum quo. Doloremque dolores est sit molestiae adipisci eveniet fugiat adipisci. Asperiores praesentium fugiat sed. Totam non ut odit repellat magnam est.', 42, 0),
(8, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Prof.', 'Tempore aut dolorem sunt ea expedita saepe minima. Enim nemo laborum deserunt. Aut dolor est voluptatibus et.', 40, 0),
(9, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Mrs.', 'Omnis quas sed ipsam dignissimos. Possimus totam laboriosam consequatur tempora. Quasi corrupti quis odit pariatur.', 15, 1),
(10, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Prof.', 'Nobis explicabo atque magnam aut qui ea. Doloribus quos reiciendis molestiae totam dignissimos animi qui. Et ea est doloremque consequatur. Laudantium omnis saepe qui recusandae ut ut qui.', 21, 0),
(11, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Mr.', 'Libero porro aut rerum reprehenderit. Cumque est quia nostrum sint harum perspiciatis. Maxime qui consequatur qui ea sit aliquid.', 11, 1),
(12, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Miss', 'Quisquam maxime perferendis ut consequatur. Cumque beatae nesciunt repudiandae. Et similique rerum reiciendis iure soluta hic.', 14, 1),
(13, '2018-01-05 21:55:48', '2018-01-05 21:55:48', 'Prof.', 'Illo inventore et officia qui vero aspernatur occaecati. Repellendus magnam aut quod magnam quibusdam officiis perferendis. Ipsam fugit nulla debitis aliquid tempore. Eum quisquam velit omnis rerum nisi.', 89, 0),
(14, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Sapiente sed placeat provident quisquam eveniet rerum et. Impedit quasi rerum voluptatem consequuntur quia eveniet. Animi velit quas et voluptate delectus sunt. Earum impedit voluptatem aliquid qui laudantium quia.', 77, 0),
(15, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Distinctio reprehenderit consequatur voluptatem. Dicta praesentium quos veniam saepe deleniti quibusdam. Quia est esse ut corrupti non quae ratione. Non fuga debitis reprehenderit quibusdam.', 66, 0),
(16, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Quia beatae dolores magni officia. Quos porro esse sunt eligendi labore consectetur et. Laboriosam beatae in et nihil adipisci similique voluptas nobis.', 75, 0),
(17, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Aut qui inventore iure voluptatem nam sed. Ipsa iure neque blanditiis ullam ea. Unde quidem hic deserunt labore ut occaecati.', 19, 0),
(18, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Maiores necessitatibus natus dolorem corrupti. Maiores aut quia dolor molestias quam impedit. Necessitatibus fugit quae natus aut fugiat.', 13, 0),
(19, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'At atque rerum et accusamus accusamus et velit. Facilis non voluptatibus alias iusto. Sit quibusdam et veniam nihil id est dicta. Nam architecto et deleniti id rerum.', 21, 1),
(20, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Libero est expedita libero fugiat commodi voluptatem exercitationem. Qui quia illum voluptates et ut labore quia. Cupiditate sint est sed est.', 66, 0),
(21, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Ms.', 'In vitae aliquam eos doloribus. Alias rem sit nemo minus deleniti. Nihil nostrum magnam debitis tempore culpa alias et.', 33, 0),
(22, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Officiis sed ducimus doloremque aperiam voluptatum suscipit enim. Aut neque tempore reprehenderit laboriosam. Illo voluptas earum beatae qui sed.', 54, 1),
(23, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Nobis magnam excepturi et delectus quod. Ad sapiente aut officia quidem rerum tempore ad. Dolorem voluptatem facere tempora ut commodi autem sint. Quis sed et quia illum provident.', 24, 1),
(24, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Qui ipsa ipsam qui reprehenderit sit numquam. Ullam aliquam nihil nobis amet. Fugiat at quia voluptatibus consequatur dolores.', 48, 1),
(25, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Totam inventore magnam in nemo voluptas doloremque eius. Consequatur pariatur ut ipsa quasi aut ut. Recusandae facilis atque consequatur velit. Molestias minima ut ab quam molestiae ullam.', 78, 1),
(26, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Velit officia architecto voluptatem sit. Sunt aliquam est quis temporibus dicta necessitatibus. Et nobis quo ea nam nulla debitis sit. Natus nisi rem et odio velit at maiores aut.', 88, 1),
(27, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Voluptatum saepe sapiente debitis est ut. Amet aperiam quod quos consequuntur aperiam iste. Iusto totam fugit voluptas. Ut et libero corporis quia distinctio facere autem. Eum aliquam id vel iure.', 74, 1),
(28, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Illum esse numquam magnam dolore. Dolorem amet ea voluptas repellendus dolorem qui odio. Nesciunt animi laudantium suscipit quia sit minus. Similique ex iste hic nemo repellendus quis quia.', 19, 1),
(29, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Et optio facilis veritatis. Vel deserunt laborum impedit consequuntur mollitia explicabo. Et totam occaecati quis qui et architecto. In dolores sint excepturi.', 24, 0),
(30, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Molestiae voluptatem aut numquam sed voluptatem voluptatem. Repellendus ipsam harum est ipsum dolor. Maiores est veniam a ex debitis exercitationem accusamus non.', 74, 1),
(31, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Miss', 'Omnis suscipit iusto excepturi et debitis enim rerum. Perspiciatis ea ipsum consectetur aut ut. Commodi sint non natus voluptas quasi. Perferendis quas sint eos porro deserunt quis in similique.', 54, 1),
(32, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Blanditiis est repellat nihil ut fugit accusantium. Aliquid qui aut quia rerum et harum.', 36, 0),
(33, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Miss', 'Eveniet maxime consequatur aut repudiandae repellendus consequatur numquam. Itaque omnis nam dignissimos. Illum accusamus omnis facilis. Aut ex quisquam id veniam nulla.', 77, 1),
(34, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Architecto error molestiae vel veniam sed unde. Ipsum rerum recusandae blanditiis repellendus ducimus voluptatem aut. Sed molestiae doloremque consequatur pariatur et illo culpa. Itaque cumque quisquam quibusdam cupiditate cupiditate sed voluptatum.', 73, 0),
(35, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Miss', 'Hic tenetur ab quod voluptatem. Expedita autem assumenda facilis. Sit nam sint velit voluptas qui sunt sequi.', 3, 1),
(36, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Reiciendis deserunt labore accusantium voluptates totam velit. Voluptatem officia sequi soluta quos at cumque. Eum asperiores et officia amet porro eum.', 65, 1),
(37, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mrs.', 'Est blanditiis et illo veritatis. Et impedit atque id dicta voluptas.', 97, 0),
(38, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Voluptatem illo ipsam rerum sit hic esse quos vel. Molestias facere voluptatum odit.', 16, 0),
(39, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mrs.', 'Nisi voluptatem perferendis quaerat ea id natus dolore dolores. Possimus maiores laudantium amet inventore delectus praesentium aut. Hic voluptate non eveniet amet sunt neque ut.', 31, 0),
(40, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Ratione repudiandae est at aut. Id enim tenetur laboriosam praesentium. Et id aspernatur ea quos. Ea eum aut et est molestiae rem magnam.', 17, 0),
(41, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Ms.', 'Facere eligendi itaque corporis repudiandae. Et voluptatem et dolorem est voluptatem dolores ab ea.', 68, 0),
(42, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Nisi qui quia at ut dolor deserunt at. Iure tempora et impedit vero ut ut libero fuga.', 65, 0),
(43, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Autem fuga rerum sit nemo facere rerum repudiandae officiis. Cumque omnis doloribus quisquam aut. Nobis quia ullam qui similique.', 64, 0),
(44, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Reiciendis ea ad iusto debitis. Et aut consequuntur exercitationem commodi vel atque eveniet. Enim minima quidem sunt eos fugit libero magnam optio.', 66, 1),
(45, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Prof.', 'Consequatur sint quisquam enim odio ratione quis. Molestiae in magni explicabo. Quis voluptate mollitia aut aut optio aliquam.', 43, 0),
(46, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Dr.', 'Itaque placeat voluptate voluptate. Repudiandae impedit molestiae voluptatum velit nihil. Culpa neque quo est voluptatem. Quae reprehenderit expedita mollitia enim et id ipsam.', 10, 0),
(47, '2018-01-05 21:55:49', '2018-01-05 21:55:49', 'Mr.', 'Aut rerum occaecati ut inventore. Voluptatem repellendus voluptatibus rerum ipsa. Hic in esse nisi maxime accusamus rerum at.', 67, 1),
(48, '2018-01-05 21:55:50', '2018-01-05 21:55:50', 'Dr.', 'Aut voluptatem hic voluptas. Et error eaque deleniti sit eius. Omnis dolor ut excepturi est laborum labore.', 45, 0),
(49, '2018-01-05 21:55:50', '2018-01-05 21:55:50', 'Miss', 'Et quisquam sed consequatur numquam consequatur. Nostrum voluptatem et voluptas quidem sequi iure quos. Officia aperiam eos unde dicta cupiditate. Exercitationem perspiciatis dolores quaerat non explicabo officiis hic rerum.', 50, 0),
(50, '2018-01-05 21:55:50', '2018-01-05 21:55:50', 'Ms.', 'Cumque voluptas vero labore libero assumenda. Necessitatibus ut magnam asperiores sint et voluptatem. Modi veritatis dolorem et incidunt eaque.', 12, 0);

-- --------------------------------------------------------

--
-- Table structure for table `app_users`
--

CREATE TABLE `app_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `app_users`
--

INSERT INTO `app_users` (`id`, `picture`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `is_verified`) VALUES
(4, 'b12e4856e088d2fe569fb536b5998798.jpg', 'Manish Kumar', 'makkanimation@gmail.com', '$2y$10$Oj1WUFpb8byYyAEBp5ThJub1ERnSe4e8F4gDFAf8IxbCxxJUqgKrS', NULL, '2018-01-26 21:24:55', '2018-01-26 21:26:17', 1),
(55, '6b0f641c72f99dbb3380394d046b661b.jpg', 'Zechariah Schultz', 'amina58@hotmail.com', '$2y$10$QoAme/F5ooEERflrP7q8pehWzYh75y0Tpxu2VrwncGiL5yZ4dipku', NULL, '2018-01-28 12:47:38', '2018-01-28 12:47:38', 1),
(56, 'c577c81d80fc8adc19109e1c1eb74b03.jpg', 'Katlyn Bruen', 'abernathy.helen@yahoo.com', '$2y$10$1D7RStnn69mhT5DHtOCV3OzvSJh3lPRdmqWlngYbmbanlyrLYInLi', NULL, '2018-01-28 12:47:39', '2018-01-28 12:47:39', 1),
(57, '89dac4f0784bcc12eccd9e3a3bb286e7.jpg', 'Modesto McGlynn', 'dgrant@yahoo.com', '$2y$10$ewujZ5zStC2e4cpWArVpjOYegOoH4nWDSWyYtaQ6amYvwnf4CiGuu', NULL, '2018-01-28 12:47:40', '2018-01-28 12:47:40', 1),
(58, '04f0e4ccfdb1a277d788a05055fddb79.jpg', 'Prof. Orin Pouros DDS', 'nolan.bettie@shanahan.info', '$2y$10$6dNp2WMs2YqcDZbogI7esOIsN.kFEBWfMXv3E9OLL9X5Bcc/kiPgq', NULL, '2018-01-28 12:47:42', '2018-01-28 12:47:42', 1),
(59, 'eee800595ffab7521554d1eead3fc4e8.jpg', 'Giovani Tromp MD', 'alfonzo.mertz@yahoo.com', '$2y$10$aheFN3I6HGmYyr3r33SPgu9PfFV3ZZMoyGeKW1tnirx5goxF7910q', NULL, '2018-01-28 12:47:43', '2018-01-28 12:47:43', 1),
(60, '55c7da99a56f59ebcc803f5e9215ca53.jpg', 'Mrs. Rosalee Waters V', 'yzemlak@marvin.org', '$2y$10$qfXiuhCAdU0muYrmIX/ueOY99Pg50lq.pQDE0jofpbj64hwuzrZaq', NULL, '2018-01-28 12:47:44', '2018-01-28 12:47:44', 1),
(61, '776adfa47a470577b05cf879e3e071e0.jpg', 'Fanny Lubowitz', 'derek.dickens@gmail.com', '$2y$10$4xrYkKpgB.BbnN8.lovEKONlJWVlXeKJ2dtrmBTmqnaaA2/0XBPWK', NULL, '2018-01-28 12:47:45', '2018-01-28 12:47:45', 1),
(62, 'f56b27e342fe191fd06685ee96448377.jpg', 'Tiana Simonis', 'aveum@reichert.com', '$2y$10$8WtRq0Zc6GtAhOiaiiEWYuvFN5GckhtR5DQEbsJRJNNcKBTq6s/AS', NULL, '2018-01-28 12:47:47', '2018-01-28 12:47:47', 1),
(63, 'a4efb8ada0fe43e2843d3a39524699b3.jpg', 'Dr. Arianna Mayert Jr.', 'devon.langosh@hotmail.com', '$2y$10$z557xQ939551WdTR6.qK5OJU0kurtVAo/tscFw3DsdcFBw2.LPjpe', NULL, '2018-01-28 12:47:48', '2018-01-28 12:47:48', 1),
(64, '62ad91c843ca0ecf4ab515aee1475294.jpg', 'Alexzander Lindgren', 'leonora.hudson@trantow.com', '$2y$10$0D/k7AhzehD7UosD84lxZOL0jo/Nczyxh13e16nyWACEAs/Fs21dK', NULL, '2018-01-28 12:47:49', '2018-01-28 12:47:49', 1),
(65, '8be0c38add9bb306aa14a1668796433d.jpg', 'Prof. Kenneth Hoeger', 'sigrid45@hotmail.com', '$2y$10$nlARNZGECqupG1RrrvBGX.d2OvjLZjPq5rTUXAMaeDiL8eGR1u0tW', NULL, '2018-01-28 12:47:50', '2018-01-28 12:47:50', 1),
(66, '728931f9c3847cc27cef5dce02c69019.jpg', 'Prof. Weldon Aufderhar III', 'tpollich@gmail.com', '$2y$10$WZ6XUdVwoWxhHP0kFwlUH.HeauxbE87Ydv.RYE2EnCRSV3QqOnKyC', NULL, '2018-01-28 12:47:51', '2018-01-28 12:47:51', 1),
(67, '924b8cd41f1550976ef3ce2a7df799d1.jpg', 'Jared Paucek II', 'schowalter.marcelo@gmail.com', '$2y$10$Dn90pjIv6TjgY0Ji1TQnWON8mQZBll7xTrrIhBnklWaFvaFbbWueK', NULL, '2018-01-28 12:47:52', '2018-01-28 12:47:52', 1),
(68, '4386b0f58cda5d1d8219ca7b4cf00cf0.jpg', 'Chaya Boyle', 'harmony54@gmail.com', '$2y$10$j0gJIm673V7x3ebDlCy1wOfK3YAraiTkbrEdsx2XSa4lNIi2h/s8K', NULL, '2018-01-28 12:47:53', '2018-01-28 12:47:53', 1),
(69, '36137f612b3c590f7e7180bdb751c404.jpg', 'Dr. Alva Bosco', 'jeremy.eichmann@yahoo.com', '$2y$10$lTKJWxgq1kq03TiLFIxqFOhGzThUTuq.vETGVo/oVcQwMXbw5pEua', NULL, '2018-01-28 12:47:54', '2018-01-28 12:47:54', 1),
(70, 'bc07a390611c0b5271a417b547752030.jpg', 'Miss Aurelia Nolan I', 'harmon32@yahoo.com', '$2y$10$oSQziNvg7JcHSdJ44R9nKu.uZczGXoGXeiMJuiiZRnWjGJhdjTLSe', NULL, '2018-01-28 12:48:00', '2018-01-28 12:48:00', 1),
(71, '5d9b343174414ad33f1226dc331565c2.jpg', 'Flossie Heathcote', 'schulist.valentin@okuneva.com', '$2y$10$9Wr4BTiZP7youl.bs3nw5u6E3hnhDCvA9LLk6DrqrfN5QfdrV2UlG', NULL, '2018-01-28 12:48:01', '2018-01-28 12:48:01', 1),
(72, 'b12e4856e088d2fe569fb536b5998798.jpg', 'Kristy Goyette', 'ucrona@yahoo.com', '$2y$10$lvXa2bvFA3RKeVdb6jWsr.Ft7E5s8W5VZ0IaFMvy/2UgVFxhAI1am', NULL, '2018-01-28 12:48:02', '2018-01-28 12:48:02', 1),
(73, '8bc4c2b747352b5cbe62b3cb10d76e41.jpg', 'Devonte Klein', 'katrina40@larkin.net', '$2y$10$ODqmws0MPqqP.m5yoxMEAe3hWU6aorK0aOtRXjtnY9tcFMVZbOlBy', NULL, '2018-01-28 12:48:04', '2018-01-28 12:48:04', 1),
(74, 'c024c681f08f9dd05ed6f19cd16dddb3.jpg', 'Jesse Predovic', 'farrell.gavin@gmail.com', '$2y$10$8vNhCbee.emfaW3AFlfyCeCKdtWkI532WcL/gknz88WM/zPEWtJWe', NULL, '2018-01-28 12:48:05', '2018-01-28 12:48:05', 1),
(75, '72de2e4cc3d3f10ff2603783ce166bf6.jpg', 'Keyon Kling', 'enrico.blick@hotmail.com', '$2y$10$oFh4OjhUOI4ZyWuYqsC4v.2deBQT7cCFeYWEZ88S0jRcb0.VDo/Pq', NULL, '2018-01-28 12:48:06', '2018-01-28 12:48:06', 1),
(76, '90323e89077f3aeaab106ea24b536b63.jpg', 'Kendra Waelchi V', 'devan71@yahoo.com', '$2y$10$zSC5JMXHLCSRyJfTdh1zTOo6UsN4XrK9/aQuaPYTJvdclZGzyFv2.', NULL, '2018-01-28 12:48:07', '2018-01-28 12:48:07', 1),
(77, 'd55cc5c6c4a29ae5272604fa19db5e82.jpg', 'Lupe Bode', 'turner.ewell@hotmail.com', '$2y$10$5dYt5.dqpGCTZ.fc5jyAruBqXqpxe0QpEwUNBs6ws9ZuJeFMDo99i', NULL, '2018-01-28 12:48:08', '2018-01-28 12:48:08', 1),
(78, '580411769ab9dd43777c7062677088f1.jpg', 'Prof. Rosetta Schroeder Jr.', 'summer72@farrell.com', '$2y$10$7FL5qFOsv4hwBxWf3voGDONE/oE5NFlSwpzh5qMnfkqkK7kxMDS/i', NULL, '2018-01-28 12:48:09', '2018-01-28 12:48:09', 1),
(79, 'd0c544e61f8585ba641a618ac53fe9b8.jpg', 'Dr. Mason Brakus Sr.', 'awaters@yahoo.com', '$2y$10$O1mxIBxfFiwu.EVO9qqGj.lxyUZTwEWulAe8AP2ASsxyEP5TsOiZO', NULL, '2018-01-28 12:48:10', '2018-01-28 12:48:10', 1),
(80, '7747235d0970f1f8ae42a108fd941a28.jpg', 'Mr. Colin Stanton V', 'hmurphy@yahoo.com', '$2y$10$j7SQEJ4AnbT3G2IpJSlHX.pCbVRChjPVDJ1aAkmGngjoq25Qypfum', NULL, '2018-01-28 12:48:11', '2018-01-28 12:48:11', 1),
(81, 'f0efaa6d563dffb643e568e5c610446f.jpg', 'Mrs. Genevieve Cummerata III', 'cooper.mccullough@connelly.info', '$2y$10$zg9NZE19BWceZxv/OqKWI.5RDBwBurIgqhIy0cchwDlcLCAIRXOPK', NULL, '2018-01-28 12:48:13', '2018-01-28 12:48:13', 1),
(82, 'c6907fc5ef56ec9a4a2aa4feae4bd7f3.jpg', 'Dr. Joel Parker', 'rdibbert@wilkinson.com', '$2y$10$NOj1LnxE0zKv8bELz3pMze.NaAhVMSY385IN.Vl2P5tzceW/O9Cvm', NULL, '2018-01-28 12:48:14', '2018-01-28 12:48:14', 1),
(83, 'e48ed84fa4dbba6bcfe680748b985c7a.jpg', 'Rudy Anderson', 'cassin.hershel@hotmail.com', '$2y$10$Md3wiMgfBz445v1gWtJIGeF7sQJYLVsMur1ldvOZ7et1SbpzrqMQm', NULL, '2018-01-28 12:48:16', '2018-01-28 12:48:16', 1),
(84, '1606944e8a2606949482bced2a10df32.jpg', 'Koby Huel', 'adriana.halvorson@hotmail.com', '$2y$10$TzvSLC7ctdhhSfFtxZ.15OigNj.pLNyTLcQYxIq1LDTcg8fzqzp.C', NULL, '2018-01-28 12:48:17', '2018-01-28 12:48:17', 1),
(85, 'a2d6efc4b875bb9bbcce4010084a9ba0.jpg', 'Prof. Abby Lakin', 'david74@hills.com', '$2y$10$.gt6Vkv8.jCu3mN9wf4ubuut79dc/fA6mIcp6Q95.QNEHJFt0JhtG', NULL, '2018-01-28 12:48:18', '2018-01-28 12:48:18', 1),
(86, '55565035759a0b89e45ed9ef89d2f671.jpg', 'Jasmin Dietrich', 'arvel57@bashirian.net', '$2y$10$oEBXs2rSuxNJvRuiOXk7MOThEh3LcHKNWjf7bPK868aDEJJq77WGS', NULL, '2018-01-28 12:48:22', '2018-01-28 12:48:22', 1),
(87, '44a40d44fecfb83ca5b2d23c1cdb0860.jpg', 'Dr. Reymundo Mosciski DDS', 'jazlyn.koch@marks.info', '$2y$10$lmjnaLUSqi76x67w8QDe/ODuDi52xpEA8u7QZm.bDkNIDsygsaJpa', NULL, '2018-01-28 12:48:26', '2018-01-28 12:48:26', 1),
(88, 'cd0ba193322c0568d3324152beca04e8.jpg', 'Reina Hackett', 'kailee.wintheiser@padberg.com', '$2y$10$vvItjY84Jdr2CkcI6tBpCOlwDufFiUXXAItaq3uezz8AwRulTooMa', NULL, '2018-01-28 12:48:27', '2018-01-28 12:48:27', 1),
(89, '62201c7b129cc58c8b508fed8de501dd.jpg', 'Kirstin Jerde', 'iwolff@hotmail.com', '$2y$10$YKb9WfwDv859GDP.BoBVTOWWAPudLwG/45veGq5zBUkzi/yJupPMu', NULL, '2018-01-28 12:48:28', '2018-01-28 12:48:28', 1),
(90, '400147104d5686a6009c26a474efe8f7.jpg', 'Euna Price', 'moore.winifred@bernhard.info', '$2y$10$x7A9d/qD7LNipMtRSifM8uyon1AASkI4lAtOll75b50QUn7WjRBdW', NULL, '2018-01-28 12:48:29', '2018-01-28 12:48:29', 1),
(91, '490b8a64c5603a9cd3a9be6504c850a0.jpg', 'Tavares Hartmann', 'alfreda.aufderhar@stroman.com', '$2y$10$6Z96L5K4AK0OepwzMHkTUuehmRnvALWN90tUg1awvrhwuC5VFv/7i', NULL, '2018-01-28 12:48:30', '2018-01-28 12:48:30', 1),
(92, '79aaf47842e81d754365e571851af7b7.jpg', 'Noemi Johnston IV', 'amya60@jast.org', '$2y$10$ka0W7UsK1072nHpo.lLhLul6gncjh7rUjnNlGw7ijEjWELHTu0eGu', NULL, '2018-01-28 12:48:32', '2018-01-28 12:48:32', 1),
(93, '561310edddeb40e627edc44c157ec23f.jpg', 'Kameron Grady', 'lola.bashirian@hotmail.com', '$2y$10$tScwvIZEixBl0PBQ5s/wmO7UEooebs8Z.k9QpKlImNTJQyVRxIGf2', NULL, '2018-01-28 12:48:33', '2018-01-28 12:48:33', 1),
(94, 'bfdbd47b76823d5a010daf56e29a0d60.jpg', 'Royal Dach', 'joe43@hotmail.com', '$2y$10$7kCCp7gqJF0qskCgAwpP6ORsnx6QMECqLhAf17TlV0LlzB5V7vWO2', NULL, '2018-01-28 12:48:34', '2018-01-28 12:48:34', 1),
(95, 'f10904752fbed435c6a0bf8dba02286a.jpg', 'Cletus Franecki DVM', 'trace11@schroeder.com', '$2y$10$6y5eC.ulEshwEc4FcjNB1.u5WWWQaExrymNTSsVSdDenEk2g.KZdu', NULL, '2018-01-28 12:48:35', '2018-01-28 12:48:35', 1),
(96, '86917513c94ec79c084876af229a4f7e.jpg', 'Brody Welch', 'antwon.towne@gmail.com', '$2y$10$VUXtBnLfe2CzBN8pwSAKaumG5plrClBCz5xJ2wjSl3u7T.2HNmBsu', NULL, '2018-01-28 12:48:36', '2018-01-28 12:48:36', 1),
(97, '9142f89d51e8e385d5bcd415e08bd46a.jpg', 'Prof. Ulises Monahan', 'ahmad61@hotmail.com', '$2y$10$5UHCr7Pw6x/UN7dhiePukOwDq9ToXw/q2Yb4C1ncP6VJ/yvskdCO6', NULL, '2018-01-28 12:48:38', '2018-01-28 12:48:38', 1),
(98, '555d8626b76bdb00f38513d9451b7a22.jpg', 'Verda Welch', 'everette.walker@douglas.info', '$2y$10$Sm/XBe3tl.Q46E1S1gyKIOlJu7XVqgKQM5NasIw1iFVPqPbAG3d3S', NULL, '2018-01-28 12:48:39', '2018-01-28 12:48:39', 1),
(99, '2032d323496590fda24eb189e32bc658.jpg', 'Al Murphy', 'max87@emard.com', '$2y$10$zY/fGGHLljrV0tDiGrwV8urjdoI8fHoIFjL0047rO/2Nk5aQRjglm', NULL, '2018-01-28 12:48:40', '2018-01-28 12:48:40', 1),
(100, 'b7b047bcb71f03d71d99b4db4952e904.jpg', 'Earnest Buckridge', 'alessandra11@yahoo.com', '$2y$10$4CCkvI/7YkNp2tpwlDWbP.EvCM0xHrniaNxfJf10y7Q9plgf1JN..', NULL, '2018-01-28 12:48:41', '2018-01-28 12:48:41', 1),
(101, '902438f7957a0de8cdbbcf515e30a1a7.jpg', 'Dr. Joy Blick', 'krystel72@mills.com', '$2y$10$dH/FFQtnHSixSjSIL7/35u.YfRB3wMBCpzu1vtZ9gZr59VatnHl9a', NULL, '2018-01-28 12:48:42', '2018-01-28 12:48:42', 1),
(102, '77bb12efcdda80831f8c53bf0f32f085.jpg', 'Jettie Gibson', 'cordell11@gmail.com', '$2y$10$eyl/LLAoDjbFeDw770Njn.g.edSQzQJZc3pwrRSOF9fS4yq0hp252', NULL, '2018-01-28 12:48:43', '2018-01-28 12:48:43', 1),
(103, '6a532c075226aef2da8ffaa1ca030142.jpg', 'Bryce Schultz', 'pcormier@legros.com', '$2y$10$sDvhIKZlfVO2Ceq3fpGS5eFX9NRs3EJCMZm9XPXStXJzHW5vusd6m', NULL, '2018-01-28 12:48:44', '2018-01-28 12:48:44', 1),
(104, '8cf8cd55c679ee8bb09cc2e2c6a038f2.jpg', 'Prof. Chaya Walker I', 'van.padberg@gmail.com', '$2y$10$EPYLSsXiIUh4RvQCbCJSm.6gLsAk8T0SdJ98SwhV1vRj4YtfGDnZC', NULL, '2018-01-28 12:48:45', '2018-01-28 12:48:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_user_verifications`
--

CREATE TABLE `app_user_verifications` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_migrations`
--
ALTER TABLE `app_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_password_resets`
--
ALTER TABLE `app_password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `app_products`
--
ALTER TABLE `app_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_users`
--
ALTER TABLE `app_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `app_user_verifications`
--
ALTER TABLE `app_user_verifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_verifications_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_migrations`
--
ALTER TABLE `app_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `app_products`
--
ALTER TABLE `app_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `app_users`
--
ALTER TABLE `app_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
--
-- AUTO_INCREMENT for table `app_user_verifications`
--
ALTER TABLE `app_user_verifications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_user_verifications`
--
ALTER TABLE `app_user_verifications`
  ADD CONSTRAINT `user_verifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `app_users` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

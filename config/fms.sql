/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : fms

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 18/08/2018 13:13:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for fms_category
-- ----------------------------
DROP TABLE IF EXISTS `fms_category`;
CREATE TABLE `fms_category`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '类别名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100006 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fms_category
-- ----------------------------
INSERT INTO `fms_category` VALUES (100001, '外卖');
INSERT INTO `fms_category` VALUES (100002, '家乐福');
INSERT INTO `fms_category` VALUES (100003, '京东到家');
INSERT INTO `fms_category` VALUES (100004, '肯德基');

-- ----------------------------
-- Table structure for fms_order
-- ----------------------------
DROP TABLE IF EXISTS `fms_order`;
CREATE TABLE `fms_order`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `user_id` int(16) NOT NULL COMMENT '订单购买人',
  `amount` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '订单金额，精确到分',
  `category_id` int(16) NULL DEFAULT NULL COMMENT '订单类别，对应 fms_category => id',
  `time` timestamp(0) NULL DEFAULT NULL COMMENT '订单时间',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注信息',
  `invoice` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '发票图片或支付截图的URL',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100004 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fms_order
-- ----------------------------
INSERT INTO `fms_order` VALUES (100001, 0, '1234', 100001, '2018-08-02 12:23:55', 'test', '/iamges/invoice01.jpg');
INSERT INTO `fms_order` VALUES (100002, 100001, '12345', 100002, '2018-08-04 12:12:00', NULL, NULL);

-- ----------------------------
-- Table structure for fms_user
-- ----------------------------
DROP TABLE IF EXISTS `fms_user`;
CREATE TABLE `fms_user`  (
  `id` int(16) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100010 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fms_user
-- ----------------------------
INSERT INTO `fms_user` VALUES (100001, 'ws', '123456', '111111@qq.com');
INSERT INTO `fms_user` VALUES (100002, 'zxp', '123456', '222222@qq.com');
INSERT INTO `fms_user` VALUES (100003, 'fwj', '123456', '333333@qq.com');
INSERT INTO `fms_user` VALUES (100004, 'user4', '123456', '444444@153.com');
INSERT INTO `fms_user` VALUES (100007, 'lihua', '', '');
INSERT INTO `fms_user` VALUES (100008, 'lihu', '', '');

SET FOREIGN_KEY_CHECKS = 1;

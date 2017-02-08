SET NAMES 'utf8';
DROP DATABASE IF EXISTS weixinLib;
CREATE DATABASE weixinLib CHARSET=UTF8;
USE weixinLib;

CREATE TABLE pay_detail(
  id INT PRIMARY KEY AUTO_INCREMENT,
  open_id VARCHAR(64),   #支付用户open_id
  total_fee INT(8), #支付金额(分)
  transaction_id VARCHAR(64), #支付流水号
  trade_number VARCHAR(64), #业务订单号
  pay_time DATETIME #支付时间
);

CREATE TABLE pay_user(
  open_id VARCHAR(64) PRIMARY KEY,  #open_id
  nick_name VARCHAR(64),   #昵称
  avatar_url VARCHAR(500),  #头像
  update_time DATETIME      #更新时间
);
package com.alhngzl.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {
	static Connection conn = null;
	public static Connection DatabaseConnect(){
		String driver = "com.mysql.jdbc.Driver",
				database = "jdbc:mysql://localhost:3306/3Design",
				username = "root",
				password = "123456";
		try{
			Class.forName(driver);
			conn = DriverManager.getConnection(database, username, password);
			System.out.println("Bağlandı");
		}catch(Exception err){
			System.out.println("Veritabanı bağlanı hatası..." + err);
		}
		return conn;
	}
}

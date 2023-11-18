package com.alhngzl.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.alhngzl.model.User;

public class UserProcess {
	public static boolean Insert(User user){
		String name = user.getName();
		String surname = user.getSurname();
		String mail = user.getMail();
		String password = user.getPassword();
		String gender = user.getGender();
		String date = user.getDate();
		String admin = user.getAdmin();
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "INSERT INTO t_user(name, surname, mail, password, gender, date, admin) VALUES(?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, name);
			preparedStatement.setString(2, surname);
			preparedStatement.setString(3, mail);
			preparedStatement.setString(4, password);
			preparedStatement.setString(5, gender);
			preparedStatement.setString(6, date);
			preparedStatement.setString(7, admin);
			preparedStatement.executeUpdate();
			preparedStatement.close();
			conn.close();
			return true;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 33 - HATA : " + e);
			return false;
		}
	}
	public static boolean SelectPassword(User user){
		String mail = user.getMail();
		String password = user.getPassword();
		boolean status = false;
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT * FROM t_user WHERE mail=?";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, mail);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status = resultSet.getString("password").equals(password);
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 56 - HATA : " + e);
			return false;
		}
	}
	public static boolean SelectAdmin(User user){
		String mail = user.getMail();
		boolean status = false;
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT * FROM t_user WHERE mail=?";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, mail);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status = resultSet.getString("admin").equals("1");
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 76 - HATA : " + e);
			return false;
		}
	}
	
	public static String SelectNameSurname(User user){
		String mail = user.getMail();
		String status = "";
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT * FROM t_user WHERE mail=?";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, mail);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status = resultSet.getString("name") + resultSet.getString("surname");
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 97 - HATA : " + e);
			return "";
		}
	}

	public static String SelectId(User user){
		String mail = user.getMail();
		String status = "";
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT * FROM t_user WHERE mail=?";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, mail);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status = resultSet.getString("id");
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 98 - HATA : " + e);
			return status;
		}
	}
	
	public static int SelectCount(String gender){
		int status = 0;
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT COUNT(*) AS number FROM t_user WHERE gender=?";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, gender);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status = resultSet.getInt("number");
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 138 - HATA : " + e);
			return status;
		}
	}
	
	public static ArrayList<Integer> SelectDate(int start, int finish){
		ArrayList<Integer> years = new ArrayList<Integer>();
		int range = 0;
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT date FROM t_user";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				int year = Integer.valueOf(resultSet.getString("date").substring(6, 10));
				if((2016-year) <= finish && (2016-year) >= start){years.add(year);}
			}
			conn.close();
			return years;
		}catch (Exception e) {
			System.out.println("--- UserProcess.java - 161 - HATA : " + e);
			return years;
		}
	}
}

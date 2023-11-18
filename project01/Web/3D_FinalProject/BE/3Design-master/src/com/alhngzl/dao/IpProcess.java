package com.alhngzl.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;

import com.alhngzl.model.Ip;
import com.alhngzl.model.User;

public class IpProcess {
	public static boolean Insert(Ip ip){
		int id = ip.getId();
		int user_id = ip.getUser_id();
		String _ip = ip.getIp();
		String time = ip.getTime();
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "INSERT INTO t_ip(user_id, ip, time) VALUES(?, ?, ?)";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setInt(1, user_id);
			preparedStatement.setString(2, _ip);
			preparedStatement.setString(3, time);
			preparedStatement.executeUpdate();
			preparedStatement.close();
			conn.close();
			return true;
		}catch (Exception e) {
			System.out.println("--- IpProcess.java - 28 - HATA : " + e);
			return false;
		}
	}
	
	public static ArrayList<String> SelectIp(){
		String[] cap = new String[3];
		ArrayList<String> caps = new ArrayList<String>();
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT t_user.id, CONCAT(t_user.name,' ', t_user.surname) AS name, t_ip.ip FROM t_user INNER JOIN t_ip ON t_user.id=t_ip.user_id";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				caps.add(resultSet.getString("id"));
				caps.add(resultSet.getString("name"));
				caps.add(resultSet.getString("ip"));
			}
			conn.close();
			return caps;
		}catch (Exception e) {
			System.out.println("--- IpProcess.java - 53 - HATA : " + e);
			return caps;
		}
	}
	public static int SelectCount(String gender){
		int status = 0;
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT COUNT(*) AS number FROM t_user INNER JOIN t_ip WHERE t_user.id=t_ip.user_id AND gender=?";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			preparedStatement.setString(1, gender);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status = resultSet.getInt("number");
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- IpProcess.java - 73 - HATA : " + e);
			return status;
		}
	}

	public static ArrayList<Integer> SelectTime(){
		ArrayList<Integer> status = new ArrayList<Integer>();
		
		try{
			Connection conn = DatabaseConnection.DatabaseConnect();
			String query = "SELECT time FROM t_ip";
			PreparedStatement preparedStatement = conn.prepareStatement(query);
			ResultSet resultSet = preparedStatement.executeQuery();
			while(resultSet.next()){
				status.add(Integer.valueOf(resultSet.getString("time").substring(11, 13)));
			}
			conn.close();
			return status;
		}catch (Exception e) {
			System.out.println("--- IpProcess.java - 91 - HATA : " + e);
			return status;
		}
	}
}


/*

SELECT t_user.id, CONCAT(t_user.name," ", t_user.surname), t_ip.ip FROM t_user INNER JOIN t_ip ON t_user.id=t_ip.user_id */
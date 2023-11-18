package com.alhngzl.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alhngzl.dao.IpProcess;
import com.alhngzl.dao.UserProcess;
import com.alhngzl.model.Ip;
import com.alhngzl.model.User;

/**
 * Servlet implementation class LogIn
 */
@WebServlet("/LogIn")
public class LogIn extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LogIn() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();		

		String password = request.getParameter("password");
		String mail = request.getParameter("mail");
		
		User user = new User();
		user.setMail(mail);
		user.setPassword(password);
		
		if(UserProcess.SelectPassword(user)){
			
			DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy HH:mm");
			Date date = new Date();
			
			Ip ip = new Ip();
			ip.setUser_id(Integer.valueOf(UserProcess.SelectId(user)));
			ip.setIp(request.getRemoteAddr());
			ip.setTime(dateFormat.format(date));
			
			IpProcess.Insert(ip);
			
			Cookie logInInfoMail = new Cookie("mail", mail);
			Cookie logInInfoId = new Cookie("id", UserProcess.SelectId(user));
			Cookie logInInfoAdmin = new Cookie("admin", String.valueOf(UserProcess.SelectAdmin(user)));
			Cookie logInInfoName = new Cookie("name", URLEncoder.encode(UserProcess.SelectNameSurname(user), "UTF-8"));
			
			logInInfoMail.setMaxAge(60*60*24);
			logInInfoId.setMaxAge(60*60*24);
			logInInfoAdmin.setMaxAge(60*60*24);
			logInInfoName.setMaxAge(60*60*24);
						
			response.addCookie(logInInfoMail);
			response.addCookie(logInInfoId);
			response.addCookie(logInInfoAdmin);
			response.addCookie(logInInfoName);
			
			out.print("OK");
		}else{
			out.print("ERROR");
		}
	}

}

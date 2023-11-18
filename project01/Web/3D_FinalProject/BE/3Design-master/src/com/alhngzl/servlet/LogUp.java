package com.alhngzl.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alhngzl.dao.UserProcess;
import com.alhngzl.model.User;

/**
 * Servlet implementation class LogUp
 */
@WebServlet("/LogUp")
public class LogUp extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LogUp() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String name = request.getParameter("name");
		String surname = request.getParameter("surname");
		String date = request.getParameter("date");
		String gender = request.getParameter("gender");
		String password = request.getParameter("password");
		String mail = request.getParameter("mail");
		
		User user = new User();
		user.setName(name);
		user.setSurname(surname);
		user.setDate(date);
		user.setGender(gender);
		user.setPassword(password);
		user.setMail(mail);
		
		if(UserProcess.Insert(user)){
			out.print("OK");
		}else{
			out.print("ERROR");
		}
	}

}

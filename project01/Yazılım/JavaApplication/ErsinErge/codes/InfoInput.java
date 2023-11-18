package com.alhngzl;


import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.io.*;

import javax.swing.border.*;
import javax.imageio.*;
import javax.swing.*;

public class InfoInput extends JFrame {

	private JPanel contentPane;
	private JTextField dateInput;
	private JTextField timeInput;
	private JTextArea areaInput;

	public static void main(String[] args) {

		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					InfoInput frame = new InfoInput();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	
	public InfoInput() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		contentPane.setLayout(new BorderLayout(0, 0));
		setContentPane(contentPane);
		
		JPanel panel = new JPanel();
		contentPane.add(panel, BorderLayout.NORTH);
		panel.setLayout(new GridLayout(0, 2, 0, 0));
		
		JLabel lblNewLabel = new JLabel("Tarih :");
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(lblNewLabel);
		
		dateInput = new JTextField();
		dateInput.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(dateInput);
		dateInput.setColumns(10);
		dateInput.setBorder(BorderFactory.createLineBorder(Color.BLACK));
		
		JLabel lblNewLabel_1 = new JLabel("Saat :");
		lblNewLabel_1.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(lblNewLabel_1);
		
		timeInput = new JTextField();
		timeInput.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(timeInput);
		timeInput.setColumns(10);
		timeInput.setBorder(BorderFactory.createLineBorder(Color.BLACK));
		
		JLabel lblNewLabel_2 = new JLabel("Yer :");
		lblNewLabel_2.setHorizontalAlignment(SwingConstants.CENTER);
		panel.add(lblNewLabel_2);
		
		areaInput = new JTextArea();
		panel.add(areaInput);
		areaInput.setColumns(10);
		areaInput.setRows(4);
		areaInput.setBorder(BorderFactory.createLineBorder(Color.BLACK));
		
		JButton showButton = new JButton("Orjinal Afiş");
		panel.add(showButton);
		
		JButton saveButton = new JButton("Kaydet");
		panel.add(saveButton);
		
		JPanel panel_1 = new JPanel();
		contentPane.add(panel_1, BorderLayout.CENTER);

		//ACTIONS
		showButton.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				ImageTest imageTest = new ImageTest();
				imageTest.ShowImage("original");
			}
		});
		
		saveButton.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				if(!(dateInput.getText().equals(""))){
					TextOnImage textOnImage = new TextOnImage();
					textOnImage.WriteImage(dateInput.getText(), timeInput.getText(), areaInput.getText());
				}else{
					JOptionPane.showMessageDialog(panel, "Tarih Eklemeden Resim Kayıt Edemessiniz.",  "Tarih Eksik", JOptionPane.INFORMATION_MESSAGE);
				}
			}
		});
	}
	

	//IMAGE SHOW
	public class ImageTest{
		public void ShowImage(String imageName){
			ImagePanel imagePanel;
			if (imageName.equals("original")){
				imagePanel = new ImagePanel(new ImageIcon("codes/original.png").getImage());
			}else{
				imagePanel = new ImagePanel(new ImageIcon("afisler/"+dateInput.getText() + "_afis.png").getImage());
			}
			JFrame frame = new JFrame();
			frame.getContentPane().add(imagePanel);
			frame.setResizable(false);
			frame.pack();
			frame.setVisible(true);
		}
	}
	
	class ImagePanel extends JPanel{
		private Image img;
		
		 public ImagePanel(String img){
			 this(new ImageIcon(img).getImage());
		 }
		 
		 public ImagePanel(Image img){
			 this.img = img;
			 Dimension size = new Dimension(453, 600);
			 setPreferredSize(size);
			 setMinimumSize(size);
			 setMaximumSize(size);
			 setSize(size);
			 setLayout(null);
		 }
		 public void paintComponent(Graphics g){
			 g.drawImage(img, 0, 0, this.getWidth(), this.getHeight(), null);
		 }
	}
	
	//WRITE TEXT ON IMAGE
	class TextOnImage{
		
		private void drawString(Graphics g, String text, int x, int y) {
	        for (String line : text.split("\n"))
	            g.drawString(line, x, y += g.getFontMetrics().getHeight());
	    }
		
		public void WriteImage(String dateInput, String timeInput, String areaInput){
			try {
				BufferedImage bufferedImage = ImageIO.read(new File("codes/original.png"));
				Graphics g = bufferedImage.getGraphics();
				Font font = new Font("Serif", Font.BOLD, 90);
				g.setFont(font);
				g.setColor(Color.BLACK);
				g.drawString((dateInput), 586, 2825); 
				g.drawString((timeInput), 586, 2940);
				drawString(g, areaInput, 586, 2950);
				g.dispose();
				ImageIO.write(bufferedImage, "png", new File("afisler/"+dateInput + "_afis.png"));
				ImageTest imageTest = new ImageTest();
				imageTest.ShowImage("last");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	
}


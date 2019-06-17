package com.qa.SeleniumTesting;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

public class CrudTests {

	WebDriver driver;
	Actions action;

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "/Users/shazadnasim/Desktop/chromedriver");
		driver = new ChromeDriver();
		action = new Actions(driver);

	}

	@After
	public void tearDown() {
		driver.quit();
	}

	@Test
	public void createPlayerCard() throws InterruptedException {
		driver.get("http://35.246.82.158:8080/IndividualProject-1.0/playercard.html");
		CreatePlayerCard createCard = PageFactory.initElements(driver, CreatePlayerCard.class);
		createCard.createLandingPage();
		createCard.typeDetails("Shazad", "Shaz_Nas", "Sha Kahn");
		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"Save\"]"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);

		String success = createCard.successMsg();

		assertEquals("Create playercard failed", "Playercard successfully created:", success);

	}

	@Test
	public void viewPlayerCards() throws InterruptedException {
		driver.get("http://35.246.82.158:8080/IndividualProject-1.0/view.html");
		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"viewPlayers\"]"))).click().perform();
		ViewPlayerCard viewCards = PageFactory.initElements(driver, ViewPlayerCard.class);
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);

		String stored = viewCards.playerStored();

		assertEquals("View playercard failed", "Uzma", stored);
	}

	@Test
	public void updatePlayerCard() throws InterruptedException {
		driver.get("http://35.246.82.158:8080/IndividualProject-1.0/view.html");
		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"viewPlayers\"]"))).click().perform();
		Thread.sleep(3000);
		UpdatePlayerCard updatePge = PageFactory.initElements(driver, UpdatePlayerCard.class);
		updatePge.updatePage();
		updatePge.newDetails("Chris", "Chris_Truthy", "Dvorah");

		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"Save\"]"))).click().perform();
		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);

		String successMsg = updatePge.successMsg();

		assertEquals("Update playercard failed", "You have successfully updated your record", successMsg);

	}

//	@Test
//	public void deletePlayerCard() {
//		
//		driver.get("http://35.246.82.158:8080/IndividualProject-1.0/view.html");
//		
//	
//		action.moveToElement(driver.findElement(By.xpath("//*[@id=\"viewPlayers\"]"))).click().perform();
//		DeletePlayerCard deleteCard = PageFactory.initElements(driver, DeletePlayerCard.class);
//		deleteCard.deletePlayer();
//		
//		driver.manage().timeouts().implicitlyWait(1L, TimeUnit.SECONDS);
//		driver.switchTo().alert().accept();
//		String check = deleteCard.entry();
//		
//		
//		assertEquals("Delete playercard failed", "" , check );
//		
//
//	}

}

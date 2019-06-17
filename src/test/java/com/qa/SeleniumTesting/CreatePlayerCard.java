package com.qa.SeleniumTesting;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CreatePlayerCard {
	
	@FindBy(xpath = "//*[@id=\"navbarMenu\"]/ul/li[1]/a")
	private WebElement createLink;

	@FindBy(xpath = "//*[@id=\"Name\"]")
	private WebElement name;

	@FindBy(xpath = "//*[@id=\"GamerTag\"]")
	private WebElement gamerTag;

	@FindBy(xpath = "//*[@id=\"Character\"]")
	private WebElement character;
	
	@FindBy(xpath = "//*[@id=\"Save\"]")
	private WebElement saveBtn;
	
	@FindBy(xpath = "//*[@id=\"card-background\"]/div[2]/h1")
	private WebElement successMsg;
	

	public void createLandingPage() {
		createLink.click();
	}
	
	public void typeDetails(String typeName, String typeTag, String typeChar) {
		name.clear();
		name.sendKeys(typeName);
		gamerTag.clear();
		gamerTag.sendKeys(typeTag);
		character.clear();
		character.sendKeys(typeChar);
	}
	
	
	public void saveDetails() {
		saveBtn.click();
	}
	
	public String successMsg( ) {
		return successMsg.getText();
	}
}
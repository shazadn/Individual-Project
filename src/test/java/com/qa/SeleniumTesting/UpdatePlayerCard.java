package com.qa.SeleniumTesting;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UpdatePlayerCard {

	@FindBy(xpath="//*[@id=\"players-table\"]/tbody/tr[4]/td[5]/a[1]")
	private WebElement recordUpdate;
	
	@FindBy(xpath="//*[@id=\"sName\"]")
	private WebElement newName;
	
	@FindBy(xpath="//*[@id=\"sTag\"]")
	private WebElement newTag;
	
	@FindBy(xpath="//*[@id=\"sChar\"]")
	private WebElement newCharacter;
	
	@FindBy(id="updateMsg")
	private WebElement updateMsg;
	
	public void updatePage() {
		recordUpdate.click();
	}
	
	public void newDetails(String nName, String nTag, String nChar) {
		newName.sendKeys(nName);
		newTag.sendKeys(nTag);
		newCharacter.sendKeys(nChar);
	}
	
	public String successMsg() {
		return updateMsg.getText();
		
	}
}

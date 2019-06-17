package com.qa.SeleniumTesting;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ViewPlayerCard {
	
	@FindBy(xpath="//*[@id=\"players-table\"]/tbody/tr[1]/td[2]")
	private WebElement examplePlayer;
	

	public String playerStored() {
		return examplePlayer.getText();
	}
	
}

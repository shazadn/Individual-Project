package com.qa.SeleniumTesting;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DeletePlayerCard {
	
	@FindBy(xpath="//*[@id=\"players-table\"]/tbody/tr[18]/td[5]/a[2]")
	private WebElement deleteBtn;

	@FindBy(xpath="//*[@id=\"players-table\"]/tbody/tr[18]/td[1]")
	private WebElement entry;

	

public void deletePlayer() {
	deleteBtn.click();
}

public String entry() {
	return entry.getText();
}
}
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As a user I want to check login functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4500392800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the logo displayed on login page",
  "description": "",
  "id": "login-functionality;verify-the-logo-displayed-on-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I verify the logo on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iVerifyTheLogoOnLoginPage()"
});
formatter.result({
  "duration": 564489200,
  "status": "passed"
});
formatter.uri("users.feature");
formatter.feature({
  "line": 1,
  "name": "Users page functionality",
  "description": "As a user I want to check users page functionality",
  "id": "users-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4433398600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I enter username as \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter password as \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Admin\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify System users text as \"System Users\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterUsernameAs(String)"
});
formatter.result({
  "duration": 466579500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 158761200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 914323900,
  "status": "passed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1419374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 31
    }
  ],
  "location": "UsersTestSteps.iVerifySystemUsersTextAs(String)"
});
formatter.result({
  "duration": 350869000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Search the user created and verify",
  "description": "",
  "id": "users-page-functionality;search-the-user-created-and-verify",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    },
    {
      "line": 24,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username on view system users page \"hafsa2867541\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on \u0027User Roll Dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on \u0027Status dropdown\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on \u0027Delete\u0027 button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "hafsa2867541",
      "offset": 44
    }
  ],
  "location": "UsersTestSteps.iEnterUsernameOnViewSystemUsersPage(String)"
});
formatter.result({
  "duration": 50179700,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //body/div[@id\u003d\u0027app\u0027]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/input[1 because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//body/div[@id\u003d\u0027app\u0027]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/input[1\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#invalid_selector_exception\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4976added8eb303d3fb4121298c1929f, findElement {using\u003dxpath, value\u003d//body/div[@id\u003d\u0027app\u0027]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/input[1}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54994}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54994/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4976added8eb303d3fb4121298c1929f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat com.orangehrm.live.utilities.Utility.sendTextToElement(Utility.java:75)\r\n\tat com.orangehrm.live.pages.AddUserPage.enterUsername(AddUserPage.java:102)\r\n\tat com.orangehrm.live.steps.UsersTestSteps.iEnterUsernameOnViewSystemUsersPage(UsersTestSteps.java:70)\r\n\tat ✽.When I enter username on view system users page \"hafsa2867541\"(users.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnUserRollDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnStatusDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersTestSteps.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
});
// https://developers.google.com/apps-script/guides/html/
// https://developers.google.com/apps-script/reference/html/html-template
// https://developers.google.com/apps-script/quickstart/docs

/**
 * Shows sidebar
 */
function show(){
  
  var template = HtmlService.createTemplateFromFile('sidebar');
  template.title = "The Title";
  template.suiteLink = getWebServiceUri("suite");
  template.paramsLink = getWebServiceUri("params");
  var htmlOutput = template.evaluate();
  
  htmlOutput.setTitle("Export");
  htmlOutput.setWidth(50);  // ignored, 300 by default - https://developers.google.com/apps-script/releases/#february_2014
   
  var ui = SpreadsheetApp.getUi();
  ui.showSidebar(htmlOutput);
}


/**
 Функції нижче використовуються для істаляції цього скрипта як аддона.
*/

function onInstall(e)
{
  onOpen(e);
}


function onOpen(e)
{
  var ui = SpreadsheetApp.getUi();
  ui.createAddonMenu()
  .addItem("Open Sidebar", "show")
  .addToUi();
};


var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string
      .replace(new RegExp(propToReplace, "g"), propValue);
    return string;
};
var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
};



(function (global) {

document.addEventListener("DOMContentLoaded", function (event) {

    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        document.querySelector(selector).innerHTML = html;

    };

 
  
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest("menu.json", buildAndShowCategoriesHTML);
    // Builds HTML for the categories page based on the data
    // from the server
    function buildAndShowCategoriesHTML(menu_items) {
        
        // Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
          "/Snippets/menu.html",
          function (home_menu) {
              
        
              var homeMenuView = buildCategoriesViewHtml(menu_items,"", home_menu);
              
              insertHtml("#main-content", homeMenuView);
          },
          false);
    }


    // Using categories data and snippets html
    // build categories view HTML to be inserted into page
    function buildCategoriesViewHtml(categories,
                                     categoriesTitleHtml,
                                     categoryHtml) {

        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";
        
        // Loop over categories
        for (var i = 0; i < categories.menu.length; i++) {
            // Insert category values
            var html = categoryHtml;
            var name = "" + categories.menu[i].name;
            var img = categories.menu[i].img;

            html = insertProperty(html, "name", name);
            html = insertProperty(html, "img", img);
            finalHtml += html;
           
        }

        finalHtml += "</section>";
        return finalHtml;
    }

    var dc = {};
    dc.selected_Menu_items  = function (str) {
       
       
    }
    function phpContent(phpPage) {
       
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("main-content").innerHTML = this.responseText;
                }
            };
            xmlhttp.open("GET", phpPage, true);
            xmlhttp.send();
        
    }
    var login = {};
   login= function() {

        $ajaxUtils.sendGetRequest("/Snippets/Login.php", function (request) {
            
            insertHtml("#main-content", request);
        },false);
     
   }

   var logout = {};
   logout = function () {
       phpContent("logout.php");
   }

   global.$logout = logout;
   global.$login = login;
   global.$dc = dc;

});
})(window);
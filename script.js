var pressed = false;
function toggle(el) {
  if (!pressed) {
    el.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAbUExURQAAAEhIiGhosICAyOjw+NigOIhYGPjYIAAAAAiobisAAAAJdFJOU///////////AFNPeBIAAAAJcEhZcwAADsIAAA7CARUoSoAAAABtSURBVDhP7Y5BDoAgDAQr0Nb/v9jtQhp78sDFROcgZmdCkPOBP5h8LpDCGjPAdBSy4UHd+o2WSXyo4TEtUDCZAXzoLiNBEUkUQs9ryw0Bi7Xsoabq6u7D5wvw4xgUgoGJWUSsoOkwGMRrgi1ELsmGFc/+LhYHAAAAAElFTkSuQmCC";
    pressed = true;
  }
}

document.onload = loadGlobal();

/*<center>
        <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAbUExURQAAAEhIiGhosICAyOjw+NigOIhYGPjYIAAAAAiobisAAAAJdFJOU///////////AFNPeBIAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACwSURBVDhPzZBbDoMwEAMNefX+J67Xu1HCqqrUlo9aEJLMyATw2IJILJW1IDgiuzNnwmdRzl2Jp3BwGlKC+IjAABBKGBqN23ZBZWTwPW7YcOXJ0D1PdxHMcIEFvpOEogq7ZkEWVIF1glcC8VYQxuReAeB4J4gvwYzF/XftBVnwiotQgJgonzekQ34h3HDIFAk3pPXWRhtj1GEfUfngglsEEjp6N0kWsRg3OsHfCD8FeALLRgxHtcLceQAAAABJRU5ErkJggg=="
        class="logo" onclick="toggle(this);" />
        <br />

        SwitchedPalace
      </center>*/
/*<hr />
      <center>
        <a href="https://www.youtube.com/channel/UCnzbXko3ztLWzYLTimARAfg"
          ><img
            src="https://www.youtube.com/s/desktop/ca9cd554/img/favicon_144x144.png"
            class="socialicon" /></a
        ><a href="https://en.pronouns.page/@palaceswitcher"
          ><img
            src="https://en.pronouns.page/logo/logo-primary.svg"
            class="socialicon"
        /></a>
      </center>
      <p class="footer">Proper mobile layout coming soon!!!</p>*/

/**
  * @param {String} url - address for the HTML to fetch
  * @return {String} the resulting HTML string fragment
  */
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function loadGlobal() {
  //Load data
  document.getElementById("title").innerHTML = await fetchHtmlAsText("title.html");
  document.getElementById("sidenav").innerHTML = await fetchHtmlAsText("side.html");
  document.getElementsByTagName("footer")[0].innerHTML = await fetchHtmlAsText("footer.html");
}
(function() {
	// CSS
  var style = document.createElement("style");
  style.innerHTML = '.pray-for-paris{text-align:center;background:linear-gradient(to right,#002395 33.3%,#fff 33.3%,#fff 66.6%,#e72837 66.6%,#e72837);padding-top:4.6875em}@media only screen and (min-width:30em){.pray-for-paris{padding-top:6.25em}}@media only screen and (min-width:40em){.pray-for-paris{padding-top:7.8125em}}@media only screen and (min-width:64em){.pray-for-paris{padding-top:9.375em}}.pray-for-paris-text{font-size:.875em;font-family:-apple-system,".SFNSDisplay-Regular",BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;color:#454647;text-transform:uppercase;background-color:rgba(253,254,255,.7);padding:.71429em;margin-bottom:.71429em;display:inline-block}';
  document.body.appendChild(style);

  // HTML
  var el = document.createElement("div");
  el.className = "pray-for-paris";
  el.innerHTML = "<div class=\"pray-for-paris-text\">Pray for Paris</div>";
  document.body.insertBefore(el, document.body.childNodes[0]);
}());
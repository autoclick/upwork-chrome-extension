(()=>{"use strict";const e=function(){return new Promise((function(e,t){try{chrome.storage.local.get("coverLetter",(function(t){var r=t.coverLetter;e(r||"")}))}catch(e){t(e)}}))};var t=setInterval((function(){var r=document.querySelector("textarea[aria-labelledby=cover_letter_label]");r&&e().then((function(e){r.focus(),document.execCommand("selectAll"),document.execCommand("insertText",!1,e),document.title="Cover Letter Applied",clearInterval(t)}))}),1e3)})();
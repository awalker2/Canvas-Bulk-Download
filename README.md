Usage:
Enable the extension and go to a modules page for a Stevens Canvas class, should work for other Canvases.
Click on the extension and it will open all module tabs and download all files.
Still working on how to only download files due to extension, it always downloads when a module is seen opened in browser.

Structure:
manifest.json - Extension properties
Background.js - Registers Open_Script as an on extension clicked function
Download_Script - Downloads a file whenever "Download" is in the text and the URL matches.
Open_Script -Runs on extension clicked, opens all modules

Icon source - https://icons8.com/icons/set/download.

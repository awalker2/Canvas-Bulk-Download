Usage:
Enable the extension and go to a modules page for a Stevens Canvas class.
Click on the extension and it will open all module tabs and download all files.
Still working on only downloading files when script clicked on.

Structure:
manifest.json - Extension properties
Background.js - Registers Open_Script as an on extension clicked function
Download_Script - Downloads a file whenever "Download" is in the text
Open_Script -Runs on extension clicked, opens all modules

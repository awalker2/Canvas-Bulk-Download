function downloadAllFiles() {
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].text.includes('Download')) {
            const currFile = links[i].text.replace('Download', '');
            console.log(`Downloading: ${currFile}`)
            links[i].click();
        }
    }
}

downloadAllFiles();
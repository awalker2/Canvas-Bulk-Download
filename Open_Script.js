function openAllModules() {
    const modules = document.getElementsByClassName("item_link");
    for (let i = 0; i < modules.length; i++) {
        window.open(modules[i].href, '_blank')
    }
}

openAllModules();


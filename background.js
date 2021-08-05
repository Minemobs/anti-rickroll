let color = "#3AA757"

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color})
    console.log(`Default background color set to ${color}`)
});


function arrayContains(array, url) {
    return array.indexOf(url) > -1;
}

let urls;

chrome.runtime.onStartup.addListener(() => {

})

chrome.tabs.onCreated.addListener((tab) => {
    console.log(tab.pendingUrl)
    if(arrayContains(urls, tab.pendingUrl)) {
        console.log("ANTI-RICKROLL");
        chrome.tabs.remove(tab.id)
    }
});
chrome.runtime.onInstalled.addListener(() =>{
    console.log('Extension Installation Complete');
})

chrome.tabs.onCreated.addListener(() =>{
    console.log('I made a new tab')
})

chrome.windows.onCreated.addListener(() =>{
    console.log('I made a new window')
})
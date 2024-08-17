chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "convertToSpeech",
      title: "Convert to Speech",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "convertToSpeech") {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getSelectedText
      }, async (selection) => {
        if (selection && selection[0] && selection[0].result) {
          const text = selection[0].result;
          const ttsAudioUrl = await convertTextToSpeech(text);
          playAudio(ttsAudioUrl);
        }
      });
    }
  });
  
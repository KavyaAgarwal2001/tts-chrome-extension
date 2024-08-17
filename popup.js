const apiKey = '0TvktcRNMmSgbB6J76xBXZaPnW-rvtPwFNdfgaqw';
const voicesUrl = 'https://os.gan.ai/v1/voices';
const ttsUrl = 'https://os.gan.ai/v1/tts';

// Function to fetch available voices from Gan.AI's API
async function getVoices() {
    try {
        const response = await fetch(voicesUrl, {
            method: 'GET',
            headers: { 'ganos-api-key': apiKey }
        });
        const result = await response.json();
        return result.data;  // List of voices and their details
    } catch (error) {
        console.error('Error fetching voices:', error);
        alert('Failed to fetch voices');
    }
}

// Function to convert the selected text to speech using Gan.AI's TTS API
async function convertTextToSpeech(text, voiceId) {
    try {
        const response = await fetch(ttsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ganos-api-key': apiKey
            },
            body: JSON.stringify({ text: text, voice_id: voiceId })
        });

        if (!response.ok) {
            throw new Error('Failed to convert text to speech');
        }

        return response.blob();  // Return the WAV file as a Blob
    } catch (error) {
        console.error('Error converting text to speech:', error);
        throw error;
    }
}

// Function to play the generated speech
function playAudio(blob) {
    const audioUrl = URL.createObjectURL(blob);  // Create a URL for the Blob
    const audio = new Audio(audioUrl);
    audio.play();
}

// Event listener for button click in popup.html
document.getElementById('convert-btn').addEventListener('click', async function() {
    document.getElementById('loading').style.display = 'block';  // Show the loading spinner

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getSelectedText
    }, async (selection) => {
        if (selection && selection[0] && selection[0].result) {
            const text = selection[0].result;
            const voiceId = document.getElementById('voice-select').value;
            try {
                const audioBlob = await convertTextToSpeech(text, voiceId);
                playAudio(audioBlob);
            } catch (error) {
                console.error('Error during conversion:', error);
                alert('Failed to convert text to speech');
            }
        } else {
            alert('Please select some text on the page');
        }
        document.getElementById('loading').style.display = 'none';  // Hide the loading spinner after processing
    });
});

// Helper function to get selected text from the page
function getSelectedText() {
    return window.getSelection().toString();
}

// Populate the voice dropdown
async function populateVoiceDropdown() {
    const voices = await getVoices();
    const voiceSelect = document.getElementById('voice-select');

    if (voices) {
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.voice_id;
            option.textContent = voice.voice_name;
            voiceSelect.appendChild(option);
        });
    }
}

// Initialize the voice dropdown
populateVoiceDropdown();

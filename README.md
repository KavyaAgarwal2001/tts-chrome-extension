This Chrome extension allows you to convert selected text on any website into speech using the Gan.AI TTS (Text-to-Speech) API. Users can select a voice and hear the content read aloud with just a click.

## Features
- Convert any selected text on a webpage into speech.
- Select from various available voices.
- Use Gan.AI's powerful TTS engine to generate high-quality audio.
- Simple interface with loading spinner to indicate processing.

---

## Installation

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/tts-chrome-extension.git
```

### Step 2: Install Dependencies

There are no dependencies for this Chrome extension, but you will need a Gan.AI API key to use the TTS service.

### Step 3: Set Up Your API Key

To use the extension, you need to add your own Gan.AI API key. Follow these steps to set it up:

1. **Go to Gan.AI's developer portal** and sign up for an API key.

2. **Create a `config.js` file** in the root directory of the cloned project:

   ```bash
   touch config.js
   ```

3. **Add your API key** to the `config.js` file:
   ```javascript
   // config.js
   const config = {
     apiKey: 'YOUR_API_KEY_HERE'
   };
   ```

   This file will not be pushed to GitHub, as it is added to `.gitignore`.

### Step 4: Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle at the top right).
3. Click **Load unpacked** and select the folder where you cloned this project.
4. The extension should now be added to Chrome, and the popup should be accessible from the Chrome toolbar.

---

## Usage

### From the Chrome Extension Popup:
1. **Select text** on any website.
2. **Choose a voice** from the dropdown in the extension popup.
3. **Click "Convert to Speech"** and listen to the selected text being read out loud.

### From the Context Menu:
1. **Right-click** on selected text on any webpage.
2. Click **"Convert to Speech"** from the context menu.

### Loading Spinner
After clicking the "Convert to Speech" button, a spinner will indicate the audio is being generated. Once the audio is ready, it will play automatically.

---

## Development Notes

### Avoid Committing Your API Key

To prevent exposing your API key publicly, the key is stored in `config.js`, which is excluded from GitHub by `.gitignore`. Make sure your `config.js` looks like this:

```javascript
// config.js
const config = {
  apiKey: 'YOUR_API_KEY_HERE'
};
```

### Optional: Dynamic API Key Entry
You can also add functionality in the extension to let users enter their own API key through the settings, and save it using Chrome’s storage API. This keeps the API key out of the source code completely.

---

## Publishing the Extension on Chrome Web Store

1. **Zip the extension files** (excluding `config.js`).
   - Ensure your `manifest.json`, `popup.html`, `popup.js`, `popup.css`, and images are all included.

2. **Go to the Chrome Web Store Developer Dashboard**:  
   [Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).

3. **Create a new item** and upload your `.zip` file.

4. **Fill out the required details** (name, description, etc.).

5. **Submit for review**.

---

## Contributing

Feel free to fork this repository and submit pull requests with improvements, new features, or bug fixes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## API Key Management

If you are using this project with your own Gan.AI API key, make sure to follow best practices:
- Never commit your API key to a public repository.
- Use `.gitignore` to exclude sensitive files like `config.js`.
- Optionally, build a settings page to allow users to input their API key dynamically.

---

## Contact

For any questions or issues, feel free to contact me via GitHub or raise an issue in the repository.

---

This README provides all the information users need to understand and use the extension, including setup, usage, and security practices. Let me know if you'd like to adjust or add anything specific!
=======
A simple Chrome extension that lets you convert selected text on any webpage to speech using Gan.AI’s Text-to-Speech (TTS) API.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tts-chrome-extension.git
=======

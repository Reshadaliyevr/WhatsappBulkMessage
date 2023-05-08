# WhatsApp Message and Image Sender

This Node.js script uses the WhatsApp Web API to send a message and an image to multiple phone numbers. The script reads phone numbers from a text file, formats them for use with the WhatsApp API, and sends a message and an image to each phone number. The script uses the `whatsapp-web.js` library to interact with the WhatsApp Web API and supports sending different types of media files. The script also includes error handling and a delay between sending messages to avoid triggering anti-spam measures.

## Requirements

- Node.js 12 or higher
- A valid WhatsApp account

## Installing Required Dependencies

The required dependencies for this script can be installed by running `npm install` in the project directory.

## Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Edit the `numbers.txt` file to include the phone numbers you want to send messages to, one number per line.
4. Replace `cat.png` in `IMAGE_FILE_PATH` with the path to the image file you want to send.
5. Replace `MESSAGE` with the message you want to send.


## Usage

1. Run `node index.js` to start the script.
2. Scan the QR code that appears using your WhatsApp account.
3. The script will send a message and an image to each phone number in the `numbers.txt` file. The script will display a success or error message for each phone number.

## Customization

You can customize the script to send different types of media files by replacing `cat.png` in `IMAGE_FILE_PATH` with the path to the media file you want to send. You can also customize the delay between sending messages by changing the value of the `DELAY_TIME` constant in `index.js`.

## License

This project is licensed under the Boost Software License 1.0

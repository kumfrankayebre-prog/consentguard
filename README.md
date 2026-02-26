<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/9f3e053d-7b69-4091-b7e2-44dff334b885" />


ConsentGuard is a privacy-focused tool that allows users to upload images, apply a watermark to protect their private content, and share it safely via social media. It works entirely in the browser, so no files are sent to the server, and users’ data remains private.

User Workflow

Below is the visual workflow for how users interact with ConsentGuard:

Step 1: Open the Website

Users navigate to the ConsentGuard live link (hosted via GitHub Pages).

The homepage displays the upload button and instructions.

Step 2: Upload an Image

Click “Choose File” and select an image (jpg or png) from the user’s device.

The assets folder in the repository is not needed for this — users upload from their own computer.

Step 3: Preview & Watermark

After uploading, JavaScript reads the file in the browser.

The image is displayed on the canvas element.

A watermark (e.g., “Confidential – Bianca”) is applied automatically for privacy protection.

Step 4: Share Content

Once the watermark is applied, share buttons appear:

WhatsApp: Opens a link to share the watermarked image.

Facebook: Opens a Facebook share dialog with the image.

TikTok: Currently requires manual upload of the watermarked image.

All sharing happens without storing the user’s file on the server.

Step 5: Repeat Uploads

Users can upload multiple images, even the same file, without refreshing the page.

The canvas clears the previous image automatically, and the watermark is applied each time.

Notes for Users

Works best with .jpg or .png images.

No registration or login is required.

Fully browser-based — works on desktop and mobile devices.

Protects content by applying a visible watermark before sharing.


Do you want me to do that?

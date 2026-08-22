import { Jimp } from "jimp";

async function generateIcons() {
  try {
    console.log("Loading image...");
    const image = await Jimp.read("public/images/profile.jpg");
    
    // The image has a blue background. Crop to face.
    // The image is a portrait, we need a square. We will crop the top part.
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const size = Math.min(width, height);
    
    // Crop a square from the top center
    image.crop({ x: (width - size) / 2, y: 0, w: size, h: size });
    
    // Create a circular mask
    image.circle();
    
    // Generate different sizes
    const sizes = [16, 32, 48, 180];
    
    for (const s of sizes) {
      console.log(`Generating size ${s}x${s}...`);
      const imgClone = image.clone();
      imgClone.resize({ w: s, h: s });
      
      if (s === 180) {
        await imgClone.write("public/apple-touch-icon.png");
      } else {
        await imgClone.write(`public/favicon-${s}x${s}.png`);
      }
    }
    
    // Copy 32x32 to favicon.ico
    const { copyFileSync } = await import("fs");
    copyFileSync("public/favicon-32x32.png", "public/favicon.ico");
    
    console.log("Done!");
  } catch (err) {
    console.error("Error generating icons:", err);
  }
}

generateIcons();

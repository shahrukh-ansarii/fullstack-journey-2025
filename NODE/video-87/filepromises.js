import fs from "fs/promises";

async function fileCreate() {
  try {
   await  fs.writeFile("newFile.txt", "Hello This is Promise file");

    console.log("newFile.txt file has been created");

    const data = await fs.readFile("newFile.txt", "utf8");

    console.log("File Content:", data);

  } catch (err) {
    console.log("Error", err) ;
  }
}

fileCreate();
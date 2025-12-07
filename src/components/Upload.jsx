import { useState } from "react";
import { db, storage } from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Upload() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);

  const uploadData = async () => {
    if (!image) return alert("Please upload an image");

    try {
      // Upload image to Storage
     const imgRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imgRef, image);
      const imageUrl = await getDownloadURL(imgRef);

      // Add document to Firestore
      await addDoc(collection(db, "content"), {
        title,
        description: desc,
        link,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Uploaded Successfully!");
      
      // Reset fields
      setTitle("");
      setDesc("");
      setLink("");
      setImage(null);

    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload failed. Check console for error.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Upload Content</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br/><br/>

      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      /><br/><br/>

      <input
        type="text"
        placeholder="Link (optional)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      /><br/><br/>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      /><br/><br/>

      <button onClick={uploadData}>Upload</button>
    </div>
  );
}

export default Upload;

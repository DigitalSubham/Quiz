import React from "react";

const UploadImage = ({ selectedImage, setSelectedImage }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the selected files
    setSelectedImage(file);
  };
  return (
    <div className="mb-4 flex items-center justify-center mt-20">
      {/* Todo add image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-upload"
      />

      {selectedImage ? (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          className="mb-6 h-40 items-center my-auto"
        />
      ) : (
        <label htmlFor="image-upload" className="cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Noun_Project_cloud_upload_icon_411593_cc.svg" />
        </label>
      )}
    </div>
  );
};

export default UploadImage;

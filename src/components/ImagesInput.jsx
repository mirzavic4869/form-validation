import React from "react";
import { useState } from "react";

const ImagesInput = () => {
	const [selectedImages, setSelectedImages] = useState([]);
	const onSelectFile = (e) => {
		const selectedFiles = e.target.files;
		const selectedFilesArray = Array.from(selectedFiles);

		const imagesArray = selectedFilesArray.map((file) => {
			return URL.createObjectURL(file);
		});
		setSelectedImages((previousImage) => previousImage.concat(imagesArray));
	};

	return (
		<div>
			<section>
				<label htmlFor="Images">
					Add Images
					<input type="file" name="images" onChange={onSelectFile} multiple accept="image/png , image/jpeg, image/webp" />
				</label>
				{selectedImages.length > 0 && selectedImages.length > 5 ? (
					<p>
						You can't upload more than 5 images! <br />
						<span>
							Please delete <b>{selectedImages.length - 5}</b>of them
						</span>
					</p>
				) : (
					<button
						onClick={() => {
							alert("upload image success");
						}}
					>
						Upload {selectedImages.length} Image{selectedImages.length <= 1 ? "" : "s"}
					</button>
				)}

				<div className="images">
					{selectedImages &&
						selectedImages.map((image, index) => {
							return (
								<div key={image} className="image">
									<img src={image} alt="foto" height={40} width={60} />
									<button className="bg-red-600 rounded-full text-white p-2" onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
										X
									</button>
									<p>{index + 1}</p>
								</div>
							);
						})}
				</div>
			</section>
		</div>
	);
};

export default ImagesInput;

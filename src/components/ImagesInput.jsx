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
				<label className="text-blue-800 font-semibold mr-2" htmlFor="Images">
					Images
				</label>
				<input className="mt-2" type="file" name="images" onChange={onSelectFile} multiple accept="image/png , image/jpeg, image/webp" />

				{selectedImages.length > 0 && selectedImages.length > 5 ? (
					<p>
						You can't upload more than 5 images! <br />
						<span>
							Please delete <b>{selectedImages.length - 5}</b>of them
						</span>
					</p>
				) : (
					<button
						className="bg-blue-800 text-white p-2 rounded-lg my-3"
						onClick={() => {
							selectedImages.length > 0 ? alert("upload image success") : <button disabled></button>;
						}}
					>
						Upload {selectedImages.length} Image{selectedImages.length <= 1 ? "" : "s"}
					</button>
				)}

				<div className="images columns-3 lg:flex lg:gap-3">
					{selectedImages &&
						selectedImages.map((image, index) => {
							return (
								<div key={image} className="image lg:flex lg:gap-2">
									<img src={image} alt="foto" width={30} />
									<p>{index + 1}</p>
									<button className="bg-red-600 rounded-full w-[15px] h-[15px] text-white text-[10px] " onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
										X
									</button>
								</div>
							);
						})}
				</div>
			</section>
		</div>
	);
};

export default ImagesInput;

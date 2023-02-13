import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import galleryImgs from "./galleryImages"
const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImgs.map((img, i) => (
          <img
            className="masonry-img"
            src={img}
            key={i}
            alt="gallery-img"
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
export default MasonryImagesGallery

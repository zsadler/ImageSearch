function ImageShow({ image }) {
  return (
    <div className="list image-show">
      <picture>
        <source media="(min-width:650px)" srcSet={image.urls.regular} />
        <source media="(min-width:400px)" srcSet={image.urls.small} />
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{ width: "auto" }}
        />
      </picture>
    </div>
  );
}

export default ImageShow;

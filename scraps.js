return {
    leftCol: element.region_info.bounding_box.left_col * width,
    topRow: element.region_info.bounding_box.top_row * height,
    rightCol: width - element.region_info.bounding_box.right_col * width,
    bottomRow:
      height - element.region_info.bounding_box.bottom_row * height,
  };

  let boxes = clarifaiFace.map((element) => element);
  console.log(boxes);
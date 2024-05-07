type Image = {
  public_id: string;
  width: number;
  height: number;
  tags: string[];
};

type CloudinarySearchResults = {
  resources: Image[];
};

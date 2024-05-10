import { CldOgImageProps } from "next-cloudinary";

type ImageType = CldImageProps;

type CloudinarySearchResults = {
  resources: ImageType[];
};

type FolderType = {
  name: string;
  path: string;
};

type FetchAlbumsResultTypes = {
  folders: Folder[];
};

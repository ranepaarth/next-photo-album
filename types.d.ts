import { CldOgImageProps } from "next-cloudinary";

type Image = CldImageProps;

type CloudinarySearchResults = {
  resources: Image[];
};

type FolderType = {
  name: string;
  path: string;
};

type FetchAlbumsResultTypes = {
  folders: Folder[];
};
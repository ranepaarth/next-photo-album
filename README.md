# Next Photo Album

🖼️ Implemented a photo gallery with NextJs and Cloudinary.


https://github.com/ranepaarth/next-photo-album/assets/130083485/fdbea727-3d17-4f29-9e54-df2eb5f095b6


## Features

- Upload Images
- Search Images by tag name
- Add Image to album
- Add to favorites
- Transform Images
- Dark Theme Toggle

## Tech Stack

- [Next.js / TailwindCSS](https://nextjs.org/docs/getting-started/installation)
- [Next-Cloudinary](https://next.cloudinary.dev/)
- [Cloudinary](https://cloudinary.com/)
- [Shadcn/ui](https://ui.shadcn.com/docs/installation/next)
- [Framer motion](https://www.framer.com/motion/)

## Installation

1. Clone the repository: `git clone https://github.com/ranepaarth/next-photo-album.git`
2. Navigate to the project directory: `cd next-photo-album`
3. Install the dependencies: `npm install`

#### Environment Variables

Add a `.env` file in the root directory and follow

```

# Create or login to your cloudniary account and then navigate to the developer dashboard, there you can get the following values
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_URL
NEXT_PUBLIC_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

# You can create your own custom upload preset from cloudinary settings after you have logged in
NEXT_PUBLIC_UPLOAD_PRESET

# This is done so as to not exceed cloudinary storage
NEXT_PUBLIC_MAX_IMAGES

```

## Usage

1. Start development server `npm run dev`
2. Open your Browser and visit [http://localhost:3000](http://localhost:300) to view the website

## Concepts covered

- [x] NextJs 14 App routing
- [x] Server Actions
- [x] Optimistic Updates
- [x] Cloudinary's Upload & Search APIs
- [x] Framer motion animation & transitions

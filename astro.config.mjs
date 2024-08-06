import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        path: "./custom-config.cjs",
      },
    }),
    NetlifyCMS({
      config: {
        // Use Netlify’s “Git Gateway” authentication and target our default branch
        backend: {
          name: "git-gateway",
          branch: "latest",
        },
        // Logo for backend
        logo_url: `https://res.cloudinary.com/stephangriesel/image/upload/v1687318146/logo_cqhhz9.png`,
        // Configure where our media assets are stored & served from
        media_folder: "public/upload",
        public_folder: "/upload",
        // Configure the content collections
        collections: [
          {
            name: "galleries",
            label: "Gallery Posts",
            label_singular: "Gallery Post",
            folder: "src/pages/posts",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "starredTag",
                widget: "boolean",
                label: "Featured Project",
                hint: "Enabling this will add photo to top. Minimum 3 projects required.",
                default: "false",
              },
              {
                name: "thumbnail",
                widget: "image",
                choose_url: true,
                default: "/upload/logogray.svg",
              },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: true,
              },
              { name: "tag", widget: "string", label: "Tag", required: true },
              { name: "body", widget: "markdown", label: "Post Body" },
              {
                name: "layout",
                widget: "select",
                default: "../../layouts/GalleryPost.astro",
                options: [
                  {
                    label: "Gallery Post",
                    value: "../../layouts/GalleryPost.astro",
                  },
                ],
              },
            ],
          },
          {
            name: "accommodation",
            label: "Accommodation Intro",
            label_singular: "Accommodation",
            folder: "src/pages/content/accommodation",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: true,
              },
              { name: "tag", widget: "string", label: "Tag", required: true },
              { name: "body", widget: "markdown", label: "Post Body" },
              {
                name: "layout",
                widget: "select",
                default: "../../../layouts/GalleryPost.astro",
                options: [
                  {
                    label: "Gallery Post",
                    value: "../../../layouts/GalleryPost.astro",
                  },
                ],
              },
            ],
          },
          {
            name: "faq",
            label: "FAQ Intro",
            label_singular: "FAQ",
            folder: "src/pages/content/faq",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "string",
                label: "Description",
                required: true,
              },
              { name: "body", widget: "markdown", label: "Post Body" },
              {
                name: "layout",
                widget: "select",
                default: "../../../layouts/General.astro",
                options: [
                  {
                    label: "Gallery Post",
                    value: "../../../layouts/General.astro",
                  },
                ],
              },
            ],
          },
          {
            name: "navigationbar",
            label: "Navigation Bar",
            label_singular: "Navigation Bar",
            folder: "src/pages/content/navigationbar",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Title" },
              {
                name: "logo",
                widget: "image",
                label: "Logo",
                choose_url: true,
                default: "",
                required: false,
              },
              { name: "menuitem1", widget: "string", label: "Menu Item 1" },
              { name: "menuitem1url", widget: "string", label: "Url" },
              { name: "menuitem2", widget: "string", label: "Menu Item 2" },
              { name: "menuitem2url", widget: "string", label: "Url" },
              { name: "menuitem3", widget: "string", label: "Menu Item 3" },
              { name: "menuitem3url", widget: "string", label: "Url" },
              { name: "menuitem4", widget: "string", label: "Menu Item 4" },
              { name: "menuitem4url", widget: "string", label: "Url" },
              {
                name: "layout",
                widget: "select",
                default: "../../../layouts/General.astro",
                options: [
                  {
                    label: "General",
                    value: "../../../layouts/General.astro",
                  },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});

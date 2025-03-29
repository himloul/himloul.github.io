import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      // GitHub: "https://github.com/jackyzha0/quartz",
      // "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: false, },
        { Component: Component.Darkmode() },
      ],
    }),

    /* Component.Explorer({
      title: "Explorer",
      folderClickBehavior: "link",
      folderDefaultState: "collapsed",
      useSavedState: true,
      filterFn: (node) => {
        if (node.isFolder) {
          const folderName = node.displayName.toLowerCase(); // or node.data?.slug, adjust based on your folder structure
          return folderName === "posts" || folderName === "projects";
        }
        return false; // Don't show files at the root level
      },
      order: ["filter", "map", "sort"], // Make sure "filter" is included in the order
    }) */
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    // Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        { Component: Component.Search(), grow: false, },
        { Component: Component.Darkmode() },
      ],
    }),
    /* Component.Explorer({
      folderClickBehavior: "link",
      folderDefaultState: "collapsed"
    }), */
  ],
  right: [
    // Component.Graph(),
  ],
}

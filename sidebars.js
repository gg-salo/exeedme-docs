/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "The Basics",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "the-basics",
        },
      ],
    },
    {
      type: "category",
      label: "The Platform",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Get Started",
          collapsed: false,
          items: [
            {
              type: "autogenerated",
              dirName: "get-started",
            },
          ],
        },
        /* {
          type: "category",
          label: "XED",
          items: [
            {
              type: "autogenerated",
              dirName: "xed",
            },
          ],
        }, */
        {
          type: "category",
          label: "Lottery",
          collapsed: false,
          items: [
            {
              type: "autogenerated",
              dirName: "lottery",
            },
          ],
        },
        {
          type: "category",
          label: "Game Mining (Soon)",
          items: [
            {
              type: "autogenerated",
              dirName: "game-mining",
            },
          ],
        },
        {
          type: "category",
          label: "Staking (Soon)",
          items: [
            {
              type: "autogenerated",
              dirName: "staking",
            },
          ],
        },
      ],
    },
  ],
};

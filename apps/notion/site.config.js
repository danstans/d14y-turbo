module.exports = {
    // where it all starts -- the site's root Notion page (required)
    rootNotionPageId: 'fdb7a8ba3b8346cbb9f0867fdc1a6b20',
  
    // if you want to restrict pages to a single notion workspace (optional)
    // (this should be a Notion ID; see the docs for how to extract this)
    rootNotionSpaceId: null,
  
    // basic site info (required)
    name: 'Transitive Bullshit',
    domain: 'transitivebullsh.it',
    author: 'Travis Fischer',
  
    // open graph metadata (optional)
    description: 'Example site description',
    socialImageTitle: 'Transitive Bullshit',
    socialImageSubtitle: 'Hello World! 👋',
  
    // social usernames (optional)
    twitter: 'transitive_bs',
    github: 'd14y',
    linkedin: 'd14y',
  
    // default notion icon and cover images for site-wide consistency (optional)
    // page-specific values will override these site-wide defaults
    defaultPageIcon: null,
    defaultPageCover: null,
    defaultPageCoverPosition: 0.5,

  }
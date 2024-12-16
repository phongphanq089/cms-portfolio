import blockContent from './schemas/block-content'
import category from './schemas/category/category-post'
import categoryDeveloper from './schemas/category/category-developer'
import categoryProject from './schemas/category/category-project'
import developer from './schemas/developer'
import portfolioPage from './schemas/portfolio-page'
import post from './schemas/post'
import project from './schemas/project'
import tags from './schemas/tags'
import social from './schemas/social'
import imageGallery from './schemas/image-gallery'
import footerLink from './schemas/footer-link'
import gallerySource from './schemas/gallery-source'
import video from './schemas/video'

export const schemaTypes = [
  portfolioPage,
  post,
  category,
  tags,
  blockContent,
  developer,
  categoryDeveloper,
  project,
  categoryProject,
  social,
  imageGallery,
  footerLink,
  gallerySource,
  video,
]

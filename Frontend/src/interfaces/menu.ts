export interface MenuDataInterface {
    "menu": string,
    "content": [
      ContentInterface
    ]
  }
  
  export interface ContentInterface {
    "url": string,
    "image_path": string,
    "default_image_path": string,
    "icon_path": string,
    "title": string,
    "description": string,
    "sub_menus"?: [
      SubmenuInterface
    ]
  }
  
  export interface SubmenuInterface {
    "url": string,
    "image_path": string,
    "default_image_path": string
    "icon_path": string,
    "title": string
  }
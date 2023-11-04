export interface AboutUsMenuProps {
  aboutUsMenuImage: string;
  setAboutUsMenuImage: (image: string) => void;
  hideDropdownContent: (content: string) => void;
}

export interface ProductMenuProps {
  productMenuImage: string;
  setProductMenuImage: (image: string) => void;
  hideDropdownContent: (content: string) => void;
}
export interface ApplicationMenuProps {
  applicationsMenuImage: string;
  setApplicationsMenuImage: (image: string) => void;
  hideDropdownContent: (content: string) => void;
}
export interface ServiceMenuProps {
  serviceMenuImage: string;
  setServiceMenuImage: (image: string) => void;
  hideDropdownContent: (content: string) => void;
}

export interface HomeMenuProps {
  homeMenuImage: string;
  setHomeMenuImage: (image: string) => void;
  hideDropdownContent: (content: string) => void;
}

export interface GalleryMenuProps {
  galleryMenuImage: string;
  setgalleryMenuImage: (image: string) => void;
  hideDropdownContent: (content: string) => void;
}

export interface NavbarProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}


export interface NewsInterface {
  id: string,
  field: {
    url: string,
    title: string,
    description: string,
    image: [{
      url: string
    }
    ],
    date: string
  }
}

export interface EventDataInterface {

  id: string,

  field: {
    url: string,
    image: [{
      url: string
    }
    ],
    title: string,
    description: string,
    date: string

  }
}


export interface EditItemInterface {
  id: string,
  field: {
    title: string,
    url: string,
    description: string
    image: [
      {
        url: string
      }
    ],
    date: string
  }
}
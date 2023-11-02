import React from "react";
import { Link } from "react-router-dom";

export default function CustomHeaderComponent(props: any) {

    const {content, prop, setMenuImage}:{ content: any, prop: any, setMenuImage: any} = props;

                  return (
                    
                      <div className="submenu">
                        <Link
                          className="sub_link"
                          to={content.url}
                          onMouseEnter={() =>
                            setMenuImage(content.image_path)
                          }
                          onMouseLeave={() =>
                            setMenuImage(
                              content.default_image_path
                            )
                          }
                        >
                          <img
                            src={content.icon_path}
                            width={16}
                            height={16}
                            alt={content.title}
                          />{" "}
                          <strong>{content.title}</strong>
                        </Link>
                        {content.sub_menus ? (
                          content.sub_menus.map((sub_menu: any) => {
                            return (
                              <div className="step_third">
                                <div className="subtitle">
                                  <Link
                                    className="sub_link"
                                    to={sub_menu.url}
                                    onMouseEnter={() =>
                                        setMenuImage(
                                        sub_menu.image_path
                                      )
                                    }
                                    onMouseLeave={() =>
                                        setMenuImage(
                                        sub_menu.default_image_path
                                      )
                                    }
                                  >
                                    <img
                                      src={sub_menu.icon_path}
                                      width={16}
                                      height={16}
                                      alt={sub_menu.title}
                                    />{" "}
                                    <strong>{sub_menu.title}</strong>
                                  </Link>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p>{content.description}</p>
                        )}
                      </div>
                   
                  );
               

}

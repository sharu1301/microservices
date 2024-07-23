package com.insignia;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

//	@Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//            .antMatchers("/", "/login", "/oauth/**").permitAll()
//            .anyRequest().authenticated()
//            .and()
//            .formLogin().permitAll()
//            .and()
//            .oauth2Login()
//                .loginPage("/login")
//                .userInfoEndpoint()
//                    .userService(oauthUserService);
//    }
//
//    @Autowired
//    private CustomOAuth2UserService oauthUserService;
}

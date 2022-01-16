package com.chopaki.mtp.security.config;

import com.chopaki.mtp.security.filter.CustomAuthenticationFilter;
import com.chopaki.mtp.security.filter.CustomAuthorizationFilter;
import com.chopaki.mtp.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        http.formLogin().loginPage("/api/auth/login");
//        http.formLogin().loginProcessingUrl("/api/auth/login");
//        http.authorizeRequests().antMatchers("/api/auth/login").permitAll();
//        http.authorizeRequests().antMatchers("/login").permitAll();
        http.authorizeRequests().antMatchers("/api/auth/**").permitAll();
        http.authorizeRequests().antMatchers("/actuator/prometheus").permitAll();
        http.authorizeRequests().anyRequest().authenticated();
//        http.addFilter(getCustomAuthenticationFilter(authenticationManagerBean()));
        http.addFilter(new CustomAuthenticationFilter(authenticationManagerBean()));
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

//    @Bean
//    public CustomAuthenticationFilter getCustomAuthenticationFilter(AuthenticationManager authenticationManager) {
//        CustomAuthenticationFilter filter = new CustomAuthenticationFilter(authenticationManager);
//        filter.setFilterProcessesUrl("/api/auth/login");
//        return filter;
//    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}

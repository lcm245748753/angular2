package com.idataitech.springboot.inspector.config;

import org.springframework.boot.info.GitProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

@Configuration
public class GitConfig {

    @Bean
    public GitProperties gitProperties() {
        return new GitProperties(new Properties());
    }

}

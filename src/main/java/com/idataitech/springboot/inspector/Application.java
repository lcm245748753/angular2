package com.idataitech.springboot.inspector;

import org.springframework.boot.Banner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.idataitech.springboot.inspector")
public class Application extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplicationBuilder application = new SpringApplicationBuilder();
        config(application);
        application.run(args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        config(application);
        return application.sources(Application.class);
    }

    private static void config(SpringApplicationBuilder application) {
        application.sources(Application.class);
        application.bannerMode(Banner.Mode.OFF);
    }

    static {
        System.setProperty("endpoints.enabled", "true");
        System.setProperty("endpoints.sensitive", "false");
        System.setProperty("endpoints.cors.allowed-origins", "*");
    }
}

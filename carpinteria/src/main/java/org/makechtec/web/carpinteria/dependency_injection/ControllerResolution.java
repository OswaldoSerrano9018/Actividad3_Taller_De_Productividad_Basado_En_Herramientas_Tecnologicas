package org.makechtec.web.carpinteria.dependency_injection;

import org.makechtec.software.sql_support.ConnectionInformation;
import org.makechtec.web.carpinteria.components.bom.BOMDatabaseProxy;
import org.makechtec.web.carpinteria.components.materials.MaterialTemplateDatabaseProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ControllerResolution {

    @Bean
    public MaterialTemplateDatabaseProxy materialDatabaseProxy() {
        return new MaterialTemplateDatabaseProxy(connectionInformation());
    }

    @Bean
    public BOMDatabaseProxy bomDatabaseProxy() {
        return new BOMDatabaseProxy(connectionInformation());
    }

    @Bean
    public ConnectionInformation connectionInformation() {
        return new ConnectionInformation(
                "root",
                "zZKj1Ug36Ksk",
                "localhost",
                "3306",
                "carpinteria"
        );
    }

}

package org.makechtec.web.carpinteria.components.materials;

import org.makechtec.software.sql_support.ConnectionInformation;
import org.makechtec.software.sql_support.mysql.MysqlEngine;
import org.makechtec.software.sql_support.query_process.statement.ParamType;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class MaterialTemplateDatabaseProxy {

    private final ConnectionInformation connectionInformation;

    public MaterialTemplateDatabaseProxy(ConnectionInformation connectionInformation) {
        this.connectionInformation = connectionInformation;
    }

    public void create(MaterialTemplate template){
        (new MysqlEngine<Void>(connectionInformation))
                .queryString("INSERT INTO material_plantillas(nombre, unidad, precio_unitario) VALUES(?,?,?);")
                .isPrepared()
                .addParamAtPosition(1, template.name(), ParamType.TYPE_STRING)
                .addParamAtPosition(2, template.unit(), ParamType.TYPE_STRING)
                .addParamAtPosition(3, template.unitPrice(), ParamType.TYPE_DOUBLE)
                .update();
    }

    public MaterialTemplate byId(String materialId){

        return
            (new MysqlEngine<MaterialTemplate>(connectionInformation))
                    .queryString("SELECT id, nombre, unidad, precio_unitario, cantidad FROM material_plantillas WHERE id = ? LIMIT 1;")
                    .isPrepared()
                    .addParamAtPosition(1, materialId, ParamType.TYPE_INTEGER)
                    .run(resultSet -> {
                        resultSet.next();

                        return new MaterialTemplate(
                                String.valueOf(resultSet.getInt("id")),
                                resultSet.getString("nombre"),
                                resultSet.getString("unidad"),
                                resultSet.getDouble("precio_unitario"),
                                resultSet.getInt("cantidad")
                        );
                    });

    }

    public Set<MaterialTemplate> all(){

        var result = new HashSet<MaterialTemplate>();


        (new MysqlEngine<Void>(connectionInformation))
                .queryString("SELECT id, nombre, unidad, precio_unitario, cantidad FROM material_plantillas;")
                .run(resultSet -> {

                    while(resultSet.next()){

                        result.add(new MaterialTemplate(
                            String.valueOf(resultSet.getInt("id")),
                            resultSet.getString("nombre"),
                            resultSet.getString("unidad"),
                            resultSet.getDouble("precio_unitario"),
                            resultSet.getInt("cantidad")
                        ));
                    }

                    return null;
                });

        return result;
    }


}

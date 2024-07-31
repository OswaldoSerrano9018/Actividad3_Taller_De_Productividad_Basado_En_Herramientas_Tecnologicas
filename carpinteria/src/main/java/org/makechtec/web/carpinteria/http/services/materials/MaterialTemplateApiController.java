package org.makechtec.web.carpinteria.http.services.materials;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.makechtec.software.json_tree.builders.ArrayObjectLeafBuilder;
import org.makechtec.software.json_tree.builders.ObjectLeafBuilder;
import org.makechtec.web.carpinteria.components.materials.MaterialTemplate;
import org.makechtec.web.carpinteria.components.materials.MaterialTemplateDatabaseProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/material/template")
public class MaterialTemplateApiController {

    private final MaterialTemplateDatabaseProxy materialTemplateDatabaseProxy;

    @Autowired
    public MaterialTemplateApiController(MaterialTemplateDatabaseProxy materialTemplateDatabaseProxy) {
        this.materialTemplateDatabaseProxy = materialTemplateDatabaseProxy;
    }

    @GetMapping
    public ResponseEntity<String> index(){
        var response = ArrayObjectLeafBuilder.builder()
                .add(ObjectLeafBuilder.builder()
                        .put("id", 1)
                        .put("name", "dfssd")
                        .build())
                .build();

        return new ResponseEntity<>(response.getLeafValue(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> edit(@PathVariable("id") int id) {

//        var current = materialTemplateDatabaseProxy.byId(id);
//
//        var response = ObjectLeafBuilder.builder()
//                .put("id", current.id())
//                .put("name", current.name())
//                .put("unit", current.unit())
//                .put("unitPrice", current.unitPrice())
//                .build();

        var response = ObjectLeafBuilder.builder()
                        .put("id", id)
                        .put("name", "fdsdf")
                        .put("unit", "Kg")
                        .put("unitPrice", "4949.3")
                        .build();

        return ResponseEntity.ok(response.getLeafValue());
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody String body){

        var mapper = new ObjectMapper();

        try {
            var tree = mapper.readTree(body);

            materialTemplateDatabaseProxy.create(new MaterialTemplate(
                    "",
                    tree.get("nombre").asText(),
                    tree.get("unidad").asText(),
                    tree.get("precion_unitario").asDouble(),
                    0
            ));

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        return ResponseEntity.ok().build();
    }

}

package org.makechtec.web.carpinteria.http.services.client;

import org.makechtec.software.json_tree.builders.ArrayObjectLeafBuilder;
import org.makechtec.software.json_tree.builders.ObjectLeafBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/client")
public class ClientApiController {

    @GetMapping
    public ResponseEntity<String> index() {

        var response = ArrayObjectLeafBuilder.builder()
                .add(ObjectLeafBuilder.builder()
                        .put("id", 1)
                        .put("name", "fdsjjfd")
                        .build())
                .build();

        return new ResponseEntity<>(response.getLeafValue(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> show(@PathVariable("id") int id) {
        var response = ObjectLeafBuilder.builder()
                .put("id", id)
                .put("name", "fdsjjfd")
                .put("contact", "54545")
                .build();

        return new ResponseEntity<>(response.getLeafValue(), HttpStatus.OK);
    }



}

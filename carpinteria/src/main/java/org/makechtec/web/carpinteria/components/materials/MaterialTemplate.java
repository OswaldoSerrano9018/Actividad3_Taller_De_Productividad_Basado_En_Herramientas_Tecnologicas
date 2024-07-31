package org.makechtec.web.carpinteria.components.materials;

public record MaterialTemplate(
        String id,
        String name,
        String unit,
        double unitPrice,
        int quantity
) {
}

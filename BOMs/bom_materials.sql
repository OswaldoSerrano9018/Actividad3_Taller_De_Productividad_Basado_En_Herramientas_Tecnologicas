create table carpinteria.bom_materials
(
    id          bigint auto_increment
        primary key,
    material_id bigint unsigned not null,
    bom_id      bigint unsigned not null,
    quantity    int default 0   null,
    constraint bom_id___fk
        foreign key (bom_id) references carpinteria.boms (id)
            on update cascade on delete cascade,
    constraint bom_materials_material_plantillas_id_fk
        foreign key (material_id) references carpinteria.material_templates (id)
            on update cascade on delete cascade
);


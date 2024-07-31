create table carpinteria.material_templates
(
    id         bigint unsigned auto_increment
        primary key,
    name       varchar(100)    null,
    unit       varchar(100)    null,
    unit_price float default 0 null,
    quantity   int   default 0 null
);


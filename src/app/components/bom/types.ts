
export type BomModelView = {
  id: number;
}

export type BomWihMaterials = {
  id: number;
  materials: {
    id: number;
    quantity: number;
    name: string;
  }[];
}

import {Routes} from '@angular/router';
import {BomIndexPageComponent} from "./components/bom/ui/pages/bom-index-page/bom-index-page.component";
import {BomRegisterPageComponent} from "./components/bom/ui/pages/bom-register-page/bom-register-page.component";
import {ClientIndexPageComponent} from "./components/client/ui/pages/client-index-page/client-index-page.component";
import {
  ClientRegisterPageComponent
} from "./components/client/ui/pages/client-register-page/client-register-page.component";
import {
  MaterialTemplateIndexPageComponent
} from "./components/material/template/ui/pages/material-template-index-page/material-template-index-page.component";
import {Welcome1Component} from "./pages/welcome/welcome1/welcome1.component";
import {
  MaterialTemplateRegisterPageComponent
} from "./components/material/template/ui/pages/material-template-register-page/material-template-register-page.component";
import {
  MaterialUnitRegisterPageComponent
} from "./components/material/unit/ui/pages/material-unit-register-page/material-unit-register-page.component";
import {OrderIndexPageComponent} from "./components/order/ui/pages/order-index-page/order-index-page.component";
import {
  OrderRegisterPageComponent
} from "./components/order/ui/pages/order-register-page/order-register-page.component";
import {ProductIndexPageComponent} from "./components/product/ui/pages/product-index-page/product-index-page.component";
import {
  ProductRegisterPageComponent
} from "./components/product/ui/pages/product-register-page/product-register-page.component";
import {QuoteIndexPageComponent} from "./components/quote/ui/pages/quote-index-page/quote-index-page.component";
import {
  QuoteRegisterPageComponent
} from "./components/quote/ui/pages/quote-register-page/quote-register-page.component";
import {BomEditPageComponent} from "./components/bom/ui/pages/bom-edit-page/bom-edit-page.component";
import {ClientEditPageComponent} from "./components/client/ui/pages/client-edit-page/client-edit-page.component";
import {
  MaterialTemplateEditPageComponent
} from "./components/material/template/ui/pages/material-template-edit-page/material-template-edit-page.component";
import {ProductEditPageComponent} from "./components/product/ui/pages/product-edit-page/product-edit-page.component";
import {OrderEditPageComponent} from "./components/order/ui/pages/order-edit-page/order-edit-page.component";
import {QuoteEditPageComponent} from "./components/quote/ui/pages/quote-edit-page/quote-edit-page.component";


export const routes: Routes = [
  {
    path: "",
    component: Welcome1Component
  },
  {
    path: "pages/bom",
    component: BomIndexPageComponent
  },
  {
    path: "pages/bom/register",
    component: BomRegisterPageComponent
  },
  {
    path: "pages/bom/:id",
    component: BomEditPageComponent
  },
  {
    path: "pages/client",
    component: ClientIndexPageComponent
  },
  {
    path: "pages/client/register",
    component: ClientRegisterPageComponent
  },
  {
    path: "pages/client/:id",
    component: ClientEditPageComponent
  },
  {
    path: "pages/material/template",
    component: MaterialTemplateIndexPageComponent
  },
  {
    path: "pages/material/template/register",
    component: MaterialTemplateRegisterPageComponent
  },
  {
    path: "pages/material/template/:id",
    component: MaterialTemplateEditPageComponent
  },
  {
    path: "pages/material/unit/register",
    component: MaterialUnitRegisterPageComponent
  },
  {
    path: "pages/order",
    component: OrderIndexPageComponent
  },
  {
    path: "pages/order/register",
    component: OrderRegisterPageComponent
  },
  {
    path: "pages/order/:id",
    component: OrderEditPageComponent
  },

  {
    path: "pages/product",
    component: ProductIndexPageComponent
  },
  {
    path: "pages/product/register",
    component: ProductRegisterPageComponent
  },
  {
    path: "pages/product/:id",
    component: ProductEditPageComponent
  },

  {
    path: "pages/quote",
    component: QuoteIndexPageComponent
  },
  {
    path: "pages/quote/:id",
    component: QuoteEditPageComponent
  },
  {
    path: "pages/quote/register",
    component: QuoteRegisterPageComponent
  }

];

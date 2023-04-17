import {createHeader} from "../pages/page-elements/header";
import {createHome} from "../pages/page-elements/home-page-section";
import {createFooter} from "../pages/page-elements/footer";
export function firstLoad(){
    createHeader();
    createHome();
    createFooter();
}
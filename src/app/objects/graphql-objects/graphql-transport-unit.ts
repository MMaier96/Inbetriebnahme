import { WamasButtonComponent } from './../../components/wamas-components/wamas-button-component/wamas-button.component';
import { WamasTextComponent } from './../../components/wamas-components/wamas-text-component/wamas-text.component';
import { GraphQLTransportUnitType } from './graphql-transport-unit-type';
export class GraphQLTransportUnit {
  name: string;
  location: string;
  hasActiveTransportOrder: boolean;
  type: GraphQLTransportUnitType;

  static getPropertyComponent(propertyName: String) {
    switch (propertyName) {
      case 'name':
        return WamasTextComponent;

      case 'location':
        return WamasTextComponent;

      case 'hasActiveTransportOrder':
        return WamasButtonComponent;

      case 'type':
        return WamasTextComponent;

      default:
        return WamasTextComponent;
    }
  }
}

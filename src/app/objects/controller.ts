import { AcxRuntimeState } from './acx-runtime-state';
export interface Controller {
  available: boolean;
  name: string;
  runtimeState: AcxRuntimeState;
}

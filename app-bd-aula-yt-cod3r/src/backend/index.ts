import saveUser from "./usuario/saveUser";
import getAll from "./usuario/getAll";
import deleteUser from "./usuario/deleteUser";

// Padrão Facade
export default class Backend {
  static readonly users = {
    save: saveUser,
    get: getAll,
    delete: deleteUser,
  };
}

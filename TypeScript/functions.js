"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMailDirecciónTelefonoByDni = void 0;
function addMailDirecciónTelefonoByDni(listadoPersonas, dni, direccion, mail, telefono) {
    const persona = listadoPersonas.find(p => p.getDni() === dni);
    if (persona) {
        persona.getDirecciones().push(direccion);
        persona.getMails().push(mail);
        persona.getTelefonos().push(telefono);
    }
}
exports.addMailDirecciónTelefonoByDni = addMailDirecciónTelefonoByDni;

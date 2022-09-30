import React from "react";
import "../css/edit-profile.css";   

export default function ProfesorProfile() {
  return (
    
    <div className="d-center">
      <form>
        <h3>Tu información personal</h3>
        <hr />

        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Correo electrónico</babel>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              readOnly
              placeholder="mariano.a_93@hotmail.com"
            />
          </div>
        </div>

        {/* change password */}
        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Anterior Contraseña</babel>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese la contraseña anterior"
            />
          </div>
        </div>

        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Nueva contraseña</babel>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa la nueva contraseña"
            />
          </div>
        </div>

        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">
            Confirma nueva contraseña
          </babel>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="re ingresa la nueva contraseña"
            />
          </div>
        </div>

        {/* personal imformation  */}

        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Nombre</babel>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="first-name"
              readOnly
              name="name"
              placeholder="Mariano"
            />
          </div>
        </div>
        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Apellido</babel>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="last-name"
              readOnly
              name="lastName"
              placeholder="Andrigo"
            />
          </div>
        </div>
        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Teléfono</babel>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="tel"
              id="phone"
              name="phone"
              placeholder="1169792835"
              readOnly
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <babel className="col-sm-2 col-form-label">Rol</babel>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="org-name"
              name="org-name"
              readOnly
              placeholder="Profesor"
            />
          </div>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-outline-success btn-lg btn-block"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
}

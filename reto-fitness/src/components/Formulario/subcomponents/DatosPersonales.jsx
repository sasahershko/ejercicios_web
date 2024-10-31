export default function DatosPersonales({ formik}) {
    return (
        <div className="form-section">
            <h2>Datos Personales</h2>
            <div className="input-group">
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="input-field"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                />
                {formik.errors.nombre && (
                    <div className="error">{formik.errors.nombre}</div>
                )}
            </div>

            <div className="input-group">
                <label>Correo Electrónico</label>
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                )}
            </div>

            <div className="input-group">
                <label>Número de Teléfono</label>
                <input
                    type="tel"
                    name="tel"
                    className="input-field"
                    value={formik.values.tel}
                    onChange={formik.handleChange}
                />
                {formik.errors.tel && (
                    <div className="error">{formik.errors.tel}</div>
                )}
            </div>
        </div>
    );
}

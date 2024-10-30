export default function InformacionContacto({ formik }) {
    return (
        <div className="form-section">
            <h2>Información de Contacto</h2>
            <div className="input-group">
                <label>Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    className="input-field"
                    value={formik.values.direccion}
                    onChange={formik.handleChange}
                />
                {formik.errors.direccion && (
                    <div className="error">{formik.errors.direccion}</div>
                )}
            </div>

            <div className="input-group">
                <label>Ciudad</label>
                <input
                    type="text"
                    name="ciudad"
                    className="input-field"
                    value={formik.values.ciudad}
                    onChange={formik.handleChange}
                />
                {formik.errors.ciudad && (
                    <div className="error">{formik.errors.ciudad}</div>
                )}
            </div>

            <div className="input-group">
                <label>Código Postal</label>
                <input
                    type="text"
                    name="cp"
                    className="input-field"
                    value={formik.values.cp}
                    onChange={formik.handleChange}
                />
                {formik.errors.cp && (
                    <div className="error">{formik.errors.cp}</div>
                )}
            </div>
        </div>
    );
}

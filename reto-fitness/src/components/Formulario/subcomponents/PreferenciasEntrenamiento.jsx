export default function PreferenciasEntrenamiento({ formik}) {

    const handleCheckboxChange = (e) => {
        const valor = e.target.value; //valor del checkbox
        const checkeado = e.target.checked; //si está checkeado

        if (checkeado) {
            formik.setFieldValue("tipoEntrenamiento", [
                ...formik.values.tipoEntrenamiento,
                valor
            ]);
        } else {
            formik.setFieldValue(
                "tipoEntrenamiento",
                formik.values.tipoEntrenamiento.filter((item) => item !== valor)
            );
        }
    };

    return (
        <div className="form-section">
            <h2>Preferencias de Entrenamiento</h2>
            <div className="input-group">
                <label>Tipo de Entrenamiento</label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="tipoEntrenamiento"
                        value="cardio"
                        checked={formik.values.tipoEntrenamiento.includes("cardio")}
                        onChange={handleCheckboxChange}
                    />
                    Cardio
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="tipoEntrenamiento"
                        value="fuerza"
                        checked={formik.values.tipoEntrenamiento.includes("fuerza")}
                        onChange={handleCheckboxChange}
                    />
                    Fuerza
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="tipoEntrenamiento"
                        value="flexibilidad"
                        checked={formik.values.tipoEntrenamiento.includes("flexibilidad")}
                        onChange={handleCheckboxChange}
                    />
                    Flexibilidad
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="tipoEntrenamiento"
                        value="resistencia"
                        checked={formik.values.tipoEntrenamiento.includes("resistencia")}
                        onChange={handleCheckboxChange}
                    />
                    Resistencia
                </label>

                {formik.errors.tipoEntrenamiento && (
                    <div className="error">{formik.errors.tipoEntrenamiento}</div>
                )}
            </div>

            <div className="input-group">
                <label>Objetivos</label>
                <input
                    type="text"
                    name="objetivos"
                    className="input-field"
                    value={formik.values.objetivos}
                    onChange={formik.handleChange}
                />
                {formik.errors.objetivos && (
                    <div className="error">{formik.errors.objetivos}</div>
                )}
            </div>

            <div className="input-group">
                <label>Disponibilidad</label>
                <input
                    type="text"
                    name="disponibilidad"
                    className="input-field"
                    value={formik.values.disponibilidad}
                    onChange={formik.handleChange}
                />
                {formik.errors.disponibilidad && (
                    <div className="error">{formik.errors.disponibilidad}</div>
                )}
            </div>
        </div>
    );
}

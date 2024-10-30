
export default function DatosPago({ formik }) {

    return (
        <div className="form-section">
            <h2>Datos de Pago</h2>
            <div className="input-group">
                <label>Método de Pago</label>
                <select
                    name="metodoPago"
                    className="input-field"
                    value={formik.values.metodoPago}
                    onChange={formik.handleChange}
                >
                    <option value="">Selecciona un método</option>
                    <option value="tarjeta">Tarjeta de Crédito</option>
                    <option value="paypal">PayPal</option>
                </select>
                {formik.errors.metodoPago && (
                    <div className="error">{formik.errors.metodoPago}</div>
                )}
            </div>

            {formik.values.metodoPago === 'tarjeta' && (
                <div className="payment-section">
                    <div className="input-group">
                        <label>Número de Tarjeta</label>
                        <input
                            type="text"
                            name="numeroTarjeta"
                            className="input-field"
                            value={formik.values.numeroTarjeta}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.numeroTarjeta && (
                            <div className="error">{formik.errors.numeroTarjeta}</div>
                        )}
                    </div>

                    <div className="input-group">
                        <label>CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            className="input-field"
                            value={formik.values.cvv}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.cvv && (
                            <div className="error">{formik.errors.cvv}</div>
                        )}
                    </div>

                    <div className="input-group">
                        <label>Fecha de Expiración (MM/AA)</label>
                        <input
                            type="text"
                            name="fechaExpiracion"
                            className="input-field"
                            value={formik.values.fechaExpiracion}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.fechaExpiracion && (
                            <div className="error">{formik.errors.fechaExpiracion}</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

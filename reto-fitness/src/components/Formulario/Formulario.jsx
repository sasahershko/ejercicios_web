import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatosPersonales from './subcomponents/DatosPersonales';
import InformacionContacto from './subcomponents/InformacionContacto';
import PreferenciasEntrenamiento from './subcomponents/PreferenciasEntrenamiento';
import DatosPago from './subcomponents/DatosPago';
import '../../styles/Formulario.css';

export default function Formulario() {
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            tel: '',
            direccion: '',
            ciudad: '',
            cp: '',
            tipoEntrenamiento: '',
            objetivos: '',
            disponibilidad: '',
            metodoPago: '',
            numeroTarjeta: '',
            cvv: '',
            fechaExpiracion: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio.'),
            email: Yup.string().email('Correo no válido').required('El correo es obligatorio.'),
            tel: Yup.string().required('El número de teléfono es obligatorio.'),
            direccion: Yup.string().required('La dirección es obligatoria.'),
            ciudad: Yup.string().required('La ciudad es obligatoria.'),
            cp: Yup.string().required('El código postal es obligatorio.'),
            tipoEntrenamiento: Yup.string().required('El tipo de entrenamiento es obligatorio.'),
            objetivos: Yup.string().required('Los objetivos son obligatorios.'),
            disponibilidad: Yup.string().required('La disponibilidad es obligatoria.'),
            metodoPago: Yup.string().required('El método de pago es obligatorio.'),
        }),
        onSubmit: async (values) => {
            const response = await fetch('https://api.fitlife.com/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });

            //lo hago asi, ya que el .when no me funciona
            if(values.metodoPago === 'tarjeta'){
                if(values.numeroTarjeta.length !== 16){
                    formik.setErrors({numeroTarjeta: 'El número de tarjeta debe tener 16 dígitos.'});
                }
                if(values.cvv.length !== 3){
                    formik.setErrors({cvv: 'El cvv debe tener 3 dígitos.'});
                }
                if(!values.fechaExpiracion || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.fechaExpiracion)){
                    formik.setErrors({fechaExpiracion: 'La fecha de expiración debe tener el formato MM/YY.'});
                }
            }

            if (response.ok) {
                console.log('Usuario registrado correctamente.');
            } else {
                console.log('Error al registrar el usuario.');
            }
        },
        validateOnChange: false, //para que no se valide al cambiar el valor, ya que si cambio el método me salta el error en todos los campos que no he tocado
    });

    return (
        <div className="page-container">
            <h1>FITLIFE</h1> 
            <div className="formulario-container">
                <DatosPersonales formik={formik} />
                <InformacionContacto formik={formik} />
                <PreferenciasEntrenamiento formik={formik} />
                <DatosPago formik={formik} />
            </div>
            <button type="submit" className="button-submit" onClick={formik.handleSubmit}>Enviar</button>
        </div>
    );
}

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatosPersonales from './subcomponents/DatosPersonales';
import InformacionContacto from './subcomponents/InformacionContacto';
import PreferenciasEntrenamiento from './subcomponents/PreferenciasEntrenamiento';
import DatosPago from './subcomponents/DatosPago';
import '../../styles/Formulario.css';

export default function Formulario() {

    //para siguiente paso, y paso anterior
    const [currentStep, setCurrentStep] = useState(1);
    const [submitStatus, setSubmitStatus] = useState(null);

    //lo pongo por pasos, para que dependiendo del paso en el que estemos, valide un campo u otro
    const validationSchemas = [
        Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio.'),
            email: Yup.string().email('Correo no válido').required('El correo es obligatorio.'),
            tel: Yup.string().required('El número de teléfono es obligatorio.')
        }),
        Yup.object({
            direccion: Yup.string().required('La dirección es obligatoria.'),
            ciudad: Yup.string().required('La ciudad es obligatoria.'),
            cp: Yup.string().required('El código postal es obligatorio.')
        }),
        Yup.object({
            tipoEntrenamiento: Yup.array().of(Yup.string()).min(1, 'Selecciona al menos un tipo de entrenamiento.'), //este es un array de strings (checkboxes)
            objetivos: Yup.string().required('Los objetivos son obligatorios.'),
            disponibilidad: Yup.string().required('La disponibilidad es obligatoria.')
        }),
        Yup.object({
            metodoPago: Yup.string().required('El método de pago es obligatorio.'),
        })
    ];

    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            tel: '',
            direccion: '',
            ciudad: '',
            cp: '',
            tipoEntrenamiento: [],
            objetivos: '',
            disponibilidad: '',
            metodoPago: '',
            numeroTarjeta: '',
            cvv: '',
            fechaExpiracion: ''
        },
        validationSchema: validationSchemas[currentStep - 1], //uso el esquema de validación del paso actual
        onSubmit: async (values) => {
            //valores iniciales:
            setSubmitStatus(null);

            //esto lo hago por el tema de que el when no me funciona
            const errors = {}

            //lo hago asi, ya que el .when no me funciona

            if (values.metodoPago === 'tarjeta') {
                if (values.numeroTarjeta.length !== 16) {
                    errors.numeroTarjeta = 'El número de tarjeta debe tener 16 dígitos.';
                }
                if (values.cvv.length !== 3) {
                    errors.cvv = 'El CVV debe tener 3 dígitos.';
                }
                if (!values.fechaExpiracion || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.fechaExpiracion)) {
                    errors.fechaExpiracion = 'La fecha de expiración debe tener el formato MM/AA.';
                }
            }

            if (Object.keys(errors).length > 0) {
                formik.setErrors(errors);
                return;
            }

            try{
                const response = await fetch('https://api.fitlife.com/registro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values),
                });
            
                if (response.ok) {
                    setSubmitStatus('success');
                } else {
                    setSubmitStatus('error');
                }
            }catch(e){
                setSubmitStatus('error');
            }

        },
        validateOnChange: false, //para que no se valide al cambiar el valor, ya que si cambio el método me salta el error en todos los campos que no he tocado
    });


    const nextStep = async () => {
        const errors = await formik.validateForm();

        //obtenemos campos del paso actual
        const camposAValidar = Object.keys(validationSchemas[currentStep - 1].fields);

        //revisamos si hay errores en el paso actual
        const stepErrors = camposAValidar.some((field) => errors[field]);


        if (!stepErrors) {
            //si no hay errores vamos al siguiente paso
            setCurrentStep((prevStep) => prevStep + 1);
        } else {
            //si hay errores, los marcamos (marcamos solo los campos del paso actual)
            camposAValidar.forEach((field) => formik.setFieldTouched(field, true));
        }
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="page-container">
                <h1>FITLIFE</h1>
                <div className="formulario-container">
                    {currentStep === 1 && <DatosPersonales formik={formik} />}
                    {currentStep === 2 && <InformacionContacto formik={formik} />}
                    {currentStep === 3 && <PreferenciasEntrenamiento formik={formik} />}
                    {currentStep === 4 && <DatosPago formik={formik} />}
                </div>

                <div className='button-group'>
                    {currentStep > 1 && (<button type='button' onClick={prevStep} className='button-submit'>Anterior</button>)}
                    {currentStep < 4 ? <button type='button' onClick={nextStep} className='button-submit'>Siguiente</button> : <button type='submit' className='button-submit'>Enviar</button>}
                </div>


                {submitStatus === 'success' && (
                    <div className="success-message">¡Formulario enviado con éxito!</div>
                )}
                {submitStatus === 'error' && (
                    <div className="error-message">Error al enviar el formulario. Inténtalo de nuevo. API no funciona.</div>
                )}
            </div>

        </form>
    );
}

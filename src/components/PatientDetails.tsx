import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
    patient : Patient
}

const PatientDetails = ({patient} : PatientDetailsProps) => {
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label= "ID" data={patient.id}/>
            <PatientDetailsItem label= "Nombre" data={patient.nombre}/>
            <PatientDetailsItem label= "Propietario" data={patient.propietario}/>
            <PatientDetailsItem label= "Email" data={patient.email}/>
            <PatientDetailsItem label= "Fecha" data={patient.fecha.toString()}/>
            <PatientDetailsItem label= "Sintomas" data={patient.sintomas}/>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 uppercase text-white font-bold rounded-lg py-2 px-10"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 uppercase text-whit font-bold rounded-lg py-2 px-10"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientDetails
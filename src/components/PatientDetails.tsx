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
        </div>
    )
}

export default PatientDetails
import { usePatientStore } from "../store/patientStore"
import {toast} from "react-toastify"
import PatientDetailsItem from "./PatientDetailsItem"
import { Patient } from "../types"

type PatientDetailsProps = {
    patient : Patient
}

const PatientDetails = ({patient} : PatientDetailsProps) => {

    const {removePatient,getPatientById} = usePatientStore()
   
    const handleClick = () =>{
        removePatient(patient.id)
        toast("Paciente eliminado",{
            type : "error",
            autoClose: 3000,
            theme: "dark"  
        })
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label= "ID" data={patient.id}/>
            <PatientDetailsItem label= "Nombre" data={patient.nombre}/>
            <PatientDetailsItem label= "Propietario" data={patient.propietario}/>
            <PatientDetailsItem label= "Email" data={patient.email}/>
            <PatientDetailsItem label= "Fecha" data={patient.fecha.toString()}/>
            <PatientDetailsItem label= "Sintomas" data={patient.sintomas}/>

            <div className="flex flex-col lg:flex-row gap-2 justify-between mt-10">
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 uppercase text-white font-bold rounded-lg py-2 px-10"
                    onClick={()=> getPatientById(patient.id) }
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 uppercase text-whit font-bold rounded-lg py-2 px-10"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientDetails
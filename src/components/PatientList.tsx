import { usePatientStore } from "../store/patientStore"
import PatientDetails from "./PatientDetails"

const PatientList = () => {

    const {patients} = usePatientStore()

    return(

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className=" font-black text-3xl text-center">Listado de  pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        administra tus {""}
                        <span className="text-indigo-600 font-bold">pacientes y citas</span>
                    </p>
                    {patients.map ( patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    comienza agregando pacientes {""}
                    <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                </p>
            </>
            )}
        </div>
    )

}

export default PatientList
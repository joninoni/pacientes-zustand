import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients : Patient[]
    patientId : Patient["id"]
    addPatient: (data: DraftPatient) => void
    removePatient: (id: Patient["id"]) => void
    activityID: (id: Patient["id"]) => void
}

const createPatient = (patient : DraftPatient) : Patient =>{
    return { ...patient,id : crypto.randomUUID() }
}


export const usePatientStore = create<PatientState>()(devtools( (set) => ({
    patients : [],
    patientId : "",

    addPatient : data => {
        const newPatient = createPatient(data)
        set(state =>({
            patients : [...state.patients,newPatient]
        }))
    },
    removePatient : id => {
        set( state => ({
            patients : state.patients.filter ( patient => patient.id !== id)
        }))
    },
    activityID : id =>{
        set(({patientId : id}))
    }
})))
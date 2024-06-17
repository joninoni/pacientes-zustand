import {create} from "zustand"
import { DraftPatient, Patient } from "../types"

type PatientState = {
    patients : Patient[]
    addPatient: (data: DraftPatient) => void
    removePatient: (id: Patient["id"]) => void
}

const createPatient = (patient : DraftPatient) : Patient =>{
    return { ...patient,id : crypto.randomUUID() }
}


export const usePatientStore = create<PatientState>( (set) => ({
    patients : [],
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
    }
}))
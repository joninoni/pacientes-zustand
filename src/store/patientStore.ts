import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { DraftPatient, Patient } from "../types"
import { persist } from "zustand/middleware"

type PatientState = {
    patients : Patient[]
    activeId : Patient["id"]
    addPatient: (data: DraftPatient) => void
    removePatient: (id: Patient["id"]) => void
    getPatientById: (id: Patient["id"]) => void
    editPatient: (data : DraftPatient) => void
}

const createPatient = (patient : DraftPatient) : Patient =>{
    return { ...patient,id : crypto.randomUUID() }
}


export const usePatientStore = create<PatientState>()(
    devtools(

        persist( (set) => ({
            patients : [],
            activeId : "",

            addPatient : data => {
                const newPatient = createPatient(data)
                set(state =>({
                    patients : [...state.patients,newPatient]
                }))
            },
            removePatient : id => {
                set( state => ({
                    patients : state.patients.filter ( patient => patient.id !== id),
                    activeId : ""
                }))
            },
            getPatientById : id => {
                set( () => ({
                    activeId : id
                }))
            },
            editPatient : data => {
                set( (state)=> ({
                    patients : state.patients.map(patient => patient.id === state.activeId ? {...data,id:state.activeId} : patient)
                }))
            }
        }),{
            name : "Patient-storage"
        })
))
export type Patient = {
    id : string
    nombre : string
    propietario : string
    email : string
    fecha : Date
    sintomas : string
}

export type DraftPatient = Omit<Patient,"id">
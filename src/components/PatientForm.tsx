import { usePatientStore } from "../store/patientStore";
import {useForm} from "react-hook-form"
import {toast} from "react-toastify"
import Error from "./Error";
import { DraftPatient } from "../types";
import { useEffect } from "react";

export default function PatientForm() {
  
    const {register, handleSubmit,formState : {errors}, reset, setValue} = useForm<DraftPatient>()

    const {patients,addPatient,activeId,editPatient} = usePatientStore()

    useEffect( ()=> {
        if(activeId.length) {
            const activityPatient = patients.filter( patient => patient.id === activeId)[0]
            setValue("nombre",activityPatient.nombre)
            setValue("propietario",activityPatient.propietario)
            setValue("email",activityPatient.email)
            setValue("fecha",activityPatient.fecha)
            setValue("sintomas",activityPatient.sintomas)
        }
    },[patients,setValue,activeId])

    const registerPatients = (data : DraftPatient) => {
        if(activeId.length){
            editPatient(data)
            toast.info("Editado correctamente",{
                autoClose: 3000,
                theme : "colored"
            })
        }
        else{
            addPatient(data)
            toast.success("Paciente añadido correctamente",{
                autoClose : 3000
            })
        }
     
        reset()
    }

    const edit = activeId.length

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
    
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"              
                onSubmit={handleSubmit(registerPatients)}
            >
                    <div className="mb-5">
                        <label htmlFor="name" className="text-sm uppercase font-bold">
                            Paciente 
                        </label>
                        <input  
                            id="name"
                            className="w-full p-3  border border-gray-100"  
                            type="text"
                            placeholder="Nombre del Paciente"
                            {...register("nombre",{
                                required : {
                                    value : true,
                                    message : "El nombre del paciente es obligatorio",
                                }
                            })}
                        />

                            {errors.nombre && (<Error>{errors.nombre.message as string}</Error>)}
                        
                    </div>
    
                    <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Propietario"
                        {...register("propietario",{
                            required : {
                                value : true,
                                message : "El campo propietario es requerido"
                            }
                        })} 
                    />

                        {errors.propietario && (<Error>{errors.propietario.message as string}</Error>)}
                    </div>
    
                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3  border border-gray-100"  
                        type="email" 
                        placeholder="Email de Registro"
                        {...register("email",{
                            required : {
                                value : true,
                                message : "El campo email es requerido"
                            },
                            pattern : {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })} 
                    />

                        {errors.email && (<Error>{errors.email.message as string}</Error>)}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date"
                        {...register("fecha",{
                            required : {
                                value : true,
                                message : "El campo fecha es requerido"
                            }
                        })}
                    />

                        {errors.fecha && (<Error>{errors.fecha.message as string}</Error>)}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Síntomas del paciente"
                        {...register("sintomas",{
                            required : {
                                value : true,
                                message : "El campo sintomas es requerido"
                            }
                        })}
                    ></textarea>

                        {errors.sintomas && (<Error>{errors.sintomas.message as string}</Error>)}
                </div>
    
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={edit ? "Editar paciente" : "Guardar paciente"}
                />
            </form> 
        </div>
    )
  }
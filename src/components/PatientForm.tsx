import {useForm} from "react-hook-form"
import Error from "./Error";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store/patientStore";

export default function PatientForm() {
  
    const {register, handleSubmit,formState : {errors}, reset} = useForm<DraftPatient>()

    const {addPatient} = usePatientStore()

    const registerPatients = (data : DraftPatient) => {
        addPatient(data)
        reset()
    }
    

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
                    value='Guardar Paciente'
                />
            </form> 
        </div>
    )
  }
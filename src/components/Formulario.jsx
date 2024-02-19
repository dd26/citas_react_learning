import {
  useState, useEffect
} from 'react'

import Error from './Error'

const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente
}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // validar formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true)
      return
    } else {
      setError(false)

      const objPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas,
      }


      if (paciente.id) {
        // editando el registro
        objPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(p => {
          if (p.id === paciente.id) {
            return objPaciente
          }
          return p
        })
        setPacientes(pacientesActualizados)
        setPaciente({})
      } else {
        // nuevo registro
        objPaciente.id = generarId()
        setPacientes([...pacientes, objPaciente])
      }


      handleReset()

    }
  }

  const handleReset = () => {
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        { error && <Error> Todos los campos son obligatorios </Error>}

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="mascota"
          >Nombre mascota
          </label>
          <input
            type="text"
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="propietario"
          >Nombre propietario</label>
          <input
            type="text"
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="email"
          >Email</label>
          <input
            type="email"
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="alta"
          >Alta</label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="sintomas"
          >Sintomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase
          hover:bg-indigo-700 font-bold cursor-pointer transition-colors"
          type="submit"
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario

const Paciente = ({
  paciente,
  setPaciente,
  eliminarPaciente
}) => {

  const { nombre, propietario, email, alta, sintomas } = paciente

  const handleEliminarPaciente = (id) => {
    const respuesta = confirm('¿Estás seguro de eliminar el paciente?')
    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div
        className="m-5 bg-white shadow-md px-5 py-10 rounded-xl"
      >
        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Nombre: {""}
          <span className="font-normal normal-case">
            {nombre}
          </span>
        </p>

        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Propietario: {""}
          <span className="font-normal normal-case">
            {propietario}
          </span>
        </p>

        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Email: {""}
          <span className="font-normal normal-case">
            {email}
          </span>
        </p>

        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Fecha alta: {""}
          <span className="font-normal normal-case">
            {alta}
          </span>
        </p>

        <p
          className="font-bold mb-3 text-gray-700 uppercase"
        >
          Síntomas: {""}
          <span className="font-bold font-normal normal-case">
            {sintomas}
          </span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg w-full"
            onClick={() => setPaciente(paciente)}
            type="button"
          >
            Editar
          </button>
          <button
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg ml-2 w-full"
            type="button"
            onClick={() => handleEliminarPaciente(paciente.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente
